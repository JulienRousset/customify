import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView, type MotionValue } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Briefcase, ChefHat, Hotel, Sparkles, Users, ArrowDown, type LucideIcon } from 'lucide-react'
import VerticalCTA from '../components/vertical/VerticalCTA'
import VerticalFooter from '../components/vertical/VerticalFooter'
import { easeApple } from '../components/fx/motion'

interface Vertical {
  slug: string
  name: string
  icon: LucideIcon
  one: string
  systems: string[]
  accent: string
}

const VERTICALS: Vertical[] = [
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
    slug: 'entrepreneurs',
    name: 'Entrepreneurs',
    icon: Users,
    one: 'Personal brand engine, DM automation, deal pipeline, monetization.',
    systems: ['Content engine', 'DM automation', 'Deal pipeline', 'Funnels'],
    accent: '#bf5af2'
  },
  {
    slug: 'agency-services',
    name: 'Agency & Services',
    icon: Briefcase,
    one: 'Inbound funnel, client CRM, discovery, retainer ops.',
    systems: ['Inbound funnel', 'Client CRM', 'Discovery booking', 'Reviews'],
    accent: '#ff9f0a'
  }
]

/* -------------------------------------------------------------------------- */

interface IndustryCardProps {
  vertical: Vertical
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  onInViewChange: (index: number) => void
}

function IndustryCard({ vertical, index, total, scrollYProgress, onInViewChange }: IndustryCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.55, margin: '-20% 0px -20% 0px' })

  useEffect(() => {
    if (inView) onInViewChange(index)
  }, [inView, index, onInViewChange])

  // Compute this card's slice of the parent scroll progress.
  const start = index / total
  const end = (index + 1) / total
  const cardProgress = useTransform(scrollYProgress, [start - 0.04, start + 0.18, end - 0.18, end + 0.04], [0, 1, 1, 0])

  const opacity = useTransform(cardProgress, [0, 0.5, 1], [0.55, 0.92, 1])
  const y = useTransform(cardProgress, [0, 1], [40, 0])
  const scale = useTransform(cardProgress, [0, 1], [0.97, 1])

  const Icon = vertical.icon

  return (
    <div ref={ref} className="min-h-[80vh] flex items-center justify-center">
      <motion.div
        style={{ opacity, y, scale }}
        className="relative w-full max-w-2xl"
      >
        <Link
          to={`/whatwebuild/${vertical.slug}`}
          className="card relative block p-8 md:p-12 text-center group overflow-hidden"
        >
          {/* Accent glow */}
          <motion.div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${vertical.accent}33, transparent 60%)`
            }}
          />

          {/* Icon disc */}
          <div
            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)]"
            style={{ background: vertical.accent }}
          >
            <Icon size={26} strokeWidth={1.7} className="text-white" />
          </div>

          {/* Number */}
          <div className="num-mono text-[10.5px] tracking-[0.2em] uppercase font-semibold text-sub mb-3">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>

          <h2 className="font-display font-semibold text-[30px] md:text-[40px] tracking-tight leading-[1.05] text-balance">
            {vertical.name}
          </h2>

          <p className="mt-5 body-md text-fg2 leading-[1.55] max-w-md mx-auto text-pretty">
            {vertical.one}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-1.5 max-w-md mx-auto">
            {vertical.systems.map((s) => (
              <span
                key={s}
                className="text-[11px] px-3 py-1 rounded-full bg-surface2/70 border border-hair text-fg2"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-fg group-hover:gap-2.5 transition-all">
            See the playbook
            <ArrowUpRight size={15} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */

export default function WhatWeBuild() {
  // Page-level scroll for hero parallax
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 320, 500], [1, 1, 0])
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.96])

  // Stack-section scroll progress for per-card animation
  const stackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: stackProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end']
  })

  // Track which card is currently in focus to drive ambient color + progress dot
  const [activeIndex, setActiveIndex] = useState(0)

  // Smooth animated background tint
  const ambient = useSpring(0, { stiffness: 80, damping: 20, mass: 0.5 })
  useEffect(() => {
    ambient.set(activeIndex)
  }, [activeIndex, ambient])

  return (
    <>
      {/* Ambient color halo that follows the active card */}
      <motion.div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: useTransform(
            ambient,
            VERTICALS.map((_, i) => i),
            VERTICALS.map(
              (v) => `radial-gradient(60% 50% at 50% 30%, ${v.accent}1f, transparent 70%)`
            )
          )
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center pt-28 md:pt-32 pb-12">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="container-xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeApple }}
            className="eyebrow"
          >
            What we build
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: easeApple, delay: 0.05 }}
            className="display-1 text-balance max-w-5xl mx-auto"
          >
            Different industries.{' '}
            <span className="text-sub">Different software.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeApple, delay: 0.15 }}
            className="mt-7 body-lg text-pretty mx-auto max-w-2xl"
          >
            A restaurant runs nothing like a hotel. A spa nothing like a creator. So we don't ship the same thing twice. Five playbooks below, with the tools we've already built and the ones we'd build for you next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-2 text-sub"
          >
            <span className="text-[10.5px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            >
              <ArrowDown size={14} strokeWidth={1.8} />
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      {/* Stacked vertical cards with per-card scroll-bound parallax */}
      <section ref={stackRef} className="relative">
        {/* Sticky right-side progress rail (desktop only) */}
        <div className="hidden lg:flex flex-col gap-4 fixed right-8 xl:right-12 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
          {VERTICALS.map((v, i) => {
            const isActive = activeIndex === i
            return (
              <div key={v.slug} className="flex items-center gap-3 justify-end">
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : 8
                  }}
                  transition={{ duration: 0.3, ease: easeApple }}
                  className="text-[11px] font-semibold tracking-tight text-fg pointer-events-none"
                >
                  {v.name}
                </motion.span>
                <motion.span
                  className="block rounded-full"
                  animate={{
                    width: isActive ? 28 : 6,
                    height: 6,
                    backgroundColor: isActive ? v.accent : 'rgb(var(--color-sub) / 0.35)'
                  }}
                  transition={{ duration: 0.4, ease: easeApple }}
                />
              </div>
            )
          })}
        </div>

        <div className="container-xl py-10 md:py-16">
          {VERTICALS.map((v, i) => (
            <IndustryCard
              key={v.slug}
              vertical={v}
              index={i}
              total={VERTICALS.length}
              scrollYProgress={stackProgress}
              onInViewChange={setActiveIndex}
            />
          ))}
        </div>
      </section>

      <VerticalCTA
        centered
        eyebrow="Doesn't fit a card above?"
        title="Tell us what you run."
        titleAccent="We probably build for it too."
        sub="If your business doesn't sit cleanly in one of those five, even better. That's usually when we build something properly custom."
        ctaPrimary="Book an audit"
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
