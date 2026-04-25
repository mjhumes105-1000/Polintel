'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'

const BENEFITS = [
  'Save comparisons and revisit them anytime',
  'Export trade data to CSV or PDF',
  'Set exposure alerts for countries you track',
  'View historical trend charts (5-year)',
  'Generate AI-drafted policy briefings',
]

export function UpgradeModal({
  open,
  onClose,
  trigger,
}: {
  open: boolean
  onClose: () => void
  trigger?: string
}) {
  // Lock body scroll while open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-sm rounded-lg bg-surface border border-border shadow-2xl flex flex-col">
        <div className="px-6 pt-6 pb-5 flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] tracking-widest text-accent mb-1">POLIINTEL PRO</p>
              <h2 className="text-base font-semibold text-ink leading-tight">
                {trigger ?? 'Unlock premium features'}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-ink-4 hover:text-ink-2 transition-colors font-mono text-[11px] shrink-0 mt-0.5"
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-ink-3 leading-relaxed">
            PoliIntel Pro gives analysts and researchers the workflow tools to move
            faster — saved views, exports, alerts, and AI-generated briefings.
          </p>

          {/* Benefits */}
          <ul className="flex flex-col gap-1.5">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="text-accent font-mono text-[10px] mt-0.5 shrink-0">✓</span>
                <span className="text-xs text-ink-2">{b}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/upgrade"
            onClick={() => track('economy.upgrade.clicked', { trigger: trigger ?? 'unknown' })}
            className="w-full text-center font-mono text-[10px] tracking-widest py-2.5 rounded bg-accent text-bg hover:bg-accent-bright transition-colors font-semibold"
          >
            UPGRADE TO PRO →
          </a>

          <p className="text-center font-mono text-[9px] text-ink-4">
            Free tier remains fully open — public data, compare tool, all country profiles.
          </p>
        </div>
      </div>
    </div>
  )
}
