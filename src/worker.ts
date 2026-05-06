/// <reference types="@cloudflare/workers-types" />
// Cloudflare Worker — serves the Vite-built static site (./dist) for normal
// requests, and handles the /api/contact lead-notification endpoint.
//
// Configure in Cloudflare → Workers & Pages → customify → Settings →
// Variables and Secrets:
//
//   RESEND_API_KEY      (encrypt) — Resend API key (re_...)
//   FROM_EMAIL          (plain)   — e.g. "Customy <noreply@customy.agency>"
//   TO_EMAIL            (plain)   — defaults to customyagency@gmail.com
//   SLACK_WEBHOOK_URL   (encrypt) — optional; Slack/Discord-compatible webhook

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
  RESEND_API_KEY?: string
  FROM_EMAIL?: string
  TO_EMAIL?: string
  SLACK_WEBHOOK_URL?: string
}

interface ContactPayload {
  email?: string
  source?: string
  lang?: string
  // Honeypot — humans never fill this; bots will. We silently 200 if filled.
  website?: string
}

const DEFAULT_FROM = 'Customy <onboarding@resend.dev>'
const DEFAULT_TO = 'customyagency@gmail.com'

// Per-IP rate limit. Workers reuse isolates for warm requests, so this acts as
// a soft brake for bursts from the same IP. Cold-start IPs slip through; for
// stricter enforcement upgrade to Cloudflare KV or Durable Objects later.
const RATE_LIMIT_MS = 30_000
const rateLimit = new Map<string, number>()

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  })

const isValidEmail = (s: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  )

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const last = rateLimit.get(ip)
  if (last && now - last < RATE_LIMIT_MS) return true
  rateLimit.set(ip, now)
  if (rateLimit.size > 500) {
    for (const [k, v] of rateLimit) {
      if (now - v > RATE_LIMIT_MS * 10) rateLimit.delete(k)
    }
  }
  return false
}

async function sendAutoResponder(env: Env, to: string, lang: string): Promise<void> {
  if (!env.RESEND_API_KEY) return
  const from = env.FROM_EMAIL || DEFAULT_FROM
  const fr = lang === 'fr'

  const subject = fr
    ? 'Bien reçu. Un membre de l’équipe Customy revient vers vous.'
    : 'Got it. A Customy team member will be in touch.'

  const text = fr
    ? [
        'Merci d’avoir contacté Customy.',
        '',
        'Un membre de notre équipe vous répondra sous 24 heures, souvent le jour même.',
        '',
        'Pendant ce temps, n’hésitez pas à répondre directement à cet email avec plus de contexte sur votre projet : site, audience, ce que vous voulez débloquer. Plus on en sait, plus la première réponse sera utile.',
        '',
        'Pour quelque chose d’urgent, WhatsApp est le canal le plus rapide : https://wa.me/6285785065652',
        '',
        'L’équipe Customy',
        'customy.agency'
      ].join('\n')
    : [
        'Thanks for reaching out to Customy.',
        '',
        'A member of our team will reply within 24 hours, often the same day.',
        '',
        'In the meantime, feel free to reply to this email with more context about your project: site, audience, what you want to unlock. The more we know, the more useful our first reply will be.',
        '',
        'For anything urgent, WhatsApp is the fastest channel: https://wa.me/6285785065652',
        '',
        'The Customy team',
        'customy.agency'
      ].join('\n')

  const html = fr
    ? `
      <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.6; color: #1c1a18; max-width: 560px;">
        <h2 style="margin: 0 0 16px; font-weight: 600; letter-spacing: -0.02em; font-size: 22px;">Bien reçu.</h2>
        <p style="margin: 0 0 14px;">Un membre de notre équipe vous répondra sous 24 heures, souvent le jour même.</p>
        <p style="margin: 0 0 14px;">N’hésitez pas à répondre directement à cet email avec plus de contexte sur votre projet : site, audience, ce que vous voulez débloquer. Plus on en sait, plus la première réponse sera utile.</p>
        <p style="margin: 0 0 24px;">Pour quelque chose d’urgent, WhatsApp est le canal le plus rapide : <a href="https://wa.me/6285785065652" style="color: #1c1a18;">+62 857-8506-5652</a>.</p>
        <p style="margin: 24px 0 0; color: #756d63; font-size: 13px;">L’équipe Customy<br/><a href="https://customy.agency" style="color: #756d63;">customy.agency</a></p>
      </div>
    `
    : `
      <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.6; color: #1c1a18; max-width: 560px;">
        <h2 style="margin: 0 0 16px; font-weight: 600; letter-spacing: -0.02em; font-size: 22px;">Got it.</h2>
        <p style="margin: 0 0 14px;">A member of our team will reply within 24 hours, often the same day.</p>
        <p style="margin: 0 0 14px;">In the meantime, feel free to reply to this email with more context about your project: site, audience, what you want to unlock. The more we know, the more useful our first reply will be.</p>
        <p style="margin: 0 0 24px;">For anything urgent, WhatsApp is the fastest channel: <a href="https://wa.me/6285785065652" style="color: #1c1a18;">+62 857-8506-5652</a>.</p>
        <p style="margin: 24px 0 0; color: #756d63; font-size: 13px;">The Customy team<br/><a href="https://customy.agency" style="color: #756d63;">customy.agency</a></p>
      </div>
    `

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: env.TO_EMAIL || DEFAULT_TO,
        subject,
        text,
        html
      })
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => 'unknown')
      console.error('[auto-responder] Resend non-OK', res.status, detail)
    }
  } catch (err) {
    console.error('[auto-responder] network error', err)
  }
}

