'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/useAuth'
import { useAnalytics } from '@/lib/useAnalytics'
import { UpgradeModal } from '@/components/ui/UpgradeModal'

export function AlertButton({ slug, countryName }: { slug: string; countryName: string }) {
  const { isPremium } = useAuth()
  const { track } = useAnalytics()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)

  function handleClick() {
    if (!isPremium) {
      track('economy.premium.gate_clicked', { feature: 'alert', context: slug })
      setOpen(true)
      return
    }
    const next = !active
    track('economy.alert.toggled', { slug, action: next ? 'on' : 'off' })
    setActive(next)
  }

  return (
    <>
      <button
        onClick={handleClick}
        title={
          isPremium
            ? active
              ? `Remove alert for ${countryName}`
              : `Set exposure alert for ${countryName}`
            : `Exposure alerts (Pro)`
        }
        className={[
          'flex items-center gap-1.5 font-mono text-[10px] tracking-widest px-2 py-1 rounded border transition-colors',
          active
            ? 'border-amber-500/60 text-amber-400 bg-amber-500/10'
            : 'border-border text-ink-4 hover:border-amber-500/30 hover:text-ink-3',
        ].join(' ')}
      >
        {active ? 'ALERT ON' : 'ALERT'}
        {!isPremium && <span className="ml-0.5 text-accent opacity-80">PRO</span>}
      </button>
      <UpgradeModal
        open={open}
        onClose={() => setOpen(false)}
        trigger={`Get alerts when ${countryName}'s exposure profile changes`}
      />
    </>
  )
}
