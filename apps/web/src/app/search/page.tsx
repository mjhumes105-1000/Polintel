import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SearchClient } from './SearchClient'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search politicians, bills, and committees across the PoliIntel platform.',
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchClient />
    </Suspense>
  )
}
