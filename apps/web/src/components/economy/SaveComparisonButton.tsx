'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/useAuth'
import { useAnalytics } from '@/lib/useAnalytics'
import { UpgradeModal } from '@/components/ui/UpgradeModal'

export function SaveComparisonButton({ slugA, slugB }: { slugA: string; slugB: string }) {
  const { isPremium } = useAuth()
  const { track } = useAnalytics()
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)

  function handleClick() {
    if (!isPremium) {
      track('economy.premium.gate_clicked', { feature: 'save_comparison', context: `${slugA}:${slugB}` })
      setOpen(true)
      return
    }
    track('economy.compare.saved', { slug_a: slugA, slug_b: slugB })
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <>
      <button
        onClick={handleClick}
        title={isPremium ? 'Save this comparison' : 'Save comparisons (Pro)'}
        className={[
          'flex items-center gap-1.5 font-mono text-[9px] tracking-widest px-3 py-2 rounded border transition-colors',
          saved
            ? 'border-accent/60 text-accent bg-accent/10'
            : isPremium
            ? 'border-border text-ink-3 hover:border-accent/40 hover:text-ink-2'
            : 'border-border text-ink-4 hover:border-accent/30 hover:text-ink-3',
        ].join(' ')}
      >
        {saved ? '✓ SAVED' : (
          <>
            <span className="opacity-70">{isPremium ? '⊞' : '⊡'}</span>
            SAVE
            {!isPremium && <span className="ml-0.5 text-accent opacity-80">PRO</span>}
          </>
        )}
      </button>
      <UpgradeModal
        open={open}
        onClose={() => setOpen(false)}
        trigger="Save and revisit comparisons"
      />
    </>
  )
}
