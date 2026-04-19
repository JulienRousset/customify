import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, FileSpreadsheet, Sparkles, AlertCircle, RotateCcw, ShieldCheck, Cpu } from 'lucide-react'
import Dashboard from './Dashboard'
import { parseFile, type ParsedWorkbook } from '../lib/parseExcel'
import { getDemoWorkbook } from '../lib/demoData'
import { useLang } from '../lang'

export default function Demo() {
  const { t } = useLang()
  const d = t.demo
  const [wb, setWb] = useState<ParsedWorkbook | null>(null)
  const [activeSheet, setActiveSheet] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [dragging, setDragging] = useState(false)

  const handleFile = useCallback(async (file: File) => {
    setError(null); setLoading(true)
    try {
      const parsed = await parseFile(file)
      if (!parsed.sheets.length || !parsed.sheets[0].rows.length) {
        setError(d.errorEmpty)
      } else { setWb(parsed); setActiveSheet(0) }
    } catch { setError(d.errorParse) }
    finally { setLoading(false) }
  }, [d.errorEmpty, d.errorParse])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const loadDemo = () => { setWb(getDemoWorkbook()); setActiveSheet(0); setError(null) }
  const reset = () => { setWb(null); setError(null) }

  return (
    <section id="demo" className="relative py-24 md:py-32 bg-surface">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <div className="eyebrow-sub">{d.eyebrow}</div>
          <h2 className="font-display text-giga tracking-tightest">
            {d.h2a}<br />
            <span className="text-accent">{d.h2b}</span>
          </h2>
          <p className="mt-5 body-lg">{d.sub}</p>
        </div>

        {!wb && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-5"
          >
            <label
              onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              className={`lg:col-span-3 block cursor-pointer rounded-xl3 bg-bg border transition-all duration-300
              ${dragging ? 'border-accent shadow-float scale-[1.005]' : 'border-hair hover:border-fg/25 hover:shadow-soft'}`}
            >
              <input type="file" accept=".xlsx,.xls,.csv,.ods" className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
              <div className="p-14 md:p-20 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-surface flex items-center justify-center mb-6">
                  <Upload size={22} className="text-fg" strokeWidth={2} />
                </div>
                <h3 className="font-display text-huge tracking-tight">{d.dropTitle}</h3>
                <p className="mt-3 text-fg2 text-[15px] max-w-md mx-auto">
                  {d.dropSub}
                </p>
                <div className="mt-8 inline-flex items-center gap-3 flex-wrap justify-center">
                  <span className="btn-primary pointer-events-none">
                    <FileSpreadsheet size={16} /> {d.choose}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); loadDemo() }}
                    className="btn-outline"
                  >
                    <Sparkles size={14} /> {d.tryDemo}
                  </button>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-[12px] text-sub">
                  <ShieldCheck size={13} className="text-accent" />
                  {d.privacy}
                </div>

                {loading && <div className="mt-6 text-sm text-sub">{d.parsing}</div>}
                {error && (
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#ff3b30]">
                    <AlertCircle size={16} /> {error}
                  </div>
                )}
              </div>
            </label>

            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              <div className="card p-7 flex-1">
                <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center mb-4">
                  <Cpu size={16} />
                </div>
                <h4 className="font-display text-[17px] font-semibold mb-1.5">{d.whatTitle}</h4>
                <ol className="text-[14.5px] text-fg2 leading-[1.65] space-y-1.5 mt-4">
                  {d.what.map((line, i) => (
                    <li key={i}><span className="font-mono text-accent text-[12px] mr-2">0{i + 1}</span>{line}</li>
                  ))}
                </ol>
              </div>
              <div className="card p-7">
                <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center mb-4">
                  <ShieldCheck size={16} />
                </div>
                <h4 className="font-display text-[17px] font-semibold mb-1.5">{d.privateTitle}</h4>
                <p className="text-[14.5px] text-fg2 leading-[1.65]">
                  {d.privateBody}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {wb && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="card p-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center">
                  <FileSpreadsheet size={18} className="text-fg" />
                </div>
                <div>
                  <div className="font-medium">{wb.fileName}</div>
                  <div className="text-[12px] text-sub font-mono">
                    {d.sheets(wb.sheets.length)}
                    {' · '}{d.rows(wb.sheets[activeSheet].rows.length)}
                    {' · '}{d.cols(wb.sheets[activeSheet].columns.length)}
                  </div>
                </div>
              </div>
              <button onClick={reset} className="btn-outline text-[13.5px] px-4 py-2">
                <RotateCcw size={14} /> {d.newFile}
              </button>
            </div>

            {wb.sheets.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {wb.sheets.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setActiveSheet(i)}
                    className={`px-4 py-1.5 rounded-full text-[13px] border transition ${
                      i === activeSheet
                        ? 'bg-fg text-bg border-fg'
                        : 'bg-bg text-fg2 border-hair hover:border-fg/40'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            )}

            <Dashboard sheet={wb.sheets[activeSheet]} />
          </motion.div>
        )}
      </div>
    </section>
  )
}
