import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../lang'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="container-xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="eyebrow"
        >
          Studio Customify — Bali · Paris
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
          className="display-1 text-balance max-w-5xl"
        >
          Custom AI, <span className="text-sub">made for your brand.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 body-lg max-w-2xl text-pretty"
        >
          {h.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#product"
            className="inline-flex items-center gap-1.5 rounded-full bg-fg text-bg px-6 py-3 text-[14.5px] font-medium hover:opacity-90 transition-opacity"
          >
            {h.ctaPrimary}
            <ArrowUpRight size={15} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-1 text-accent text-[14.5px] font-medium hover:opacity-80 transition-opacity"
          >
            {h.ctaSecondary}
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-16 md:mt-24"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-full rounded-[28px] border border-hair bg-surface2 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-1.5 px-5 py-3 border-b border-hair bg-surface/50">
        <span className="w-2.5 h-2.5 rounded-full bg-fg/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-fg/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-fg/10" />
        <span className="ml-3 text-[11px] text-sub font-medium tracking-tight">my-cocotte.customify.studio</span>
      </div>

      <div className="grid grid-cols-12 min-h-[480px]">
        <aside className="hidden md:flex md:col-span-2 flex-col gap-1 p-5 border-r border-hair bg-surface/40">
          <div className="text-[11px] font-semibold text-sub uppercase tracking-wider mb-3 px-2">Workspace</div>
          {['Overview', 'Bookings', 'Campaigns', 'Messages', 'Contacts', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[13px] ${
                i === 0 ? 'bg-fg/5 text-fg font-medium' : 'text-fg2'
              }`}
            >
              <span className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-accent' : 'bg-sub/40'}`} />
              {item}
            </div>
          ))}
        </aside>

        <div className="col-span-12 md:col-span-10 p-6 md:p-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-[11px] font-medium text-sub uppercase tracking-wider">Overview</div>
              <div className="display-3 mt-1">Today</div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-fg2 px-2.5 py-1 rounded-full bg-surface border border-hair">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D5C] animate-pulse" />
              Live
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { k: '€48,210', l: 'Revenue' },
              { k: '1,284', l: 'Bookings' },
              { k: '38.6K', l: 'Reach' },
              { k: '4.8', l: 'Rating' }
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-hair bg-bg/60 p-4">
                <div className="font-semibold text-[20px] md:text-[22px] tracking-tight tabular-nums">{x.k}</div>
                <div className="mt-1 text-[11.5px] text-sub font-medium">{x.l}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-hair bg-bg/60 p-4 md:p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[12px] font-medium text-fg">Weekly revenue</div>
              <div className="text-[11px] text-sub">Last 12 weeks</div>
            </div>
            <svg viewBox="0 0 400 80" className="w-full h-16 text-accent">
              <defs>
                <linearGradient id="hero-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 60 L35 52 L70 55 L105 42 L140 46 L175 30 L210 36 L245 24 L280 28 L315 18 L350 22 L400 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0 60 L35 52 L70 55 L105 42 L140 46 L175 30 L210 36 L245 24 L280 28 L315 18 L350 22 L400 10 L400 80 L0 80 Z"
                fill="url(#hero-grad)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
