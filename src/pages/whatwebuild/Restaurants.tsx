import { motion } from 'framer-motion'
import {
  Share2,
  MessageCircle,
  QrCode,
  CalendarDays,
  Image as ImageIcon,
  Users,
  RefreshCw,
  BarChart3,
  Star
} from 'lucide-react'
import VerticalHero from '../../components/vertical/VerticalHero'
import ProblemsList from '../../components/vertical/ProblemsList'
import SolutionsGrid, { type Solution } from '../../components/vertical/SolutionsGrid'
import VerticalCTA from '../../components/vertical/VerticalCTA'
import VerticalFooter from '../../components/vertical/VerticalFooter'
import { staggerItem, staggerParent, viewportOnce, easeApple } from '../../components/fx/motion'

const PROBLEMS = [
  'You post on Facebook, then post the same thing on Instagram, by hand.',
  'Comments and DMs live in three different inboxes.',
  'No real database of customers. No way to reach them again.',
  'Paper loyalty cards. Half lost in tote bags.',
  'WhatsApp grows when you remember to invite people.',
  'No clue which posts move anything.',
  'A 5-star review showed up Tuesday. You replied Saturday.',
  'Every promo is written from scratch by the owner.'
]

interface Pillar {
  eyebrow: string
  title: string
  sub: string
  icon: typeof Share2
  bullets: string[]
  soon?: string
}

const PILLARS: Pillar[] = [
  {
    eyebrow: 'Pillar 01',
    title: 'Social',
    sub: 'Facebook and Instagram, run from one screen.',
    icon: Share2,
    bullets: [
      'Live stats for both pages: followers, reach, interactions',
      'Every post in one list, with likes, comments, shares',
      'Comment moderation in a single inbox',
      'Cross-post stories or feed posts on FB + IG at once',
      'Editorial calendar to schedule the whole week'
    ]
  },
  {
    eyebrow: 'Pillar 02',
    title: 'WhatsApp',
    sub: 'Turn casual visitors into a community you own.',
    icon: MessageCircle,
    bullets: [
      'WhatsApp group or channel as a newsletter',
      'Acquisition funnel for WhatsApp + email signups',
      'Send updates, drops, reminders to the whole list',
      'See who joined this week and where from'
    ]
  },
  {
    eyebrow: 'Pillar 03',
    title: 'Loyalty',
    sub: 'Reasons to come back. Automated, trackable.',
    icon: QrCode,
    bullets: [
      'Digital loyalty card with QR code',
      'QR scanner at the counter validates visits in one tap',
      'Rewards trigger automatically'
    ],
    soon: 'Gojek + Grab menu sync. Coming next.'
  }
]

const SOLUTIONS: Solution[] = [
  {
    title: 'Real-time dashboard',
    body: 'Subscribers, social performance, WhatsApp activity, content calendar. All on one screen.',
    icon: BarChart3
  },
  {
    title: 'Editorial calendar',
    body: 'Schedule posts and stories across Facebook and Instagram from a single calendar.',
    icon: CalendarDays
  },
  {
    title: 'Comments inbox',
    body: 'Every comment from every post on every platform in one inbox. Reply without leaving.',
    icon: MessageCircle
  },
  {
    title: 'Customer database',
    body: 'One record per subscriber: WhatsApp, email, visits, tags. Yours, not Meta\'s.',
    icon: Users
  },
  {
    title: 'Media library',
    body: 'Posts, stories, menu visuals kept in one place. Reused across channels without re-uploading.',
    icon: ImageIcon
  },
  {
    title: 'Auto-sync',
    body: 'Stats and posts pulled from Facebook and Instagram automatically. No manual refresh.',
    icon: RefreshCw
  },
  {
    title: 'Reviews handler',
    body: 'A new review hits the dashboard the moment it lands on Google. Reply before it gets cold.',
    icon: Star
  },
  {
    title: 'Loyalty + QR',
    body: 'Digital cards, scanned at the counter. Visits and rewards tracked without spreadsheets.',
    icon: QrCode
  },
  {
    title: 'Delivery sync',
    body: 'Menu management on Gojek and Grab from the same dashboard. No double entry.',
    icon: RefreshCw,
    badge: 'Soon'
  }
]

const COCOTTE_GRID = [
  { src: '/restaurant/mycocotte/3.png', alt: 'Réseaux Sociaux: Facebook and Instagram performance', label: 'Réseaux Sociaux' },
  { src: '/restaurant/mycocotte/4.png', alt: 'Publications view: every post with engagement metrics', label: 'Publications' },
  { src: '/restaurant/mycocotte/2.png', alt: 'Abonnés: subscriber CRM', label: 'Abonnés' },
  { src: '/restaurant/mycocotte/7.png', alt: 'Médiathèque: central media library', label: 'Médiathèque' },
  { src: '/restaurant/mycocotte/6.png', alt: 'Synchronisation settings', label: 'Synchronisation' }
]

