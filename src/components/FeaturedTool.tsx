import { motion } from 'framer-motion'
import { ArrowRight, Check, Users } from 'lucide-react'
import { useLang } from '../lang'

// Decorative QR pattern. Not a real scannable code.
const QR_SIZE = 21
const seed = (x: number, y: number) => {
  const v = Math.sin(x * 928.37 + y * 431.11 + 5.7) * 10000
  return v - Math.floor(v)
}
const isFinder = (x: number, y: number) => {
  const inBox = (bx: number, by: number) => x >= bx && x < bx + 7 && y >= by && y < by + 7
  return inBox(0, 0) || inBox(QR_SIZE - 7, 0) || inBox(0, QR_SIZE - 7)
}
const isFinderInner = (x: number, y: number) => {
  const inInner = (bx: number, by: number) => x >= bx + 1 && x < bx + 6 && y >= by + 1 && y < by + 6
  return inInner(0, 0) || inInner(QR_SIZE - 7, 0) || inInner(0, QR_SIZE - 7)
}
const isFinderCore = (x: number, y: number) => {
  const inCore = (bx: number, by: number) => x >= bx + 2 && x < bx + 5 && y >= by + 2 && y < by + 5
  return inCore(0, 0) || inCore(QR_SIZE - 7, 0) || inCore(0, QR_SIZE - 7)
}

function QR() {
  const cells: JSX.Element[] = []
  for (let y = 0; y < QR_SIZE; y++) {
    for (let x = 0; x < QR_SIZE; x++) {
      if (isFinder(x, y)) {
        if (!isFinderInner(x, y) || isFinderCore(x, y)) {
          cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#0b0b0f" />)
        }
        continue
      }
      if (seed(x, y) > 0.55) {
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#0b0b0f" />)
      }
    }
  }
  return (
    <svg viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`} className="w-full h-full" shapeRendering="crispEdges">
      <rect width={QR_SIZE} height={QR_SIZE} fill="#fff" />
      {cells}
    </svg>
  )
}

const AVATAR_PALETTE = ['#0071e3', '#34c759', '#ff9f0a', '#af52de', '#ff375f', '#5ac8fa']
const AVATAR_LETTERS = ['A', 'L', 'M', 'C', 'R', 'S']

export default function FeaturedTool() {
  const { t } = useLang()
  const f = t.featured

  const total = 428
  const delivered = 428
  const read = 391
  const replied = 84

  const rows = [
    { label: f.delivered, n: delivered, color: '#0071e3' },
    { label: f.read, n: read, color: '#34c759' },
    { label: f.replied, n: replied, color: '#ff9f0a' }
  ]

  // Render template message with the {firstname} token highlighted.
  const parts = f.templateText.split(/(\{firstname\})/g)

  return (
    <section id="tool" className="relative py-20 md:py-32 bg-surface overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="col-span-12 lg:col-span-6">
            <div className="eyebrow-sub">{f.eyebrow}</div>
            <h2 className="font-display text-giga tracking-tightest">
              {f.h2a}<br />
              <span className="text-accent">{f.h2b}</span>
            </h2>
            <p className="mt-5 md:mt-6 body-lg max-w-xl">{f.sub}</p>

            <ul className="mt-6 md:mt-8 space-y-3 max-w-xl">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] md:text-[15.5px] text-fg2">
                  <span className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-accent" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-10">
              <a href="#contact" className="btn-primary">
                {f.cta} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Broadcast console + QR */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-accent/15 blur-3xl rounded-full opacity-60 pointer-events-none" aria-hidden />

              {/* Composer card */}
              <div className="relative card p-4 sm:p-5 md:p-7 shadow-float">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-hair">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#075E54] text-white text-[11px] md:text-[12px] font-semibold flex items-center justify-center shrink-0">MC</span>
                    <div className="min-w-0">
                      <div className="text-[11px] text-sub tracking-wide">{f.consoleTitle}</div>
                      <div className="font-display text-[15px] md:text-[16px] font-semibold leading-tight truncate">{f.fromBrand}</div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-[11px] text-sub font-mono whitespace-nowrap shrink-0">{f.sentAt}</div>
                </div>

                {/* Recipients */}
                <div className="flex items-center flex-wrap gap-x-3 gap-y-2 py-4 md:py-5 border-b border-hair">
                  <div className="flex items-center gap-2 shrink-0">
                    <Users size={14} className="text-sub" />
                    <span className="text-[12px] text-sub">{f.to}</span>
                  </div>
                  <div className="flex -space-x-2 shrink-0">
                    {AVATAR_LETTERS.map((letter, i) => (
                      <span
                        key={i}
                        className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-bg flex items-center justify-center text-[9.5px] md:text-[10px] text-white font-semibold"
                        style={{ background: AVATAR_PALETTE[i] }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <div className="text-[12.5px] md:text-[13px] text-fg2 leading-tight basis-full sm:basis-auto min-w-0">
                    <span className="font-medium text-fg">{f.allClients}</span>
                    <span className="text-sub"> · {f.contacts(total)}</span>
                  </div>
                </div>

                {/* Template */}
                <div className="pt-4 md:pt-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="text-[11px] text-sub tracking-wide">{f.template}</div>
                    <div className="text-[10px] text-accent font-mono uppercase truncate">{'{firstname}'}</div>
                  </div>
                  <div className="bg-surface rounded-xl2 p-3.5 md:p-4 text-[13.5px] md:text-[14.5px] text-fg leading-[1.55] break-words">
                    {parts.map((p, i) =>
                      p === '{firstname}' ? (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-md bg-accent/12 text-accent px-1.5 py-0.5 mx-0.5 text-[12px] md:text-[12.5px] font-mono"
                        >
                          {f.tokenLabel}
                        </span>
                      ) : (
                        <span key={i}>{p}</span>
                      )
                    )}
                  </div>
                </div>

                {/* Delivery */}
                <div className="mt-5 md:mt-6 pt-4 md:pt-5 border-t border-hair">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="text-[11px] text-sub tracking-wide">{f.delivery}</div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-accent font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> live
                    </span>
                  </div>
                  <div className="space-y-3">
                    {rows.map((r) => (
                      <div key={r.label}>
                        <div className="flex justify-between items-center gap-2 text-[12px] mb-1.5">
                          <span className="text-fg2 truncate">{r.label}</span>
                          <span className="text-sub font-mono tabular-nums shrink-0">{r.n} / {total}</span>
                        </div>
                        <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: r.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(r.n / total) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* QR card, offset on xl */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="hidden xl:block absolute -right-8 -bottom-12 w-44 card p-3 shadow-float bg-bg"
              >
                <div className="aspect-square w-full rounded-xl2 bg-white border border-hair p-2">
                  <QR />
                </div>
                <div className="mt-2 text-center text-[11px] font-medium text-fg leading-tight">{f.qrLabel}</div>
                <div className="mt-0.5 text-center text-[10px] text-sub leading-tight">{f.qrHint}</div>
              </motion.div>

              {/* Inline QR below composer on everything except xl */}
              <div className="xl:hidden mt-4 md:mt-5 card p-3.5 md:p-4 flex items-center gap-3 md:gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl2 bg-white border border-hair p-1.5 shrink-0">
                  <QR />
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] md:text-[13.5px] font-medium text-fg leading-tight">{f.qrLabel}</div>
                  <div className="text-[11.5px] md:text-[12px] text-sub mt-1 leading-snug">{f.qrHint}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
