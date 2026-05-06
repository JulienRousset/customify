import { motion } from 'framer-motion'
import {
  CalendarCheck,
  Bell,
  Heart,
  Gift,
  UserCircle2,
  Repeat
} from 'lucide-react'
import VerticalHero from '../../components/vertical/VerticalHero'
import ProblemsList from '../../components/vertical/ProblemsList'
import SolutionsGrid, { type Solution } from '../../components/vertical/SolutionsGrid'
import VerticalCTA from '../../components/vertical/VerticalCTA'
import VerticalFooter from '../../components/vertical/VerticalFooter'
import {
  BrowserMockup,
  WhatsAppMockup,
  KpiGrid,
  PipelineList
} from '../../components/vertical/Mockups'
import ScrollReveal from '../../components/vertical/ScrollReveal'

const PROBLEMS = [
  'Missed appointments and silent no-shows',
  'No follow-up after a treatment, no reason to come back',
  'Booking by DM, by phone, by paper. Three sources of truth.',
  'Loyalty barely exists, gift cards are messy',
  'Slow communication when staff is mid-treatment',
  'No automated reminders, manual SMS the night before',
  'Customer history scattered, no skin/treatment record'
]

const SOLUTIONS: Solution[] = [
  {
    title: 'Online booking system',
    body: 'A clean booking page that knows your therapists, treatments, durations and rooms. Customers self-book; you confirm or it auto-confirms.',
    icon: CalendarCheck
  },
  {
    title: 'WhatsApp reminders',
    body: '24h and 2h before. Automated, in your tone. Customer can confirm, reschedule or cancel without calling.',
    icon: Bell
  },
  {
    title: 'Loyalty & memberships',
    body: 'Visit punch-cards, monthly memberships, gift cards. All tied to one customer record and one balance.',
    icon: Heart
  },
  {
    title: 'Gift card system',
    body: 'Sell gift cards online, the customer prints or sends digitally, redemption is one tap at the front desk.',
    icon: Gift
  },
  {
    title: 'Customer profile & history',
    body: 'Treatment history, allergies, preferences, last therapist. Surfaced the moment they walk in.',
    icon: UserCircle2
  },
  {
    title: 'Retention automations',
    body: '"It\'s been 6 weeks since your last facial." Sent automatically with a one-tap re-book link.',
    icon: Repeat
  }
]

