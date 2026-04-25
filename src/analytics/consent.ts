import { useEffect, useState } from 'react'

const STORAGE_KEY = 'customy.consent.v1'

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing'

export type Consent = {
  necessary: true // always true, can't be disabled
  analytics: boolean
  marketing: boolean
  /** unix ms of last decision */
  decidedAt: number | null
}

const DEFAULT_CONSENT: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
  decidedAt: null
}

function read(): Consent {
  if (typeof window === 'undefined') return DEFAULT_CONSENT
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_CONSENT
    const parsed = JSON.parse(raw)
    return {
      necessary: true,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      decidedAt: typeof parsed.decidedAt === 'number' ? parsed.decidedAt : null
    }
  } catch {
    return DEFAULT_CONSENT
  }
}

function write(consent: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
    window.dispatchEvent(new CustomEvent('customy:consent-changed', { detail: consent }))
  } catch {
    /* ignore */
  }
}

export function getConsent(): Consent {
  return read()
}

export function setConsent(updates: Partial<Pick<Consent, 'analytics' | 'marketing'>>) {
  const next: Consent = {
    ...read(),
    ...updates,
    necessary: true,
    decidedAt: Date.now()
  }
  write(next)
  return next
}

export function acceptAll() {
  return setConsent({ analytics: true, marketing: true })
}

export function rejectAll() {
  return setConsent({ analytics: false, marketing: false })
}

/** True until the user has made a first decision. */
export function isPending(): boolean {
  return read().decidedAt === null
}

/** React hook — re-renders on consent change. */
export function useConsent(): Consent {
  const [consent, setConsentState] = useState<Consent>(() => read())

  useEffect(() => {
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<Consent>).detail
      if (detail) setConsentState(detail)
    }
    window.addEventListener('customy:consent-changed', onChange)
    // Re-sync if the value was changed in another tab
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setConsentState(read())
    }
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('customy:consent-changed', onChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return consent
}
