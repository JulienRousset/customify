import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  speed?: 'normal' | 'slow'
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
  gap?: string
}

export default function Marquee({
  children,
  speed = 'normal',
  reverse = false,
  pauseOnHover = true,
  className = '',
  gap = '4rem'
}: Props) {
  const animClass = speed === 'slow' ? 'animate-marquee-x-slow' : 'animate-marquee-x'

  return (
    <div
      className={`group relative overflow-hidden fade-x ${className}`}
      data-cursor="drag"
      data-cursor-label="scroll"
    >
      <div
        className={`flex w-max ${animClass}`}
        style={{
          gap,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: pauseOnHover ? undefined : 'running'
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) (e.currentTarget as HTMLElement).style.animationPlayState = 'running'
        }}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div aria-hidden className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
      </div>
    </div>
  )
}
