import { useEffect } from 'react'

// Route-aware <head> management for the SPA. index.html ships a single static
// shell whose <title>, description, canonical and og:* all describe the HOME
// page. Without this, /faq and /offer self-canonicalize to '/' (Google treats
// them as duplicates) and inherit the wrong title/description. Each non-home
// page calls useRouteHead() on mount to point these at its own URL, and every
// value is restored on unmount so navigating back leaves the shell untouched.

const ORIGIN = 'https://customy.agency'

interface RouteHead {
  title: string
  description: string
  /** Path with leading slash, e.g. '/offer'. */
  path: string
}

export function useRouteHead({ title, description, path }: RouteHead) {
  useEffect(() => {
    const url = ORIGIN + path.replace(/\/$/, '') || ORIGIN + '/'
    const restores: Array<() => void> = []

    const prevTitle = document.title
    document.title = title
    restores.push(() => {
      document.title = prevTitle
    })

    const apply = (selector: string, attr: 'content' | 'href', value: string) => {
      const el = document.querySelector(selector)
      if (!el) return
      const prev = el.getAttribute(attr)
      el.setAttribute(attr, value)
      restores.push(() => {
        if (prev !== null) el.setAttribute(attr, prev)
      })
    }

    apply('meta[name="description"]', 'content', description)
    apply('link[rel="canonical"]', 'href', url)
    apply('meta[property="og:url"]', 'content', url)
    apply('meta[property="og:title"]', 'content', title)
    apply('meta[property="og:description"]', 'content', description)
    apply('meta[name="twitter:title"]', 'content', title)
    apply('meta[name="twitter:description"]', 'content', description)

    return () => {
      // Restore in reverse so nested/overlapping writes unwind cleanly.
      for (let i = restores.length - 1; i >= 0; i--) restores[i]()
    }
  }, [title, description, path])
}
