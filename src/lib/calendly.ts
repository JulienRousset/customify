// Lazy-loads the Calendly popup widget on demand. Script + CSS are only
// fetched the first time a "Book a call" button is hovered or clicked, so
// visitors who never engage pay zero kB.
//
// If the script fails to load (network error, content blocker), we fall back
// to opening the Calendly URL in a new tab so the booking path never dies.

const CALENDLY_URL = 'https://calendly.com/customyagency/30min'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

let scriptPromise: Promise<void> | null = null

function loadCalendly(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.Calendly) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    if (!document.querySelector('link[data-calendly]')) {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = 'https://assets.calendly.com/assets/external/widget.css'
      css.dataset.calendly = 'true'
      document.head.appendChild(css)
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.dataset.calendly = 'true'
    script.onload = () => resolve()
    script.onerror = () => {
      scriptPromise = null
      reject(new Error('Calendly script failed to load'))
    }
    document.body.appendChild(script)
  })

  return scriptPromise
}

export function preloadCalendly(): void {
  loadCalendly().catch(() => {
    /* swallow — openCalendly handles the fallback */
  })
}

export async function openCalendly(): Promise<void> {
  try {
    await loadCalendly()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
      return
    }
  } catch {
    /* fall through to new-tab fallback */
  }
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
}

export { CALENDLY_URL }
