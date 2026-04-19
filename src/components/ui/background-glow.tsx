import { cn } from '@/lib/utils'

export function BackgroundGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('fixed inset-0 pointer-events-none', className)}
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 70% at 50% 15%, rgba(96, 165, 250, 0.55), transparent 62%),
            radial-gradient(ellipse 60% 55% at 12% 58%, rgba(186, 230, 253, 0.55), transparent 68%),
            radial-gradient(ellipse 65% 60% at 88% 78%, rgba(147, 197, 253, 0.55), transparent 68%),
            radial-gradient(ellipse 70% 45% at 50% 105%, rgba(165, 180, 252, 0.4), transparent 70%)
          `,
        }}
      />
    </div>
  )
}

export default BackgroundGlow
