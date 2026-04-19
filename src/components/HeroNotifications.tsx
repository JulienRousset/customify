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

export default function HeroNotifications() {
  const { t } = useLang()
  const notifications = t.hero.notifications

  return (
    <motion.div 
      className="relative w-full max-w-md mx-auto lg:ml-auto"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Ambient glow behind the notifications */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ff375f]/10 to-[#ff9f0a]/10 blur-[60px] rounded-full pointer-events-none" />
      
      <div className="relative space-y-4">
        {notifications.map((notif, i) => {
          // Stagger left/right slightly for a dynamic, floating look
          const offsetClass = i % 2 === 0 ? 'mr-6 md:mr-12' : 'ml-6 md:ml-12'
          
          return (
            <motion.div
              key={i}
              variants={item}
              className={`
                flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-2xl 
                border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                ${offsetClass}
              `}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center border border-black/5 dark:border-white/5 shadow-sm">
                {icons[notif.icon]}
              </div>
              <div className="pt-0.5">
                <h4 className="text-[14px] font-semibold text-fg tracking-tight">{notif.title}</h4>
                <p className="text-[13px] text-sub leading-snug mt-0.5">{notif.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
