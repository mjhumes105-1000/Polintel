import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { EntryGate } from '@/components/leverage-study/EntryGate'

export const metadata: Metadata = {
  title: 'The Unaudited Investment · POLINTEL Quarterly Study',
  description: 'Black voters have built the most reliable bloc in American politics. The terms of that arrangement have never been audited.',
  openGraph: {
    title: 'The Unaudited Investment · POLINTEL',
    description: 'Black voters have built the most reliable bloc in American politics. The terms of that arrangement have never been audited.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Unaudited Investment · POLINTEL',
    description: 'Black voters have built the most reliable bloc in American politics. The terms of that arrangement have never been audited.',
  },
}

export default function QuarterlyStudyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-surface-2">
        <div className="max-w-5xl mx-auto px-6 py-2 flex items-center gap-2">
          <span className="label-caps text-ink-4">POLINTEL</span>
          <span className="text-border text-xs">·</span>
          <span className="label-caps text-accent">Quarterly Study</span>
        </div>
      </div>
      <EntryGate>
        {children}
      </EntryGate>
    </div>
  )
}
