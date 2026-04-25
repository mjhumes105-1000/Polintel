'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/useAuth'
import { useAnalytics } from '@/lib/useAnalytics'
import { UpgradeModal } from '@/components/ui/UpgradeModal'

// Fake sparkline data — evenly spaced bars used purely for visual teaser
const FAKE_BARS = [38, 52, 47, 61, 55, 70, 64, 78, 72, 85, 80, 90]

function FakeChart() {
  const max = Math.max(...FAKE_BARS)
  return (
    <div className="flex items-end gap-1 h-16 px-2 py-1">
      {FAKE_BARS.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-accent/40"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  )
}

export function HistoricalTrendGate({ countryName }: { countryName: string }) {
  const { isPremium } = useAuth()
  const { track } = useAnalytics()
  const [open, setOpen] = useState(false)

  if (isPremium) {
    return (
      <section className="mb-8">
        <SectionHeader />
        <div className="border border-border rounded p-6 flex flex-col items-center justify-center gap-2 text-center" style={{ minHeight: '6rem' }}>
          <p className="font-mono text-[9px] tracking-widest text-accent">COMING SOON</p>
          <p className="text-sm text-ink-2">Historical trend charts are in active development.</p>
          <p className="text-xs text-ink-4">5-year trade volume data will appear here when available.</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="mb-8">
        <SectionHeader />
        <div
          className="relative border border-border rounded overflow-hidden cursor-pointer group"
          onClick={() => {
            track('economy.premium.gate_clicked', { feature: 'historical_trend', context: countryName })
            setOpen(true)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              track('economy.premium.gate_clicked', { feature: 'historical_trend', context: countryName })
              setOpen(true)
            }
          }}
          aria-label="Unlock historical trend data"
        >
          {/* Blurred chart */}
          <div className="blur-sm select-none pointer-events-none">
            <FakeChart />
            <p className="text-xs text-ink-4 mt-2 mb-3 text-center font-mono">
              5-YEAR TRADE VOLUME (USD)
            </p>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/80 gap-2">
            <p className="font-mono text-[9px] tracking-widest text-accent">PRO FEATURE</p>
            <p className="text-xs font-semibold text-ink">5-Year Historical Trend</p>
            <p className="text-xs text-ink-3 text-center max-w-[16rem] leading-snug">
              Track how {countryName}'s trade volume with the U.S. has shifted over time.
            </p>
            <button className="mt-1 font-mono text-[9px] tracking-widest px-4 py-2 rounded border border-accent/50 text-accent hover:bg-accent/10 transition-colors group-hover:border-accent">
              UNLOCK →
            </button>
          </div>
        </div>
      </section>
      <UpgradeModal
        open={open}
        onClose={() => setOpen(false)}
        trigger={`View 5-year historical trade trends for ${countryName}`}
      />
    </>
  )
}

function SectionHeader() {
  return (
    <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-3">
      HISTORICAL TREND
    </p>
  )
}
