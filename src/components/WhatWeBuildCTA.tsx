import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { staggerItem, staggerParent, viewportOnce } from './fx/motion'
import { openCalendly, preloadCalendly } from '../lib/calendly'
import ProductPreviewModal, { type ProductPreview } from './ProductPreviewModal'

interface Solution {
  slug: string
  name: string
  description: string
  image?: string
  imageAlt?: string
  gallery?: string[]
}

const SOLUTIONS: Solution[] = [
  {
    slug: 'dashboard',
    name: 'All-in-one dashboard',
    description: 'One screen for revenue, bookings, social and WhatsApp. The whole operation, refreshed live. Built and shipped for My Cocotte.',
    image: '/restaurant/mycocotte/5.png',
    imageAlt: 'All-in-one dashboard tracking the full operation',
    gallery: [
      '/restaurant/mycocotte/3.png',
      '/restaurant/mycocotte/4.png',
      '/restaurant/mycocotte/2.png',
      '/restaurant/mycocotte/7.png',
      '/restaurant/mycocotte/6.png'
    ]
  },
  {
    slug: 'crm',
    name: 'AI CRM',
    description: 'Drop any Excel file. AI turns it into a clean, live dashboard with real insights and actions you can take. Customers, deals, revenue, all in one place. Also runs as a mobile app.',
    image: '/examples/example_dashboard_crm.png',
    imageAlt: 'AI CRM that turns Excel files into a live dashboard',
    gallery: [
      '/examples/example_dashboard_crm2.png'
    ]
  },
  {
    slug: 'website-funnel',
    name: 'Website & funnel',
    description: 'Custom site or full conversion funnel. From first click to booked call, designed to convert. Built with your tools, your tone, your stack.',
    image: '/examples/example_website.png',
    imageAlt: 'Custom website built to convert visitors into clients'
  },
  {
    slug: 'social-growth',
    name: 'Social media growth',
    description: 'Content engine, posting cadence, community management. Real audience, real signals, weekly growth. Live proof on Dylan\'s account.',
    image: '/examples/tracking_social_dashboard.JPG',
    imageAlt: 'Social media growth tracked across platforms',
    gallery: [
      '/examples/social_recap.JPG',
      '/examples/insta_after.png',
      '/examples/insta_before.png'
    ]
  },
  {
    slug: 'lead-engine',
    name: 'AI lead engine',
    description: 'Find local leads by industry, score them, then let AI auto-reply to DMs across Instagram, WhatsApp and Telegram. From cold prospect to booked call, on autopilot.',
    image: '/examples/example_setter_ai.png',
    imageAlt: 'AI setter handling DM conversations end-to-end',
    gallery: [
      '/examples/example_scan_leads.png',
      '/examples/example_scan_leads2.png'
    ]
  }
]

export default function WhatWeBuildCTA() {
  const [preview, setPreview] = useState<ProductPreview | null>(null)

  return (
    <>
      <section id="software" className="relative py-[4.8rem] md:py-[6.4rem] border-t border-hair">
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
              Solutions in production. <span className="text-sub">Your business gets its own.</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl mx-auto text-pretty">
              Custom tools already running for clients. Built around how their businesses actually operate. Yours could be next.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerParent(0.06, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {SOLUTIONS.map((s) => (
              <motion.div key={s.slug} variants={staggerItem}>
                <button
                  type="button"
                  onClick={() => setPreview(s)}
                  className="card group relative flex flex-col h-full w-full text-left overflow-hidden hover:border-fg/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] transition-all duration-300"
                >
                  {/* Preview image (or blank placeholder) */}
                  <div className="relative aspect-[16/10] bg-surface2 overflow-hidden border-b border-hair">
                    {s.image ? (
                      <img
                        src={s.image}
                        alt={s.imageAlt ?? s.name}
                        loading="lazy"
                        className="block w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle, rgb(var(--color-sub) / 0.18) 1px, transparent 1px)',
                          backgroundSize: '14px 14px'
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-[20px] md:text-[22px] tracking-tight leading-[1.15]">
                      {s.name}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] md:text-[14px] text-fg2 leading-[1.55] text-pretty">
                      {s.description}
                    </p>
                    <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-tight text-fg group-hover:gap-2.5 transition-all">
                      See it in action
                      <ArrowUpRight
                        size={14}
                        className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}

            {/* Final box: Ask for your own */}
            <motion.div variants={staggerItem}>
              <button
                type="button"
                onClick={() => openCalendly()}
                onMouseEnter={preloadCalendly}
                onFocus={preloadCalendly}
                className="card group relative flex flex-col h-full w-full text-left overflow-hidden hover:border-fg/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-hair bg-fg flex items-center justify-center">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgb(var(--color-bg) / 0.7) 1px, transparent 1px)',
                      backgroundSize: '14px 14px'
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-x-12 -inset-y-12 opacity-60 blur-3xl pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), transparent 60%)'
                    }}
                  />
                  <div className="relative w-16 h-16 rounded-2xl bg-bg/10 backdrop-blur-sm border border-bg/20 flex items-center justify-center text-bg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Sparkles size={26} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-[20px] md:text-[22px] tracking-tight leading-[1.15]">
                    Ask for your solution
                  </h3>
                  <p className="mt-2.5 text-[13.5px] md:text-[14px] text-fg2 leading-[1.55] text-pretty">
                    Your business runs nothing like these. So we build the software around the way you actually operate.
                  </p>
                  <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-tight text-fg group-hover:gap-2.5 transition-all">
                    Book an audit
                    <ArrowUpRight
                      size={14}
                      className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProductPreviewModal product={preview} onClose={() => setPreview(null)} />
    </>
  )
}
