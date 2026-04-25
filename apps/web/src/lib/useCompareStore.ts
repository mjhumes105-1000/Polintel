'use client'

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'economy-compare-v1'
const SYNC_EVENT  = 'economy-compare-updated'

// ─── Storage helpers (browser-only) ──────────────────────────────────────────

function storageRead(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed)
      ? parsed.filter((s): s is string => typeof s === 'string').slice(0, 2)
      : []
  } catch {
    return []
  }
}

function storageWrite(slugs: string[]) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(slugs.slice(0, 2)))
    window.dispatchEvent(new Event(SYNC_EVENT))
  } catch {}
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
//
// Multiple instances of this hook (tray + buttons) stay in sync via a custom
// window event. sessionStorage persists across Next.js client-side navigation
// within the same tab.

export function useCompareStore() {
  const [slugs, setSlugs] = useState<string[]>([])

  useEffect(() => {
    setSlugs(storageRead())
    function sync() { setSlugs(storageRead()) }
    window.addEventListener(SYNC_EVENT, sync)
    return () => window.removeEventListener(SYNC_EVENT, sync)
  }, [])

  const add = useCallback((slug: string) => {
    const curr = storageRead()
    if (curr.includes(slug) || curr.length >= 2) return
    storageWrite([...curr, slug])
  }, [])

  const remove = useCallback((slug: string) => {
    storageWrite(storageRead().filter(s => s !== slug))
  }, [])

  const toggle = useCallback((slug: string) => {
    storageRead().includes(slug) ? remove(slug) : add(slug)
  }, [add, remove])

  const clear = useCallback(() => storageWrite([]), [])

  const isSelected = (slug: string) => slugs.includes(slug)
  const canAdd     = (slug: string) => !slugs.includes(slug) && slugs.length < 2

  return {
    slugs,
    add,
    remove,
    toggle,
    clear,
    isSelected,
    canAdd,
    isFull:  slugs.length >= 2,
    isEmpty: slugs.length === 0,
  }
}
