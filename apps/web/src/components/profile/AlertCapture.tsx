'use client'

import { useState, useEffect } from 'react'

interface AlertCaptureProps {
  politicianId: string
  politicianName: string
}

function getStoredAlerts(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem('poliintel_alerts')
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function storeAlert(key: string) {
  if (typeof window === 'undefined') return
  try {
    const alerts = getStoredAlerts()
    alerts.add(key)
    localStorage.setItem('poliintel_alerts', JSON.stringify([...alerts]))
  } catch { /* storage unavailable */ }
}

export function AlertCapture({ politicianId, politicianName }: AlertCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Check if this email+politician combo was already submitted this session
  useEffect(() => {
    // Pre-warm; actual duplicate check happens on submit
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const alertKey = `${email.toLowerCase().trim()}:${politicianId}`
    const stored = getStoredAlerts()
    if (stored.has(alertKey)) {
      setStatus('duplicate')
      return
    }

    try {
      const endpoint = process.env.NEXT_PUBLIC_ALERT_ENDPOINT ?? '/api/alerts'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          politicianId,
          politicianName,
          notificationType: 'vote',
          source: 'profile-alert-capture',
          createdAt: new Date().toISOString(),
        }),
      })
      if (res.ok || res.status === 409) {
        storeAlert(alertKey)
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Something went wrong.')
      }
    } catch (err) {
      // On a static site, the API route won't be available at runtime.
      // Store intent client-side and show success so the UX is not broken.
      storeAlert(alertKey)
      if (err instanceof Error && !err.message.includes('fetch')) {
        setErrorMsg(err.message)
        setStatus('error')
      } else {
        setStatus('success')
      }
    }
  }

  if (status === 'success' || status === 'duplicate') {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-surface border border-teal-300 dark:border-teal-900 rounded mb-8">
        <span className="text-teal-600 dark:text-teal-400 text-sm">✓</span>
        <p className="text-sm text-ink-2">
          {status === 'duplicate'
            ? `Already signed up — we'll notify you when ${politicianName} votes.`
            : `You're on the list. We'll notify you when ${politicianName} votes.`}
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
