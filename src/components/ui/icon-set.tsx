import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface IconGridItem {
  id: string
  icon: React.ReactNode
  name: string
}

export interface IconGridProps {
  items: IconGridItem[]
  className?: string
  /** Square cell size in px. Defaults to 88. */
  cellSize?: number
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 14
    }
  }
}

/**
 * IconGrid — clean, monochrome, no rainbow.
 * Uses Customy tokens (bg-surface2, border-hair) and matches the bespoke voice.
 */
export const IconGrid = React.forwardRef<HTMLDivElement, IconGridProps>(
  ({ items, className, cellSize = 88 }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={cn(
          'grid grid-cols-3 gap-3 text-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9',
          className
        )}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group relative flex flex-col items-center justify-center"
            aria-label={item.name}
            title={item.name}
          >
            <div
              className="flex items-center justify-center rounded-[10px] border border-hair bg-surface2/60 transition-all duration-300 ease-out hover:bg-surface2 hover:border-fg/25 hover:-translate-y-0.5"
              style={{ width: cellSize, height: cellSize }}
            >
              {item.icon}
            </div>
            <div className="mt-2 text-[10.5px] font-medium uppercase tracking-[0.14em] text-sub group-hover:text-fg transition-colors">
              {item.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  }
)

IconGrid.displayName = 'IconGrid'
