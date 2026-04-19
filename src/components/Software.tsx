import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Calendar, Database, LayoutDashboard } from 'lucide-react'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const points = [
  { icon: LayoutDashboard, title: 'One screen for everything', desc: 'Revenue, bookings, reach, reviews. The numbers you actually look at, in one place.' },
  { icon: Database, title: 'Your data, finally yours', desc: 'No more spreadsheets emailed at midnight. Sync from the tools you already use.' },
  { icon: Calendar, title: 'Built around your workflow', desc: 'Tables, calendars, kanbans, forms. Whatever your team needs to move faster.' },
  { icon: BarChart3, title: 'Reports that write themselves', desc: 'Daily and weekly summaries land in your inbox. The story, not the numbers.' }
]

export default function Software() {
  return (
    <section id="software" className="relative py-24 md:py-32">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">The software</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            Tools, <span className="text-sub">made for the way you work.</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl text-pretty">
            Custom dashboards, internal tools, client portals. The boring software your business
            needs to stop running on duct tape.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: easeApple }}
            className="lg:col-span-7 order-1"
          >
            <DashboardMock />
          </motion.div>

          <motion.ul
            variants={staggerParent(0.1, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-5 order-2 space-y-7"
          >
            {points.map((p) => {
              const Icon = p.icon
              return (
                <motion.li
                  key={p.title}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <motion.span
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                    className="mt-0.5 w-9 h-9 rounded-xl bg-surface border border-hair flex items-center justify-center shrink-0"
                  >
                    <Icon size={16} strokeWidth={1.7} className="text-fg" />
                  </motion.span>
                  <div>
                    <div className="font-display font-semibold text-[18px] tracking-tight">{p.title}</div>
                    <p className="mt-1 text-[14.5px] text-fg2 leading-[1.55] text-pretty">{p.desc}</p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

function DashboardMock() {
  const tabs = [
    'Overview',
    'Social Media',
    'Performances',
    'Website Data',
    'Sales & Numbers',
    'Traffic',
    'Tips'
  ]

  return (
    <div className="relative rounded-[24px] border border-hair bg-surface2 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-hair bg-surface/50">
        <LayoutDashboard size={14} className="text-sub" />
        <span className="text-[11.5px] text-fg font-medium tracking-tight">my-cocotte.customy.agency</span>
      </div>

      <div className="flex flex-col sm:flex-row">
        {/* Sidebar Menu */}
        <div className="w-full sm:w-[160px] md:w-[180px] border-b sm:border-b-0 sm:border-r border-hair p-3 sm:p-4 flex sm:flex-col gap-1 overflow-x-auto sm:overflow-visible no-scrollbar bg-surface/20">
          {tabs.map((tab, i) => (
            <div 
              key={i} 
              className={`
                whitespace-nowrap px-3 py-2 rounded-lg text-[12px] md:text-[13px] font-medium transition-colors cursor-pointer
                ${i === 0 
                  ? 'bg-white dark:bg-zinc-800 border border-hair text-fg shadow-sm' 
                  : 'text-sub hover:text-fg hover:bg-surface/50'}
              `}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 md:p-7">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-[11px] font-medium text-sub uppercase tracking-wider">This week</div>
              <div className="display-3 mt-1">Performance</div>
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
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5"
            variants={staggerParent(0.08, 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { k: '€12,840', l: 'Revenue', d: '+18% vs last' },
              { k: '342', l: 'Bookings', d: '+24 this week' },
              { k: '4.9', l: 'Rating', d: '127 reviews' }
            ].map((x) => (
              <motion.div
                key={x.l}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className="rounded-2xl border border-hair bg-bg/60 p-4"
              >
                <div className="font-semibold text-[20px] tracking-tight">{x.k}</div>
                <div className="mt-1 text-[11.5px] text-sub font-medium">{x.l}</div>
                <div className="mt-2 text-[10.5px] text-fg2">{x.d}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="rounded-2xl border border-hair bg-bg/60 p-4 mb-3">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[12px] font-medium text-fg">Bookings, last 30 days</div>
              <div className="flex items-center gap-1.5 text-[11px] text-sub">
                <span className="w-2 h-2 rounded-sm bg-accent" />
                This month
              </div>
            </div>
            <svg viewBox="0 0 400 90" className="w-full h-16 md:h-20 text-accent">
              <defs>
                <linearGradient id="sw-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[15, 35, 55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255, 275, 295, 315, 335, 355, 375].map((x, i) => {
                const heights = [42, 38, 50, 35, 56, 48, 62, 44, 58, 70, 52, 66, 78, 60, 74, 82, 68, 88, 76]
                return (
                  <motion.rect
                    key={x}
                    x={x - 6}
                    y={90 - heights[i]}
                    width="12"
                    height={heights[i]}
                    rx="2"
                    fill="currentColor"
                    fillOpacity="0.85"
                    initial={{ scaleY: 0, transformOrigin: 'bottom' }}
                    whileInView={{ scaleY: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.04, ease: easeApple }}
                  />
                )
              })}
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-hair bg-bg/60 p-4">
              <div className="text-[11px] font-medium text-sub uppercase tracking-wider mb-2">Top source</div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] md:text-[14px] font-medium">Instagram</span>
                <span className="text-[12px] text-fg2">38%</span>
              </div>
            </div>
            <div className="rounded-2xl border border-hair bg-bg/60 p-4">
              <div className="text-[11px] font-medium text-sub uppercase tracking-wider mb-2">Action</div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] md:text-[14px] font-medium">Restock menu A</span>
                <ArrowUpRight size={14} className="text-fg2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
