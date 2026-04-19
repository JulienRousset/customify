import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative w-8 h-8 rounded-full border border-hair flex items-center justify-center text-fg2 hover:text-fg hover:border-hair2 transition-colors overflow-hidden"
    >
      <Sun
        size={14}
        className={`absolute transition-all duration-500 ease-out ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
      />
      <Moon
        size={14}
        className={`absolute transition-all duration-500 ease-out ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
      />
    </button>
  )
}
