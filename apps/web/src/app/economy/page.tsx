import type { Metadata } from 'next'
import { EconomyClient } from './EconomyClient'

export const metadata: Metadata = {
  title: 'Economic Exposure — PoliIntel',
  description: 'U.S. trade flows, tariff exposure, investment positions, and aid outflows for top trading partners.',
}

export default function EconomyPage() {
  return <EconomyClient />
}
