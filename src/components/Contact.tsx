import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Instagram, Facebook } from 'lucide-react'
import { useLang } from '../lang'

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
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(c.mailBody(form.name, form.business, form.message, form.email))
    const subject = encodeURIComponent(c.mailSubject(form.business || form.name))
    window.location.href = `mailto:hello@customy.agency?subject=${subject}&body=${body}`
    setSent(true)
  }

  const input = 'w-full bg-transparent border-0 outline-none py-3 text-[15px] placeholder:text-sub/50'

  return (
    <>
      <section id="contact" className="relative py-24 md:py-32">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="lg:col-span-5 lg:-mt-8">
              <p className="eyebrow">Start a project</p>
              <h2 className="display-2 text-balance">
                {c.h2a} <span className="text-sub">{c.h2b}</span>
              </h2>
              <p className="mt-5 body-lg max-w-lg text-pretty">{c.sub}</p>

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
                <form onSubmit={submit} className="card p-7 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <label className="block border-b border-hair">
                      <div className="text-[11px] font-medium text-sub uppercase tracking-wider">{c.form.name}</div>
                      <input
                        required
                        placeholder={c.form.namePh}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={input}
                      />
                    </label>
                    <label className="block border-b border-hair">
                      <div className="text-[11px] font-medium text-sub uppercase tracking-wider">{c.form.email}</div>
                      <input
                        required
                        type="email"
                        placeholder={c.form.emailPh}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={input}
                      />
                    </label>
                  </div>

                  <label className="block border-b border-hair mt-4">
                    <div className="text-[11px] font-medium text-sub uppercase tracking-wider">{c.form.business}</div>
                    <input
                      placeholder={c.form.businessPh}
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className={input}
                    />
                  </label>

                  <label className="block border-b border-hair mt-4">
                    <div className="text-[11px] font-medium text-sub uppercase tracking-wider">{c.form.message}</div>
                    <textarea
                      required
                      rows={4}
                      placeholder={c.form.messagePh}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${input} resize-none leading-relaxed pt-3`}
                    />
                  </label>

                  <div className="flex items-center justify-between mt-8 gap-4 flex-wrap">
                    <span className="text-[12px] text-sub">{c.form.replyNote}</span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff375f] to-[#ff9f0a] text-white shadow-[0_4px_14px_-4px_rgba(255,55,95,0.4)] px-6 py-3 text-[14px] font-medium hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      {c.form.send} <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
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
            <div>© {new Date().getFullYear()} Customy Studio · {c.footerLocation} · {c.footerRemote}</div>
            <div>hello@customy.agency</div>
          </div>
        </div>
      </footer>
    </>
  )
}
