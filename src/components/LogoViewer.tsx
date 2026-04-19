import { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          'auto-rotate'?: boolean | ''
          'auto-rotate-delay'?: string | number
          'rotation-per-second'?: string
          'camera-controls'?: boolean | ''
          'disable-zoom'?: boolean | ''
          'disable-pan'?: boolean | ''
          'interaction-prompt'?: string
          'camera-orbit'?: string
          exposure?: string | number
          'shadow-intensity'?: string | number
          'shadow-softness'?: string | number
          'environment-image'?: string
          loading?: 'eager' | 'lazy' | 'auto'
          reveal?: 'auto' | 'manual'
        },
        HTMLElement
      >
    }
  }
}

interface LogoViewerProps {
  className?: string
  src?: string
  autoRotateSpeed?: string
}

export default function LogoViewer({
  className,
  src = '/logo.glb',
  autoRotateSpeed = '45deg',
}: LogoViewerProps) {
  useEffect(() => {
    import('@google/model-viewer')
  }, [])

  return (
    <model-viewer
      src={src}
      alt="Customify 3D logo"
      auto-rotate=""
      auto-rotate-delay="0"
      rotation-per-second={autoRotateSpeed}
      camera-controls=""
      disable-zoom=""
      disable-pan=""
      interaction-prompt="none"
      exposure="1.1"
      shadow-intensity="0.6"
      shadow-softness="1"
      loading="eager"
      reveal="auto"
      className={className}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    />
  )
}
