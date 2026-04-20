import { motion } from 'framer-motion'
import { MessageCircle, TrendingUp, GitMerge, Megaphone } from 'lucide-react'
import { useLang } from '../lang'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 }
  }
}

const icons: Record<string, React.ReactNode> = {
  whatsapp: <MessageCircle size={22} className="text-[#25D366]" />,
  trending: <TrendingUp size={22} className="text-[#0071e3]" />,
  funnel: <GitMerge size={22} className="text-[#af52de]" />,
  ads: <Megaphone size={22} className="text-[#ff375f]" />
}

// Maps each notification index to the matching Services item index
// 0 WhatsApp Push     -> 2 Social & Automation
// 1 More Clients      -> 3 Marketing strategy
// 2 Custom Ad Funnels -> 5 Sales funnels
// 3 Optimized Ads     -> 4 Ads, managed
const targetService = [2, 3, 5, 4]

export default function HeroNotifications() {
  const { t } = useLang()
  const notifications = t.hero.notifications

  // Specific absolute positions to surround the 3D logo
  const positions = [
    'top-[5%] left-[-10%]',        // Top left
    'top-[25%] right-[-10%]',      // Middle right
    'bottom-[25%] left-[-5%]',     // Bottom left
    'bottom-[0%] right-[5%]'       // Bottom right
  ]

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full pointer-events-none"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Ambient glow behind the notifications */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ff375f]/10 to-[#ff9f0a]/10 blur-[60px] rounded-full pointer-events-none" />
      
      {notifications.map((notif, i) => {
        const target = targetService[i] ?? 0
        const onClick = () => {
          window.dispatchEvent(new CustomEvent('highlight-service', { detail: target }))
        }
        return (
          <motion.a
            key={i}
            href={`#service-${target}`}
            onClick={onClick}
            variants={item}
            className={`
              absolute w-[260px] md:w-[280px] flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-2xl
              border border-black/5 dark:border-white/10 shadow-[0_15px_35px_rgb(0,0,0,0.1)] pointer-events-auto cursor-pointer
              ${positions[i]}
            `}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center border border-black/5 dark:border-white/5 shadow-sm">
              {icons[notif.icon]}
            </div>
            <div className="pt-0.5">
              <h4 className="text-[13px] md:text-[14px] font-semibold text-fg tracking-tight">{notif.title}</h4>
              <p className="text-[12px] md:text-[13px] text-sub leading-snug mt-0.5">{notif.desc}</p>
            </div>
          </motion.a>
        )
      })}
    </motion.div>
  )
}
