import { useEffect, type RefObject } from 'react'

// Minimal, dependency-free focus management for modal dialogs.
// While `active`, keyboard focus is kept inside `ref` (Tab / Shift+Tab cycle),
// focus is moved into the dialog on open (unless something inside is already
// focused, e.g. an autoFocus target), and restored to the previously focused
// element on close. Pair with an existing Escape-to-close handler.

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])'

export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active) return
    const node = ref.current
    if (!node) return

    const previouslyFocused = document.activeElement as HTMLElement | null

    // Move focus in only if it isn't already inside (respects autoFocus).
    if (!node.contains(document.activeElement)) {
      node.querySelector<HTMLElement>(FOCUSABLE)?.focus()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const els = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      )
      if (els.length === 0) return
      const first = els[0]
      const last = els[els.length - 1]
      const activeEl = document.activeElement
      if (e.shiftKey && (activeEl === first || !node.contains(activeEl))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault()
        first.focus()
      }
    }

    node.addEventListener('keydown', onKeyDown)
    return () => {
      node.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [ref, active])
}
