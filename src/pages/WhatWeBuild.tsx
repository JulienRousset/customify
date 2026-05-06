import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, ChefHat, Hammer, Hotel, Sparkles } from 'lucide-react'
import VerticalCTA from '../components/vertical/VerticalCTA'
import VerticalFooter from '../components/vertical/VerticalFooter'

const VERTICALS = [
  {
    slug: 'restaurants',
    name: 'Restaurants',
    icon: ChefHat,
    one: 'Reservations, loyalty, delivery sync, WhatsApp ordering.',
    systems: ['Reservation system', 'Loyalty', 'WhatsApp orders', 'Review automation'],
    accent: '#ff7a59'
  },
  {
    slug: 'spa-wellness',
    name: 'Spa & Wellness',
    icon: Sparkles,
    one: 'Booking, automated reminders, retention loops, gift cards.',
    systems: ['Online booking', 'WhatsApp reminders', 'Loyalty', 'Membership'],
    accent: '#34c759'
  },
  {
    slug: 'hotels',
    name: 'Hotels',
    icon: Hotel,
    one: 'Guest comms, review management, OTA dashboards, internal ops.',
    systems: ['Guest CRM', 'Review automation', 'OTA sync', 'Staff workflows'],
    accent: '#0a84ff'
  },
  {
    slug: 'creators',
    name: 'Creators & Influencers',
    icon: Camera,
    one: 'Content systems, DM automation, sponsorship pipelines, monetization.',
    systems: ['Content engine', 'DM automation', 'Sponsorship CRM', 'Funnels'],
    accent: '#bf5af2'
  },
  {
    slug: 'trades-services',
    name: 'Trades & Services',
    icon: Hammer,
    one: 'Quote requests, lead routing, follow-ups, customer database.',
    systems: ['Quote funnel', 'Lead CRM', 'WhatsApp automation', 'Reviews'],
    accent: '#ff9f0a'
  }
] as const

export default function WhatWeBuild() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="container-xl">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow"
          >
            What we build
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="display-1 text-balance max-w-5xl"
          >
            Different industries. <span className="text-sub">Different software.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 body-lg max-w-2xl text-pretty"
          >
            A restaurant runs nothing like a hotel. A spa nothing like a creator. So we don't ship the same thing twice. Every page below is the actual playbook for that industry, with the tools we've already built and the ones we'd build for you next.
          </motion.p>
        </div>
      </section>

      {/* Vertical grid */}
      <section className="relative pb-24 md:pb-32">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {VERTICALS.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                >
                  <Link
                    to={`/whatwebuild/${v.slug}`}
                    className="card p-7 md:p-8 block group hover:border-fg/30 transition-colors h-full relative overflow-hidden"
                  >
                    {/* Accent glow on hover */}
                    <div
                      className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl"
                      style={{ background: v.accent }}
                      aria-hidden
                    />

                    <div className="relative flex items-start gap-4">
                      <div
                        className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-bg"
                        style={{ background: v.accent }}
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="font-display font-semibold text-[22px] md:text-[24px] tracking-tight">{v.name}</h2>
                          <ArrowUpRight
                            size={18}
                            className="text-sub group-hover:text-fg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
                          />
                        </div>
                        <p className="text-[14px] md:text-[14.5px] text-fg2 mt-1.5 leading-[1.5] text-pretty">{v.one}</p>

                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {v.systems.map((s) => (
                            <span
                              key={s}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-surface2/60 border border-hair text-fg2"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <VerticalCTA
        eyebrow="Doesn't fit a card above?"
        title="Tell us what you run."
        titleAccent="We probably build for it too."
        sub="If your business doesn't sit cleanly in one of those five, even better. That's usually when we build something properly custom."
        ctaPrimary="Book a call"
        whatsappMessage={`Hello Customy,

My business doesn't quite fit your listed verticals. I'd like to discuss a custom system.

Business type:
What I'm trying to fix:
Current tools:`}
      />

      <VerticalFooter />
    </>
  )
}
