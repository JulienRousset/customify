import { useEffect, useState } from 'react'

const items = [
  { k: 'OPS', v: 'NOMINAL' },
  { k: 'LAT', v: '11ms' },
  { k: 'PIPE', v: '6/6 LIVE' },
  { k: 'AGENT', v: 'REPLYING' },
  { k: 'QUEUE', v: '0 BACKLOG' },
  { k: 'UPTIME', v: '99.97%' },
  { k: 'RGN', v: 'BALI · PAR' }
]

function Clock() {
  const [now, setNow] = useState('')
  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const hh = String(d.getUTCHours()).padStart(2, '0')
      const mm = String(d.getUTCMinutes()).padStart(2, '0')
      const ss = String(d.getUTCSeconds()).padStart(2, '0')
      setNow(`${hh}:${mm}:${ss} UTC`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="tabular-nums">{now}</span>
}

export default function Ticker() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 h-6 flex items-center overflow-hidden font-mono text-[10px] uppercase tracking-[0.22em] text-sub bg-bg/70 backdrop-blur-md border-b border-hair"
      aria-hidden
    >
      <div className="flex items-center gap-3 px-4 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
        <Clock />
        <span className="text-sub/60">·</span>
        <span className="text-fg">CUSTOMIFY / OPERATOR</span>
      </div>
      <div className="flex-1 overflow-hidden fade-x">
        <div className="flex animate-marquee-x-slow whitespace-nowrap gap-10">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex shrink-0 items-center gap-10">
              {items.map((it, i) => (
                <span key={`${loop}-${i}`} className="flex items-center gap-2">
                  <span className="text-sub/50">{it.k}</span>
                  <span className="text-fg">{it.v}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
