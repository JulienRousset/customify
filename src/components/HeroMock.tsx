import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const features = [
  { title: 'One dashboard.', desc: 'Revenue, bookings, reach, reviews. One screen that reads itself.' },
  { title: 'WhatsApp, automated.', desc: 'Replies, reminders, confirmations running 24/7 in your voice.' },
  { title: 'Every tool, connected.', desc: 'Meta, Stripe, Notion, Shopify, Google. One clean pipeline.' },
  { title: 'Built in two weeks.', desc: 'From first call to live system. Then we keep iterating with you.' }
]

const messages = [
  { who: 'them', msg: 'Hi, table for 4 tomorrow 8pm?' },
  { who: 'us', msg: 'Yes. Inside or terrace?' },
  { who: 'them', msg: 'Terrace please.' },
  { who: 'us', msg: 'Booked. See you at 20:00.' }
]

export default function HeroMock() {
  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">The product</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            One system. <span className="text-sub">Everything connected.</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl text-pretty">
            A single source of truth for every conversation, booking, and campaign. Numbers
            updating as your business runs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center">
          <motion.ul
            variants={staggerParent(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-4 order-2 lg:order-1 space-y-7"
          >
            {features.map((f) => (
              <motion.li
                key={f.title}
                variants={staggerItem}
                className="flex items-start gap-4 group"
              >
                <motion.span
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                  className="mt-1 w-5 h-5 rounded-full bg-fg text-bg flex items-center justify-center shrink-0"
                >
                  <Check size={12} strokeWidth={2.5} />
                </motion.span>
                <div>
                  <div className="font-display font-semibold text-[18px] tracking-tight">{f.title}</div>
                  <p className="mt-1 text-[14.5px] text-fg2 leading-[1.55] text-pretty">{f.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: easeApple, delay: 0.1 }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <ProductMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProductMock() {
  return (
    <div className="relative rounded-[24px] border border-hair bg-surface2 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-hair">
        <div className="flex items-center gap-2">
          <MessageCircle size={14} className="text-[#2E7D5C]" />
          <span className="text-[12.5px] font-medium">WhatsApp assistant</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-sub">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#2E7D5C]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          Replying
        </span>
      </div>

      <motion.div
        className="p-5 md:p-7 space-y-3 bg-bg/50"
        variants={staggerParent(0.35, 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {messages.map((m, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 8, scale: 0.96 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.4, ease: easeApple }
              }
            }}
            className={`flex ${m.who === 'us' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-[18px] text-[14px] leading-snug ${
                m.who === 'us'
                  ? 'bg-[#2E7D5C] text-white rounded-br-md'
                  : 'bg-surface text-fg border border-hair rounded-bl-md'
              }`}
            >
              {m.msg}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerParent(0.08, 1.5)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-3 border-t border-hair divide-x divide-hair"
      >
        {[
          { k: '2.1s', l: 'Avg reply' },
          { k: '94%', l: 'Auto-handled' },
          { k: '24/7', l: 'Always on' }
        ].map((x) => (
          <motion.div
            key={x.l}
            variants={staggerItem}
            className="p-4 text-center"
          >
            <div className="font-semibold text-[18px] tracking-tight tabular-nums">{x.k}</div>
            <div className="text-[11px] text-sub font-medium mt-0.5">{x.l}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
