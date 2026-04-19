import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Software from './components/Software'
import Automation from './components/Automation'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { BackgroundGlow } from '@/components/ui/background-glow'

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
          <Software />
          <Automation />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </div>
  )
}
