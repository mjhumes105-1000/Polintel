import type { Metadata } from 'next'
import { ExploreClient } from './ExploreClient'

export const metadata: Metadata = {
  title: 'Explore',
  description: 'Explore presidential candidates, gubernatorial races, and congressional districts across the United States.',
}

export default function ExplorePage() {
  return <ExploreClient />
}
