import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Software from './components/Software'
import Automation from './components/Automation'
import Testimonials from './components/Testimonials'
import WhoFor from './components/WhoFor'
import Contact from './components/Contact'
import ExitIntentModal from './components/ExitIntentModal'
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
          <HowWeWork />
          <Software />
          <Automation />
          <Testimonials />
          <WhoFor />
          <Contact />
        </main>
      </div>
      <ExitIntentModal />
    </div>
  )
}
