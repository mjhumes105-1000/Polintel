import type { ReactNode } from 'react'
import { CompareTray } from '@/components/economy/CompareTray'

export default function EconomyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CompareTray />
    </>
  )
}
