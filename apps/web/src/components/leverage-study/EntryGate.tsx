'use client'

import type { ReactNode } from 'react'

interface EntryGateProps {
  children: ReactNode
}

export function EntryGate({ children }: EntryGateProps) {
  // Gate logic will be implemented in a subsequent prompt.
  return <>{children}</>
}
