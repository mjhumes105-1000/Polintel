'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/useAuth'
import { useAnalytics } from '@/lib/useAnalytics'
import { UpgradeModal } from '@/components/ui/UpgradeModal'

export function BriefingButton({
  label,
  context,
}: {
  label: string
  context: string
}) {
  const { isPremium } = useAuth()
  const { track } = useAnalytics()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleClick() {
    if (!isPremium) {
      track('economy.premium.gate_clicked', { feature: 'briefing', context })
      setOpen(true)
      return
    }
    track('economy.briefing.clicked', { context })
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className={[
          'flex items-center gap-1.5 font-mono text-[9px] tracking-widest px-3 py-2 rounded border transition-colors',
          isPremium
            ? 'border-border text-ink-3 hover:border-accent/40 hover:text-ink-2'
            : 'border-border text-ink-4 hover:border-accent/30 hover:text-ink-3',
          loading ? 'opacity-60 cursor-wait' : '',
        ].join(' ')}
      >
        <span className="opacity-70 text-[11px] leading-none">✦</span>
        {loading ? 'GENERATING…' : label}
        {!isPremium && <span className="ml-0.5 text-accent opacity-80">PRO</span>}
      </button>
      <UpgradeModal
        open={open}
        onClose={() => setOpen(false)}
        trigger={`Generate an AI policy briefing for ${context}`}
      />
    </>
  )
}
