import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Check, ArrowUpRight } from 'lucide-react'
import { useLang } from '../lang'

const logos = ['My Cocotte', 'TYT', 'Rody Spa', 'Maison Vert', 'Studio Lune', 'Kaya', 'Noya Co.']
const channels = [
  { n: 'Instagram', p: 42, c: '#0071e3' },
  { n: 'Walk-in', p: 28, c: '#34c759' },
  { n: 'Uber Eats', p: 18, c: '#ff9f0a' },
  { n: 'Referral', p: 12, c: '#af52de' }
]

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="home" className="relative pt-28 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      <div className="container-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="eyebrow"
        >
          {h.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-mega tracking-tightest"
        >
          {h.h1a}<br />
          {h.h1b}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 mx-auto max-w-2xl body-lg"
        >
          {h.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#demo" className="btn-primary">
            {h.ctaPrimary} <ArrowRight size={16} />
          </a>
          <a href="#services" className="btn-ghost">
            {h.ctaSecondary} <span aria-hidden className="text-sub">›</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-sub"
        >
          {h.bullets.map((b, i) => (
            <Fragment key={b}>
              {i > 0 && <span className="w-px h-3 bg-hair hidden md:block" />}
              <span className="inline-flex items-center gap-1.5">
                <Check size={13} className="text-accent" /> {b}
              </span>
            </Fragment>
          ))}
        </motion.div>
      </div>

      {/* Product visual, wider, richer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mt-20 md:mt-28 container-xxl"
      >
        <a
          href="#demo"
          className="group relative block cursor-pointer"
          aria-label={h.mockCta}
        >
          <div className="absolute -inset-16 bg-accent/10 blur-3xl rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-90" aria-hidden />
          <div className="relative bg-bg rounded-xl3 border border-hair shadow-float overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.22),0_14px_28px_-8px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-1.5 px-5 py-3 border-b border-hair bg-surface2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <div className="mx-auto text-[12px] text-sub font-mono">{h.mockTitle}</div>
            </div>

            {/* Click hint */}
            <div className="pointer-events-none absolute top-10 md:top-14 right-3 md:right-6 z-10 inline-flex items-center gap-1.5 bg-fg text-white text-[11.5px] font-medium rounded-full px-3 py-1.5 shadow-soft opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {h.mockCta} <ArrowUpRight size={12} strokeWidth={2.5} />
            </div>

            <div className="grid grid-cols-12 gap-3 md:gap-4 p-3 md:p-7">
              {/* Sidebar — hidden on mobile to save horizontal room */}
              <aside className="hidden md:block md:col-span-3 space-y-1.5">
                {h.sidebar.items.map((l, i) => {
                  const active = i === h.sidebar.active
                  return (
                    <div
                      key={l}
                      className={
                        active
                          ? 'flex items-center gap-2 px-3 py-2 rounded-lg bg-fg text-white'
                          : 'flex items-center gap-2 px-3 py-2 rounded-lg text-fg2'
                      }
                    >
                      <span className={`w-5 h-5 rounded-md ${active ? 'bg-white/15' : 'bg-surface'}`} />
                      <span className={`text-[13px] ${active ? 'font-medium' : ''}`}>{l}</span>
                    </div>
                  )
                })}
                <div className="mt-4 card p-3">
                  <div className="text-[11px] text-sub">{h.sidebar.plan}</div>
                  <div className="font-medium text-[13px] mt-0.5">{h.sidebar.planValue}</div>
                  <div className="mt-2 h-1 bg-surface rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-accent rounded-full" />
                  </div>
                </div>
              </aside>

              {/* Main */}
              <div className="col-span-12 md:col-span-9 space-y-3 md:space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-[18px] md:text-[24px] font-semibold tracking-tight leading-none">{h.sectionTitle}</h3>
                    <div className="mt-1 text-[11px] text-sub">{h.sectionSub}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-accent font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> live
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
                  {h.kpis.map((s) => (
                    <div key={s.v} className="card p-3 md:p-4">
                      <div className="text-[11px] text-sub tracking-wide leading-tight">{s.v}</div>
                      <div className="mt-1.5 font-display text-[18px] md:text-[22px] font-semibold tracking-tight tabular-nums">{s.k}</div>
                      <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-[#1C9B4B] font-mono">
                        <TrendingUp size={11} strokeWidth={2.5} /> {s.d}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="card p-4 md:col-span-2 h-40 md:h-52 relative overflow-hidden">
                    <div className="flex items-baseline justify-between">
                      <div className="text-[11px] text-sub tracking-wide">{h.chartTitle}</div>
                      <div className="text-[11px] text-sub font-mono">{h.chartNote}</div>
                    </div>
                    <svg viewBox="0 0 400 130" className="absolute inset-x-4 bottom-3 w-[calc(100%-2rem)] h-36" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,95 C35,88 55,65 85,58 C118,50 145,78 180,70 C215,62 240,32 275,28 C305,24 340,50 400,12 L400,130 L0,130 Z"
                        fill="url(#heroArea)"
                      />
                      <path
                        d="M0,95 C35,88 55,65 85,58 C118,50 145,78 180,70 C215,62 240,32 275,28 C305,24 340,50 400,12"
                        fill="none" stroke="#0071e3" strokeWidth="2.2" strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="card p-4 h-40 md:h-52">
                    <div className="text-[11px] text-sub tracking-wide">{h.channels}</div>
                    <div className="mt-3 md:mt-4 space-y-2.5 md:space-y-3">
                      {channels.map((r) => (
                        <div key={r.n}>
                          <div className="flex justify-between text-[12px] mb-1.5">
                            <span className="text-fg2">{r.n}</span>
                            <span className="text-sub font-mono tabular-nums">{r.p}%</span>
                          </div>
                          <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: r.p + '%', background: r.c }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="card p-4 md:col-span-2">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="text-[11px] text-sub tracking-wide">{h.recent}</div>
                      <div className="text-[11px] text-accent font-medium">{h.live}</div>
                    </div>
                    <ul className="text-[13px] divide-y divide-hair">
                      {h.bookings.map((r, i) => (
                        <li key={i} className="flex items-center justify-between gap-3 py-2.5">
                          <span className="text-fg truncate">{r.n}</span>
                          <span className="flex items-center gap-2 md:gap-3 text-sub text-[11px] md:text-[12px] font-mono shrink-0">
                            <span className="hidden sm:inline">{r.s}</span><span>{r.t}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card p-0 overflow-hidden flex flex-col">
                    <div className="px-4 py-3 border-b border-hair bg-surface2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#25D366] text-white text-[10px] font-semibold flex items-center justify-center">W</span>
                      <div className="text-[12px]">
                        <div className="font-medium leading-tight">{h.whatsappAgent}</div>
                        <div className="text-sub text-[10px]">{h.replying}</div>
                      </div>
                    </div>
                    <div className="flex-1 p-3 space-y-2 text-[12px] bg-surface2">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-bg border border-hair px-3 py-2">
                        {h.chat[0]}
                      </div>
                      <div className="max-w-[85%] ml-auto rounded-2xl rounded-br-md bg-[#DCF8C6] px-3 py-2">
                        {h.chat[1]}
                      </div>
                      <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-bg border border-hair px-3 py-2">
                        {h.chat[2]}
                      </div>
                      <div className="max-w-[85%] ml-auto rounded-2xl rounded-br-md bg-[#DCF8C6] px-3 py-2">
                        {h.chat[3]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* Logo strip */}
        <div className="mt-14 md:mt-20">
          <div className="text-center text-[12px] text-sub tracking-wide mb-6">
            {h.logosCaption}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 opacity-60">
            {logos.map((n) => (
              <span key={n} className="font-display text-[17px] font-medium tracking-tight">{n}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
