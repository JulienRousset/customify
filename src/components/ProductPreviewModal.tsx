import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, PlayCircle, X } from 'lucide-react'
import { openCalendly, preloadCalendly } from '../lib/calendly'

export interface ProductPreview {
  name: string
  description: string
  image?: string
  imageAlt?: string
}

interface ProductPreviewModalProps {
  product: ProductPreview | null
  onClose: () => void
}

export default function ProductPreviewModal({ product, onClose }: ProductPreviewModalProps) {
  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [product, onClose])

  const book = () => {
    onClose()
    openCalendly()
  }

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-bg/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative card w-full max-w-3xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] max-h-[90vh] flex flex-col"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-hair bg-bg/80 backdrop-blur flex items-center justify-center text-sub hover:text-fg hover:border-fg/30 transition-all active:scale-95"
            >
              <X size={15} strokeWidth={1.8} />
            </button>

            {/* Preview area: image now, video later */}
            <div className="relative aspect-[16/9] bg-surface2 overflow-hidden border-b border-hair">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.imageAlt ?? product.name}
                  className="block w-full h-full object-cover object-top"
                />
              ) : (
                <div
                  aria-hidden
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgb(var(--color-sub) / 0.18) 1px, transparent 1px)',
                    backgroundSize: '14px 14px'
                  }}
                />
              )}
              {/* "Video coming soon" overlay */}
              <div className="absolute inset-0 flex items-end justify-start p-5 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg/85 backdrop-blur text-[11px] font-semibold text-fg2 border border-hair shadow-sm">
                  <PlayCircle size={13} strokeWidth={1.8} />
                  Live walkthrough coming soon
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <h3
                id="product-modal-title"
                className="font-display font-semibold text-[24px] md:text-[28px] tracking-tight leading-[1.1]"
              >
                {product.name}
              </h3>
              <p className="mt-3 text-[14px] md:text-[15px] text-fg2 leading-[1.6] text-pretty">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={book}
                  onMouseEnter={preloadCalendly}
                  onFocus={preloadCalendly}
                  className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-[14.5px] font-semibold tracking-tight hover:opacity-90 transition-opacity"
                >
                  Book an audit
                  <ArrowUpRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-[13px] font-medium text-sub hover:text-fg transition-colors px-2"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
