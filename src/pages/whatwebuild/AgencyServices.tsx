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
import ScrollReveal from '../../components/vertical/ScrollReveal'

const PROBLEMS = [
  'Inbound leads scattered across email, WhatsApp, Instagram. They slip through.',
  'No follow-up on proposals. Half the deals die in silence.',
  'No central client database. Past clients lost in old Drive folders.',
  'Reviews and case studies barely captured. Hard wins, no proof.',
  'Project ops in notebooks and group chats. Nobody sees the same source of truth.',
  'Onboarding rewritten from scratch every time. Same docs, sent twice.',
  'Retainers go quiet. Renewals missed because nobody owns the check-in.'
]

const SOLUTIONS: Solution[] = [
  {
    title: 'Inbound funnel',
    body: 'A clean form on your site, a WhatsApp shortcut, an inbox-routing email. Every lead lands with the right tag and the right project type.',
    icon: FileText
  },
  {
    title: 'Client CRM',
    body: 'Every prospect and client tracked: cold, qualified, proposal sent, signed, in-delivery, retainer. Auto-reminders so deals never go silent.',
    icon: Users
  },
  {
    title: 'WhatsApp automation',
    body: 'Auto-reply for first-touch. Proposal-ready notifications. Day-before kick-off reminders. Done.',
    icon: PhoneCall
  },
  {
    title: 'Discovery & scheduling',
    body: 'Clients see your real availability and self-book a discovery call. Auto-blocked for prep time. No more email ping-pong.',
    icon: CalendarDays
  },
  {
    title: 'Review & case-study system',
    body: 'After every shipped project, a one-tap testimonial request. We turn the best ones into case studies on your site automatically.',
    icon: Star
  },
  {
    title: 'Retainer & renewal ops',
    body: 'Monthly check-ins, quarterly retros, renewal alerts. Nothing slips through because someone forgot to look at the calendar.',
    icon: Bell
  }
]

export default function AgencyServices() {
  return (
    <>
      <VerticalHero
        industry="Agency & Services"
        eyebrow="Agencies, consultants & service providers"
        title="Sell the work, ship the work,"
        titleAccent="without dropping the ball."
        sub="A clean system for design studios, dev shops, marketing agencies and consultants. Leads stop slipping. Proposals get followed up. Retainers don't quietly churn. Project ops live in one place."
        ctaPrimary="Build mine"
        whatsappMessage={`Hello Customy,

I run an agency / service business and I'd like to improve my lead and client ops.

Type of work:
Team size:
Where it hurts most:`}
      />

      <ProblemsList
        eyebrow="Where margin goes"
        title="Where wins, and clients,"
        titleAccent="quietly leak."
        problems={PROBLEMS}
      />

      <SolutionsGrid
        eyebrow="What we build"
        title="The agency stack."
        titleAccent="Solo or 20 people."
        sub="Start with the inbound funnel and CRM. Add scheduling, case-study capture and retainer ops as you grow. Client database underneath, always."
        solutions={SOLUTIONS}
      />

      {/* WhatsApp inbound lead mockup */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow">Inbound capture, on autopilot</p>
            <h2 className="display-2 text-balance mt-3">A new lead at 9pm? Qualified by morning.</h2>
            <p className="mt-5 body-lg text-pretty max-w-2xl mx-auto">
              The auto-reply gathers what you actually need to scope: project type, timeline, budget range. Then it drops the lead in your CRM tagged and ready. You see it the moment you open your phone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <WhatsAppMockup
              contactName="Customy Studio"
              contactRole="auto-reply on after-hours"
              messages={[
                { from: 'them', text: 'Hi, we\'re looking for someone to redesign our SaaS marketing site. Got time for a call this week?', time: '21:14' },
                {
                  from: 'bot',
                  text: 'Hi! 👋 Thanks for reaching out. We\'ll be back in touch first thing tomorrow.\n\nTo prep the call, can you share:\n• Current site URL\n• Rough timeline\n• Budget range',
                  time: '21:14'
                },
                { from: 'them', text: 'acme-saas.com · ideally live in 8 weeks · budget around $15-25K', time: '21:16' },
                {
                  from: 'bot',
                  text: 'Logged 🙏 You\'ll get a slot proposal by 9am tomorrow. Reference: #1421.\n\nIn the meantime, here\'s a 2-min case study close to your stack: customy.agency/case/acme',
                  time: '21:17'
                }
              ]}
            />

            <BrowserMockup url="dashboard.customy.agency/agency" className="self-stretch">
              <KpiGrid
                tiles={[
                  { label: 'New leads · 7d', value: '14', delta: '+5 vs. last week', positive: true },
                  { label: 'Proposals sent', value: '9', delta: '78% reply rate', positive: true },
                  { label: 'Signed', value: '4', delta: '$62K pipeline', positive: true },
                  { label: 'Active retainers', value: '7', delta: 'avg 8 months', positive: true }
                ]}
              />
              <div className="mt-4">
                <PipelineList
                  title="This week · pipeline"
                  rows={[
                    { label: 'Acme · SaaS site redesign', meta: '$15-25K · discovery booked', status: 'Hot', statusColor: 'orange' },
                    { label: 'Plantsie · brand refresh', meta: '$8K · proposal sent', status: 'Awaiting', statusColor: 'blue' },
                    { label: 'Lumio · retainer renewal', meta: 'Q3 renewal · meeting set', status: 'On track', statusColor: 'green' },
                    { label: 'Northwave · cold inquiry', meta: 'No reply 5d · auto follow-up queued', status: 'Auto', statusColor: 'gray' }
                  ]}
                />
              </div>
            </BrowserMockup>
          </div>
        </ScrollReveal>
      </section>

      {/* Process / how it works */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="eyebrow">From inquiry to renewal</p>
            <h2 className="display-2 text-balance mt-3">One client, end to end.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: '01',
                title: 'Lead arrives',
                body: 'WhatsApp, web form, email, or referral. All funnel into one inbox. Auto-reply qualifies the basics. Lead lands in your CRM tagged by project type.'
              },
              {
                step: '02',
                title: 'Discovery → proposal',
                body: 'They self-book a discovery slot. Notes auto-saved to the client record. Proposal goes out from a template you tweak in 10 minutes. Sign + invoice in the same flow.'
              },
              {
                step: '03',
                title: 'Ship → review → renew',
                body: 'Project board for delivery. On wrap, auto-message captures the testimonial. Renewal alert fires 30 days before retainer end. Past clients become repeat clients.'
              }
            ].map((s) => (
              <div key={s.step} className="card p-6 md:p-7">
                <div className="font-display font-semibold text-[34px] tracking-tight text-sub/40 leading-none">{s.step}</div>
                <h3 className="font-display font-semibold text-[18px] md:text-[19px] tracking-tight mt-4">{s.title}</h3>
                <p className="text-[13.5px] md:text-[14px] text-fg2 leading-[1.55] mt-2 text-pretty">{s.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <VerticalCTA
        title="Get the system. Keep the craft."
        sub="Short call. Tell us how clients reach you today and where the deals die. We'll tell you what we'd fix first."
        ctaPrimary="Book an audit"
        whatsappMessage={`Hello Customy,

I run an agency / service business and I'd like to improve my lead and client ops.

Type of work:
Team size:
Where it hurts most:`}
      />

      <VerticalFooter />
    </>
  )
}
