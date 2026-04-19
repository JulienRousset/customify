import { motion } from 'framer-motion'
import { ArrowRight, Check, Users, Sparkles, MessageCircle, Instagram, Mail, Smartphone } from 'lucide-react'
import { useLang } from '../lang'
import ScrambleText from './fx/ScrambleText'
import TiltCard from './fx/TiltCard'
import MagneticButton from './fx/MagneticButton'

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
          cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#191970" />)
        }
        continue
      }
      if (seed(x, y) > 0.55) {
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#191970" />)
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

const AVATAR_PALETTE = ['#191970', '#2E7D5C', '#D4A05C', '#6E4BA5', '#C84A5E', '#0F0F55']
const AVATAR_LETTERS = ['A', 'L', 'M', 'C', 'R', 'S']

export default function FeaturedTool() {
  const { t } = useLang()
  const f = t.featured

  const total = 428
  const delivered = 428
  const read = 391
  const replied = 84

  const rows = [
    { label: f.delivered, n: delivered, color: '#191970' },
    { label: f.read, n: read, color: '#2E7D5C' },
    { label: f.replied, n: replied, color: '#D4A05C' }
  ]

  const parts = f.templateText.split(/(\{firstname\})/g)

  return (
    <section id="tool" className="relative py-20 md:py-28 bg-surface overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(25,25,112,0.20), transparent 60%)', transform: 'translate(-30%, -30%)' }}
      />

      <div className="container-xl relative">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="eyebrow">
              <span className="inline-flex items-center gap-2">
                <Sparkles size={12} /> {f.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-giga tracking-tightest text-balance">
              <ScrambleText text={f.h2a} className="block" />
              <span className="serif-italic text-accent block mt-1">
                <ScrambleText text={f.h2b} />
              </span>
            </h2>
            <p className="mt-6 body-md max-w-xl">{f.sub}</p>

            <ul className="mt-8 md:mt-10 space-y-4 max-w-xl">
              {f.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 text-[15px] text-fg2 border-b border-hair pb-4"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center text-[12px] font-medium text-accent shrink-0 w-6 h-6 rounded-full bg-accent/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="leading-[1.55]">{b}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <MagneticButton
                href="#contact"
                strength={12}
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent text-white px-7 py-4 text-[15px] font-medium relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-accentDark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 inline-flex items-center gap-2.5">
                  {f.cta} <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </MagneticButton>
              <div className="text-[12.5px] text-sub">
                <span className="text-accent font-medium">Free consultation</span> · 24h reply
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-hair">
              <div className="text-[11px] uppercase tracking-[0.24em] text-sub mb-5 font-medium">Also works with</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { Icon: MessageCircle, label: 'WhatsApp', tint: '#25D366' },
                  { Icon: Instagram, label: 'Instagram', tint: '#E1306C' },
                  { Icon: Mail, label: 'Email', tint: '#191970' },
                  { Icon: Smartphone, label: 'SMS', tint: '#D4A05C' }
                ].map(({ Icon, label, tint }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl2 bg-bg border border-hair px-3 py-2.5"
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${tint}16`, color: tint }}
                    >
                      <Icon size={13} strokeWidth={2} />
                    </span>
                    <span className="text-[13px] font-medium text-fg truncate">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-px bg-hair rounded-xl3 overflow-hidden border border-hair">
                <div className="bg-bg p-4">
                  <div className="font-display text-[22px] md:text-[26px] font-semibold leading-none tracking-tight tabular-nums">428</div>
                  <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.22em] text-sub font-medium leading-tight">contacts</div>
                </div>
                <div className="bg-bg p-4">
                  <div className="font-display text-[22px] md:text-[26px] font-semibold leading-none tracking-tight tabular-nums">91<span className="serif-italic text-accent">%</span></div>
                  <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.22em] text-sub font-medium leading-tight">read rate</div>
                </div>
                <div className="bg-bg p-4">
                  <div className="font-display text-[22px] md:text-[26px] font-semibold leading-none tracking-tight tabular-nums">&lt;2<span className="serif-italic text-accent">s</span></div>
                  <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.22em] text-sub font-medium leading-tight">to send</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative"
            >
              <div aria-hidden className="absolute -inset-12 bg-accent/15 blur-3xl rounded-full opacity-60 pointer-events-none" />

              <TiltCard max={4} className="relative">
                <div className="relative card p-5 sm:p-6 md:p-8 shadow-float">
                  <div className="flex items-start justify-between gap-3 pb-5 border-b border-hair">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-10 h-10 rounded-full bg-[#075E54] text-white text-[12px] font-semibold flex items-center justify-center shrink-0">MC</span>
                      <div className="min-w-0">
                        <div className="text-[11px] text-sub uppercase tracking-[0.22em] font-medium">{f.consoleTitle}</div>
                        <div className="font-display text-[16px] md:text-[18px] font-semibold leading-tight truncate mt-0.5">{f.fromBrand}</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                      <div className="text-[11px] text-sub tracking-[0.2em] uppercase font-medium">{f.sentAt}</div>
                    </div>
                  </div>

                  <div className="flex items-center flex-wrap gap-x-4 gap-y-2 py-5 border-b border-hair">
                    <div className="flex items-center gap-2 shrink-0">
                      <Users size={14} className="text-sub" />
                      <span className="text-[11px] text-sub uppercase tracking-[0.22em] font-medium">{f.to}</span>
                    </div>
                    <div className="flex -space-x-2 shrink-0">
                      {AVATAR_LETTERS.map((letter, i) => (
                        <span
                          key={i}
                          className="w-7 h-7 rounded-full border-2 border-bg flex items-center justify-center text-[10px] text-white font-semibold shadow-soft"
                          style={{ background: AVATAR_PALETTE[i] }}
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                    <div className="text-[13px] md:text-[13.5px] text-fg2 leading-tight basis-full sm:basis-auto min-w-0">
                      <span className="font-medium text-fg">{f.allClients}</span>
                      <span className="text-sub"> · {f.contacts(total)}</span>
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="text-[11px] text-sub uppercase tracking-[0.22em] font-medium">{f.template}</div>
                      <div className="text-[11px] text-accent uppercase tracking-[0.2em] font-medium">{'{firstname}'}</div>
                    </div>
                    <div className="relative bg-surface2 rounded-xl2 p-4 text-[14px] md:text-[14.5px] text-fg leading-[1.55] break-words border border-hair">
                      {parts.map((p, i) =>
                        p === '{firstname}' ? (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-md bg-accent/12 text-accent px-1.5 py-0.5 mx-0.5 text-[12.5px] font-medium"
                          >
                            {f.tokenLabel}
                          </span>
                        ) : (
                          <span key={i}>{p}</span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-hair">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[11px] text-sub uppercase tracking-[0.22em] font-medium">{f.delivery}</div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-accent font-medium uppercase tracking-[0.2em]">
                        <span className="relative flex w-1.5 h-1.5">
                          <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
                          <span className="absolute inset-0 rounded-full bg-accent" />
                        </span>
                        live
                      </span>
                    </div>
                    <div className="space-y-3.5">
                      {rows.map((r, i) => (
                        <div key={r.label}>
                          <div className="flex justify-between items-center gap-2 text-[12px] mb-1.5">
                            <span className="text-fg2 font-medium">{r.label}</span>
                            <span className="text-sub tabular-nums shrink-0">
                              <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.15 }}
                              >
                                {r.n} / {total}
                              </motion.span>
                            </span>
                          </div>
                          <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full relative"
                              style={{ background: r.color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(r.n / total) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.3, delay: 0.2 + i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                            >
                              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: r.color, boxShadow: `0 0 8px ${r.color}` }} />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="hidden xl:block absolute -right-10 -bottom-14 w-48 card p-3 shadow-float bg-bg"
              >
                <div className="relative aspect-square w-full rounded-xl2 bg-white border border-hair p-2 overflow-hidden">
                  <QR />
                </div>
                <div className="mt-2.5 text-center text-[12px] font-medium text-fg leading-tight">{f.qrLabel}</div>
                <div className="mt-0.5 text-center text-[11px] text-sub leading-tight">{f.qrHint}</div>
              </motion.div>

              <div className="xl:hidden mt-4 card p-4 flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl2 bg-white border border-hair p-1.5 shrink-0">
                  <QR />
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-medium text-fg leading-tight">{f.qrLabel}</div>
                  <div className="text-[12px] text-sub mt-1 leading-snug">{f.qrHint}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
