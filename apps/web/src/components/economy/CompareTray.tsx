'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCompareStore } from '@/lib/useCompareStore'
import { useAnalytics } from '@/lib/useAnalytics'
import { countryProfiles } from '@/data/economy/countryProfiles'

// ─── Slot ─────────────────────────────────────────────────────────────────────

function Slot({
  slug,
  onRemove,
}: {
  slug: string | null
  onRemove?: () => void
}) {
  const profile = slug ? countryProfiles[slug] : null

  if (!profile) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-dashed border-border text-ink-4">
        <span className="font-mono text-[9px] tracking-widest">SELECT COUNTRY</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-accent/30 bg-accent/5">
      <span className="text-sm leading-none">{profile.flagEmoji}</span>
      <span className="text-xs font-medium text-ink-2 leading-none">{profile.name}</span>
      <button
        onClick={onRemove}
        aria-label={`Remove ${profile.name}`}
        className="text-ink-4 hover:text-ink-2 transition-colors font-mono text-[10px] leading-none ml-0.5"
      >
        ✕
      </button>
    </div>
  )
}

// ─── Tray ─────────────────────────────────────────────────────────────────────

export function CompareTray() {
  const { slugs, remove, clear, isEmpty } = useCompareStore()
  const { track } = useAnalytics()
  const router   = useRouter()
  const pathname = usePathname()

  // Don't show on the compare page itself — it has its own pickers
  const hidden = isEmpty || pathname?.startsWith('/economy/compare')

  function launch() {
    const [a, b] = slugs
    track('economy.compare.tray_launched', { slug_a: a, slug_b: b })
    router.push(`/economy/compare?a=${a}&b=${b}`)
  }

  return (
    <div
      role="region"
      aria-label="Compare tray"
      aria-hidden={hidden}
      className={[
        'fixed bottom-0 left-0 right-0 z-50',
        'flex justify-center items-end',
        'pb-4 px-4 pointer-events-none',
        'transition-all duration-300 ease-out',
        hidden
          ? 'translate-y-3 opacity-0'
          : 'translate-y-0 opacity-100',
      ].join(' ')}
    >
      <div className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-full bg-surface-2 border border-border shadow-xl">

        {/* Slot A */}
        <Slot slug={slugs[0] ?? null} onRemove={() => remove(slugs[0])} />

        {/* Divider */}
        <span className="font-mono text-[9px] text-ink-4 px-0.5 shrink-0">
          {slugs.length === 2 ? 'VS' : '+'}
        </span>

        {/* Slot B */}
        <Slot slug={slugs[1] ?? null} onRemove={() => remove(slugs[1])} />

        {/* Compare button (only when 2 selected) */}
        {slugs.length === 2 && (
          <button
            onClick={launch}
            className="ml-1 font-mono text-[9px] tracking-widest px-4 py-2 rounded-full bg-accent text-bg hover:bg-accent-bright transition-colors shrink-0 font-semibold"
          >
            COMPARE →
          </button>
        )}

        {/* Hint when only 1 selected */}
        {slugs.length === 1 && (
          <span className="font-mono text-[9px] text-ink-3 px-1 hidden sm:inline shrink-0">
            Select one more
          </span>
        )}

        {/* Clear */}
        <button
          onClick={clear}
          aria-label="Clear compare selection"
          className="ml-1 font-mono text-[9px] text-ink-4 hover:text-ink-2 transition-colors shrink-0 px-1"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
