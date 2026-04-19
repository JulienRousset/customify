import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../lang'
import { buttonHover, easeApple, staggerItem, staggerParent } from './fx/motion'
import LogoViewer from './LogoViewer'

const heroContainer = staggerParent(0.09, 0.1)

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-28">
      <motion.div
        className="container-xl"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <motion.p variants={staggerItem} className="eyebrow">
              Studio Customy · Bali and Paris
            </motion.p>

            <motion.h1 variants={staggerItem} className="display-1 text-balance max-w-5xl">
              Custom AI, <span className="text-sub">made for your brand.</span>
            </motion.h1>

            <motion.p variants={staggerItem} className="mt-6 body-lg max-w-2xl text-pretty">
              {h.sub}
            </motion.p>

            <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-4">
              <motion.a
                href="#product"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center gap-1.5 rounded-full bg-fg text-bg px-6 py-3 text-[14.5px] font-medium"
              >
                {h.ctaPrimary}
                <ArrowUpRight size={15} />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className="inline-flex items-center gap-1 text-fg text-[14.5px] font-medium"
              >
                {h.ctaSecondary}
                <span aria-hidden>→</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={staggerItem}
            className="hidden lg:flex justify-center lg:justify-self-center w-full"
          >
            <div className="w-[380px] h-[380px] xl:w-[460px] xl:h-[460px] 2xl:w-[540px] 2xl:h-[540px]">
              <LogoViewer />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerItem}
          className="mt-16 md:mt-24"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HeroVisual />
          </motion.div>
        </motion.div>
      </motion.div>
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
        <span className="ml-3 text-[11px] text-sub font-medium tracking-tight">my-cocotte.customy.agency</span>
      </div>

      <div className="grid grid-cols-12 min-h-[480px]">
        <aside className="hidden md:flex md:col-span-2 flex-col gap-1 p-5 border-r border-hair bg-surface/40">
          <div className="text-[11px] font-semibold text-sub uppercase tracking-wider mb-3 px-2">Workspace</div>
          {['Overview', 'Bookings', 'Campaigns', 'Messages', 'Contacts', 'Settings'].map((item, i) => (
            <motion.div
              key={item}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[13px] cursor-default ${
                i === 0 ? 'bg-fg/5 text-fg font-medium' : 'text-fg2'
              }`}
            >
              <span className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-accent' : 'bg-sub/40'}`} />
              {item}
            </motion.div>
          ))}
        </aside>

        <div className="col-span-12 md:col-span-10 p-6 md:p-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-[11px] font-medium text-sub uppercase tracking-wider">Overview</div>
              <div className="display-3 mt-1">Today</div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-fg2 px-2.5 py-1 rounded-full bg-surface border border-hair">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#2E7D5C]"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              Live
            </span>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
            variants={staggerParent(0.08, 0.4)}
            initial="hidden"
            animate="visible"
          >
            {[
              { k: '€48,210', l: 'Revenue' },
              { k: '1,284', l: 'Bookings' },
              { k: '38.6K', l: 'Reach' },
              { k: '4.8', l: 'Rating' }
            ].map((x) => (
              <motion.div
                key={x.l}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className="rounded-2xl border border-hair bg-bg/60 p-4"
              >
                <div className="font-semibold text-[20px] md:text-[22px] tracking-tight tabular-nums">{x.k}</div>
                <div className="mt-1 text-[11.5px] text-sub font-medium">{x.l}</div>
              </motion.div>
            ))}
          </motion.div>

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
              <motion.path
                d="M0 60 L35 52 L70 55 L105 42 L140 46 L175 30 L210 36 L245 24 L280 28 L315 18 L350 22 L400 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: easeApple, delay: 0.8 }}
              />
              <motion.path
                d="M0 60 L35 52 L70 55 L105 42 L140 46 L175 30 L210 36 L245 24 L280 28 L315 18 L350 22 L400 10 L400 80 L0 80 Z"
                fill="url(#hero-grad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
