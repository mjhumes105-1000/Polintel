'use client'

import { useCallback } from 'react'
import { track } from './analytics'
import type { EventMap, EventName } from './analytics'

export function useAnalytics() {
  const fire = useCallback(
    <K extends EventName>(event: K, props: EventMap[K]) => track(event, props),
    []
  )
  return { track: fire }
}
