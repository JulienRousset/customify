import { Suspense, lazy, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import CookieBanner from './CookieBanner'
import { BackgroundGlow } from '@/components/ui/background-glow'
import { useConsent } from '../analytics/consent'
import { loadAnalytics, loadMarketing } from '../analytics/loader'

const ExitIntentModal = lazy(() => import('./ExitIntentModal'))

function AnalyticsBootstrap() {
  const consent = useConsent()
  useEffect(() => {
    if (consent.analytics) loadAnalytics()
    if (consent.marketing) loadMarketing()
  }, [consent.analytics, consent.marketing])
  return null
}

// Reset scroll on every navigation. If the URL carries a hash anchor, scroll
// to that element instead — and retry for ~2s, since the target section may
// belong to a lazy-loaded chunk that hasn't mounted yet.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      let attempts = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        if (attempts++ < 20) window.setTimeout(tryScroll, 100)
      }
      tryScroll()
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <div className="relative min-h-screen text-fg antialiased isolate">
      <ScrollToTop />
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <Suspense fallback={null}>
        <ExitIntentModal />
      </Suspense>
      <CookieBanner />
      <AnalyticsBootstrap />
    </div>
  )
}
