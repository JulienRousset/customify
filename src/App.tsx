import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedTool from './components/FeaturedTool'
import Stats from './components/Stats'
import Demo from './components/Demo'
import Clients from './components/Clients'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedTool />
        <Stats />
        <Demo />
        <Clients />
        <Contact />
      </main>
    </div>
  )
}