async function pingSlack(
  env: Env,
  email: string,
  source: string,
  country: string,
  refer: string
): Promise<void> {
  if (!env.SLACK_WEBHOOK_URL) return
  try {
    await fetch(env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `New Customy lead · ${email}\nSource: ${source} · Country: ${country} · Referer: ${refer}`
      })
    })
  } catch (err) {
    console.error('[slack] ping failed', err)
  }
}

async function handleContact(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {
  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }

  if (body.website && body.website.trim() !== '') {
    return json({ ok: true })
  }

  const email = (body.email ?? '').trim().toLowerCase()
  if (!email || !isValidEmail(email) || email.length > 254) {
    return json({ error: 'Please enter a valid email address.' }, 400)
  }

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown'
  if (ip !== 'unknown' && isRateLimited(ip)) {
    return json({ error: 'Too many requests. Please try again in a moment.' }, 429)
  }

  if (!env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY missing in environment')
    return json({ error: 'Server not configured. Try WhatsApp instead.' }, 500)
  }

  const from = env.FROM_EMAIL || DEFAULT_FROM
  const to = env.TO_EMAIL || DEFAULT_TO
  const source = (body.source ?? 'contact-form').slice(0, 64)
  const lang = body.lang === 'fr' ? 'fr' : 'en'
  const country = request.headers.get('cf-ipcountry') ?? 'unknown'
  const refer = request.headers.get('referer') ?? 'direct'

  const safeEmail = escapeHtml(email)
  const safeSource = escapeHtml(source)
  const safeRefer = escapeHtml(refer)
  const safeCountry = escapeHtml(country)

  const text = [
    'New lead from customy.agency',
    '',
    `Email:   ${email}`,
    `Source:  ${source}`,
    `Lang:    ${lang}`,
    `Country: ${country}`,
    `Referer: ${refer}`,
    `IP:      ${ip}`,
    '',
    'Reply directly to this email. Reply-To is set to the visitor.'
  ].join('\n')

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.5; color: #1c1a18;">
      <h2 style="margin: 0 0 16px; font-weight: 600; letter-spacing: -0.02em;">New lead from customy.agency</h2>
      <p style="margin: 0 0 12px;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p style="margin: 0 0 12px;"><strong>Source:</strong> ${safeSource}</p>
      <p style="margin: 0 0 12px;"><strong>Lang:</strong> ${lang}</p>
      <p style="margin: 0 0 12px;"><strong>Country:</strong> ${safeCountry}</p>
      <p style="margin: 0 0 12px;"><strong>Referer:</strong> ${safeRefer}</p>
      <p style="margin: 24px 0 0; color: #756d63; font-size: 13px;">Reply directly to this email. Reply-To is set to the visitor.</p>
    </div>
  `

  let resendRes: Response
  try {
    resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New lead · ${email}`,
        text,
        html
      })
    })
  } catch (err) {
    console.error('[contact] Resend network error', err)
    return json({ error: 'Could not send. Try WhatsApp instead.' }, 502)
  }

  if (!resendRes.ok) {
    const detail = await resendRes.text().catch(() => 'unknown')
    console.error('[contact] Resend non-OK', resendRes.status, detail)
    return json({ error: 'Could not send. Try WhatsApp instead.' }, 502)
  }

  // Fire-and-forget: don't make the visitor wait on these.
  ctx.waitUntil(sendAutoResponder(env, email, lang))
  ctx.waitUntil(pingSlack(env, email, source, country, refer))

  return json({ ok: true })
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact') {
      if (request.method === 'POST') return handleContact(request, env, ctx)
      return json({ error: 'Method not allowed.' }, 405)
    }

    return env.ASSETS.fetch(request)
  }
}
