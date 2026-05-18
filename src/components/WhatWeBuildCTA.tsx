import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Briefcase, ChefHat, Hotel, Sparkles, Users, type LucideIcon } from 'lucide-react'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

interface Vertical {
  slug: string
  name: string
  icon: LucideIcon
  accent: string
  preview: string
  isLive: boolean
}

const VERTICALS: Vertical[] = [
  {
    slug: 'restaurants',
    name: 'Restaurants',
    icon: ChefHat,
    accent: '#ff7a59',
    preview: 'Social, WhatsApp, loyalty, customer database. One backoffice.',
    isLive: true
  },
  {
    slug: 'spa-wellness',
    name: 'Spa & Wellness',
    icon: Sparkles,
    accent: '#34c759',
    preview: 'Booking, reminders, loyalty, gift cards. Fewer no-shows.',
    isLive: true
  },
  {
    slug: 'hotels',
    name: 'Hotels',
    icon: Hotel,
    accent: '#0a84ff',
    preview: 'Unified inbox, OTAs, pre-arrival flow, reviews.',
    isLive: false
  },
  {
    slug: 'entrepreneurs',
    name: 'Entrepreneurs',
    icon: Users,
    accent: '#bf5af2',
    preview: 'Personal brand engine, DMs, sales pipeline, monetization.',
    isLive: true
  },
  {
    slug: 'agency-services',
    name: 'Agency & Services',
    icon: Briefcase,
    accent: '#ff9f0a',
    preview: 'Lead funnel, client CRM, proposals, retainer ops.',
    isLive: false
  }
]

export default function WhatWeBuildCTA() {
  return (
    <section id="software" className="relative py-24 md:py-32 border-t border-hair">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={staggerItem} className="eyebrow">What we build</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            Any industry, <span className="text-sub">any custom system.</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl mx-auto text-pretty">
            Each industry runs differently, so each gets its own software. Tap the one that fits to see the modules, real client work, and what we'd build for you.
          </motion.p>
        </motion.div>

        {/* Big preview cards — full width */}
        <motion.div
          variants={staggerParent(0.06, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {VERTICALS.map((v) => {
            const Icon = v.icon
            return (
              <motion.div key={v.slug} variants={staggerItem}>
                <Link
                  to={`/whatwebuild/${v.slug}`}
                  className="card relative flex flex-col p-7 md:p-8 group hover:border-fg/30 transition-all duration-300 h-full overflow-hidden hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] hover:-translate-y-1"
                >
                  {/* Accent glow on hover */}
                  <div
                    aria-hidden
                    className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                    style={{ background: v.accent }}
                  />

                  <div className="relative flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.06, rotate: -3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-[0_16px_36px_-12px_rgba(0,0,0,0.45)]"
                      style={{ background: v.accent }}
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </motion.div>
                    {v.isLive && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#34c759]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-semibold text-[20px] md:text-[22px] tracking-tight mb-2 leading-[1.15]">
                    {v.name}
                  </h3>
                  <p className="text-[13.5px] md:text-[14px] text-fg2 leading-[1.55] text-pretty">
                    {v.preview}
                  </p>

                  <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-tight text-fg group-hover:gap-2.5 transition-all">
                    See the playbook
                    <ArrowUpRight
                      size={14}
                      className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
