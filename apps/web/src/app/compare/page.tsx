import type { Metadata } from 'next'
import { CompareClient } from './CompareClient'

export const metadata: Metadata = {
  title: 'Compare Politicians',
  description: 'Side-by-side comparison of politicians — votes, funding, committees, and record.',
}

export default function ComparePage() {
  return <CompareClient />
}
