import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CompareClient } from './CompareClient'

export const metadata: Metadata = {
  title: 'Compare Politicians',
  description: 'Side-by-side comparison of politicians — votes, funding, committees, and record.',
}

export default function ComparePage() {
  return (
    <Suspense>
      <CompareClient />
    </Suspense>
  )
}
