export function cn(...inputs: Array<string | number | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ')
}

/** Google's favicon service — used for the "Powered by" / integration logo pills. */
export const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
