import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, ChefHat, Hammer, Hotel, Sparkles, type LucideIcon } from 'lucide-react'
import { staggerItem, staggerParent, viewportOnce } from './fx/motion'

interface Vertical {
  slug: string
  name: string
  icon: LucideIcon
  accent: string
}

const VERTICALS: Vertical[] = [
  { slug: 'restaurants', name: 'Restaurants', icon: ChefHat, accent: '#ff7a59' },
  { slug: 'spa-wellness', name: 'Spa & Wellness', icon: Sparkles, accent: '#34c759' },
  { slug: 'hotels', name: 'Hotels', icon: Hotel, accent: '#0a84ff' },
  { slug: 'creators', name: 'Creators', icon: Camera, accent: '#bf5af2' },
  { slug: 'trades-services', name: 'Trades & Services', icon: Hammer, accent: '#ff9f0a' }
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
            Five industries. <span className="text-sub">Five custom systems.</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl mx-auto text-pretty">
            Each industry has its own playbook. Real client work, mockups of what you'd get, and the exact tools we'd wire in for you.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent(0.05, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {VERTICALS.map((v) => {
            const Icon = v.icon
            return (
              <motion.div key={v.slug} variants={staggerItem}>
                <Link
                  to={`/whatwebuild/${v.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-hair bg-surface2/60 px-4 py-2 text-[13px] font-medium tracking-tight text-fg2 hover:text-fg hover:border-fg/30 hover:bg-surface2 transition-colors"
                >
                  <Icon size={14} strokeWidth={1.8} style={{ color: v.accent }} />
                  {v.name}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-14 flex justify-center"
        >
          <Link
            to="/whatwebuild"
            className="group inline-flex items-center gap-3 rounded-full bg-fg text-bg px-9 py-5 text-[16px] md:text-[18px] font-semibold tracking-tight transition-opacity hover:opacity-90"
          >
            See what we build
            <ArrowUpRight
              size={20}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
