import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ExploreClient } from './ExploreClient'

export const metadata: Metadata = {
  title: 'Explore',
  description: 'Explore presidential candidates, gubernatorial races, and congressional districts across the United States.',
}

export default function ExplorePage() {
  return (
    <Suspense>
      <ExploreClient />
    </Suspense>
  )
}
