import { motion } from 'framer-motion'
import { useLang } from '../lang'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { staggerItem, staggerParent, viewportOnce } from './fx/motion'

export default function Marquee() {
  const { t } = useLang()
  const items = t.clients.items

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
        <InfiniteSlider gap={64} duration={36} className="py-2">
          {items.map((item) => (
            <div
              key={`mq-${item.name}`}
              className="flex items-center gap-3 px-2 whitespace-nowrap"
            >
              <span className="font-display font-semibold text-[20px] md:text-[26px] tracking-tight text-fg/85">
                {item.name}
              </span>
              <span className="text-[10.5px] font-medium uppercase tracking-wider text-sub">
                {item.kind.split(',')[0]}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
