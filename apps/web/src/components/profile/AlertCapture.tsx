'use client'

import { useState } from 'react'

interface AlertCaptureProps {
  politicianId: string
  politicianName: string
}

export function AlertCapture({ politicianId, politicianName }: AlertCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, politicianId, politicianName }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.')
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-surface border border-teal-300 dark:border-teal-900 rounded mb-8">
        <span className="text-teal-600 dark:text-teal-400 text-sm">✓</span>
        <p className="text-sm text-ink-2">
          You&apos;re on the list. We&apos;ll notify you when{' '}
          <span className="text-ink">{politicianName}</span> votes.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center p-4 bg-surface border border-border rounded">
        <p className="font-mono text-[11px] tracking-widest text-ink-3 shrink-0 sm:mr-2">
          GET ALERTS
        </p>
        <div className="flex flex-1 gap-2 min-w-0">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={`Notify me when ${politicianName} votes`}
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
      {status === 'error' && (
        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 font-mono">{errorMsg}</p>
      )}
    </form>
  )
}
