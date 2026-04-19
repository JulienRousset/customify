import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bot, Check, MessageCircle, Zap, Instagram, Send, MessageSquare } from 'lucide-react'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const features = [
  { icon: MessageCircle, title: 'Replies, sent for you', desc: 'WhatsApp, Instagram DMs, email. Answered in your voice, day and night.' },
  { icon: Zap, title: 'Workflows that fire themselves', desc: 'New booking, new lead, new payment. Every event triggers the right action.' },
  { icon: Bot, title: 'AI tuned to your brand', desc: 'Trained on your menu, services, FAQs. It sounds like you, not like a chatbot.' },
  { icon: Check, title: 'You stay in the loop', desc: 'Daily handover. What got handled, what needs a human, what to ship next.' }
]

export default function Automation() {
  return (
    <section id="automation" className="relative py-24 md:py-32">
      <div className="container-xl">
        <motion.div
          variants={staggerParent(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl ml-auto text-right mb-14 md:mb-20"
        >
          <motion.p variants={staggerItem} className="eyebrow">The automation</motion.p>
          <motion.h2 variants={staggerItem} className="display-2 text-balance">
            Let AI <span className="text-sub">do the busywork.</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl ml-auto text-pretty">
            The conversations, the reminders, the follow-ups. Running 24/7 in your voice while
            you focus on the parts only you can do.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-center">
          <motion.ul
            variants={staggerParent(0.1, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-5 order-2 lg:order-1 space-y-7"
          >
            {features.map((f) => {
              const Icon = f.icon
              return (
                <motion.li
                  key={f.title}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <motion.span
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                    className="mt-0.5 w-9 h-9 rounded-xl bg-surface border border-hair flex items-center justify-center shrink-0"
                  >
                    <Icon size={16} strokeWidth={1.7} className="text-fg" />
                  </motion.span>
                  <div>
                    <div className="font-display font-semibold text-[18px] tracking-tight">{f.title}</div>
                    <p className="mt-1 text-[14.5px] text-fg2 leading-[1.55] text-pretty">{f.desc}</p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: easeApple, delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <ChatMock />
            <div className="mt-8 text-center flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff375f] to-[#ff9f0a] text-white shadow-[0_8px_20px_-6px_rgba(255,55,95,0.4)] px-6 py-3 text-[14.5px] font-medium transition-transform hover:scale-105 active:scale-95"
              >
                Book my own dashboard
                <MessageCircle size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ChatMock() {
  const chats = [
    {
      id: 'whatsapp',
      platform: 'WhatsApp assistant',
      icon: MessageCircle,
      bg: 'bg-[#111B21]',
      headerBg: 'bg-[#202C33]',
      headerText: 'text-[#E9EDEF]',
      themBubble: 'bg-[#202C33] text-[#E9EDEF]',
      usBubble: 'bg-[#005C4B] text-[#E9EDEF]',
      messages: [
        { who: 'them', msg: 'Hi, table for 4 tomorrow 8pm?' },
        { who: 'us', msg: 'Yes. Inside or terrace?' },
        { who: 'them', msg: 'Terrace please.' },
        { who: 'us', msg: 'Booked. See you at 20:00.' }
      ]
    },
    {
      id: 'telegram',
      platform: 'Telegram assistant',
      icon: Send,
      bg: 'bg-[#E6EBEF]',
      headerBg: 'bg-[#0088cc]',
      headerText: 'text-white',
      themBubble: 'bg-white text-gray-800 shadow-sm',
      usBubble: 'bg-[#EEFFDE] text-gray-800 shadow-sm',
      messages: [
        { who: 'them', msg: 'Send me pricing' },
        { who: 'us', msg: 'Here’s our latest pricing 👇' },
        { who: 'us', msg: '📄 Pricing_2026.pdf' }
      ]
    },
    {
      id: 'messenger',
      platform: 'Messenger assistant',
      icon: MessageSquare,
      bg: 'bg-white',
      headerBg: 'bg-white border-b border-gray-100',
      headerText: 'text-black',
      themBubble: 'bg-[#E4E6EB] text-black',
      usBubble: 'bg-[#0084FF] text-white',
      messages: [
        { who: 'them', msg: 'Do you offer support?' },
        { who: 'us', msg: '24/7 support included 💬' },
        { who: 'us', msg: 'Want to speak to a human?' }
      ]
    },
    {
      id: 'instagram',
      platform: 'Instagram assistant',
      icon: Instagram,
      bg: 'bg-white',
      headerBg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040]',
      headerText: 'text-white',
      themBubble: 'bg-gray-100 text-black border border-gray-100',
      usBubble: 'bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white shadow-sm',
      messages: [
        { who: 'them', msg: 'Hey, is this still available?' },
        { who: 'us', msg: 'Yes! Want me to reserve it?' },
        { who: 'them', msg: 'Yes please' },
        { who: 'us', msg: 'Done ✅' }
      ]
    }
  ]

  // Initialize stack with whatsapp at the front (end of array)
  const [stack, setStack] = useState(chats.map(c => c.id).reverse())
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const bringToFront = (id: string) => {
    setStack(prev => {
      const filtered = prev.filter(x => x !== id)
      return [...filtered, id]
    })
  }

  return (
    <div className="relative w-full h-[600px] md:h-[880px] mt-10 md:mt-0 perspective-[1200px]">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-rose/10 blur-[80px] opacity-60 rounded-full pointer-events-none md:scale-110" />
      
      {chats.map((chat) => {
        const Icon = chat.icon
        const stackIndex = stack.indexOf(chat.id)
        // Reverse index: 0 is front, 3 is back
        const reverseIndex = stack.length - 1 - stackIndex
        
        // Calculate offsets to push background cards UP and RIGHT so headers are visible
        const yOffset = reverseIndex * (isDesktop ? -75 : -60)
        const xOffset = reverseIndex * (isDesktop ? 45 : 15)
        const scale = 1 - (reverseIndex * 0.04)
        const zIndex = stackIndex * 10
        // Add a slight tilt to the cards behind
        const rotate = reverseIndex === 0 ? 0 : (reverseIndex % 2 === 0 ? -1.5 : 1.5) * reverseIndex

        return (
          <motion.div
            key={chat.id}
            onClick={() => bringToFront(chat.id)}
            initial={false}
            animate={{ 
              x: xOffset, 
              y: yOffset, 
              scale: scale, 
              rotate: rotate,
              zIndex: zIndex 
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="absolute top-[180px] md:top-[300px] left-[10px] md:left-[40px] cursor-pointer origin-top-left"
          >
            <div className="w-[300px] md:w-[480px] rounded-[20px] md:rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-hair flex flex-col bg-opacity-100 backdrop-blur-xl bg-surface2 transition-shadow hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.2)]">
              <div className={`flex items-center gap-3 px-5 py-4 md:py-5 border-b border-hair/5 ${chat.headerBg} ${chat.headerText}`}>
                <Icon size={18} strokeWidth={2.5} className="md:w-5 md:h-5" />
                <span className="text-[14px] md:text-[16px] font-semibold tracking-tight">{chat.platform}</span>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>

              <div className={`flex-1 p-5 md:p-7 space-y-4 md:space-y-5 ${chat.bg} min-h-[260px] md:min-h-[380px] text-[14px] md:text-[16px] leading-snug`}>
                {chat.messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.who === 'us' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[88%] px-3.5 py-2.5 rounded-[16px] ${
                        m.who === 'us' 
                          ? `${chat.usBubble} rounded-br-[4px]` 
                          : `${chat.themBubble} rounded-bl-[4px]`
                      }`}
                    >
                      {m.msg}
                    </div>
                  </div>
                ))}
                
                {reverseIndex === 0 && (
                  <div className="flex justify-start mt-2">
                    <div className={`px-3.5 py-2.5 rounded-[16px] rounded-bl-[4px] flex items-center gap-1.5 ${chat.themBubble} opacity-70`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
