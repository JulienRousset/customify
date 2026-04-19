import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HeroMock from './components/HeroMock'
import Clients from './components/Clients'
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
          <Services />
          <HeroMock />
          <Clients />
          <Contact />
        </main>
      </div>
    </div>
  )
}
