import { ANALYTICS, isConfigured } from './config'

// Track which scripts have been injected to avoid duplicates if consent toggles.
const loaded = new Set<string>()

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
    ttq?: { load: (id: string) => void; page: () => void }
    clarity?: (...args: unknown[]) => void
  }
}

function injectScript(id: string, src: string, attrs: Record<string, string> = {}) {
  if (loaded.has(id)) return
  loaded.add(id)
  const s = document.createElement('script')
  s.id = id
  s.async = true
  s.src = src
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v)
  document.head.appendChild(s)
}

// ---- Google Analytics 4 ----
export function loadGA4() {
  const id = ANALYTICS.GA4_MEASUREMENT_ID
  if (!isConfigured(id) || loaded.has('ga4')) return

  injectScript('ga4', `https://www.googletagmanager.com/gtag/js?id=${id}`)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', id, {
    anonymize_ip: true,
    send_page_view: true
  })
}

// ---- Microsoft Clarity (heatmaps + session replay) ----
export function loadClarity() {
  const id = ANALYTICS.CLARITY_PROJECT_ID
  if (!isConfigured(id) || loaded.has('clarity')) return
  loaded.add('clarity')

  // Official Clarity bootstrap, inlined and typed.
  ;(function (c: Window, l: Document, a: string, r: string, i: string) {
    ;(c as unknown as Record<string, unknown>)[a] =
      (c as unknown as Record<string, unknown>)[a] ||
      function (...args: unknown[]) {
        ;(((c as unknown as Record<string, { q?: unknown[] }>)[a].q =
          ((c as unknown as Record<string, { q?: unknown[] }>)[a].q || []) as unknown[])).push(args)
      }
    const t = l.createElement(r) as HTMLScriptElement
    t.async = true
    t.src = 'https://www.clarity.ms/tag/' + i
    const y = l.getElementsByTagName(r)[0]
    y.parentNode!.insertBefore(t, y)
  })(window, document, 'clarity', 'script', id)
}

// ---- Meta (Facebook) Pixel ----
export function loadMetaPixel() {
  const id = ANALYTICS.META_PIXEL_ID
  if (!isConfigured(id) || loaded.has('meta-pixel')) return
  loaded.add('meta-pixel')

  // Official fbq bootstrap, inlined. Third-party code patches window with
  // its own loose shape — `any` is the sane choice here.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  ;(function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
    })
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    const t = b.createElement(e) as HTMLScriptElement
    t.async = true
    t.src = v
    const s = b.getElementsByTagName(e)[0]
    s.parentNode!.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable @typescript-eslint/no-explicit-any */

  window.fbq && window.fbq('init', id)
  window.fbq && window.fbq('track', 'PageView')
}

// ---- TikTok Pixel ----
export function loadTikTokPixel() {
  const id = ANALYTICS.TIKTOK_PIXEL_ID
  if (!isConfigured(id) || loaded.has('tiktok-pixel')) return
  loaded.add('tiktok-pixel')

  ;(function (w: Window, d: Document, t: string) {
    ;(w as unknown as Record<string, unknown>)[t] =
      (w as unknown as Record<string, unknown>)[t] || {
        load: () => undefined,
        page: () => undefined
      }
    const ttq = (w as unknown as Record<string, { load: Function; page: Function }>)[t]
    ttq.load = function () {
      const e = d.createElement('script')
      e.async = true
      e.src = 'https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=' + id + '&lib=' + t
      const r = d.getElementsByTagName('script')[0]
      r.parentNode!.insertBefore(e, r)
    }
    ttq.load()
    ttq.page()
  })(window, document, 'ttq')
}

// ---- Public API ----

export function loadAnalytics() {
  loadGA4()
  loadClarity()
}

export function loadMarketing() {
  loadMetaPixel()
  loadTikTokPixel()
}

/** Helper to expose a typed PageView event for SPA route changes (no router yet,
 *  but available if the site grows beyond a single page). */
export function trackPageView(path: string = window.location.pathname) {
  if (window.gtag && isConfigured(ANALYTICS.GA4_MEASUREMENT_ID)) {
    window.gtag('event', 'page_view', { page_path: path })
  }
  if (window.fbq) window.fbq('track', 'PageView')
}
