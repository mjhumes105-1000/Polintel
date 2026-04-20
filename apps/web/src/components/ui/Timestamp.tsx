'use client'

import { useState } from 'react'

function formatRelative(iso: string): string {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 30) return `${diffDays}d ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`
  return `${Math.floor(diffDays / 365)}y ago`
}

function formatAbsolute(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

function formatShort(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

interface TimestampProps {
  iso: string
  mode?: 'relative' | 'short' | 'absolute'
  className?: string
}

export function Timestamp({ iso, mode = 'short', className = '' }: TimestampProps) {
  const [showAbsolute, setShowAbsolute] = useState(false)

  const display = mode === 'relative'
    ? (showAbsolute ? formatAbsolute(iso) : formatRelative(iso))
    : mode === 'short'
    ? formatShort(iso)
    : formatAbsolute(iso)

  if (mode === 'relative') {
    return (
      <time
        dateTime={iso}
        title={formatAbsolute(iso)}
        onMouseEnter={() => setShowAbsolute(true)}
        onMouseLeave={() => setShowAbsolute(false)}
        className={`font-mono text-[10px] text-ink-3 cursor-default transition-colors hover:text-ink-2 ${className}`}
      >
        {display}
      </time>
    )
  }

  return (
    <time
      dateTime={iso}
      className={`font-mono text-[10px] text-ink-3 ${className}`}
    >
      {display}
    </time>
  )
}
