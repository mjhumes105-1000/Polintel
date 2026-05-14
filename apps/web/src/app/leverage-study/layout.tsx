import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { EntryGate } from '@/components/leverage-study/EntryGate'

export const metadata: Metadata = {
  title: 'Politically Expensive to Ignore · POLINTEL',
  description: 'A study of Black political power and what it would take to make it real.',
  openGraph: {
    title: 'Politically Expensive to Ignore · POLINTEL',
    description: 'A study of Black political power and what it would take to make it real.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politically Expensive to Ignore · POLINTEL',
    description: 'A study of Black political power and what it would take to make it real.',
  },
}

export default function LeverageStudyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-surface-2">
        <div className="max-w-5xl mx-auto px-6 py-2 flex items-center gap-2">
          <span className="label-caps text-ink-4">POLINTEL</span>
          <span className="text-border text-xs">·</span>
          <span className="label-caps text-accent">Leverage Study</span>
        </div>
      </div>
      <EntryGate>
        <div className="max-w-5xl mx-auto px-6">
          {children}
        </div>
      </EntryGate>
    </div>
  )
}
