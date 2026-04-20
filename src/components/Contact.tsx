import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useLang } from '../lang'

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

              <div className="mt-9 space-y-1 text-[14.5px]">
                <a href="mailto:hello@customy.agency" className="block py-3 border-b border-hair hover:text-accent transition-colors">
                  <span className="text-sub text-[12px] block mb-0.5">{c.emailLabel}</span>
                  hello@customy.agency
                </a>
                <a href="https://wa.me/" className="block py-3 border-b border-hair hover:text-accent transition-colors">
                  <span className="text-sub text-[12px] block mb-0.5">{c.waLabel}</span>
                  {c.waAction}
                </a>
                <div className="py-3">
                  <span className="text-sub text-[12px] block mb-0.5">{c.availability}</span>
                  {c.availabilityBody}
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
            <nav aria-label="Footer" className="flex flex-wrap gap-6 text-[13.5px] text-fg2">
              <a href="#services" className="hover:text-fg transition-colors">{c.footerNav.services}</a>
              <a href="#software" className="hover:text-fg transition-colors">{c.footerNav.demo}</a>
              <a href="#testimonials" className="hover:text-fg transition-colors">{c.footerNav.work}</a>
              <a href="#contact" className="hover:text-fg transition-colors">{c.footerNav.contact}</a>
            </nav>
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
