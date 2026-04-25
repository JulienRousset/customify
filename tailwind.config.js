/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['transducer-extended', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['transducer-extended', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['transducer-extended', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['transducer-extended', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        surface2: 'rgb(var(--color-surface2) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        fg2: 'rgb(var(--color-fg2) / <alpha-value>)',
        sub: 'rgb(var(--color-sub) / <alpha-value>)',
        hair: 'var(--color-hair)',
        hair2: 'var(--color-hair2)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accentDark: 'rgb(var(--color-accent-dark) / <alpha-value>)',
        accentSoft: 'rgb(var(--color-accent) / 0.08)',
        cream: '#ECEFF1',
        ink: '#191970',
        amber: '#D4A05C',
        mint: '#2E7D5C',
        plum: '#6E4BA5',
        rose: '#C84A5E'
      },
      letterSpacing: {
        tightest: '-0.045em',
        display: '-0.025em',
        tighter: '-0.02em',
        uber: '-0.06em'
      },
      fontSize: {
        mega: ['clamp(3.5rem, 9.5vw, 9rem)', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '600' }],
        giga: ['clamp(2.5rem, 6.2vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.034em', fontWeight: '600' }],
        huge: ['clamp(2rem, 3.5vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.022em', fontWeight: '500' }],
        stat: ['clamp(3.75rem, 9.5vw, 8.75rem)', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '600' }],
        tera: ['clamp(3.75rem, 11.5vw, 11rem)', { lineHeight: '0.92', letterSpacing: '-0.055em', fontWeight: '600' }]
      },
      boxShadow: {
        soft: '0 1px 2px rgba(25,25,112,0.04), 0 8px 24px rgba(25,25,112,0.06)',
        lift: '0 12px 30px rgba(25,25,112,0.10), 0 2px 6px rgba(25,25,112,0.04)',
        float: '0 30px 80px -20px rgba(25,25,112,0.18), 0 10px 24px -8px rgba(25,25,112,0.08)',
        ring: '0 0 0 1px var(--color-hair), 0 30px 60px -30px rgba(25,25,112,0.3)',
        glow: '0 0 40px -10px rgba(25,25,112,0.45), 0 0 80px -20px rgba(25,25,112,0.25)'
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
        xl4: '2.25rem'
      },
      animation: {
        'marquee-x': 'marquee-x 60s linear infinite',
        'marquee-x-slow': 'marquee-x 120s linear infinite',
        'marquee-y': 'marquee-y 30s linear infinite',
        'orbit': 'orbit 32s linear infinite',
        'orbit-rev': 'orbit-rev 48s linear infinite',
        'blink': 'blink 1.2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'grain': 'grain 7s steps(10) infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite'
      },
      keyframes: {
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'orbit-rev': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        blink: {
          '0%, 60%': { opacity: '1' },
          '61%, 100%': { opacity: '0' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.6)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' }
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,15%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(15%,0)' },
          '70%': { transform: 'translate(0,10%)' },
          '80%': { transform: 'translate(-15%,0)' },
          '90%': { transform: 'translate(10%,5%)' }
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
}
