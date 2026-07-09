import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { useLang } from '../lang'
import { staggerItem, staggerParent, viewportOnce } from './fx/motion'
import { openCalendly, preloadCalendly } from '../lib/calendly'
import ProductPreviewModal, { type ProductPreview } from './ProductPreviewModal'

// Media only — display copy (name/description/price) lives in i18n under
// `whatWeBuild.solutions`, keyed by slug, so the section is fully bilingual.
interface Solution {
  slug: string
  image?: string
  imageAlt?: string
  /** Walkthrough video played in the modal. Drop the file in /public/videos/. */
  video?: string
  gallery?: string[]
}

const SOLUTIONS: Solution[] = [
  {
    slug: 'dashboard',
    image: '/restaurant/mycocotte/5.png',
    imageAlt: 'Marketing dashboard tracking the full operation',
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
    image: '/examples/example_dashboard_crm1.png',
    imageAlt: 'AI CRM that turns Excel files into a live dashboard',
    video: '/videos/preview_trailer_crm.mp4',
    gallery: [
      '/examples/example_dashboard_crm1.png',
      '/examples/example_dashboard_crm2.png',
      '/examples/example_dashboard_crm3.png'
    ]
  },
  {
    slug: 'website-funnel',
    image: '/examples/example_website1.png',
    imageAlt: 'Custom website built to convert visitors into clients',
    video: '/videos/preview_trailer_website.mp4',
    gallery: [
      '/examples/example_website1.png',
      '/examples/example_website2.png',
      '/examples/example_website3.png'
    ]
  },
  {
    slug: 'social-growth',
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
    image: '/examples/example_setter_ai.png',
    imageAlt: 'AI chat handling DM conversations end-to-end',
    video: '/videos/preview_trailer_aibot.mp4',
    gallery: [
      '/examples/example_setter_ai.png',
      '/examples/example_setter_ai_inbox.png',
      '/examples/example_setter_ai_contacts.png',
      '/examples/example_setter_ai_connections.png'
    ]
  }
]

export default function WhatWeBuildCTA() {
  const { t } = useLang()
  const copy = t.whatWeBuild
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
            <motion.p variants={staggerItem} className="eyebrow">{copy.eyebrow}</motion.p>
            <motion.h2 variants={staggerItem} className="display-2 text-balance">
              {copy.h2a} <span className="text-sub">{copy.h2b}</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl mx-auto text-pretty">
              {copy.sub}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerParent(0.06, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {SOLUTIONS.map((s) => {
              const sc = copy.solutions[s.slug as keyof typeof copy.solutions]
              return (
                <motion.div key={s.slug} variants={staggerItem}>
                  <button
                    type="button"
                    onClick={() =>
                      setPreview({
                        name: sc.name,
                        description: sc.description,
                        image: s.image,
                        imageAlt: s.imageAlt ?? sc.name,
                        video: s.video,
                        gallery: s.gallery
                      })
                    }
                    className="card group relative flex flex-col h-full w-full text-left overflow-hidden hover:border-fg/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] transition-all duration-300"
                  >
                    {/* Preview image (or blank placeholder) */}
                    <div className="relative aspect-[16/10] bg-surface2 overflow-hidden border-b border-hair">
                      {s.image ? (
                        <img
                          src={s.image}
                          alt={s.imageAlt ?? sc.name}
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
                        {sc.name}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] md:text-[14px] text-fg2 leading-[1.55] text-pretty">
                        {sc.description}
                      </p>
                      <div className="mt-auto pt-6 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-tight text-fg group-hover:gap-2.5 transition-all">
                          {copy.seeItInAction}
                          <ArrowUpRight
                            size={14}
                            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                          />
                        </span>
                        <span className="text-[11.5px] text-sub font-medium whitespace-nowrap">
                          {sc.price}
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}

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
                    <Sparkles size={26} strokeWidth={1.7} aria-hidden />
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-[20px] md:text-[22px] tracking-tight leading-[1.15]">
                    {copy.askTitle}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] md:text-[14px] text-fg2 leading-[1.55] text-pretty">
                    {copy.askDesc}
                  </p>
                  <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-tight text-fg group-hover:gap-2.5 transition-all">
                    {copy.askCta}
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
