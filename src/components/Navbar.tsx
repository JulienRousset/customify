import { useEffect, useState } from 'react'
import { useLang } from '../lang'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.demo, href: '#product' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.contact, href: '#contact' }
  ]

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-hair' : 'bg-transparent'
      }`}
    >
      <div className="container-xl flex items-center justify-between h-14 md:h-16">
        <a href="#home" className="flex items-center gap-2 font-display font-semibold text-[15px] tracking-tight">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
          Customify
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-fg2 hover:text-fg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div role="group" aria-label="Language" className="hidden sm:flex items-center text-[12px] font-medium text-sub">
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-1.5 py-1 rounded transition-colors ${lang === 'en' ? 'text-fg' : 'hover:text-fg'}`}
            >
              EN
            </button>
            <span className="opacity-30">·</span>
            <button
              type="button"
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
              className={`px-1.5 py-1 rounded transition-colors ${lang === 'fr' ? 'text-fg' : 'hover:text-fg'}`}
            >
              FR
            </button>
          </div>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-fg text-bg text-[13px] font-medium px-4 py-1.5 hover:opacity-90 transition-opacity"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