export default function SpaWellness() {
  return (
    <>
      <VerticalHero
        industry="Spa & Wellness"
        eyebrow="Spa & wellness"
        title="Fewer no-shows,"
        titleAccent="more regulars."
        sub="Bookings, reminders, loyalty and gift cards. All wired to one customer record. Built for the way a spa actually fills its week, not how a generic SaaS thinks it should."
        ctaPrimary="Build mine"
        whatsappMessage={`Hello Customy,

I run a spa/wellness business and I'd like to improve my operations and customer systems.

Business name:
Main challenge:
Current booking system:`}
      />

      <ProblemsList
        eyebrow="What's leaking"
        title="Seven things"
        titleAccent="eating your week."
        problems={PROBLEMS}
      />

      {/* Featured proof: Inka */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow">Real client work</p>
            <h2 className="display-2 text-balance mt-3">Built and running.</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-12 md:mt-14 max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-sub bg-surface2/60 border border-hair rounded-full px-3 py-1">
              Case study · Wellness studio · Bali
            </span>
            <h3 className="font-display font-semibold text-[28px] md:text-[34px] tracking-tight mt-5 leading-[1.1]">
              Inka
            </h3>
            <p className="text-fg2 mt-4 leading-[1.6] text-pretty max-w-2xl mx-auto">
              A multi-treatment wellness studio tracking everything in spreadsheets. Bookings here, retention there, customer history nowhere. We replaced the patchwork with one analytics dashboard pulling bookings, repeat visits and program performance into a single view.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-fg2 max-w-xl mx-auto text-left">
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-fg mt-2" />
                <span>One dashboard for treatments, members, retention, top therapists</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-fg mt-2" />
                <span>Visibility into which programs convert one-off guests into long-term members</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-fg mt-2" />
                <span>Weekly summary report shared with the founder by email</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-12 md:mt-14 max-w-5xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden border border-hair shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
              <img
                src="/examples/dashboard_tracking.JPG"
                alt="Custom analytics dashboard built for Inka wellness studio"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="mt-3 text-[11.5px] text-sub text-center">
              Real screenshot. Analytics dashboard, anonymized.
            </div>
          </motion.div>
        </ScrollReveal>
      </section>

      <SolutionsGrid
        eyebrow="What we build"
        title="The wellness stack."
        titleAccent="Modular, never bloated."
        sub="Start with bookings and reminders. Add loyalty, memberships and retention as you grow. Everything tied to the same customer profile."
        solutions={SOLUTIONS}
      />

      {/* Booking + reminder mockup */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
            <p className="eyebrow">How it feels to the customer</p>
            <h2 className="display-2 text-balance mt-3">Two taps to book. One tap to confirm.</h2>
            <p className="mt-5 body-lg text-pretty max-w-2xl mx-auto">
              The booking page lives at your domain. The reminder lands in WhatsApp the night before. No app to download.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <BrowserMockup url="book.spaname.com">
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-sub font-semibold">Step 2 of 3</div>
                  <h3 className="font-display font-semibold text-[18px] tracking-tight mt-1">Pick a therapist</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['Maya', 'Putu', 'Anya'].map((name, i) => (
                    <div
                      key={name}
                      className={`rounded-xl p-3 text-center border ${
                        i === 1 ? 'border-fg bg-fg text-bg' : 'border-hair bg-surface2/40'
                      }`}
                    >
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-[13px] font-semibold mb-1.5 ${
                        i === 1 ? 'bg-bg text-fg' : 'bg-fg text-bg'
                      }`}>
                        {name.slice(0, 1)}
                      </div>
                      <div className="text-[12px] font-medium">{name}</div>
                      <div className={`text-[10px] mt-0.5 ${i === 1 ? 'text-bg/60' : 'text-sub'}`}>
                        {['Available 14:00', 'Available 13:00', 'Booked'][i]}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-sub font-semibold mb-2">Treatment</div>
                  <div className="space-y-1.5">
                    {[
                      { t: 'Signature massage · 60 min', p: '$45', selected: true },
                      { t: 'Hot stone massage · 90 min', p: '$70', selected: false },
                      { t: 'Facial + scalp · 75 min', p: '$60', selected: false }
                    ].map((row, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-[13px] ${
                          row.selected ? 'border-fg bg-fg/[0.04]' : 'border-hair'
                        }`}
                      >
                        <span className={row.selected ? 'font-medium' : 'text-fg2'}>{row.t}</span>
                        <span className="font-semibold">{row.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-fg text-bg rounded-full py-3 text-[14px] font-semibold mt-2">
                  Continue · 13:00 with Putu
                </button>
              </div>
            </BrowserMockup>

            <WhatsAppMockup
              contactName="Spa Reminders"
              contactRole="auto-reply on"
              messages={[
                {
                  from: 'bot',
                  text: 'Hi Sophie 🌿\n\nQuick reminder: facial booked tomorrow at 13:00 with Putu (75 min).\n\nReply CONFIRM, MOVE or CANCEL.',
                  time: '19:00'
                },
                { from: 'them', text: 'CONFIRM ✨', time: '19:02' },
                {
                  from: 'bot',
                  text: 'Perfect. We\'ll see you tomorrow at 13:00.\n\nThe spa is on the second floor of Jl. Petitenget 88. Free parking on the side.',
                  time: '19:02'
                },
                {
                  from: 'bot',
                  text: '⏰ Today at 11:00 →\n\nYour facial is in 2h. Need a 15-min later slot? Reply LATER.',
                  time: '11:00'
                }
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Operations dashboard */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow">The owner's view</p>
            <h2 className="display-2 text-balance mt-3">A calmer dashboard for a calmer business.</h2>
          </div>

          <BrowserMockup url="dashboard.customy.agency/spa" className="max-w-5xl mx-auto">
            <KpiGrid
              tiles={[
                { label: 'Today bookings', value: '14', delta: '3 vs. yesterday', positive: true },
                { label: 'Filled capacity', value: '78%', delta: '6 pts vs. last Tue', positive: true },
                { label: 'Active members', value: '46', delta: '4 new this month', positive: true },
                { label: 'No-show rate', value: '2%', delta: 'down from 11%', positive: true }
              ]}
            />
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <PipelineList
                title="Today · Putu"
                rows={[
                  { label: 'Sophie · Facial 75 min', meta: '13:00 → 14:15', status: 'In room', statusColor: 'green' },
                  { label: 'Anna · Massage 60 min', meta: '14:30 → 15:30', status: 'Confirmed', statusColor: 'green' },
                  { label: 'Lukas · Hot stone 90 min', meta: '16:00 → 17:30', status: 'Confirmed', statusColor: 'green' }
                ]}
              />
              <PipelineList
                title="Reach out this week"
                rows={[
                  { label: 'Maya · last visit 6 weeks ago', meta: 'Auto-message scheduled', status: 'Today', statusColor: 'blue' },
                  { label: 'Tom · membership renews in 5d', meta: 'Reminder queued', status: 'Auto', statusColor: 'blue' },
                  { label: 'Lara · birthday Friday', meta: 'Gift offer ready', status: 'Auto', statusColor: 'blue' }
                ]}
              />
            </div>
          </BrowserMockup>
        </ScrollReveal>
      </section>

      <VerticalCTA
        title="Want one for your spa?"
        sub="Short call. Show us how bookings come in today and where customers slip between visits. We'll tell you what we'd build first."
        ctaPrimary="Book an audit"
        whatsappMessage={`Hello Customy,

I run a spa/wellness business and I'd like to improve my operations and customer systems.

Business name:
Main challenge:
Current booking system:`}
      />

      <VerticalFooter />
    </>
  )
}
