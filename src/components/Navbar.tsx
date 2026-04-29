import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Menu, X } from 'lucide-react'
import { useLang } from '../lang'
import ThemeToggle from './ThemeToggle'
import { XLogo, PinterestLogo, FacebookLogo, TikTokLogo, YouTubeLogo, LinkedInLogo } from './icons'

const SOCIALS = {
  instagram: 'https://www.instagram.com/customyagency/',
  facebook: 'https://www.facebook.com/profile.php?id=61562923021804',
  x: 'https://x.com/Customyagency',
  linkedin: 'https://www.linkedin.com/company/customyagency',
  pinterest: 'https://pin.it/2kEWWZ4wh',
  tiktok: 'https://www.tiktok.com/@customyagency',
  youtube: 'https://www.youtube.com/@customyagency'
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  const links = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.software, href: '#software' },
    { label: t.nav.automation, href: '#automation' },
    { label: t.nav.clients, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' }
  ]

  const iconClass =
    'w-8 h-8 rounded-full flex items-center justify-center text-sub hover:text-fg hover:bg-surface2 transition-colors'

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled || mobileOpen ? 'bg-bg border-b border-hair' : 'bg-transparent'
        }`}
      >
        <div className="container-xl flex items-center justify-between h-[3.85rem] md:h-[4.4rem]">
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#home" onClick={closeMobile} className="flex items-center gap-2 font-display font-semibold text-[16.5px] tracking-tight">
              <img
                src="/customy_logo.webp"
                alt=""
                aria-hidden
                width={32}
                height={32}
                className="h-7 w-7 md:h-8 md:w-8 object-contain rounded-md"
              />
              Customy
            </a>
            <div className="hidden sm:flex items-center gap-1 pl-2 md:pl-3 border-l border-hair">
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={iconClass}>
                <Instagram size={16} strokeWidth={1.8} />
              </a>
              <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={iconClass}>
                <FacebookLogo size={16} />
              </a>
              <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={iconClass}>
                <XLogo size={14} />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconClass}>
                <LinkedInLogo size={16} />
              </a>
              <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={iconClass}>
                <TikTokLogo size={16} />
              </a>
              <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={iconClass}>
                <YouTubeLogo size={16} />
              </a>
              <a href={SOCIALS.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className={iconClass}>
                <PinterestLogo size={16} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[14.5px] font-medium text-fg2 hover:text-fg transition-colors group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-full bg-fg origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div role="group" aria-label="Language" className="flex items-center text-[13.5px] font-medium text-sub">
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
              className="hidden sm:inline-flex items-center rounded-full bg-fg text-bg text-[14.5px] font-medium px-[1.1rem] py-[0.45rem] hover:opacity-90 transition-opacity duration-200 ease-out"
            >
              {t.nav.cta}
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 rounded-full border border-hair flex items-center justify-center text-fg ml-1"
            >
              {mobileOpen ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-bg pt-[3.85rem] overflow-y-auto overscroll-contain"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="container-xl py-10 flex flex-col min-h-[calc(100dvh-3.85rem)]"
            >
              <ul className="flex flex-col">
                {links.map((l, i) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={closeMobile}
                      className="block py-[1.4rem] border-b border-hair font-display font-semibold text-[28.5px] tracking-tight text-fg hover:text-sub transition-colors"
                    >
                      <span className="num-mono text-[11.5px] uppercase tracking-[0.18em] text-sub mr-3 align-middle">
                        0{i + 1}
                      </span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10 flex flex-col gap-6">
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="inline-flex items-center justify-center rounded-full bg-fg text-bg text-[16.5px] font-medium px-7 py-4 hover:opacity-90 transition-opacity"
                >
                  {t.nav.cta}
                </a>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={iconClass}>
                      <Instagram size={16} strokeWidth={1.8} />
                    </a>
                    <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={iconClass}>
                      <FacebookLogo size={16} />
                    </a>
                    <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={iconClass}>
                      <XLogo size={14} />
                    </a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconClass}>
                      <LinkedInLogo size={16} />
                    </a>
                    <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={iconClass}>
                      <TikTokLogo size={16} />
                    </a>
                    <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={iconClass}>
                      <YouTubeLogo size={16} />
                    </a>
                    <a href={SOCIALS.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className={iconClass}>
                      <PinterestLogo size={16} />
                    </a>
                  </div>
                  <span className="text-[13px] text-sub">customyagency@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
