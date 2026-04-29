'use client'

import { useEffect, useState } from 'react'
import { track } from '@/lib/analytics'

const BENEFITS = [
  'Export trade data to CSV or PDF',
  'View historical trend charts (5-year)',
  'Save comparisons and revisit them anytime',
  'Set exposure alerts for countries you track',
  'Generate AI-drafted policy briefings',
]

function ProWaitlistForm({ trigger }: { trigger?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    track('economy.waitlist.submit', { trigger: trigger ?? 'unknown' })
    try {
      const endpoint = process.env.NEXT_PUBLIC_ALERT_ENDPOINT ?? '/api/alerts'
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          politicianId: 'pro-waitlist',
          politicianName: 'Pro Waitlist',
          notificationType: 'pro-launch',
          source: trigger ?? 'upgrade-modal',
          createdAt: new Date().toISOString(),
        }),
      })
    } catch { /* static site — fall through */ }
    // Persist intent client-side regardless of API availability
    try {
      const stored = JSON.parse(localStorage.getItem('poliintel_waitlist') ?? '[]')
      if (!stored.includes(email.toLowerCase().trim())) {
        localStorage.setItem('poliintel_waitlist', JSON.stringify([...stored, email.toLowerCase().trim()]))
      }
    } catch { /* storage unavailable */ }
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 px-4 py-3 bg-teal-950/30 border border-teal-800 rounded">
        <span className="text-teal-400 text-sm shrink-0">✓</span>
        <p className="text-sm text-ink-2">
          You&apos;re on the list. We&apos;ll notify you when Pro launches.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full bg-bg border border-border rounded px-3 py-2.5 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        onClick={() => track('economy.waitlist.clicked', { trigger: trigger ?? 'unknown' })}
        className="w-full text-center font-mono text-[10px] tracking-widest py-2.5 rounded bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 disabled:opacity-50 transition-colors font-semibold"
      >
        {status === 'loading' ? '…' : 'JOIN PRO WAITLIST →'}
      </button>
      <p className="text-center font-mono text-[9px] text-ink-4">
        Free tier stays fully open — no credit card required.
      </p>
    </form>
  )
}

export function UpgradeModal({
  open,
  onClose,
  trigger,
}: {
  open: boolean
  onClose: () => void
  trigger?: string
}) {
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

          {/* Waitlist CTA */}
          <div className="border-t border-border pt-4">
            <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-3">GET NOTIFIED WHEN PRO LAUNCHES</p>
            <ProWaitlistForm trigger={trigger} />
          </div>
        </div>
      </div>
    </div>
  )
}
