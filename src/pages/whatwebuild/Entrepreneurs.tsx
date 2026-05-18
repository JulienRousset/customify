import { motion } from 'framer-motion'
import {
  Sparkles,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Inbox,
  Bot
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
  'Posting inconsistently. Real work always takes priority.',
  'Content made from scratch every time. No system, no momentum.',
  'Inquiries and leads buried under fan messages and noise.',
  'No central place tracking deals, calls, or pipeline value.',
  'Monetization mostly random. No funnel, no products, no list.',
  'Audience growing but no idea who they actually are.',
  'Everything depends on you showing up every day. Burnout incoming.'
]

const SOLUTIONS: Solution[] = [
  {
    title: 'Content engine',
    body: 'Scripted templates, recurring formats, batched filming days. We build the system that turns one shoot into a week of posts.',
    icon: Sparkles
  },
  {
    title: 'DM automation',
    body: 'Auto-replies for FAQ, link drops on keyword triggers, high-intent DMs flagged and routed to your real inbox.',
    icon: MessageSquare
  },
  {
    title: 'Deal pipeline',
    body: 'A CRM for inquiries, calls and signed contracts: cold, qualified, negotiating, won. Templates for first reply, auto-reminders for follow-ups.',
    icon: Briefcase
  },
  {
    title: 'Lead funnel',
    body: 'Bio link → landing page → product, course, newsletter or call. Built to convert, not just to look pretty.',
    icon: Inbox
  },
  {
    title: 'Growth analytics',
    body: 'Beyond the platform: which posts drive followers vs. saves vs. sales. Weekly digest in your inbox.',
    icon: TrendingUp
  },
  {
    title: 'AI assistant',
    body: 'A trained-on-your-voice assistant that drafts captions, hooks, and replies in your tone. You approve, it ships.',
    icon: Bot
  }
]

