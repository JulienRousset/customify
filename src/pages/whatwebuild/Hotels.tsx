import {
  MessageSquare,
  Star,
  RefreshCw,
  Users,
  Bed,
  ClipboardList
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
  'Guest WhatsApp messages scattered across staff phones',
  'Booking.com, Airbnb, direct. Three separate inboxes.',
  'Reviews handled days late, low response rate',
  'Pre-arrival info sent manually to every guest',
  'Staff coordination via Telegram and post-its',
  'No single guest record across stays',
  'Upsells (transfer, breakfast, spa) lost because timing was off'
]

const SOLUTIONS: Solution[] = [
  {
    title: 'Unified guest inbox',
    body: 'WhatsApp, Booking.com messages, Airbnb messages and direct emails into one dashboard. The right reply lands in the right channel.',
    icon: MessageSquare
  },
  {
    title: 'OTA + direct sync',
    body: 'Reservations from Booking, Airbnb, Agoda and your direct site flow into one calendar. No double bookings, no manual entry.',
    icon: RefreshCw
  },
  {
    title: 'Review automation',
    body: 'Post-checkout: a thank-you with a one-tap review link. Negative reviews get flagged before going public.',
    icon: Star
  },
  {
    title: 'Pre-arrival flow',
    body: 'Auto-message at booking, 7d, 1d and check-in day. Wifi, directions, key code, breakfast time. Answered before they ask.',
    icon: ClipboardList
  },
  {
    title: 'Guest CRM',
    body: 'One record per guest across stays. Preferences, anniversaries, allergies, language. Returning guests feel seen.',
    icon: Users
  },
  {
    title: 'Housekeeping board',
    body: 'Live status of every room: clean, dirty, in-progress, blocked. Updates from the staff phone, visible to the front desk.',
    icon: Bed
  }
]

