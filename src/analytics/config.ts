/**
 * Analytics & growth-tools configuration.
 *
 * Drop your real IDs here. Anything left as the placeholder string is
 * automatically skipped at runtime — the script is never loaded.
 *
 * All third-party scripts are loaded ONLY after the user accepts the
 * relevant consent category in the cookie banner. See ./loader.ts.
 *
 * --- Where to find each ID ---
 *
 *   GA4_MEASUREMENT_ID
 *     Google Analytics 4 → Admin → Data Streams → Web → "Measurement ID"
 *     Format: "G-XXXXXXXXXX"
 *
 *   CLARITY_PROJECT_ID
 *     clarity.microsoft.com → Settings → Project Information → Project ID
 *     Format: "abcd1234ef" (10 chars)
 *     Free, gives you heatmaps + session recordings.
 *
 *   META_PIXEL_ID
 *     business.facebook.com → Events Manager → Data Sources → your Pixel
 *     Format: "123456789012345" (15-16 digits)
 *
 *   TIKTOK_PIXEL_ID
 *     ads.tiktok.com → Assets → Events → Web Events → your Pixel
 *     Format: "C4XXXXXXXXXXXXXXXXXX"
 *
 *   GOOGLE_SITE_VERIFICATION
 *     search.google.com/search-console → Add property → HTML tag
 *     Copy ONLY the value of the `content` attribute.
 *
 *   BING_SITE_VERIFICATION
 *     bing.com/webmasters → Add site → Meta tag
 *     Copy ONLY the value of the `content` attribute.
 */

export const ANALYTICS = {
  // --- Analytics category (heatmaps, page views, sessions) ---
  GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',
  CLARITY_PROJECT_ID: 'XXXXXXXXXX',

  // --- Marketing category (paid-ads attribution pixels) ---
  META_PIXEL_ID: 'XXXXXXXXXXXXXXXX',
  TIKTOK_PIXEL_ID: 'CXXXXXXXXXXXXXXXXXXX',

  // --- Search engines (no scripts, no cookies, no consent needed) ---
  // These render as <meta> tags in index.html. See vite.config or the manual
  // step below: paste the value into index.html's verification meta tags.
  GOOGLE_SITE_VERIFICATION: '',
  BING_SITE_VERIFICATION: ''
} as const

// Helper: returns true only if a given ID has been replaced with a real value
export const isConfigured = (id: string): boolean => {
  if (!id) return false
  if (id.startsWith('XXXX') || id.endsWith('XXXX') || id.includes('XXXXXXXX')) return false
  return true
}
