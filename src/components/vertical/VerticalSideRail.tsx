import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Briefcase, ChefHat, Hotel, Sparkles, Users, type LucideIcon } from 'lucide-react'

interface RailItem {
  slug: string
  name: string
  short: string
  icon: LucideIcon
  accent: string
}

const ITEMS: RailItem[] = [
  { slug: 'restaurants', name: 'Restaurants', short: 'Restaurants', icon: ChefHat, accent: '#ff7a59' },
  { slug: 'spa-wellness', name: 'Spa & Wellness', short: 'Spa', icon: Sparkles, accent: '#34c759' },
  { slug: 'hotels', name: 'Hotels', short: 'Hotels', icon: Hotel, accent: '#0a84ff' },
  { slug: 'entrepreneurs', name: 'Entrepreneurs', short: 'Entrepreneurs', icon: Users, accent: '#bf5af2' },
  { slug: 'agency-services', name: 'Agency & Services', short: 'Agency', icon: Briefcase, accent: '#ff9f0a' }
]

// Sticky right-side industry switcher. Shows all five verticals; the one
// matching the current route is highlighted with its accent. Inactive items
// sit as small dots that expand and label themselves on hover.
export default function VerticalSideRail() {
  const { pathname } = useLocation()

  return (
    <nav
      aria-label="Industries"
      className="hidden lg:flex flex-col gap-3.5 fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-30"
    >
      {ITEMS.map((it) => {
        const isActive = pathname === `/whatwebuild/${it.slug}`
        const Icon = it.icon
        return (
          <Link
            key={it.slug}
            to={`/whatwebuild/${it.slug}`}
            className="group flex items-center gap-3 justify-end"
            aria-current={isActive ? 'page' : undefined}
          >
            <motion.span
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 6
              }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`text-[11.5px] font-semibold tracking-tight whitespace-nowrap pointer-events-none ${
                isActive ? 'text-fg' : 'text-fg2 group-hover:!opacity-100 group-hover:!translate-x-0'
              }`}
            >
              {it.short}
            </motion.span>
            <motion.span
              animate={{
                width: isActive ? 32 : 8,
                backgroundColor: isActive ? it.accent : 'rgb(110 110 115 / 0.35)'
              }}
              whileHover={{ width: isActive ? 32 : 14, backgroundColor: it.accent }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block h-[6px] rounded-full"
              aria-hidden
            />
            {/* Inline icon next to active pill for the detail */}
            {isActive && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="ml-1 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]"
                style={{ background: it.accent }}
                aria-hidden
              >
                <Icon size={13} strokeWidth={1.8} />
              </motion.span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}
