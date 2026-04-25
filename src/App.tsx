import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import { BackgroundGlow } from '@/components/ui/background-glow'

// Below-the-fold sections — split into their own chunks, fetched after first paint.
const HowWeWork = lazy(() => import('./components/HowWeWork'))
const Software = lazy(() => import('./components/Software'))
const Automation = lazy(() => import('./components/Automation'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const WhoFor = lazy(() => import('./components/WhoFor'))
const Contact = lazy(() => import('./components/Contact'))
const ExitIntentModal = lazy(() => import('./components/ExitIntentModal'))

export default function App() {
  return (
    <div className="relative min-h-screen text-fg antialiased isolate">
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Suspense fallback={null}>
            <HowWeWork />
            <Software />
            <Automation />
            <Testimonials />
            <WhoFor />
            <Contact />
          </Suspense>
        </main>
      </div>
      <Suspense fallback={null}>
        <ExitIntentModal />
      </Suspense>
    </div>
  )
}
