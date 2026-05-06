import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Services from '../components/Services'

const HowWeWork = lazy(() => import('../components/HowWeWork'))
const Software = lazy(() => import('../components/Software'))
const Automation = lazy(() => import('../components/Automation'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const WhoFor = lazy(() => import('../components/WhoFor'))
const FAQ = lazy(() => import('../components/FAQ'))
const Contact = lazy(() => import('../components/Contact'))

function SectionSkeleton() {
  return <div aria-hidden className="min-h-[80vh] w-full" />
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Suspense fallback={<SectionSkeleton />}>
        <HowWeWork />
        <Software />
        <Automation />
        <Testimonials />
        <WhoFor />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  )
}