export default function Hotels() {
  return (
    <>
      <VerticalHero
        industry="Hotels"
        eyebrow="Hotels & hospitality"
        title="Run the hotel,"
        titleAccent="not the inbox."
        sub="Booking.com, Airbnb, WhatsApp and direct emails, pulled into one place. Pre-arrival messages, reviews and housekeeping handled by the same software. Less typing. Better stays."
        ctaPrimary="Build mine"
        whatsappMessage={`Hello Customy,

I run a hospitality business and I'd like to learn more about your automation and communication systems.

Business size:
Main challenge:
Current systems:`}
      />

      <ProblemsList
        eyebrow="Where the day disappears"
        title="The hotel-running"
        titleAccent="paper cuts."
        problems={PROBLEMS}
      />

      <SolutionsGrid
        eyebrow="What we build"
        title="From booking confirmation"
        titleAccent="to post-stay review."
        sub="One system. The front desk, housekeeping and the manager all see the same source of truth, in real time."
        solutions={SOLUTIONS}
      />

      {/* Unified inbox mockup */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow">Unified guest inbox</p>
            <h2 className="display-2 text-balance mt-3">Every guest, every channel, one screen.</h2>
            <p className="mt-5 body-lg text-pretty max-w-2xl mx-auto">
              Messages flow in from Booking, Airbnb, WhatsApp and email. Front desk replies once. The system routes back to the right channel automatically.
            </p>
          </div>

          <BrowserMockup url="dashboard.customy.agency/hotel" className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-4 min-h-[380px]">
              <div className="md:col-span-4 rounded-xl border border-hair bg-surface2/40 overflow-hidden">
                <div className="px-3.5 py-2.5 border-b border-hair text-[11px] uppercase tracking-[0.16em] text-sub font-semibold flex items-center justify-between">
                  <span>Inbox</span>
                  <span className="text-fg">12</span>
                </div>
                <div className="divide-y divide-hair">
                  {[
                    { name: 'Sarah K.', ch: 'Booking.com', preview: 'Could we have an early check…', time: '2m', unread: true },
                    { name: 'Marc D.', ch: 'WhatsApp', preview: 'Confirming spa booking for…', time: '14m', unread: true },
                    { name: 'Anna R.', ch: 'Airbnb', preview: 'Thanks for the welcome msg!', time: '1h' },
                    { name: 'Tom L.', ch: 'Direct', preview: 'Transfer arranged for 11am.', time: '3h' },
                    { name: 'Lara S.', ch: 'Booking.com', preview: 'See you next month 🙏', time: '1d' }
                  ].map((m, i) => (
                    <div
                      key={i}
                      className={`px-3.5 py-2.5 ${i === 0 ? 'bg-fg/[0.04]' : ''}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-[12.5px] font-medium text-fg truncate">{m.name}</div>
                        <div className="text-[10px] text-sub shrink-0">{m.time}</div>
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-0.5">
                        <div className="text-[11px] text-fg2 truncate">{m.preview}</div>
                        {m.unread && <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0a84ff]" />}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.12em] text-sub font-semibold mt-1">{m.ch}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-8 rounded-xl border border-hair bg-bg p-4 md:p-5 flex flex-col">
                <div className="flex items-center gap-3 pb-3 border-b border-hair">
                  <div className="w-9 h-9 rounded-full bg-fg text-bg flex items-center justify-center text-[13px] font-semibold">S</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium text-fg">Sarah K.</div>
                    <div className="text-[11px] text-sub">Booking.com · Suite 204 · Check-in tomorrow</div>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] px-2 py-1 rounded-full bg-[#0a84ff]/15 text-[#0a84ff]">Booking.com</span>
                </div>
                <div className="flex-1 py-4 space-y-3 text-[13px]">
                  <div className="max-w-[80%] rounded-lg bg-surface2/60 px-3 py-2 text-fg2">
                    Could we have an early check-in tomorrow? Flight lands 9am.
                  </div>
                  <div className="max-w-[80%] rounded-lg bg-fg text-bg px-3 py-2 ml-auto">
                    Hi Sarah, of course. We'll have your room ready by 11am. I've added a welcome breakfast tray, on the house. ✈️
                  </div>
                  <div className="max-w-[60%] rounded-lg bg-surface2/40 border border-hair border-dashed px-3 py-1.5 text-[11px] text-sub italic">
                    Suggested upsell: airport transfer · $25 · ready
                  </div>
                </div>
                <div className="border-t border-hair pt-3">
                  <div className="rounded-lg bg-surface2/40 border border-hair px-3 py-2 text-[12px] text-sub">
                    Reply to Sarah on Booking.com…
                  </div>
                </div>
              </div>
            </div>
          </BrowserMockup>
        </ScrollReveal>
      </section>

      {/* Pre-arrival flow */}
      <section className="relative py-20 md:py-28 border-t border-hair">
        <ScrollReveal intensity="medium" className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow">Pre-arrival, on autopilot</p>
            <h2 className="display-2 text-balance mt-3">By the time they land, they know everything.</h2>
            <p className="mt-5 body-lg text-pretty max-w-2xl mx-auto">
              Each message goes out automatically. Tone is yours. Photos, maps and key codes pre-attached.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <WhatsAppMockup
              contactName="Hotel Karang"
              contactRole="auto-reply on"
              messages={[
                {
                  from: 'bot',
                  text: 'Hi Sarah, your booking at Hotel Karang is confirmed for May 12 → May 15. Suite 204 with sea view 🌊\n\nWe\'ll send you check-in info 24h before. Anything in the meantime, just reply.',
                  time: 'May 1'
                },
                {
                  from: 'bot',
                  text: '7 days to go ✨\n\nA few things to make your stay smoother:\n• Airport transfer? Reply YES.\n• Spa session pre-booked at $40 (instead of $55 on arrival).\n• Dietary preferences for breakfast?',
                  time: 'May 5'
                },
                { from: 'them', text: 'YES for transfer please. Vegetarian breakfast 🌿', time: 'May 5' },
                {
                  from: 'bot',
                  text: 'Done. Driver Wayan will hold a sign with your name at the arrival gate. Vegetarian noted.\n\nRoom code for tomorrow: 4892. WiFi: KARANG-GUEST / surf2024.\n\nSafe flight 🙌',
                  time: 'May 11'
                }
              ]}
            />

            <div className="flex flex-col gap-4">
              <BrowserMockup url="dashboard.customy.agency/hotel/ops">
                <KpiGrid
                  tiles={[
                    { label: 'Check-ins today', value: '6', delta: '4 early-arrival flagged', positive: true },
                    { label: 'Occupancy', value: '92%', delta: '7 pts vs. last week', positive: true },
                    { label: 'Reviews this week', value: '11', delta: 'avg 4.7★', positive: true },
                    { label: 'Open requests', value: '3', delta: 'all assigned', positive: true }
                  ]}
                />
                <div className="mt-4">
                  <PipelineList
                    title="Housekeeping · live"
                    rows={[
                      { label: 'Suite 204 · Sea view', meta: 'Sarah K. · early arrival 11am', status: 'In prep', statusColor: 'orange' },
                      { label: 'Room 112 · Garden', meta: 'Checked out 10:45', status: 'Cleaning', statusColor: 'orange' },
                      { label: 'Room 305 · King', meta: 'Marc D. · in-house', status: 'Clean', statusColor: 'green' }
                    ]}
                  />
                </div>
              </BrowserMockup>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <VerticalCTA
        title="Want one for your hotel?"
        sub="Quick call. Tell us how guests reach you today and where staff is bottlenecked. We'll tell you what we'd unify first."
        ctaPrimary="Book an audit"
        whatsappMessage={`Hello Customy,

I run a hospitality business and I'd like to learn more about your automation and communication systems.

Business size:
Main challenge:
Current systems:`}
      />

      <VerticalFooter />
    </>
  )
}
