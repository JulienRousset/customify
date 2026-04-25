import { motion } from 'framer-motion'
import { MessageCircle, TrendingUp, GitMerge, Megaphone } from 'lucide-react'
import { useLang } from '../lang'

const icons: Record<string, React.ReactNode> = {
  whatsapp: <MessageCircle size={18} strokeWidth={1.7} className="text-fg/75" />,
  trending: <TrendingUp size={18} strokeWidth={1.7} className="text-fg/75" />,
  funnel: <GitMerge size={18} strokeWidth={1.7} className="text-fg/75" />,
  ads: <Megaphone size={18} strokeWidth={1.7} className="text-fg/75" />
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

  // Four true corners, pulled out so they don't overlap the 3D logo
  const positions = [
    'top-[2%] left-[-12%]',      // Top left
    'top-[2%] right-[-8%]',      // Top right
    'bottom-[2%] left-[-8%]',    // Bottom left
    'bottom-[2%] right-[-8%]'    // Bottom right
  ]

  // Slightly different float paths so they don't drift in sync
  const floats = [
    { y: [0, -10, 0], x: [0, 4, 0], duration: 7 },
    { y: [0, 8, 0], x: [0, -5, 0], duration: 8.5 },
    { y: [0, -8, 0], x: [0, -4, 0], duration: 9 },
    { y: [0, 10, 0], x: [0, 5, 0], duration: 7.5 }
  ]

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {notifications.map((notif, i) => {
        const target = targetService[i] ?? 0
        const float = floats[i]
        const onClick = () => {
          window.dispatchEvent(new CustomEvent('highlight-service', { detail: target }))
        }
        return (
          <motion.a
            key={i}
            href={`#service-${target}`}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: float.y,
              x: float.x
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 + i * 0.15, ease: 'easeOut' },
              scale: { duration: 0.6, delay: 0.2 + i * 0.15, type: 'spring', stiffness: 200, damping: 20 },
              y: { duration: float.duration, repeat: Infinity, ease: 'easeInOut', delay: 0.2 + i * 0.15 },
              x: { duration: float.duration, repeat: Infinity, ease: 'easeInOut', delay: 0.2 + i * 0.15 }
            }}
            whileHover={{ scale: 1.04 }}
            className={`
              absolute w-[260px] md:w-[280px] flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-2xl
              border border-black/5 dark:border-white/10 shadow-[0_15px_35px_rgb(0,0,0,0.1)] pointer-events-auto cursor-pointer
              ${positions[i]}
            `}
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-surface2 flex items-center justify-center border border-hair shadow-sm">
              {icons[notif.icon]}
            </div>
            <div className="pt-0.5">
              <h4 className="text-[13px] md:text-[14px] font-semibold text-fg tracking-tight">{notif.title}</h4>
              <p className="text-[12px] md:text-[13px] text-sub leading-snug mt-0.5">{notif.desc}</p>
            </div>
          </motion.a>
        )
      })}
    </div>
  )
}
