import {
  PhoneCall,
  FileText,
  Users,
  Star,
  CalendarDays,
  Bell
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

const PROBLEMS = [
  'Quote requests come by phone, WhatsApp, Facebook. They slip through.',
  'No follow-up on quotes. Half the deals die in silence.',
  'Zero customer database. The same person contacts you twice and you don\'t know.',
  'Reviews barely exist on Google. Happy customers never get asked.',
  'Scheduling done in your head and a paper notebook',
  'Insurance, certificates, photos sent twice per job, manually',
  'Online presence is a Facebook page from 2019'
]

const SOLUTIONS: Solution[] = [
  {
    title: 'Quote request funnel',
    body: 'A short form on your site and a WhatsApp shortcut. Every request hits the same inbox with the customer\'s name, address, photos, and the job tagged.',
    icon: FileText
  },
  {
    title: 'Lead CRM',
    body: 'Every prospect tracked: new, quoted, scheduled, done, follow-up. Auto-reminders so you never lose a deal to silence.',
    icon: Users
  },
  {
    title: 'WhatsApp automation',
    body: 'Auto-reply when you\'re on a job. Quote ready notifications. Day-before appointment reminders. Done.',
    icon: PhoneCall
  },
  {
    title: 'Booking & scheduling',
    body: 'Customers see your real availability and book a slot. Auto-blocked for travel time. No more phone tag.',
    icon: CalendarDays
  },
  {
    title: 'Review system',
    body: 'After every completed job, a one-tap Google review request. Your rating climbs. New leads find you.',
    icon: Star
  },
  {
    title: 'Customer follow-up',
    body: 'Annual service reminders, seasonal offers, "is everything still working?" check-ins. Past customers become repeat customers.',
    icon: Bell
  }
]

export default function TradesServices() {
  return (
    <>
      <VerticalHero
        industry="Trades & Services"
        eyebrow="Trades, contractors & local services"
        title="Quote, schedule, get paid."
        titleAccent="Without losing your evenings."
        sub="A simple system for plumbers, electricians, builders, cleaners and any local service business. Leads stop slipping through DMs. Quotes get followed up. Reviews actually happen."
        ctaPrimary="Build mine"
        whatsappMessage={`Hello Customy,

I run a local service business and I'd like to improve my lead management and operations.

Business type:
Main challenge:
Current systems:`}
      />

      <ProblemsList
        eyebrow="Where the money goes"
        title="Where work, and revenue,"
        titleAccent="quietly leaks."
        problems={PROBLEMS}
      />

      <SolutionsGrid
        eyebrow="What we build"
        title="The local-business stack."
        titleAccent="One shop or fifteen."
        sub="Start with the lead funnel. Add scheduling and reviews next. Customer database underneath, always."
        solutions={SOLUTIONS}
      />

      {/* WhatsApp lead capture mockup */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <div className="container-xl">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow">Lead capture, on autopilot</p>
            <h2 className="display-2 text-balance mt-3">A new lead at 9pm? Already in the system.</h2>
            <p className="mt-5 body-lg text-pretty max-w-2xl">
              The WhatsApp auto-reply gathers what you need: name, address, job, photos. Then it drops the lead in your CRM. You see it the moment you open your phone tomorrow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <WhatsAppMockup
              contactName="ProPlomberie · Bali"
              contactRole="auto-reply on after-hours"
              messages={[
                { from: 'them', text: 'Hi, I have a leak under the kitchen sink. Can someone come tomorrow?', time: '21:14' },
                {
                  from: 'bot',
                  text: 'Hi! 👋 We\'ve received your request and we\'ll be back in touch first thing tomorrow morning.\n\nTo get you a fast quote, can you share:\n• Address (or area)\n• 1–2 photos of the leak\n• Best time to come tomorrow',
                  time: '21:14'
                },
                { from: 'them', text: 'Jl. Petitenget 14, photos coming. Can do morning before 11.', time: '21:16' },
                { from: 'them', text: '📷 [photo]', time: '21:16' },
                {
                  from: 'bot',
                  text: 'Thanks 🙏 Logged. You\'ll get a confirmed slot and quote by 9am tomorrow. Reference: #4821.\n\nIf this becomes urgent overnight, call us on +62 857-xxx.',
                  time: '21:17'
                }
              ]}
            />

            <BrowserMockup url="dashboard.customy.agency/services" className="self-stretch">
              <KpiGrid
                tiles={[
                  { label: 'New leads · 7d', value: '23', delta: '+9 vs. last week', positive: true },
                  { label: 'Quotes sent', value: '17', delta: '74% reply rate', positive: true },
                  { label: 'Booked', value: '11', delta: '$4.2K pipeline', positive: true },
                  { label: 'Reviews · 7d', value: '5', delta: 'avg 4.9★', positive: true }
                ]}
              />
              <div className="mt-4">
                <PipelineList
                  title="Today's pipeline"
                  rows={[
                    { label: 'Sophie · kitchen leak', meta: 'Jl. Petitenget 14 · 09:30', status: 'New', statusColor: 'orange' },
                    { label: 'Marc · boiler service', meta: 'Canggu · 11:00', status: 'Quoted', statusColor: 'blue' },
                    { label: 'Anna · bathroom reno', meta: 'Seminyak · 14:00', status: 'Booked', statusColor: 'green' },
                    { label: 'Tom · annual check', meta: 'Auto-reminder sent', status: 'Auto', statusColor: 'gray' }
                  ]}
                />
              </div>
            </BrowserMockup>
          </div>
        </div>
      </section>

      {/* Process / how it works */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <div className="container-xl">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow">From DM to done</p>
            <h2 className="display-2 text-balance mt-3">One job, end to end.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: '01',
                title: 'Lead arrives',
                body: 'WhatsApp, web form, Facebook, or phone. All funnel into one inbox. Auto-reply kicks in if you\'re on a job. Customer gives you what you need to quote.'
              },
              {
                step: '02',
                title: 'Quote → schedule',
                body: 'You send a quote in 30 seconds from your phone. Customer one-taps to accept and pick a slot. The job lands in your calendar with travel time blocked.'
              },
              {
                step: '03',
                title: 'Done → review → repeat',
                body: 'Mark the job done. Auto-message asks for a Google review the same day. 12 months later, a friendly check-in goes out. Past customer becomes repeat customer.'
              }
            ].map((s) => (
              <div key={s.step} className="card p-6 md:p-7">
                <div className="font-display font-semibold text-[34px] tracking-tight text-sub/40 leading-none">{s.step}</div>
                <h3 className="font-display font-semibold text-[18px] md:text-[19px] tracking-tight mt-4">{s.title}</h3>
                <p className="text-[13.5px] md:text-[14px] text-fg2 leading-[1.55] mt-2 text-pretty">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VerticalCTA
        title="Get the system. Keep the trade."
        sub="Short call. Tell us how leads come in today and how many you think you've lost. We'll tell you what we'd fix first."
        ctaPrimary="Book a call"
        whatsappMessage={`Hello Customy,

I run a local service business and I'd like to improve my lead management and operations.

Business type:
Main challenge:
Current systems:`}
      />

      <VerticalFooter />
    </>
  )
}
