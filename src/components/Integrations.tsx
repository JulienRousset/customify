import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Mail,
  CreditCard,
  ShoppingBag,
  Calendar,
  BarChart3,
  Workflow,
  Figma,
  Linkedin,
  Slack,
  Globe,
  Smartphone,
  Music,
  Chrome,
  Zap
} from 'lucide-react'
import { useLang } from '../lang'
import ScrambleText from './fx/ScrambleText'
import MagneticButton from './fx/MagneticButton'

type Tool = { Icon: typeof Instagram; label: string; color: string; category: string }

const allIntegrations: Tool[] = [
  { Icon: Instagram, label: 'Instagram', color: '#E1306C', category: 'Social' },
  { Icon: Music, label: 'TikTok', color: '#000000', category: 'Social' },
  { Icon: Youtube, label: 'YouTube', color: '#FF0000', category: 'Social' },
  { Icon: Facebook, label: 'Meta Ads', color: '#1877F2', category: 'Ads' },
  { Icon: Linkedin, label: 'LinkedIn', color: '#0A66C2', category: 'Ads' },
  { Icon: BarChart3, label: 'Analytics', color: '#F9AB00', category: 'Ads' },
  { Icon: MessageCircle, label: 'WhatsApp', color: '#25D366', category: 'Messaging' },
  { Icon: Mail, label: 'Gmail', color: '#EA4335', category: 'Messaging' },
  { Icon: Slack, label: 'Slack', color: '#611F69', category: 'Messaging' },
  { Icon: CreditCard, label: 'Stripe', color: '#635BFF', category: 'Commerce' },
  { Icon: ShoppingBag, label: 'Shopify', color: '#96BF48', category: 'Commerce' },
  { Icon: Calendar, label: 'Calendly', color: '#191970', category: 'Commerce' },
  { Icon: Workflow, label: 'Zapier', color: '#FF4A00', category: 'Ops' },
  { Icon: Zap, label: 'Automations', color: '#D4A05C', category: 'Ops' },
  { Icon: Figma, label: 'Figma', color: '#F24E1E', category: 'Ops' },
  { Icon: Globe, label: 'Websites', color: '#191970', category: 'Build' },
  { Icon: Smartphone, label: 'Mobile', color: '#1d1d1f', category: 'Build' },
  { Icon: Chrome, label: 'Chrome', color: '#4285F4', category: 'Build' }
]

const categories = ['Social', 'Ads', 'Messaging', 'Commerce', 'Ops', 'Build']

const rings = [
  { items: allIntegrations.slice(0, 6), radius: 28, duration: 28, direction: 1 as const },
  { items: allIntegrations.slice(6, 12), radius: 44, duration: 44, direction: -1 as const },
  { items: allIntegrations.slice(12, 18), radius: 60, duration: 60, direction: 1 as const }
]

