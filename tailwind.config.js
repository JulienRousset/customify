/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'Menlo', 'monospace']
      },
      colors: {
        bg: '#ffffff',
        surface: '#f5f5f7',
        surface2: '#fbfbfd',
        fg: '#1d1d1f',
        fg2: '#424245',
        sub: '#6e6e73',
        hair: 'rgba(0, 0, 0, 0.08)',
        hair2: 'rgba(0, 0, 0, 0.12)',
        accent: '#0071e3',
        accentDark: '#0058ad'
      },
      letterSpacing: {
        tightest: '-0.045em',
        display: '-0.025em',
        tighter: '-0.02em'
      },
      fontSize: {
        mega: ['clamp(3.25rem, 8.5vw, 7.5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '600' }],
        giga: ['clamp(2.5rem, 5.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        huge: ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.022em', fontWeight: '500' }]
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        lift: '0 10px 30px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
        float: '0 30px 80px -20px rgba(0,0,0,0.18), 0 10px 24px -8px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem'
      }
    }
  },
  plugins: []
}
