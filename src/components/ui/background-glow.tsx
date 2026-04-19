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
            radial-gradient(ellipse 80% 70% at 50% 15%, rgba(255, 159, 10, 0.25), transparent 62%),
            radial-gradient(ellipse 60% 55% at 12% 58%, rgba(255, 55, 95, 0.2), transparent 68%),
            radial-gradient(ellipse 65% 60% at 88% 78%, rgba(175, 82, 222, 0.2), transparent 68%),
            radial-gradient(ellipse 70% 45% at 50% 105%, rgba(0, 113, 227, 0.15), transparent 70%)
          `,
        }}
      />
    </div>
  )
}

export default BackgroundGlow
