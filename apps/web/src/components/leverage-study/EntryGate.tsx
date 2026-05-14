'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { EntrySurvey, type EntrySubmission } from './EntrySurvey'

const STORAGE_KEY = 'polintel.leverageStudy.entrySubmission.v1'

export function EntryGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<'loading' | 'gated' | 'open'>('loading')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      setStatus(stored ? 'open' : 'gated')
    } catch {
      // Private-browsing or blocked localStorage — fail open so readers aren't locked out
      setStatus('open')
    }
  }, [])

  // Scroll to hash anchor once gate opens (handles /leverage-study#module-id deep links)
  useEffect(() => {
    if (status !== 'open') return
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const timer = setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
    return () => clearTimeout(timer)
  }, [status])

  function handleComplete(submission: EntrySubmission) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(submission))
    } catch {
      // Silently ignore if localStorage is unavailable
    }
    setStatus('open')
  }

  if (status === 'loading') return null
  if (status === 'gated') return <EntrySurvey onComplete={handleComplete} />
  return <>{children}</>
}
