import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Instagram, Mail } from 'lucide-react'
import { useLang } from '../lang'
import { XLogo, PinterestLogo, WhatsAppGlyph, FacebookLogo } from './icons'

const WA_NUMBER_DISPLAY = '+62 857-8506-5652'
const WA_NUMBER_RAW = '6285785065652'

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`

const poweredBy = [
  { name: 'Instagram', src: favicon('instagram.com') },
  { name: 'TikTok', src: favicon('tiktok.com') },
  { name: 'YouTube', src: favicon('youtube.com') },
  { name: 'Facebook', src: favicon('facebook.com') },
  { name: 'Meta Ads', src: favicon('business.facebook.com') },
  { name: 'Telegram', src: favicon('telegram.org') },
  { name: 'Discord', src: favicon('discord.com') },
  { name: 'Claude', src: favicon('claude.ai') },
  { name: 'Gemini', src: favicon('gemini.google.com') },
  { name: 'Notion', src: favicon('notion.so') },
  { name: 'Substack', src: favicon('substack.com') },
  { name: 'Instantly', src: favicon('instantly.ai') },
  { name: 'Figma', src: favicon('figma.com') },
  { name: 'Photoshop', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
  { name: 'After Effects', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg' },
  { name: 'Metricool', src: favicon('metricool.com') },
  { name: 'Beacons', src: favicon('beacons.ai') },
  { name: 'Skool', src: favicon('skool.com') }
]


export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(c.mailSubject(email))
    const body = encodeURIComponent(
      `Hi Customy,\n\nI'd like to start a conversation.\n\nReach me at ${email}.`
    )
    window.location.href = `mailto:customyagency@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section id="contact" className="relative py-24 md:py-32">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">Start a project</p>
              <h2 className="display-2 text-balance">
                {c.h2a} <span className="text-sub">{c.h2b}</span>
              </h2>
              <p className="mt-5 body-lg max-w-lg text-pretty">{c.sub}</p>

              <div className="mt-7 flex items-center gap-3 max-w-lg">
                <div
                  aria-hidden
                  className="shrink-0 w-9 h-9 rounded-full bg-fg text-bg flex items-center justify-center font-display font-semibold text-[13px] tracking-tight"
                >
                  A
                </div>
                <p className="text-[13.5px] text-fg2 leading-[1.5] text-pretty">
                  {c.founderNote}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-hair bg-surface2/60 px-4 py-2">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-[#34c759]"
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span className="text-[12.5px] font-medium text-fg2">{c.availabilityBody}</span>
                </div>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-hair bg-fg text-bg px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff9f0a]" aria-hidden />
                  <span className="text-[12.5px] font-semibold tracking-tight">{c.freeAudit}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card p-10 md:p-14 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-fg text-bg flex items-center justify-center mb-6">
                    <Check size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-[24px] md:text-[28px] tracking-tight mb-3">{c.sentTitle}</h3>
                  <p className="text-fg2 text-[15px] max-w-md mx-auto leading-[1.55] text-pretty">{c.sentBody}</p>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-3">
                  <form onSubmit={submit} className="card p-4 md:p-5 group focus-within:border-fg/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-surface border border-hair flex items-center justify-center text-fg2">
                        <Mail size={15} strokeWidth={1.7} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-semibold text-sub uppercase tracking-[0.16em]">Email</div>
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@brand.com"
                          className="w-full bg-transparent border-0 outline-none text-[15px] md:text-[16px] font-medium tracking-tight placeholder:text-sub/40 mt-0.5"
                        />
                      </div>
                      <button
                        type="submit"
                        aria-label={c.form.send}
                        className="shrink-0 w-9 h-9 rounded-full bg-fg text-bg flex items-center justify-center hover:opacity-90 transition-opacity"
                      >
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </form>

                  <a
                    href={`https://wa.me/${WA_NUMBER_RAW}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 md:p-5 flex items-center gap-3 hover:border-fg/30 transition-colors group"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-full bg-surface border border-hair flex items-center justify-center text-[#25D366]">
                      <WhatsAppGlyph size={17} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold text-sub uppercase tracking-[0.16em]">WhatsApp</div>
                      <div className="text-[15px] md:text-[16px] font-medium tracking-tight mt-0.5">{WA_NUMBER_DISPLAY}</div>
                    </div>
                    <div className="shrink-0 w-9 h-9 rounded-full bg-fg text-bg flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <ArrowRight size={15} />
                    </div>
                  </a>

                  <p className="text-[11.5px] text-sub leading-[1.5] mt-1">
                    {c.legalNote}{' '}
                    <a href="/privacy.html" className="underline underline-offset-2 hover:text-fg transition-colors">
                      {c.privacyLabel}
                    </a>{' '}
                    &amp;{' '}
                    <a href="/terms.html" className="underline underline-offset-2 hover:text-fg transition-colors">
                      {c.termsLabel}
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Powered-by — full-width 2-row marquee, opposite directions */}
          <div className="mt-20 md:mt-24">
            <div className="eyebrow text-sub mb-6">Powered by</div>
            <div
              className="space-y-3 overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'
              }}
            >
              {[
                { items: poweredBy.slice(0, 8), dir: 'left' as const, duration: 38 },
                { items: poweredBy.slice(8), dir: 'right' as const, duration: 42 }
              ].map((row, idx) => (
                <div key={idx} className="relative flex overflow-hidden">
                  <motion.div
                    className="flex gap-3 shrink-0 pr-3"
                    animate={{ x: row.dir === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
                    transition={{ duration: row.duration, repeat: Infinity, ease: 'linear' }}
                  >
                    {[...row.items, ...row.items, ...row.items, ...row.items].map((b, i) => (
                      <div
                        key={`${b.name}-${i}`}
                        className="flex items-center gap-3 py-3.5 px-5 rounded-2xl bg-surface2/60 border border-hair shrink-0"
                      >
                        <img
                          src={b.src}
                          alt={b.name}
                          className="w-7 h-7 object-contain"
                          loading="lazy"
                        />
                        <span className="text-[14px] text-fg font-medium whitespace-nowrap">{b.name}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-hair">
        <div className="container-xl py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-hair">
            <div>
              <div className="font-display font-semibold text-[28px] md:text-[32px] tracking-tight flex items-center gap-3">
                <img
                  src="/customy_logo.webp"
                  alt=""
                  aria-hidden
                  width={40}
                  height={40}
                  className="h-9 w-9 md:h-10 md:w-10 object-contain rounded-lg"
                />
                Customy
              </div>
              <div className="mt-2 text-[13px] text-sub">{c.footerTagline}</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <nav aria-label="Footer" className="flex flex-wrap gap-6 text-[13.5px] text-fg2">
                <a href="#services" className="hover:text-fg transition-colors">{c.footerNav.services}</a>
                <a href="#software" className="hover:text-fg transition-colors">{c.footerNav.software}</a>
                <a href="#automation" className="hover:text-fg transition-colors">{c.footerNav.automation}</a>
                <a href="#testimonials" className="hover:text-fg transition-colors">{c.footerNav.clients}</a>
                <a href="#contact" className="hover:text-fg transition-colors">{c.footerNav.contact}</a>
              </nav>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/customyagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
                >
                  <Instagram size={16} strokeWidth={1.8} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61562923021804"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
                >
                  <FacebookLogo size={16} />
                </a>
                <a
                  href="https://x.com/Customyagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
                >
                  <XLogo size={14} />
                </a>
                <a
                  href="https://pin.it/2kEWWZ4wh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
                >
                  <PinterestLogo size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 text-[12px] text-sub">
            <div>© {new Date().getFullYear()} Customy Studio · {c.footerRemote}</div>
            <div className="flex items-center gap-5">
              <a href="/privacy.html" className="hover:text-fg transition-colors">Privacy</a>
              <a href="/terms.html" className="hover:text-fg transition-colors">Terms</a>
              <a href="mailto:customyagency@gmail.com" className="hover:text-fg transition-colors">customyagency@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
