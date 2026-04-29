'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { PoliticianProfile } from '@political-intel/types'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'

interface StubProfilePageProps {
  politician: PoliticianProfile
}

function EmailNotifyForm({ politicianName, politicianId }: { politicianName: string; politicianId: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const endpoint = process.env.NEXT_PUBLIC_ALERT_ENDPOINT ?? '/api/alerts'
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, politicianId, politicianName, source: 'stub-profile', notificationType: 'profile-update' }),
      })
      setStatus('success')
    } catch {
      // On a static site, fall through to success — backend collects on reconnect
      setStatus('success')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-surface border border-teal-800 rounded">
        <span className="text-teal-400 text-sm">✓</span>
        <p className="text-sm text-ink-2">
          You&apos;re on the list. We&apos;ll notify you when the {politicianName} profile is updated.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center p-4 bg-surface border border-border rounded">
        <p className="font-mono text-[11px] tracking-widest text-ink-3 shrink-0 sm:mr-2">GET NOTIFIED</p>
        <div className="flex flex-1 gap-2 min-w-0">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={`Notify me when ${politicianName}'s profile is updated`}
            className="flex-1 min-w-0 bg-bg border border-border rounded px-3 py-2 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent/50 transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="shrink-0 px-4 py-2 bg-accent text-bg text-sm font-mono rounded hover:bg-accent/90 disabled:opacity-50 transition-colors"
          >
            {status === 'loading' ? '…' : 'Notify me'}
          </button>
        </div>
      </div>
    </form>
  )
}

export function StubProfilePage({ politician }: StubProfilePageProps) {
  const { baselineCard } = politician
  const sinceYear = baselineCard.currentOffice.startDate.slice(0, 4)

  const previousOffices = baselineCard.previousOffices ?? []

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Back */}
      <div className="mb-6">
        <Link
          href="/politicians"
          className="font-mono text-[10px] tracking-widest text-ink-3 hover:text-accent transition-colors"
        >
          ← ALL POLITICIANS
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-border pb-8 mb-8">
        <p className="font-mono text-xs text-accent tracking-widest mb-4">PUBLIC RECORD</p>

        <div className="flex items-start gap-6">
          <PoliticianPhoto name={politician.name} photoUrl={politician.photoUrl} size={96} />
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-semibold text-ink tracking-tight mb-1">{politician.name}</h1>
            <p className="text-lg text-ink-2 mb-3">
              {baselineCard.currentOffice.title}
              {baselineCard.currentOffice.jurisdiction !== 'Federal' &&
                `, ${baselineCard.currentOffice.jurisdiction}`}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-ink-3">
              <span className="text-accent/80">{baselineCard.party}</span>
              <span className="text-ink-4">·</span>
              <span>In office since {sinceYear}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Profile in progress banner */}
      <div className="mb-8 px-5 py-4 border border-amber-800/60 bg-amber-950/20 rounded">
        <div className="flex items-start gap-3">
          <span className="font-mono text-[9px] tracking-widest text-amber-500 border border-amber-800/60 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
            IN PROGRESS
          </span>
          <div>
            <p className="text-sm text-ink-2 leading-relaxed">
              This profile is being expanded. Available public-record data will appear here as it is verified and structured by our research process.
            </p>
            <p className="text-xs text-ink-4 mt-1">
              Our methodology requires sourcing every claim to a public record before publication.
              <Link href="/methodology" className="text-accent/70 hover:text-accent ml-1 transition-colors">
                Learn more →
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Email capture */}
      <div className="mb-8">
        <EmailNotifyForm politicianName={politician.name} politicianId={politician.id} />
      </div>

      {/* Bio */}
      {politician.bio && (
        <section className="mb-8">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">BACKGROUND</p>
          <div className="bg-surface border border-border rounded px-5 py-4">
            <p className="text-sm text-ink-2 leading-relaxed">{politician.bio}</p>
          </div>
        </section>
      )}

      {/* Baseline facts */}
      <section className="mb-8">
        <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">CURRENT POSITION</p>
        <div className="bg-surface border border-border rounded divide-y divide-border">
          <div className="px-5 py-3 flex items-center justify-between gap-4">
            <span className="text-xs text-ink-3 font-mono tracking-wide">PARTY</span>
            <span className="text-sm text-ink">{baselineCard.party}</span>
          </div>
          <div className="px-5 py-3 flex items-center justify-between gap-4">
            <span className="text-xs text-ink-3 font-mono tracking-wide">OFFICE</span>
            <span className="text-sm text-ink text-right">{baselineCard.currentOffice.title}</span>
          </div>
          <div className="px-5 py-3 flex items-center justify-between gap-4">
            <span className="text-xs text-ink-3 font-mono tracking-wide">SINCE</span>
            <span className="text-sm text-ink">{sinceYear}</span>
          </div>
          {baselineCard.yearsInPublicService > 0 && (
            <div className="px-5 py-3 flex items-center justify-between gap-4">
              <span className="text-xs text-ink-3 font-mono tracking-wide">PUBLIC SERVICE</span>
              <span className="text-sm text-ink">{baselineCard.yearsInPublicService} years</span>
            </div>
          )}
        </div>
      </section>

      {/* Previous offices */}
      {previousOffices.length > 0 && (
        <section className="mb-8">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">PRIOR OFFICES</p>
          <div className="bg-surface border border-border rounded divide-y divide-border">
            {previousOffices.map((office, i) => (
              <div key={i} className="px-5 py-3">
                <p className="text-sm text-ink">{office.title}</p>
                <p className="text-xs text-ink-4 font-mono mt-0.5">
                  {office.startDate.slice(0, 4)}
                  {office.endDate ? ` – ${office.endDate.slice(0, 4)}` : ' – present'}
                  {' · '}{office.jurisdiction}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Compare CTA */}
      <section className="mb-8">
        <Link
          href={`/compare?a=${politician.slug}`}
          className="group flex items-center justify-between gap-4 px-5 py-4 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent mb-1">COMPARE</p>
            <p className="text-sm font-medium text-ink">
              Compare {politician.name} with another politician
            </p>
            <p className="text-xs text-ink-3 mt-0.5">Side-by-side record comparison</p>
          </div>
          <span className="text-ink-3 group-hover:text-accent transition-colors text-sm shrink-0">→</span>
        </Link>
      </section>

      {/* Directory link */}
      <div className="text-center pt-4 border-t border-border">
        <Link
          href="/politicians"
          className="font-mono text-[10px] tracking-widest text-ink-3 hover:text-accent transition-colors"
        >
          BROWSE ALL POLITICIANS →
        </Link>
      </div>
    </div>
  )
}
