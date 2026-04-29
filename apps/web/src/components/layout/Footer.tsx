'use client'

import { useState } from 'react'
import Link from 'next/link'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch(process.env.NEXT_PUBLIC_ALERT_ENDPOINT ?? '/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          politicianId: 'newsletter',
          politicianName: 'Newsletter',
          notificationType: 'newsletter',
          source: 'footer',
          createdAt: new Date().toISOString(),
        }),
      })
    } catch { /* static site */ }
    try {
      const stored = JSON.parse(localStorage.getItem('poliintel_newsletter') ?? '[]')
      if (!stored.includes(email.toLowerCase().trim())) {
        localStorage.setItem('poliintel_newsletter', JSON.stringify([...stored, email.toLowerCase().trim()]))
      }
    } catch { /* storage unavailable */ }
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-sm text-ink-2">
        <span className="text-teal-400">✓</span>
        <span>You&apos;re subscribed. Weekly updates start next Monday.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 min-w-0 bg-bg border border-border rounded px-3 py-2 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="shrink-0 px-4 py-2 bg-surface-2 border border-border rounded text-xs font-mono text-ink-2 hover:border-accent hover:text-accent disabled:opacity-50 transition-colors"
      >
        {status === 'loading' ? '…' : 'Subscribe'}
      </button>
    </form>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Newsletter */}
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-1.5">WEEKLY DIGEST</p>
            <p className="text-sm font-medium text-ink mb-1">Get weekly political intelligence updates</p>
            <p className="text-xs text-ink-4 mb-4 leading-relaxed">
              New politician profiles, major votes recorded, economy data updated — delivered every Monday.
            </p>
            <NewsletterForm />
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-ink-4 mb-3">NAVIGATE</p>
            <nav className="flex flex-col gap-2">
              {[
                { href: '/politicians', label: 'Politicians' },
                { href: '/bills', label: 'Bills & Legislation' },
                { href: '/economy', label: 'Economy & Trade' },
                { href: '/compare', label: 'Compare' },
                { href: '/methodology', label: 'Methodology' },
                { href: '/about', label: 'About' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-ink-3 hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <p className="text-xs text-ink-3 max-w-2xl leading-relaxed">
              PoliIntel is a non-partisan platform. All factual claims are sourced to publicly available records.
              AI-generated content is clearly labeled and represents an interpretation of evidence, not a statement
              of fact. No editorial positions are taken on policy outcomes.
            </p>
            <p className="text-xs text-ink-4 font-mono">
              © {new Date().getFullYear()} PoliIntel · Data accurate to the retrieval dates shown on each source
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/methodology"
              className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-accent transition-colors"
            >
              METHODOLOGY
            </Link>
            <span className="text-ink-4 text-[10px]">·</span>
            <a
              href="mailto:contact@poliintel.com"
              className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-accent transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
