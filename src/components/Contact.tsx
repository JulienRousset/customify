import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Instagram, Facebook, Mail } from 'lucide-react'
import { useLang } from '../lang'

const WA_NUMBER_DISPLAY = '+62 857-8506-5652'
const WA_NUMBER_RAW = '6285785065652'

function WhatsAppGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.002 2C6.486 2 2 6.486 2 12c0 2.15.679 4.144 1.833 5.78L2 22l4.318-1.833A9.953 9.953 0 0 0 12.002 22c5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
    </svg>
  )
}

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow">Start a project</p>
              <h2 className="display-2 text-balance">
                {c.h2a} <span className="text-sub">{c.h2b}</span>
              </h2>
              <p className="mt-5 body-lg max-w-lg text-pretty">{c.sub}</p>

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

              <div className="mt-10">
                <div className="eyebrow text-sub">Powered by</div>
                <div
                  className="mt-4 space-y-2.5 overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
                  }}
                >
                  {[
                    { items: poweredBy.slice(0, 8), dir: 'left' as const, duration: 32 },
                    { items: poweredBy.slice(8), dir: 'right' as const, duration: 36 }
                  ].map((row, idx) => (
                    <div key={idx} className="relative flex overflow-hidden">
                      <motion.div
                        className="flex gap-2.5 shrink-0 pr-2.5"
                        animate={{ x: row.dir === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
                        transition={{ duration: row.duration, repeat: Infinity, ease: 'linear' }}
                      >
                        {[...row.items, ...row.items, ...row.items, ...row.items].map((b, i) => (
                          <div
                            key={`${b.name}-${i}`}
                            className="flex items-center gap-2 py-2.5 px-3.5 rounded-xl bg-surface2/60 border border-hair shrink-0"
                          >
                            <img
                              src={b.src}
                              alt={b.name}
                              className="w-5 h-5 object-contain"
                              loading="lazy"
                            />
                            <span className="text-[11.5px] text-sub font-medium whitespace-nowrap">{b.name}</span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
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
                <div className="flex flex-col gap-4">
                  <form onSubmit={submit} className="card p-6 md:p-7 group focus-within:border-fg/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-surface border border-hair flex items-center justify-center text-fg2">
                        <Mail size={18} strokeWidth={1.7} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10.5px] font-semibold text-sub uppercase tracking-[0.18em]">Email</div>
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@brand.com"
                          className="w-full bg-transparent border-0 outline-none text-[20px] md:text-[24px] font-display font-medium tracking-tight placeholder:text-sub/40 mt-1"
                        />
                      </div>
                      <button
                        type="submit"
                        aria-label={c.form.send}
                        className="shrink-0 w-12 h-12 rounded-full bg-fg text-bg flex items-center justify-center hover:opacity-90 transition-opacity"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>

                  <a
                    href={`https://wa.me/${WA_NUMBER_RAW}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-6 md:p-7 flex items-center gap-4 hover:border-fg/30 transition-colors"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-surface border border-hair flex items-center justify-center text-[#25D366]">
                      <WhatsAppGlyph size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10.5px] font-semibold text-sub uppercase tracking-[0.18em]">WhatsApp</div>
                      <div className="text-[20px] md:text-[24px] font-display font-medium tracking-tight mt-1">{WA_NUMBER_DISPLAY}</div>
                    </div>
                    <div className="shrink-0 w-12 h-12 rounded-full bg-fg text-bg flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <ArrowRight size={18} />
                    </div>
                  </a>
                </div>
              )}
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
                  src="/customy_logo_tr.png"
                  alt=""
                  aria-hidden
                  className="h-9 w-9 md:h-10 md:w-10 object-contain dark:invert"
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
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
                >
                  <Instagram size={16} strokeWidth={1.8} />
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-hair flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-colors"
                >
                  <Facebook size={16} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 text-[12px] text-sub">
            <div>© {new Date().getFullYear()} Customy Studio · {c.footerRemote}</div>
            <div>customyagency@gmail.com</div>
          </div>
        </div>
      </footer>
    </>
  )
}
