'use client'

import { useCompareStore } from '@/lib/useCompareStore'
import { useAnalytics } from '@/lib/useAnalytics'
import { countryProfiles } from '@/data/economy/countryProfiles'

function nameFor(slug: string) {
  return countryProfiles[slug]?.name ?? slug
}

// ─── Variant: pill ────────────────────────────────────────────────────────────

export function CompareButtonPill({ slug }: { slug: string }) {
  const { isSelected, canAdd, toggle } = useCompareStore()
  const { track } = useAnalytics()
  const selected = isSelected(slug)
  const enabled  = selected || canAdd(slug)

  if (!enabled) {
    return (
      <span className="flex-1 text-center font-mono text-[9px] tracking-widest py-2 rounded border border-border text-ink-4 cursor-not-allowed select-none">
        TRAY FULL
      </span>
    )
  }

  function handleClick() {
    track('economy.compare.add_clicked', {
      slug,
      name: nameFor(slug),
      action: selected ? 'remove' : 'add',
      source: 'pill',
    })
    toggle(slug)
  }

  return (
    <button
      onClick={handleClick}
      className={[
        'flex-1 text-center font-mono text-[9px] tracking-widest py-2 rounded border transition-colors',
        selected
          ? 'border-accent/60 text-accent bg-accent/10'
          : 'border-border text-ink-3 hover:border-accent/40 hover:text-ink-2',
      ].join(' ')}
    >
      {selected ? '✓ ADDED' : '+ COMPARE'}
    </button>
  )
}

// ─── Variant: inline ──────────────────────────────────────────────────────────

export function CompareButtonInline({ slug }: { slug: string }) {
  const { isSelected, canAdd, toggle } = useCompareStore()
  const { track } = useAnalytics()
  const selected = isSelected(slug)
  const enabled  = selected || canAdd(slug)

  if (!enabled) {
    return <span className="font-mono text-[9px] text-ink-4 cursor-not-allowed">FULL</span>
  }

  function handleClick() {
    track('economy.compare.add_clicked', {
      slug,
      name: nameFor(slug),
      action: selected ? 'remove' : 'add',
      source: 'inline',
    })
    toggle(slug)
  }

  return (
    <button
      onClick={handleClick}
      className={[
        'font-mono text-[9px] transition-colors',
        selected ? 'text-accent' : 'text-ink-3 hover:text-ink-2',
      ].join(' ')}
    >
      {selected ? '✓ ADDED' : '+ ADD'}
    </button>
  )
}

// ─── Variant: icon ────────────────────────────────────────────────────────────

export function CompareButtonIcon({ slug }: { slug: string }) {
  const { isSelected, canAdd, toggle } = useCompareStore()
  const { track } = useAnalytics()
  const selected = isSelected(slug)
  const enabled  = selected || canAdd(slug)

  if (!enabled) return null

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    track('economy.compare.add_clicked', {
      slug,
      name: nameFor(slug),
      action: selected ? 'remove' : 'add',
      source: 'icon',
    })
    toggle(slug)
  }

  return (
    <button
      onClick={handleClick}
      aria-label={selected ? 'Remove from compare' : 'Add to compare'}
      title={selected ? 'Remove from compare' : 'Add to compare'}
      className={[
        'w-6 h-6 rounded-full flex items-center justify-center',
        'font-mono text-[10px] leading-none transition-all duration-150',
        selected
          ? 'bg-accent text-bg border border-accent shadow-sm'
          : 'bg-surface-2 text-ink-4 border border-border hover:border-accent/60 hover:text-accent',
      ].join(' ')}
    >
      {selected ? '✓' : '+'}
    </button>
  )
}