export default function Entrepreneurs() {
  return (
    <>
      <VerticalHero
        industry="Entrepreneurs"
        eyebrow="Solo founders & personal brands"
        title="Run your business,"
        titleAccent="not your inbox."
        sub="Content systems that batch a week in a day. DMs that auto-route to your real inbox. Deals tracked instead of lost in memory. The infrastructure behind entrepreneurs who stop doing everything themselves."
        ctaPrimary="Build mine"
        whatsappMessage={`Hello Customy,

I'm a solo founder / personal brand looking to scale my systems.

What I do:
Audience size:
Where I'm stuck:`}
      />

      <ProblemsList
        eyebrow="The grind"
        title="Seven traps"
        titleAccent="that burn out solo founders."
        problems={PROBLEMS}
      />

      {/* Featured proof: Dylan with real before/after */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow">Real client work</p>
            <h2 className="display-2 text-balance mt-3">From posting in the dark to a real growth system.</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-12 md:mt-14 max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-sub bg-surface2/60 border border-hair rounded-full px-3 py-1">
              Case study · Personal brand entrepreneur
            </span>
            <h3 className="font-display font-semibold text-[28px] md:text-[34px] tracking-tight mt-5 leading-[1.1]">
              Dylan
            </h3>
            <p className="text-fg2 mt-4 leading-[1.6] text-pretty max-w-2xl mx-auto">
              Dylan came to us with a small Instagram audience that had stopped growing. We rebuilt the content system around three repeating formats, batched a month of filming in two days, and added a DM auto-reply that converts saves into newsletter signups. Growth restarted within the first week, and kept compounding.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-fg2 max-w-xl mx-auto text-left">
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-fg mt-2" />
                <span>Content system: 3 recurring formats, scripted, batched monthly</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-fg mt-2" />
                <span>DM auto-reply funnel converting comments into newsletter signups</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-fg mt-2" />
                <span>Weekly performance digest covering what worked and what to repeat</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-fg mt-2" />
                <span>Deal pipeline with templates ready to send to every inbound brand</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-12 md:mt-14 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-2">
                <div className="rounded-2xl overflow-hidden border border-hair shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
                  <img
                    src="/examples/insta_before.png"
                    alt="Dylan's Instagram profile before working with Customy"
                    className="block w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-[0.16em] font-semibold text-center px-2 py-1 rounded-full bg-[#ff3b30]/10 text-[#ff3b30]">
                  Before
                </div>
              </div>
              <div className="space-y-2">
                <div className="rounded-2xl overflow-hidden border border-hair shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
                  <img
                    src="/examples/insta_after.png"
                    alt="Dylan's Instagram profile after working with Customy"
                    className="block w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-[0.16em] font-semibold text-center px-2 py-1 rounded-full bg-[#34c759]/10 text-[#34c759]">
                  After
                </div>
              </div>
            </div>
            <p className="mt-4 text-[11.5px] text-sub text-center">Real client screenshots. Numbers visible in the images.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-16 md:mt-20 max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-sub bg-surface2/60 border border-hair rounded-full px-3 py-1">
              Weekly performance digest
            </span>
            <h3 className="font-display font-semibold text-[26px] md:text-[30px] tracking-tight mt-5 leading-[1.1]">
              Every Monday, the week in one page.
            </h3>
            <p className="text-fg2 mt-4 leading-[1.6] text-pretty max-w-2xl mx-auto">
              Top posts, growth, audience snapshot, what to double down on next week. Delivered automatically. No more end-of-week guessing about what's working.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-md mx-auto"
          >
            <div className="rounded-2xl overflow-hidden border border-hair shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
              <img
                src="/examples/week1.JPG"
                alt="Weekly performance summary report we built for a creator client"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="mt-3 text-[11.5px] text-sub text-center">Real client report. Week 1 summary.</div>
          </motion.div>
        </ScrollReveal>
      </section>

      <SolutionsGrid
        eyebrow="What we build"
        title="The solo-founder stack,"
        titleAccent="end to end."
        sub="From content engine to monetization. Layer it in as the business justifies the next piece."
        solutions={SOLUTIONS}
      />

      {/* Deal pipeline mockup */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow">Deal pipeline</p>
            <h2 className="display-2 text-balance mt-3">Every inbound, no longer in your head.</h2>
            <p className="mt-5 body-lg text-pretty max-w-2xl mx-auto">
              Every brand inquiry, sales call and signed contract, tracked. Templates for first reply. Auto-reminders so deals don't ghost.
            </p>
          </div>

          <BrowserMockup url="dashboard.customy.agency/founder" className="max-w-5xl mx-auto">
            <KpiGrid
              tiles={[
                { label: 'Followers · 30d', value: '+4.2K', delta: '+38% vs. prev', positive: true },
                { label: 'Newsletter list', value: '1,840', delta: '+220 this week', positive: true },
                { label: 'Active deals', value: '7', delta: '$8.4K pipeline', positive: true },
                { label: 'Reply rate', value: '94%', delta: 'auto-replies on', positive: true }
              ]}
            />
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <PipelineList
                title="Deals · pipeline"
                rows={[
                  { label: 'Vivobarefoot · sponsored reel', meta: '$1.2K · contract sent', status: 'Closing', statusColor: 'green' },
                  { label: 'Plantsie · 3-post deal', meta: '$2.8K · negotiating', status: 'Hot', statusColor: 'orange' },
                  { label: 'Cabaïa · UGC bundle', meta: '$650 · awaiting brief', status: 'Soft', statusColor: 'blue' },
                  { label: 'Soylent · cold pitch', meta: 'No reply 7d · auto follow-up queued', status: 'Auto', statusColor: 'gray' }
                ]}
              />
              <PipelineList
                title="DM funnel · this week"
                rows={[
                  { label: 'Keyword "guide"', meta: '127 triggers → 84 signups', status: '66% conv', statusColor: 'green' },
                  { label: 'Keyword "course"', meta: '54 triggers → 19 calls booked', status: '35% conv', statusColor: 'green' },
                  { label: 'Inbound deal filter', meta: '8 leads routed to inbox', status: 'Auto', statusColor: 'blue' }
                ]}
              />
            </div>
          </BrowserMockup>
        </ScrollReveal>
      </section>

      {/* DM auto-reply mockup */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow">DM automation in your tone</p>
            <h2 className="display-2 text-balance mt-3">No more "drop the link" 600 times a day.</h2>
            <p className="mt-5 body-lg text-pretty max-w-2xl mx-auto">
              Trigger keywords like <em>guide</em>, <em>course</em>, or <em>work with you</em>. Auto-replies fire instantly, in your voice, with the right link. You only see the messages that actually need you.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <WhatsAppMockup
              contactName="Your DMs"
              contactRole="auto-reply on"
              messages={[
                { from: 'them', text: 'hey, where\'s the guide you mentioned in the latest post?' },
                {
                  from: 'bot',
                  text: 'Got you 👇\n\nFree guide here: yoursite.com/guide\n\nIf you want the full course (with the templates we use), reply COURSE.'
                },
                { from: 'them', text: 'COURSE pls 🙏' },
                {
                  from: 'bot',
                  text: 'Course link: yoursite.com/course\n\nUse code POST10 for 10% off (24h only).\n\nYou\'re also added to the Monday newsletter. Opt out anytime.'
                }
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      <VerticalCTA
        title="Build the engine. Keep the freedom."
        sub="Short call. Tell us what you sell, where you market, and where the wheel grinds. We'll tell you what we'd wire in first."
        ctaPrimary="Book an audit"
        whatsappMessage={`Hello Customy,

I'm a solo founder / personal brand looking to scale my systems.

What I do:
Audience size:
Where I'm stuck:`}
      />

      <VerticalFooter />
    </>
  )
}
