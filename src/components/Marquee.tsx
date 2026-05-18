import { motion } from 'framer-motion'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { useLang } from '../lang'
import { staggerItem, staggerParent, viewportOnce } from './fx/motion'

type Partner = { name: string; kind: string; logo?: string; logoScale?: number }

const partners: Partner[] = [
  { name: 'My Cocotte', kind: 'Restaurant', logo: '/partners/MYCOCOTTE.webp' },
  { name: 'Inka Spa Bali', kind: 'Wellness', logo: '/partners/INKA.webp' },
  { name: 'Skyrol', kind: 'Travel solution', logo: '/partners/SKYROL.webp' },
  { name: 'Temple Spa Bali', kind: 'Spa', logo: '/partners/TEMPLE.webp' },
  { name: 'Natura Organics', kind: 'Organic brand', logo: '/partners/NATURA.webp' },
  { name: "In'Sens Sourcing", kind: 'Sourcing', logo: '/partners/INSENS.webp' },
  { name: 'Dylan', kind: 'Personal brand', logo: '/partners/TYT.webp', logoScale: 1.6 }
]

export default function Marquee() {
  const { t } = useLang()
  return (
    <section
      aria-label="Partners and clients"
      className="relative py-8 md:py-10 border-y border-hair bg-surface/40"
    >
      <motion.div
        variants={staggerParent(0.08, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-xl mb-5 md:mb-6"
      >
        <motion.p
          variants={staggerItem}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-sub"
        >
          {t.marquee.header}
        </motion.p>
      </motion.div>

      <div className="relative fade-x">
        <InfiniteSlider gap={56} duration={42} className="py-1">
          {partners.map((p) => (
            <div
              key={`mq-${p.name}`}
              className="flex items-center gap-2.5 px-2 whitespace-nowrap"
            >
              {p.logo && (
                <img
                  src={p.logo}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  style={p.logoScale ? { transform: `scale(${p.logoScale})`, transformOrigin: 'center' } : undefined}
                  className="h-6 md:h-7 w-auto object-contain brightness-0 opacity-75 dark:invert dark:opacity-85 shrink-0"
                />
              )}
              <span className="font-display font-semibold text-[15px] md:text-[17px] tracking-tight text-fg/85">
                {p.name}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-sub">
                {p.kind}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
