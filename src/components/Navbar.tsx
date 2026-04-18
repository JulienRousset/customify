import { useEffect, useState } from 'react'
import { useLang } from '../lang'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.tool, href: '#tool' },
    { label: t.nav.numbers, href: '#numbers' },
    { label: t.nav.demo, href: '#demo' },
    { label: t.nav.contact, href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 md:px-4">
      <div
        className={`mx-auto max-w-6xl px-3 md:px-5 flex items-center justify-between gap-3 rounded-full transition-all duration-500 ease-out
        ${scrolled ? 'bg-bg/80 backdrop-blur-xl border border-hair shadow-soft py-2' : 'bg-bg/45 backdrop-blur-md border border-transparent py-2.5'}`}
      >
        <a href="#home" className="flex items-center gap-2 font-display font-semibold text-[17px] tracking-display pl-1 md:pl-2 shrink-0">
          Customify
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-[13.5px] text-fg2 hover:text-fg transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center rounded-full bg-surface p-0.5 text-[12px] font-medium">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 md:px-2.5 py-1 rounded-full transition ${lang === 'en' ? 'bg-bg text-fg shadow-soft' : 'text-sub hover:text-fg'}`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`px-2 md:px-2.5 py-1 rounded-full transition ${lang === 'fr' ? 'bg-bg text-fg shadow-soft' : 'text-sub hover:text-fg'}`}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
          </div>
          <a href="#contact" className="btn-dark text-[13px] md:text-[13.5px] px-4 md:px-5 py-2 !rounded-full whitespace-nowrap">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
