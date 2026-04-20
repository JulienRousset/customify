import { motion } from 'framer-motion'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { staggerItem, staggerParent, viewportOnce } from './fx/motion'

type Partner = { name: string; kind: string; logo?: string }

const partners: Partner[] = [
  { name: 'My Cocotte', kind: 'Restaurant', logo: '/partners/MYCOCOTTE.png' },
  { name: 'Inka Spa Bali', kind: 'Wellness', logo: '/partners/INKA.png' },
  { name: 'Skyrol', kind: 'Brand', logo: '/partners/SKYROL.png' },
  { name: 'Temple Spa Bali', kind: 'Spa', logo: '/partners/TEMPLE.png' },
  { name: 'Natura Organics', kind: 'Organic brand', logo: '/partners/NATURA.png' },
  { name: "In'Sens Sourcing", kind: 'Sourcing', logo: '/partners/INSENS.png' },
  { name: 'TYT', kind: 'Personal brand', logo: '/partners/TYT.png' },
  { name: "Lil' Bites", kind: 'Food brand', logo: '/partners/LILBITES.png' }
]

export default function Marquee() {
  return (
    <section
      aria-label="Partners and clients"
      className="relative py-14 md:py-20 border-y border-hair bg-surface/40"
    >
      <motion.div
        variants={staggerParent(0.08, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-xl mb-8 md:mb-10"
      >
        <motion.p
          variants={staggerItem}
          className="text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-sub"
        >
          Trusted by studios, restaurants and creators
        </motion.p>
      </motion.div>

      <div className="relative fade-x">
        <InfiniteSlider gap={72} duration={42} className="py-2">
          {partners.map((p) => (
            <div
              key={`mq-${p.name}`}
              className="flex items-center gap-3 px-2 whitespace-nowrap"
            >
              {p.logo && (
                <img
                  src={p.logo}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="h-9 md:h-11 w-auto object-contain brightness-0 opacity-75 dark:invert dark:opacity-85 shrink-0"
                />
              )}
              <span className="font-display font-semibold text-[20px] md:text-[26px] tracking-tight text-fg/85">
                {p.name}
              </span>
              <span className="text-[10.5px] font-medium uppercase tracking-wider text-sub">
                {p.kind}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