function OrbitRing({
  items,
  radius,
  duration,
  direction,
  paused
}: {
  items: Tool[]
  radius: number
  duration: number
  direction: 1 | -1
  paused: boolean
}) {
  const animName = direction === 1 ? 'orbit' : 'orbit-rev'
  return (
    <div
      className="absolute inset-0 rounded-full border border-hair2/60"
      style={{
        margin: `${50 - radius}%`,
        animation: `${animName} ${duration}s linear infinite`,
        animationPlayState: paused ? 'paused' : 'running'
      }}
    >
      {items.map((it, i) => {
        const angle = (360 / items.length) * i
        return (
          <div
            key={`${it.label}-${i}`}
            className="absolute top-1/2 left-1/2 w-0 h-0"
            style={{ transform: `rotate(${angle}deg) translateY(-50%)` }}
          >
            <div
              className="absolute"
              style={{
                transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                animation: `${direction === 1 ? 'orbit-rev' : 'orbit'} ${duration}s linear infinite`,
                animationPlayState: paused ? 'paused' : 'running'
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl2 bg-bg border border-hair shadow-soft"
                style={{ width: 40, height: 40 }}
                title={it.label}
              >
                <it.Icon size={16} style={{ color: it.color }} strokeWidth={1.8} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Integrations() {
  const { t } = useLang()
  const i = t.integrations
  const [paused, setPaused] = useState(false)
  const [activeCat, setActiveCat] = useState<string | null>(null)

  return (
    <section id="integrations" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-xl">
        <div className="relative rounded-xl4 bg-bg border border-hair overflow-hidden shadow-soft">
          <span aria-hidden className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          <div className="p-8 md:p-14">
            <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="eyebrow">
                  {i.eyebrow} <span className="text-sub ml-2">· {allIntegrations.length} live</span>
                </div>
                <h2 className="font-display text-giga tracking-tightest text-balance">
                  <ScrambleText text={i.h2a} className="block" />
                  <span className="serif-italic text-accent block mt-1">
                    <ScrambleText text={i.h2b} />
                  </span>
                </h2>
                <p className="mt-5 body-md max-w-xl">{i.sub}</p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <MagneticButton
                    href="#contact"
                    strength={12}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-accent text-white px-7 py-4 text-[15px] font-medium relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-accentDark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 inline-flex items-center gap-2.5">
                      {i.ctaPrimary} <ArrowRight size={16} />
                    </span>
                  </MagneticButton>
                  <a href="#services" className="inline-flex items-center gap-2 text-[14.5px] font-medium border-b border-hair2 pb-1 hover:border-accent transition-colors">
                    {i.ctaSecondary}
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-sub font-medium">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inset-0 rounded-full bg-mint animate-pulse-ring" />
                    <span className="absolute inset-0 rounded-full bg-mint" />
                  </span>
                  {paused ? 'Paused · hover off' : 'All channels live'}
                </div>
              </div>

              <div
                className="col-span-12 lg:col-span-5 relative aspect-square max-w-[440px] w-full justify-self-center"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(25,25,112,0.18), transparent 55%)',
                    filter: 'blur(40px)'
                  }}
                />

                {rings.map((r, idx) => (
                  <OrbitRing
                    key={idx}
                    items={r.items}
                    radius={r.radius}
                    duration={r.duration}
                    direction={r.direction}
                    paused={paused}
                  />
                ))}

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                >
                  <div className="relative flex items-center justify-center">
                    <span aria-hidden className="absolute w-32 h-32 rounded-full bg-accent/10 animate-pulse-ring" />
                    <span aria-hidden className="absolute w-32 h-32 rounded-full bg-accent/20 animate-pulse-ring" style={{ animationDelay: '0.6s' }} />
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent text-white flex items-center justify-center shadow-lift border-4 border-bg">
                      <span className="font-display font-semibold text-[18px] tracking-tight">CFY<span className="serif-italic">.</span></span>
                    </div>
                  </div>
                </motion.div>

                <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
                  <circle cx="50%" cy="50%" r="22%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" className="text-sub" />
                  <circle cx="50%" cy="50%" r="38%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" className="text-sub" />
                  <circle cx="50%" cy="50%" r="54%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" className="text-sub" />
                </svg>
              </div>
            </div>

            <div className="mt-12 md:mt-14 pt-8 md:pt-10 border-t border-hair">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                <div className="text-[11px] uppercase tracking-[0.28em] text-sub font-medium inline-flex items-center gap-3">
                  <span className="w-8 h-px bg-sub/40" />
                  Every tool, one pipeline
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveCat(null)}
                    className={`text-[11px] uppercase tracking-[0.2em] font-medium px-3 py-1.5 rounded-full transition-colors ${
                      activeCat === null ? 'bg-accent text-white' : 'bg-bg border border-hair text-sub hover:border-accent/40'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCat(cat)}
                      className={`text-[11px] uppercase tracking-[0.2em] font-medium px-3 py-1.5 rounded-full transition-colors ${
                        activeCat === cat ? 'bg-accent text-white' : 'bg-bg border border-hair text-sub hover:border-accent/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {allIntegrations.map((it, idx) => {
                  const dim = activeCat !== null && it.category !== activeCat
                  return (
                    <motion.div
                      key={it.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: idx * 0.025, ease: [0.2, 0.8, 0.2, 1] }}
                      animate={{ opacity: dim ? 0.28 : 1 }}
                      className="group flex items-center gap-3 rounded-xl2 bg-bg border border-hair hover:border-accent/40 px-3.5 py-3 transition-colors"
                      data-cursor="link"
                    >
                      <span
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${it.color}12`, color: it.color }}
                      >
                        <it.Icon size={16} strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[13px] font-medium text-fg truncate leading-tight">{it.label}</div>
                        <div className="text-[10.5px] uppercase tracking-[0.18em] text-sub font-medium mt-0.5 leading-tight">{it.category}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
