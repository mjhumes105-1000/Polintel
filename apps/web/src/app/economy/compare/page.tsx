import type { Metadata } from 'next'
import { EconomyCompareClient } from './EconomyCompareClient'

export const metadata: Metadata = {
  title: 'Compare Trade Partners — PoliIntel',
  description: 'Compare U.S. trade flows, tariffs, investment, and strategic dependency for two trade partners side by side.',
}

export default function EconomyComparePage() {
  return <EconomyCompareClient />
}
