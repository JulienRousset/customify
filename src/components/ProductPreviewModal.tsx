import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Maximize2, PlayCircle, X } from 'lucide-react'
import { openCalendly, preloadCalendly } from '../lib/calendly'

export interface ProductPreview {
  name: string
  description: string
  image?: string
  imageAlt?: string
  /** Optional video URL. When present, takes priority over the image in the
   *  modal's primary preview area. .mp4 or .webm recommended for cross-browser;
   *  .mov works in Chrome/Safari but not always in Firefox. */
  video?: string
  /** Optional poster image shown before the video starts loading. */
  videoPoster?: string
  /** Optional extra screenshots shown stacked below the primary preview. */
  gallery?: string[]
}

interface ProductPreviewModalProps {
  product: ProductPreview | null
  onClose: () => void
}

export default function ProductPreviewModal({ product, onClose }: ProductPreviewModalProps) {
  // Lightbox state — when set, shows a fullscreen zoom of a gallery image.
  const [zoomed, setZoomed] = useState<string | null>(null)

  // Reset zoom when the underlying product changes / modal closes.
  useEffect(() => {
    if (!product) setZoomed(null)
  }, [product])

  // Close on Escape + lock body scroll while open. Escape closes the zoom
  // first if it's open, otherwise the whole modal.
  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (zoomed) {
        setZoomed(null)
      } else {
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [product, onClose, zoomed])

  const book = () => {
    onClose()
    openCalendly()
  }

  return (
    <>
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

              {/* Scrollable body: primary preview, then content, then optional gallery */}
              <div className="overflow-y-auto">
                {/* Primary preview area — video takes priority, then image, then dotted placeholder */}
                <div className="relative aspect-[16/9] bg-black overflow-hidden border-b border-hair">
                  {product.video ? (
                    <video
                      key={product.video}
                      src={product.video}
                      poster={product.videoPoster ?? product.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="block w-full h-full object-cover bg-black"
                    >
                      Sorry, your browser doesn't support embedded videos.
                    </video>
                  ) : product.image ? (
                    <>
                      <img
                        src={product.image}
                        alt={product.imageAlt ?? product.name}
                        className="block w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 flex items-end justify-start p-5 pointer-events-none">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg/85 backdrop-blur text-[11px] font-semibold text-fg2 border border-hair shadow-sm">
                          <PlayCircle size={13} strokeWidth={1.8} />
                          Live walkthrough coming soon
                        </span>
                      </div>
                    </>
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
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
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

                {/* Optional gallery — additional screenshots, click to zoom */}
                {product.gallery && product.gallery.length > 0 && (
                  <div className="px-6 md:px-8 pb-8 space-y-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sub pt-4 border-t border-hair">
                      More views
                    </div>
                    {product.gallery.map((src, i) => (
                      <button
                        type="button"
                        key={`${src}-${i}`}
                        onClick={() => setZoomed(src)}
                        aria-label="Open full-size preview"
                        className="group relative block w-full rounded-xl overflow-hidden border border-hair bg-surface2 cursor-zoom-in hover:border-fg/30 transition-colors"
                      >
                        <img
                          src={src}
                          alt={`${product.name} screenshot ${i + 2}`}
                          loading="lazy"
                          className="block w-full h-auto group-hover:scale-[1.01] transition-transform duration-500"
                        />
                        {/* Zoom hint badge — appears on hover */}
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-bg/80 backdrop-blur text-[10.5px] font-semibold text-fg border border-hair opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 size={11} strokeWidth={2} />
                          Click to zoom
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image lightbox — layered above the product modal */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setZoomed(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
            role="dialog"
            aria-modal="true"
            aria-label="Zoomed preview"
          >
            <motion.img
              key={zoomed}
              src={zoomed}
              alt="Zoomed preview"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] cursor-default"
            />
            <button
              type="button"
              onClick={() => setZoomed(null)}
              aria-label="Close zoom"
              className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-all active:scale-95"
            >
              <X size={16} strokeWidth={1.8} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
