import { useMemo, useState } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import type { ParsedSheet } from '../lib/parseExcel'
import { aggregateBy, formatNumber, summarize } from '../lib/parseExcel'
import { useLang } from '../lang'

const COLORS = ['#0071e3', '#34c759', '#ff9f0a', '#af52de', '#ff375f', '#5ac8fa']

interface Props { sheet: ParsedSheet }

export default function Dashboard({ sheet }: Props) {
  const { t } = useLang()
  const d = t.dashboard
  const [metric, setMetric] = useState(sheet.numericColumns[0] ?? '')
  const [groupBy, setGroupBy] = useState(sheet.categoricalColumns[0] ?? '')
  const [secondaryGroup, setSecondaryGroup] = useState(
    sheet.categoricalColumns[1] ?? sheet.categoricalColumns[0] ?? ''
  )

  const stats = useMemo(() => summarize(sheet.rows, metric), [sheet.rows, metric])
  const primary = useMemo(
    () => aggregateBy(sheet.rows, groupBy, metric, 10),
    [sheet.rows, groupBy, metric]
  )
  const secondary = useMemo(
    () => aggregateBy(sheet.rows, secondaryGroup, metric, 6),
    [sheet.rows, secondaryGroup, metric]
  )

  if (!metric || !groupBy) {
    return (
      <div className="card p-10 text-center text-sub">
        {d.notEnough}
      </div>
    )
  }

  const kpis = [
    { label: `${d.total} ${metric}`, value: formatNumber(stats.total) },
    { label: d.average, value: formatNumber(stats.avg) },
    { label: d.records, value: formatNumber(stats.count) },
    { label: d.peak, value: formatNumber(stats.max) }
  ]

  const Select = ({ value, onChange, options, label }: {
    value: string; onChange: (v: string) => void; options: string[]; label: string
  }) => (
    <label className="flex items-center gap-2 text-[13px]">
      <span className="text-sub">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-surface border border-hair rounded-full px-3 py-1.5 text-fg hover:bg-hair cursor-pointer outline-none focus:border-accent/50 transition"
      >
        {options.map((c) => <option key={c}>{c}</option>)}
      </select>
    </label>
  )

  const tooltipStyle = {
    background: '#1d1d1f',
    border: 'none',
    borderRadius: 12,
    color: '#fff',
    fontFamily: 'Geist, sans-serif',
    fontSize: 12,
    padding: '8px 12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.18)'
  }

  return (
    <div className="space-y-4">
      {/* Controls bar */}
      <div className="card p-4 flex flex-wrap items-center gap-4">
        <Select value={metric} onChange={setMetric} options={sheet.numericColumns} label={d.metric} />
        <span className="w-px h-4 bg-hair hidden md:block" />
        <Select value={groupBy} onChange={setGroupBy} options={sheet.categoricalColumns} label={d.group} />
        <span className="w-px h-4 bg-hair hidden md:block" />
        <Select value={secondaryGroup} onChange={setSecondaryGroup} options={sheet.categoricalColumns} label={d.split} />
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="card p-5">
            <div className="text-[12px] text-sub tracking-wide">{k.label}</div>
            <div className="mt-2 font-display text-3xl md:text-[32px] font-semibold tracking-tight tabular-nums">
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Charts, 2/3 + 1/3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <div className="text-[12px] text-sub">{metric} {d.by} {groupBy}</div>
              <h4 className="font-display text-lg font-semibold mt-0.5">{d.topPerformers}</h4>
            </div>
            <div className="text-[11px] text-sub font-mono">{d.top10}</div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={primary} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
                <defs>
                  <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0071e3" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0071e3" stopOpacity={0.65} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 4" stroke="#1d1d1f" opacity={0.07} vertical={false} />
                <XAxis dataKey="name" stroke="#6e6e73" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#6e6e73" fontSize={11} tickLine={false} axisLine={false} tickFormatter={formatNumber} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: '#0071e3', opacity: 0.06 }} formatter={(v: number) => formatNumber(v)} />
                <Bar dataKey="value" fill="url(#barFill)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-[12px] text-sub">{d.share} {secondaryGroup}</div>
          <h4 className="font-display text-lg font-semibold mt-0.5 mb-4">{d.breakdown}</h4>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={secondary} dataKey="value" nameKey="name" innerRadius={48} outerRadius={84} paddingAngle={2} strokeWidth={2} stroke="#fff">
                  {secondary.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => formatNumber(v)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 space-y-2">
            {secondary.slice(0, 5).map((row, i) => (
              <div key={row.name} className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-2 text-fg2">
                  <span className="w-2 h-2 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                  {row.name}
                </span>
                <span className="font-mono text-sub tabular-nums">{formatNumber(row.value)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trend */}
      <div className="card p-6">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <div className="text-[12px] text-sub">{d.trajectory}</div>
            <h4 className="font-display text-lg font-semibold mt-0.5">{metric} {d.over} {groupBy}</h4>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={primary} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0071e3" stopOpacity={0.28} />
                  <stop offset="100%" stopColor="#0071e3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 4" stroke="#1d1d1f" opacity={0.07} vertical={false} />
              <XAxis dataKey="name" stroke="#6e6e73" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#6e6e73" fontSize={11} tickLine={false} axisLine={false} tickFormatter={formatNumber} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => formatNumber(v)} />
              <Area type="monotone" dataKey="value" stroke="#0071e3" strokeWidth={2.5} fill="url(#areaFill)"
                dot={{ fill: '#fff', stroke: '#0071e3', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#0071e3', stroke: '#fff', strokeWidth: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
