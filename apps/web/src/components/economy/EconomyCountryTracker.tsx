'use client'

import { useEffect } from 'react'
import { track } from '@/lib/analytics'

export function EconomyCountryTracker({
  slug,
  name,
  rank,
}: {
  slug: string
  name: string
  rank: number
}) {
  useEffect(() => {
    track('economy.country.page_viewed', { slug, name, rank })
  }, [slug, name, rank])

  return null
}
