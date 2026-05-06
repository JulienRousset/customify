// CSS-only mockups, used wherever we want to *show* a system without a real
// screenshot. Sized to feel native to the surrounding card / section.

import type { ReactNode } from 'react'

/* ------------------------------ Browser frame ----------------------------- */

interface BrowserMockupProps {
  url?: string
  children: ReactNode
  className?: string
}

export function BrowserMockup({ url = 'app.customy.agency', children, className = '' }: BrowserMockupProps) {
  return (
    <div className={`rounded-2xl border border-hair bg-bg overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] ${className}`}>
      <div className="flex items-center gap-3 px-4 py-3 bg-surface2/60 border-b border-hair">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
        </div>
        <div className="flex-1 max-w-[280px] mx-auto">
          <div className="rounded-md bg-bg border border-hair text-[11px] text-sub px-3 py-1 text-center font-mono truncate">
            {url}
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  )
}

/* --------------------------- WhatsApp chat thread ------------------------- */

export interface WhatsAppMessage {
  from: 'them' | 'us' | 'bot'
  text: string
  time?: string
}

interface WhatsAppMockupProps {
  contactName: string
  contactRole?: string
  messages: WhatsAppMessage[]
  className?: string
}

export function WhatsAppMockup({ contactName, contactRole, messages, className = '' }: WhatsAppMockupProps) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-hair bg-[#0b141a] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#202c33] border-b border-black/30">
        <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[13px] font-semibold">
          {contactName.slice(0, 1)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-medium text-white truncate">{contactName}</div>
          {contactRole && <div className="text-[11px] text-white/60 truncate">{contactRole}</div>}
        </div>
      </div>
      {/* Messages */}
      <div className="px-4 py-5 space-y-2 bg-[#0b141a]" style={{ backgroundImage: 'radial-gradient(circle at 30% 10%, rgba(37,211,102,0.06), transparent 60%)' }}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === 'them' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 text-[12.5px] leading-[1.4] ${
                m.from === 'them'
                  ? 'bg-[#202c33] text-white rounded-tl-none'
                  : m.from === 'bot'
                  ? 'bg-[#005c4b] text-white rounded-tr-none border border-[#25D366]/30'
                  : 'bg-[#005c4b] text-white rounded-tr-none'
              }`}
            >
              {m.from === 'bot' && (
                <div className="text-[9px] uppercase tracking-[0.18em] text-[#25D366] font-semibold mb-1">Auto-reply</div>
              )}
              <div className="whitespace-pre-line">{m.text}</div>
              {m.time && (
                <div className="text-[9px] text-white/50 text-right mt-1">{m.time}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------ Dashboard KPI ----------------------------- */

export interface KpiTile {
  label: string
  value: string
  delta?: string
  positive?: boolean
}

interface KpiGridProps {
  tiles: KpiTile[]
  className?: string
}

export function KpiGrid({ tiles, className = '' }: KpiGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${className}`}>
      {tiles.map((t) => (
        <div key={t.label} className="rounded-xl border border-hair bg-surface2/40 p-4">
          <div className="text-[10px] uppercase tracking-[0.16em] text-sub font-semibold">{t.label}</div>
          <div className="font-display text-[22px] md:text-[24px] tracking-tight font-semibold mt-1.5">{t.value}</div>
          {t.delta && (
            <div className={`text-[11px] mt-1 font-medium ${t.positive ? 'text-[#34c759]' : 'text-[#ff3b30]'}`}>
              {t.positive ? '↑' : '↓'} {t.delta}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ----------------------- Simple list / pipeline rows ---------------------- */

export interface PipelineRow {
  label: string
  meta?: string
  status?: string
  statusColor?: 'green' | 'orange' | 'blue' | 'gray'
}

interface PipelineListProps {
  title: string
  rows: PipelineRow[]
  className?: string
}

const STATUS_CLASSES: Record<NonNullable<PipelineRow['statusColor']>, string> = {
  green: 'bg-[#34c759]/15 text-[#34c759]',
  orange: 'bg-[#ff9f0a]/15 text-[#ff9f0a]',
  blue: 'bg-[#0a84ff]/15 text-[#0a84ff]',
  gray: 'bg-sub/15 text-sub'
}

export function PipelineList({ title, rows, className = '' }: PipelineListProps) {
  return (
    <div className={`rounded-xl border border-hair bg-surface2/40 ${className}`}>
      <div className="px-4 py-3 border-b border-hair text-[11px] uppercase tracking-[0.16em] text-sub font-semibold">
        {title}
      </div>
      <div className="divide-y divide-hair">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5">
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-fg truncate">{r.label}</div>
              {r.meta && <div className="text-[11px] text-sub truncate">{r.meta}</div>}
            </div>
            {r.status && (
              <span
                className={`text-[10px] font-semibold uppercase tracking-[0.12em] px-2 py-1 rounded-full ${
                  STATUS_CLASSES[r.statusColor ?? 'gray']
                }`}
              >
                {r.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* -------------------------- Phone with notification ----------------------- */

interface PhoneNotificationProps {
  app: string
  title: string
  body: string
  time?: string
  className?: string
}

export function PhoneNotification({ app, title, body, time = 'now', className = '' }: PhoneNotificationProps) {
  return (
    <div className={`flex items-start gap-3 p-3.5 rounded-2xl bg-white/85 dark:bg-white/10 backdrop-blur-2xl border border-hair shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ${className}`}>
      <div className="shrink-0 w-9 h-9 rounded-xl bg-fg text-bg flex items-center justify-center text-[10px] font-semibold uppercase tracking-[0.1em]">
        {app.slice(0, 2)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="text-[11.5px] font-semibold text-fg truncate">{app}</div>
          <div className="text-[10.5px] text-sub shrink-0">{time}</div>
        </div>
        <div className="text-[12.5px] font-medium text-fg mt-0.5 leading-[1.3]">{title}</div>
        <div className="text-[12px] text-fg2 mt-0.5 leading-[1.4]">{body}</div>
      </div>
    </div>
  )
}
