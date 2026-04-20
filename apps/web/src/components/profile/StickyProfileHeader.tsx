'use client'

import { useState, useEffect, useRef } from 'react'
import type { PoliticianProfile } from '@political-intel/types'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'

interface StickyProfileHeaderProps {
  politician: PoliticianProfile
  sentinelId?: string
}

export function StickyProfileHeader({
  politician,
  sentinelId = 'profile-header-sentinel',
}: StickyProfileHeaderProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById(sentinelId)
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-56px 0px 0px 0px' }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [sentinelId])

  return (
    <div
      className={[
        'fixed top-0 left-0 right-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm transition-all duration-200',
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
      ].join(' ')}
      aria-hidden={!visible}
    >
      <div className="max-w-5xl mx-auto px-6 py-2.5 flex items-center gap-3">
        <PoliticianPhoto name={politician.name} photoUrl={politician.photoUrl} size={28} />
        <div className="flex items-baseline gap-2 min-w-0">
          <span className="text-sm font-medium text-ink truncate">{politician.name}</span>
          <span className="font-mono text-[10px] text-ink-3 shrink-0">
            {politician.baselineCard.currentOffice.title}
          </span>
        </div>
        <span className="ml-auto font-mono text-[10px] text-accent/70 shrink-0 hidden sm:block">
          PUBLIC RECORD
        </span>
      </div>
    </div>
  )
}
