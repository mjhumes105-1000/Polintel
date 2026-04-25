// Provider-agnostic analytics layer.
//
// To connect a provider, add its script to app/layout.tsx and implement the
// adapter at the bottom of this file. No other files need to change.

export type PremiumFeature =
  | 'save_comparison'
  | 'export_csv'
  | 'export_pdf'
  | 'alert'
  | 'historical_trend'
  | 'briefing'

export type EventMap = {
  // ── Country pages ────────────────────────────────────────────────────────
  'economy.country.page_viewed': {
    slug: string
    name: string
    rank: number
  }

  // ── Search ───────────────────────────────────────────────────────────────
  'economy.search.queried': {
    query: string
    result_count: number
    surface: 'landing' | 'compare_picker'
  }
  'economy.search.result_clicked': {
    slug: string
    name: string
    rank: number
    query: string
    surface: 'landing' | 'compare_picker'
  }

  // ── Compare entry points ─────────────────────────────────────────────────
  'economy.compare.add_clicked': {
    slug: string
    name: string
    action: 'add' | 'remove'
    source: 'icon' | 'pill' | 'inline'
  }
  'economy.compare.cta_clicked': {
    source: 'landing_callout' | 'detail_header' | 'detail_footer_cta'
    slug?: string
  }
  'economy.compare.tray_launched': {
    slug_a: string
    slug_b: string
  }

  // ── Comparison page ───────────────────────────────────────────────────────
  'economy.compare.page_viewed': {
    slug_a: string
    slug_b: string
    has_editorial_summary: boolean
  }

  // ── Premium features ──────────────────────────────────────────────────────
  'economy.premium.gate_clicked': {
    feature: PremiumFeature
    context?: string
  }
  'economy.compare.saved': {
    slug_a: string
    slug_b: string
  }
  'economy.export.clicked': {
    format: 'csv' | 'pdf'
    context: string
  }
  'economy.alert.toggled': {
    slug: string
    action: 'on' | 'off'
  }
  'economy.briefing.clicked': {
    context: string
  }
  'economy.upgrade.clicked': {
    trigger: string
  }
}

export type EventName = keyof EventMap

// ─── Provider interface ───────────────────────────────────────────────────────

declare global {
  interface Window {
    // Segment-compatible (also works with PostHog, RudderStack, June)
    analytics?: { track(event: string, props?: Record<string, unknown>): void }
    // GA4
    gtag?: (...args: unknown[]) => void
  }
}

// ─── Core track function ──────────────────────────────────────────────────────

export function track<K extends EventName>(event: K, props: EventMap[K]): void {
  if (typeof window === 'undefined') return

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', event, props)
  }

  const payload = props as Record<string, unknown>

  // Segment / PostHog / RudderStack
  window.analytics?.track(event, payload)

  // GA4
  window.gtag?.('event', event, payload)
}
