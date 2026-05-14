import type { ReactNode } from 'react'
import { EntryGate } from '@/components/leverage-study/EntryGate'

export const metadata = {
  title: 'Leverage Study — POLINTEL',
  description:
    'A structured study of political leverage, power dynamics, and institutional pressure in American government.',
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
