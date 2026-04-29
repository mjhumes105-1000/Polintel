import type { AskBearResponse } from '@political-intel/types'

// Phase 1 in-memory store — replace with a database in Phase 2.
// Entries expire after 1 hour. Cleanup runs probabilistically on writes.

const TTL_MS = 60 * 60 * 1000

interface StoreEntry {
  response: AskBearResponse
  expiresAt: number
}

const store = new Map<string, StoreEntry>()

export function storeAnswer(id: string, response: AskBearResponse): void {
  store.set(id, { response, expiresAt: Date.now() + TTL_MS })
  // Probabilistic cleanup to prevent unbounded growth
  if (Math.random() < 0.05) {
    const now = Date.now()
    for (const [key, entry] of store) {
      if (entry.expiresAt < now) store.delete(key)
    }
  }
}

export function getAnswer(id: string): AskBearResponse | null {
  const entry = store.get(id)
  if (!entry || entry.expiresAt < Date.now()) return null
  return entry.response
}
