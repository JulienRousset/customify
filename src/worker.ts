// Cloudflare Worker — serves the Vite-built static site (./dist) for normal
// requests, and handles the /api/contact lead-notification endpoint.
//
// Configure in Cloudflare → Workers & Pages → customify → Settings →
// Variables and Secrets:
//
//   RESEND_API_KEY  (encrypt)  — Resend API key (re_...)
//   FROM_EMAIL      (plain)    — e.g. "Customy <noreply@customy.agency>"
//   TO_EMAIL        (plain)    — defaults to customyagency@gmail.com

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
  RESEND_API_KEY?: string
  FROM_EMAIL?: string
  TO_EMAIL?: string
}

interface ContactPayload {
  email?: string
  source?: string
  // Honeypot — humans never fill this; bots will. We silently 200 if filled.
  website?: string
}

const DEFAULT_FROM = 'Customy <onboarding@resend.dev>'
const DEFAULT_TO = 'customyagency@gmail.com'

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

async function handleContact(request: Request, env: Env): Promise<Response> {
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

  if (!env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY missing in environment')
    return json({ error: 'Server not configured. Try WhatsApp instead.' }, 500)
  }

  const from = env.FROM_EMAIL || DEFAULT_FROM
  const to = env.TO_EMAIL || DEFAULT_TO
  const source = (body.source ?? 'contact-form').slice(0, 64)
  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown'
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
    `Country: ${country}`,
    `Referer: ${refer}`,
    `IP:      ${ip}`,
    '',
    'Reply directly to this email — Reply-To is set to the visitor.'
  ].join('\n')

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.5; color: #1c1a18;">
      <h2 style="margin: 0 0 16px; font-weight: 600; letter-spacing: -0.02em;">New lead from customy.agency</h2>
      <p style="margin: 0 0 12px;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p style="margin: 0 0 12px;"><strong>Source:</strong> ${safeSource}</p>
      <p style="margin: 0 0 12px;"><strong>Country:</strong> ${safeCountry}</p>
      <p style="margin: 0 0 12px;"><strong>Referer:</strong> ${safeRefer}</p>
      <p style="margin: 24px 0 0; color: #756d63; font-size: 13px;">Reply directly to this email — Reply-To is set to the visitor.</p>
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

  return json({ ok: true })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact') {
      if (request.method === 'POST') return handleContact(request, env)
      return json({ error: 'Method not allowed.' }, 405)
    }

    // Anything else — let the static assets binding serve it (handles SPA fallback).
    return env.ASSETS.fetch(request)
  }
}