export default function Restaurants() {
  return (
    <>
      <VerticalHero
        industry="Restaurants"
        eyebrow="Restaurants"
        title="Your restaurant doesn't need a SaaS."
        titleAccent="It needs its own software."
        sub="Facebook, Instagram, WhatsApp, loyalty cards, customer database. All built into one custom backoffice, shaped around the way you run. We did it for My Cocotte. Yours could be next."
        ctaPrimary="Build mine"
        whatsappMessage={`Hello Customy,

I run a restaurant and I'd like a custom backoffice like the one you built for My Cocotte.

Business name:
Number of locations:
Where it hurts most:`}
      />

      <ProblemsList
        eyebrow="Where the day goes"
        title="The eight things"
        titleAccent="quietly eating your week."
        problems={PROBLEMS}
      />

      {/* Featured client: My Cocotte */}
      <section className="relative py-24 md:py-32 border-t border-hair">
        <div className="container-xl">
          <motion.div
            variants={staggerParent(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mb-14 md:mb-20"
          >
            <motion.p variants={staggerItem} className="eyebrow">My Cocotte · case study</motion.p>
            <motion.h2 variants={staggerItem} className="display-2 text-balance">
              A French place in Bali. <span className="text-sub">Running on its own software.</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-5 body-lg max-w-2xl text-pretty">
              The owner was juggling Facebook, Instagram, WhatsApp groups and a paper loyalty card. Losing time everywhere. We rebuilt the whole back-of-house as a single tool. Live, in production, every day.
            </motion.p>
          </motion.div>

          {/* Hero shot: main dashboard */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: easeApple }}
            className="relative"
          >
            <div className="absolute -inset-x-6 -top-6 -bottom-12 -z-10 rounded-[40px] bg-gradient-to-b from-fg/[0.03] to-transparent pointer-events-none" aria-hidden />
            <div className="rounded-[24px] overflow-hidden border border-hair shadow-[0_60px_120px_-40px_rgba(0,0,0,0.5)]">
              <img
                src="/restaurant/mycocotte/5.png"
                alt="My Cocotte main dashboard"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 text-[12px] text-sub text-center">
              Main dashboard · live in production
            </figcaption>
          </motion.figure>

          {/* Five-up gallery */}
          <motion.div
            variants={staggerParent(0.05, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          >
            {COCOTTE_GRID.map((g) => (
              <motion.figure
                key={g.src}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: easeApple }}
                className="group"
              >
                <div className="relative rounded-[16px] overflow-hidden border border-hair shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)] aspect-[16/10] bg-bg">
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="block w-full h-full object-cover object-left-top group-hover:scale-[1.015] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                </div>
                <figcaption className="mt-2.5 text-[11.5px] text-sub uppercase tracking-[0.14em] font-semibold">
                  {g.label}
                </figcaption>
              </motion.figure>
            ))}

            {/* Modules-built recap takes the 6th cell */}
            <motion.div
              variants={staggerItem}
              className="card p-5 md:p-6 flex flex-col justify-between aspect-[16/10] lg:aspect-auto"
            >
              <div>
                <div className="text-[11.5px] text-sub uppercase tracking-[0.14em] font-semibold">What we shipped</div>
                <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[12.5px] text-fg2 leading-[1.55]">
                  {[
                    'KPI dashboard',
                    'FB + IG analytics',
                    'Publications + metrics',
                    'Comments inbox',
                    'WhatsApp newsletter',
                    'Media library',
                    'Acquisition funnel',
                    'Loyalty + QR',
                    'Auto-sync',
                    'Roles & permissions'
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-1.5">
                      <span className="shrink-0 w-1 h-1 rounded-full bg-fg/60 mt-[7px]" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[10.5px] text-sub uppercase tracking-[0.16em] font-semibold mt-4">
                10 modules · still adding
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative py-24 md:py-32 border-t border-hair">
        <div className="container-xl">
          <motion.div
            variants={staggerParent(0.08, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mb-14 md:mb-20"
          >
            <motion.p variants={staggerItem} className="eyebrow">The platform, in three pillars</motion.p>
            <motion.h2 variants={staggerItem} className="display-2 text-balance">
              Three jobs. <span className="text-sub">One tool.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerParent(0.07, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-3 gap-5"
          >
            {PILLARS.map((p) => {
              const Icon = p.icon
              return (
                <motion.article
                  key={p.title}
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3, ease: easeApple }}
                  className="card p-7 md:p-8 flex flex-col gap-5 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-full bg-surface2 border border-hair flex items-center justify-center">
                      <Icon size={18} strokeWidth={1.7} className="text-fg/75" />
                    </div>
                    <div className="num-mono text-[10.5px] tracking-[0.16em] font-semibold text-sub">
                      {p.eyebrow}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-[22px] md:text-[24px] tracking-tight">{p.title}</h3>
                    <p className="text-[13.5px] text-fg2 leading-[1.55] mt-1.5">{p.sub}</p>
                  </div>

                  <ul className="space-y-2 text-[13.5px] text-fg2 mt-1">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span aria-hidden className="shrink-0 w-1 h-1 rounded-full bg-fg mt-[9px]" />
                        <span className="leading-[1.5]">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {p.soon && (
                    <div className="mt-auto pt-4 border-t border-hair flex items-center gap-2 text-[11.5px] text-sub">
                      <RefreshCw size={11} />
                      <span>{p.soon}</span>
                    </div>
                  )}
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Full module catalog */}
      <SolutionsGrid
        eyebrow="Module catalog"
        title="Everything we can wire in."
        titleAccent="Pick what fits this year."
        sub="The platform is modular. Start with the pillar you need. Add the rest as you grow. Every module connects to the same customer record."
        solutions={SOLUTIONS}
      />

      <VerticalCTA
        title="Want one of these for your place?"
        sub="Quick call. We look at how you handle social, customers and loyalty today, and what we'd build first."
        ctaPrimary="Book a call"
        whatsappMessage={`Hello Customy,

I run a restaurant and I'd like a custom backoffice like the one you built for My Cocotte.

Business name:
Number of locations:
Where it hurts most:`}
      />

      <VerticalFooter />
    </>
  )
}
