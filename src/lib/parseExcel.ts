import * as XLSX from 'xlsx'

export type Row = Record<string, string | number | null>

export interface ParsedSheet {
  name: string
  columns: string[]
  numericColumns: string[]
  categoricalColumns: string[]
  dateColumns: string[]
  rows: Row[]
}

export interface ParsedWorkbook {
  sheets: ParsedSheet[]
  fileName: string
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}/

function classifyColumn(rows: Row[], col: string): 'numeric' | 'date' | 'categorical' {
  let numeric = 0, date = 0, total = 0
  for (const r of rows) {
    const v = r[col]
    if (v === null || v === undefined || v === '') continue
    total++
    if (typeof v === 'number') numeric++
    else if (typeof v === 'string' && DATE_RE.test(v)) date++
  }
  if (total === 0) return 'categorical'
  if (numeric / total > 0.7) return 'numeric'
  if (date / total > 0.7) return 'date'
  return 'categorical'
}

export async function parseFile(file: File): Promise<ParsedWorkbook> {
  const buf = await file.arrayBuffer()
  const wb = XLSX.read(buf, { type: 'array', cellDates: true })

  const sheets: ParsedSheet[] = wb.SheetNames.map((name) => {
    const ws = wb.Sheets[name]
    const rows = XLSX.utils.sheet_to_json<Row>(ws, { defval: null, raw: true })
    const columns = rows.length ? Object.keys(rows[0]) : []

    const numericColumns: string[] = []
    const categoricalColumns: string[] = []
    const dateColumns: string[] = []

    for (const col of columns) {
      const kind = classifyColumn(rows, col)
      if (kind === 'numeric') numericColumns.push(col)
      else if (kind === 'date') dateColumns.push(col)
      else categoricalColumns.push(col)
    }

    return { name, columns, numericColumns, categoricalColumns, dateColumns, rows }
  })

  return { sheets, fileName: file.name }
}

export function aggregateBy(rows: Row[], groupBy: string, metric: string, limit = 12) {
  const map = new Map<string, number>()
  for (const r of rows) {
    const key = String(r[groupBy] ?? '(unknown)')
    const val = Number(r[metric])
    if (Number.isFinite(val)) map.set(key, (map.get(key) ?? 0) + val)
  }
  return [...map.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit)
}

export function summarize(rows: Row[], metric: string) {
  const vals = rows.map((r) => Number(r[metric])).filter((n) => Number.isFinite(n))
  if (!vals.length) return { total: 0, avg: 0, max: 0, min: 0, count: 0 }
  const total = vals.reduce((a, b) => a + b, 0)
  return {
    total,
    avg: total / vals.length,
    max: Math.max(...vals),
    min: Math.min(...vals),
    count: vals.length
  }
}

export function formatNumber(n: number) {
  if (Math.abs(n) >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (Math.abs(n) >= 1_000) return (n / 1_000).toFixed(1) + 'K'
  if (Number.isInteger(n)) return n.toString()
  return n.toFixed(2)
}
