import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    'Overview',
    'Social Media',
    'Performances',
    'Website Data',
    'Sales & Numbers',
    'Traffic',
    'Tips'
  ]

  const tabData = [
    { // 0: Overview
      title: 'Performance', badge: 'Live',
      metrics: [
        { k: '€12,840', l: 'Revenue', d: '+18% vs last' },
        { k: '342', l: 'Bookings', d: '+24 this week' },
        { k: '4.9', l: 'Rating', d: '127 reviews' }
      ],
      chartLabel: 'Bookings, last 30 days', chartColor: 'text-accent',
      sourceLabel: 'Instagram', sourceVal: '38%',
      actionLabel: 'Restock menu A'
    },
    { // 1: Social Media
      title: 'Social Reach', badge: 'Updated',
      metrics: [
        { k: '45.2K', l: 'Followers', d: '+1.2K this week' },
        { k: '8.4%', l: 'Engagement', d: '+2.1% vs last' },
        { k: '124K', l: 'Impressions', d: '+14% vs last' }
      ],
      chartLabel: 'Engagement, last 30 days', chartColor: 'text-[#af52de]',
      sourceLabel: 'TikTok', sourceVal: '52%',
      actionLabel: 'Post new reel'
    },
    { // 2: Performances
      title: 'Ad Performance', badge: 'Active',
      metrics: [
        { k: '4.2%', l: 'CTR', d: '+0.8% vs last' },
        { k: '€1.24', l: 'CPC', d: '-€0.12 vs last' },
        { k: '3.8x', l: 'ROAS', d: '+0.4x vs last' }
      ],
      chartLabel: 'Click-through rate', chartColor: 'text-[#ff9f0a]',
      sourceLabel: 'Meta Ads', sourceVal: '64%',
      actionLabel: 'Scale campaign B'
    },
    { // 3: Website Data
      title: 'Web Traffic', badge: 'Live',
      metrics: [
        { k: '18.4K', l: 'Visitors', d: '+2.4K this week' },
        { k: '2m 14s', l: 'Avg Time', d: '+12s vs last' },
        { k: '42%', l: 'Bounce Rate', d: '-4% vs last' }
      ],
      chartLabel: 'Daily Visitors', chartColor: 'text-[#0071e3]',
      sourceLabel: 'Organic', sourceVal: '48%',
      actionLabel: 'Optimize SEO'
    },
    { // 4: Sales & Numbers
      title: 'Revenue Stream', badge: 'Processed',
      metrics: [
        { k: '€8,420', l: 'MRR', d: '+€420 this month' },
        { k: '124', l: 'Customers', d: '+12 new' },
        { k: '1.2%', l: 'Churn', d: '-0.2% vs last' }
      ],
      chartLabel: 'Monthly Revenue', chartColor: 'text-[#34c759]',
      sourceLabel: 'Stripe', sourceVal: '92%',
      actionLabel: 'Send invoice'
    },
    { // 5: Traffic
      title: 'Acquisition', badge: 'Tracking',
      metrics: [
        { k: '12.8K', l: 'Organic', d: '+18% vs last' },
        { k: '4.2K', l: 'Direct', d: '+5% vs last' },
        { k: '3.4K', l: 'Referral', d: '+12% vs last' }
      ],
      chartLabel: 'Traffic Volume', chartColor: 'text-[#ff375f]',
      sourceLabel: 'Direct', sourceVal: '32%',
      actionLabel: 'Check referrers'
    },
    { // 6: Tips
      title: 'AI Insights', badge: 'Generated',
      metrics: [
        { k: '3', l: 'Critical', d: 'Action required' },
        { k: '5', l: 'Warnings', d: 'Needs attention' },
        { k: '12', l: 'Optimizations', d: 'Available' }
      ],
      chartLabel: 'Health Score', chartColor: 'text-[#ffcc00]',
      sourceLabel: 'System', sourceVal: '98%',
      actionLabel: 'Apply all fixes'
    }
  ]

  const activeData = tabData[activeTab] || tabData[0]

  return (
    <div className="relative rounded-[24px] border border-hair bg-surface2 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-hair bg-surface/50">
        <LayoutDashboard size={14} className="text-sub" />
        <span className="text-[11.5px] text-fg font-medium tracking-tight">my-cocotte.customy.agency</span>
      </div>

      <div className="flex flex-col sm:flex-row min-h-[460px]">
        {/* Sidebar Menu */}
        <div className="w-full sm:w-[160px] md:w-[180px] border-b sm:border-b-0 sm:border-r border-hair p-3 sm:p-4 flex sm:flex-col gap-1 overflow-x-auto sm:overflow-visible no-scrollbar bg-surface/20 shrink-0">
          {tabs.map((tab, i) => (
            <div 
              key={i} 
              onClick={() => setActiveTab(i)}
              className={`
                whitespace-nowrap px-3 py-2 rounded-lg text-[12px] md:text-[13px] font-medium transition-colors cursor-pointer
                ${i === activeTab 
                  ? 'bg-white dark:bg-zinc-800 border border-hair text-fg shadow-sm' 
                  : 'text-sub hover:text-fg hover:bg-surface/50'}
              `}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 md:p-7 relative overflow-hidden bg-surface2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: easeApple }}
              className="absolute inset-0 p-5 md:p-7"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-[11px] font-medium text-sub uppercase tracking-wider">This week</div>
                  <div className="display-3 mt-1">{activeData.title}</div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-fg2 px-2.5 py-1 rounded-full bg-surface border border-hair">
                  <motion.span
                    className={`w-1.5 h-1.5 rounded-full ${activeData.chartColor.replace('text-', 'bg-')}`}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {activeData.badge}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                {activeData.metrics.map((x, i) => (
                  <motion.div
                    key={`${activeTab}-${x.l}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05, ease: easeApple }}
                    whileHover={{ y: -2 }}
                    className="rounded-2xl border border-hair bg-bg/60 p-4"
                  >
                    <div className="font-semibold text-[20px] tracking-tight">{x.k}</div>
                    <div className="mt-1 text-[11.5px] text-sub font-medium">{x.l}</div>
                    <div className="mt-2 text-[10.5px] text-fg2">{x.d}</div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-hair bg-bg/60 p-4 mb-3">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[12px] font-medium text-fg">{activeData.chartLabel}</div>
                  <div className="flex items-center gap-1.5 text-[11px] text-sub">
                    <span className={`w-2 h-2 rounded-sm ${activeData.chartColor.replace('text-', 'bg-')}`} />
                    This month
                  </div>
                </div>
                <svg viewBox="0 0 400 90" className={`w-full h-16 md:h-20 ${activeData.chartColor}`}>
                  <defs>
                    <linearGradient id={`sw-grad-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[15, 35, 55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255, 275, 295, 315, 335, 355, 375].map((x, i) => {
                    // Generate pseudo-random heights based on tab and index to make charts look different
                    const seed = (activeTab + 1) * (i + 1);
                    const randomFactor = (seed * 9301 + 49297) % 233280 / 233280;
                    const height = 30 + Math.floor(randomFactor * 50);

                    return (
                      <motion.rect
                        key={x}
                        x={x - 6}
                        y={90 - height}
                        width="12"
                        height={height}
                        rx="2"
                        fill="currentColor"
                        fillOpacity="0.85"
                        initial={{ scaleY: 0, transformOrigin: 'bottom' }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 + i * 0.02, ease: easeApple }}
                      />
                    )
                  })}
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-hair bg-bg/60 p-4">
                  <div className="text-[11px] font-medium text-sub uppercase tracking-wider mb-2">Top source</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] md:text-[14px] font-medium">{activeData.sourceLabel}</span>
                    <span className="text-[12px] text-fg2">{activeData.sourceVal}</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-hair bg-bg/60 p-4 cursor-pointer hover:bg-bg/80 transition-colors">
                  <div className="text-[11px] font-medium text-sub uppercase tracking-wider mb-2">Action</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] md:text-[14px] font-medium">{activeData.actionLabel}</span>
                    <ArrowUpRight size={14} className="text-fg2" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
