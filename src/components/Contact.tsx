import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Instagram, Facebook } from 'lucide-react'
import { useLang } from '../lang'

const poweredBy = [
  { name: 'Instagram', slug: 'instagram' },
  { name: 'TikTok', slug: 'tiktok' },
  { name: 'YouTube', slug: 'youtube' },
  { name: 'Facebook', slug: 'facebook' },
  { name: 'Meta Ads', slug: 'meta' },
  { name: 'Telegram', slug: 'telegram' },
  { name: 'Discord', slug: 'discord' },
  { name: 'Claude', slug: 'anthropic' },
  { name: 'Gemini', slug: 'googlegemini' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Photoshop', slug: 'adobephotoshop' },
  { name: 'After Effects', slug: 'adobeaftereffects' },
  { name: 'Metricool', slug: 'metricool' },
  { name: 'Beacons', slug: 'beacons' },
  { name: 'Skool', slug: 'skool' }
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
                <div className="mt-4 grid grid-cols-4 gap-2.5">
                  {poweredBy.map((b) => (
                    <div
                      key={b.slug}
                      className="flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-xl bg-surface2/60 border border-hair hover:border-fg/20 hover:-translate-y-0.5 transition-all"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${b.slug}`}
                        alt={b.name}
                        className="w-6 h-6 object-contain"
                        loading="lazy"
                      />
                      <span className="text-[10.5px] text-sub font-medium text-center leading-tight">{b.name}</span>
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
              <div className="mt-2 text-[13px] text-sub">Build · ship · operate</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <nav aria-label="Footer" className="flex flex-wrap gap-6 text-[13.5px] text-fg2">
                <a href="#services" className="hover:text-fg transition-colors">{c.footerNav.services}</a>
                <a href="#software" className="hover:text-fg transition-colors">{c.footerNav.demo}</a>
                <a href="#testimonials" className="hover:text-fg transition-colors">{c.footerNav.work}</a>
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
