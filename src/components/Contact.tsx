import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Mail, MessageCircle } from 'lucide-react'
import { useLang } from '../lang'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      c.mailBody(form.name, form.business, form.message, form.email)
    )
    const subject = encodeURIComponent(c.mailSubject(form.business || form.name))
    window.location.href = `mailto:hello@customify.studio?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputCls =
    "w-full bg-transparent border-0 border-b border-hair2 focus:border-accent outline-none py-3 text-[17px] placeholder:text-sub/80 transition-colors"

  return (
    <>
      <section id="contact" className="relative py-24 md:py-32 bg-surface">
        <div className="container-xl">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="eyebrow-sub">{c.eyebrow}</div>
              <h2 className="font-display text-giga tracking-tightest">
                {c.h2a}<br />
                <span className="text-accent">{c.h2b}</span>
              </h2>
              <p className="mt-6 body-lg max-w-lg">
                {c.sub}
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-[12px] text-sub">{c.emailLabel}</div>
                    <a className="font-medium text-[15px] hover:text-accent transition" href="mailto:hello@customify.studio">
                      hello@customify.studio
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center shrink-0">
                    <MessageCircle size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-[12px] text-sub">{c.waLabel}</div>
                    <a className="font-medium text-[15px] hover:text-accent transition" href="https://wa.me/">
                      {c.waAction}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-hair text-[13px] text-sub">
                <div className="font-medium text-fg mb-1">{c.availability}</div>
                {c.availabilityBody}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card p-12 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent text-white flex items-center justify-center mb-5">
                    <Check size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">{c.sentTitle}</h3>
                  <p className="text-fg2 text-[15px]">
                    {c.sentBody}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="card p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-2">
                    <label>
                      <div className="text-[12px] text-sub mt-2 mb-1">{c.form.name}</div>
                      <input required placeholder={c.form.namePh} value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputCls} />
                    </label>
                    <label>
                      <div className="text-[12px] text-sub mt-2 mb-1">{c.form.email}</div>
                      <input required type="email" placeholder={c.form.emailPh} value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputCls} />
                    </label>
                  </div>
                  <label className="block">
                    <div className="text-[12px] text-sub mt-2 mb-1">{c.form.business}</div>
                    <input placeholder={c.form.businessPh} value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className={inputCls} />
                  </label>
                  <label className="block">
                    <div className="text-[12px] text-sub mt-4 mb-1">{c.form.message}</div>
                    <textarea required rows={5} placeholder={c.form.messagePh}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputCls} resize-none leading-relaxed`} />
                  </label>

                  <div className="flex items-center justify-between mt-8">
                    <div className="text-[12px] text-sub">{c.form.replyNote}</div>
                    <button type="submit" className="btn-primary">
                      {c.form.send} <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-bg border-t border-hair">
        <div className="container-xl py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-x-2 gap-y-1 text-[13px] md:text-[14px] text-sub flex-wrap">
              <span className="font-display font-semibold text-fg">Customify</span>
              <span>·</span>
              <span>© {new Date().getFullYear()}</span>
              <span>·</span>
              <span>{c.footerLocation}</span>
              <span>·</span>
              <span>{c.footerRemote}</span>
            </div>
            <div className="flex items-center flex-wrap gap-x-5 md:gap-x-6 gap-y-2 text-[13px] md:text-[14px] text-sub">
              <a href="#work" className="hover:text-fg transition">{c.footerNav.work}</a>
              <a href="#services" className="hover:text-fg transition">{c.footerNav.services}</a>
              <a href="#numbers" className="hover:text-fg transition">{c.footerNav.numbers}</a>
              <a href="#demo" className="hover:text-fg transition">{c.footerNav.demo}</a>
              <a href="#contact" className="hover:text-fg transition">{c.footerNav.contact}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
