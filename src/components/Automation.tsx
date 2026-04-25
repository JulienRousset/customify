import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bot, Check, MessageCircle, Zap, Instagram, Send } from 'lucide-react'
import { useLang } from '../lang'
import { easeApple, staggerItem, staggerParent, viewportOnce } from './fx/motion'

const featureIcons = [MessageCircle, Zap, Bot, Check]
const featureColors = ['text-[#34c759]', 'text-[#ffcc00]', 'text-[#af52de]', 'text-[#ff375f]']

function MessengerLogo({ size = 18, className = '' }: { size?: number; className?: string; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.559 6.963z" />
    </svg>
  )
}

function WhatsAppLogo({ size = 18, className = '' }: { size?: number; className?: string; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Automation() {
  const { t } = useLang()
  const a = t.automation
  return (
    <section id="automation" className="relative py-24 md:py-32">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col gap-10">
            <motion.div
              variants={staggerParent(0.08, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p variants={staggerItem} className="eyebrow">{a.eyebrow}</motion.p>
              <motion.h2 variants={staggerItem} className="display-2 text-balance">
                {a.h2a} <span className="text-sub">{a.h2b}</span>
              </motion.h2>
              <motion.p variants={staggerItem} className="mt-5 body-lg max-w-xl text-pretty">
                {a.sub}
              </motion.p>
            </motion.div>

            <motion.ul
              variants={staggerParent(0.1, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-7"
            >
              {a.features.map((f, i) => {
                const Icon = featureIcons[i] ?? MessageCircle
                const color = featureColors[i] ?? 'text-fg'
                return (
                  <motion.li
                    key={f.title}
                    variants={staggerItem}
                    className="flex items-start gap-4"
                  >
                    <motion.span
                      whileHover={{ scale: 1.08, rotate: -4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                      className="mt-0.5 w-11 h-11 rounded-full bg-surface2 border border-hair flex items-center justify-center shrink-0"
                    >
                      <Icon size={18} strokeWidth={1.7} className={color} />
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
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeApple, delay: 0.2 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-fg text-bg px-9 py-4 text-[17px] md:text-[18px] font-semibold tracking-tight transition-opacity hover:opacity-90"
              >
                {a.cta}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: easeApple, delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-1"
          >
            <ChatMock tag={a.mockTag} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ChatMock({ tag }: { tag?: string }) {
  const chats = [
    {
      id: 'whatsapp',
      platform: 'WhatsApp assistant',
      icon: WhatsAppLogo,
      bg: 'bg-[#111B21]',
      headerBg: 'bg-[#128C7E]',
      headerText: 'text-white',
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
      bg: 'bg-[#E6EBEF] dark:bg-[#17212B]',
      headerBg: 'bg-[#0088cc]',
      headerText: 'text-white',
      themBubble: 'bg-white text-gray-800 shadow-sm dark:bg-[#212D3B] dark:text-[#E9EDEF] dark:shadow-none',
      usBubble: 'bg-[#EEFFDE] text-gray-800 shadow-sm dark:bg-[#2B5278] dark:text-white dark:shadow-none',
      messages: [
        { who: 'them', msg: 'Send me pricing' },
        { who: 'us', msg: 'Here’s our latest pricing 👇' },
        { who: 'us', msg: '📄 Pricing_2026.pdf' }
      ]
    },
    {
      id: 'messenger',
      platform: 'Messenger assistant',
      icon: MessengerLogo,
      bg: 'bg-white dark:bg-[#0B0B0F]',
      headerBg: 'bg-[#F0F2F5] border-b border-gray-100 dark:bg-[#3A3B3C] dark:border-white/5',
      headerText: 'text-black dark:text-white',
      themBubble: 'bg-[#E4E6EB] text-black dark:bg-[#1F1F24] dark:text-[#E9EDEF]',
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
      bg: 'bg-white dark:bg-[#0B0B0F]',
      headerBg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040]',
      headerText: 'text-white',
      themBubble: 'bg-gray-100 text-black border border-gray-100 dark:bg-[#1F1F24] dark:text-[#E9EDEF] dark:border-white/5',
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

      {tag && (
        <div className="absolute top-0 right-0 z-20 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-sub px-2.5 py-1 rounded-full border border-hair bg-surface2/80 backdrop-blur-sm">
          <span className="w-1 h-1 rounded-full bg-sub/70" aria-hidden />
          {tag}
        </div>
      )}
      
      {chats.map((chat) => {
        const Icon = chat.icon
        const stackIndex = stack.indexOf(chat.id)
        // Reverse index: 0 is front, 3 is back
        const reverseIndex = stack.length - 1 - stackIndex
        
        // Calculate offsets to push background cards UP and RIGHT so headers are visible
        const yOffset = reverseIndex * (isDesktop ? -75 : -60)
        const xOffset = reverseIndex * (isDesktop ? 40 : 15)
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
            className="absolute top-[180px] md:top-[300px] left-0 cursor-pointer origin-top-left"
            style={{ width: isDesktop ? 'calc(100% - 120px)' : 'calc(100% - 45px)' }}
          >
            <div className="w-full rounded-[20px] md:rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-hair flex flex-col bg-opacity-100 backdrop-blur-xl bg-surface2 transition-shadow hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.2)]">
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
