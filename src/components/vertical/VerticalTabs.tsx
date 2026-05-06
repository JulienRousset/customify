import { NavLink } from 'react-router-dom'
import { Camera, ChefHat, Hammer, Hotel, Sparkles, type LucideIcon } from 'lucide-react'

interface Tab {
  slug: string
  name: string
  icon: LucideIcon
}

const TABS: Tab[] = [
  { slug: 'restaurants', name: 'Restaurants', icon: ChefHat },
  { slug: 'spa-wellness', name: 'Spa & Wellness', icon: Sparkles },
  { slug: 'hotels', name: 'Hotels', icon: Hotel },
  { slug: 'creators', name: 'Creators', icon: Camera },
  { slug: 'trades-services', name: 'Trades & Services', icon: Hammer }
]

// Industry switcher. Lives at the top of every vertical page so the visitor
// can hop directly to a sibling vertical without going back to /whatwebuild.
// Active state shows which page they're on.
export default function VerticalTabs() {
  return (
    <nav
      aria-label="Industries"
      className="flex flex-wrap items-center justify-center gap-1.5 mb-12"
    >
      {TABS.map((t) => {
        const Icon = t.icon
        return (
          <NavLink
            key={t.slug}
            to={`/whatwebuild/${t.slug}`}
            end
            className={({ isActive }) =>
              [
                'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-medium tracking-tight transition-colors whitespace-nowrap',
                isActive
                  ? 'bg-fg text-bg'
                  : 'border border-hair bg-surface2/60 text-fg2 hover:text-fg hover:border-fg/30'
              ].join(' ')
            }
          >
            <Icon size={13} strokeWidth={1.8} />
            {t.name}
          </NavLink>
        )
      })}
    </nav>
  )
}
