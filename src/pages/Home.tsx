import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import WhatWeBuildCTA from '../components/WhatWeBuildCTA'

const Services = lazy(() => import('../components/Services'))
const Contact = lazy(() => import('../components/Contact'))

function SectionSkeleton() {
  return <div aria-hidden className="min-h-[80vh] w-full" />
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeBuildCTA />
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
        <Contact />
      </Suspense>
    </>
  )
}
