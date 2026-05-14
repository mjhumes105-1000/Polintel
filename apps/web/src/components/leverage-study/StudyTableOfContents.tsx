'use client'

import { useState, useEffect, useRef } from 'react'
import type { StudyModule } from '@/data/leverage-study/modules'

export function StudyTableOfContents({ modules }: { modules: StudyModule[] }) {
  const [activeId, setActiveId] = useState<string | null>(modules[0]?.id ?? null)
  const listRef = useRef<HTMLOListElement>(null)
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())

  // Track which module is in the viewport
  useEffect(() => {
    if (modules.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    modules.forEach((m) => {
      const el = document.getElementById(m.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [modules])

  // Scroll the ToC list so the active item stays visible within the nav panel
  useEffect(() => {
    if (!activeId || !listRef.current) return
    const activeEl = itemRefs.current.get(activeId)
    if (!activeEl) return
    const list = listRef.current
    const listRect = list.getBoundingClientRect()
    const itemRect = activeEl.getBoundingClientRect()
    if (itemRect.top < listRect.top) {
      list.scrollTop += itemRect.top - listRect.top - 8
    } else if (itemRect.bottom > listRect.bottom) {
      list.scrollTop += itemRect.bottom - listRect.bottom + 8
    }
  }, [activeId])

  if (modules.length === 0) return null

  return (
    // sticky is on the nav itself so it has the full page-scroll range to travel
    <nav
      aria-label="Table of contents"
      className="hidden lg:block w-56 shrink-0 sticky top-20 self-start"
    >
      <p className="label-caps text-ink-4 mb-4">Contents</p>
      <ol
        ref={listRef}
        className="space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
      >
        {modules.map((m) => (
          <li key={m.id}>
            <a
              ref={(el) => {
                if (el) itemRefs.current.set(m.id, el)
                else itemRefs.current.delete(m.id)
              }}
              href={`#${m.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(m.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`flex items-start gap-2 py-1.5 text-xs leading-snug transition-colors ${
                activeId === m.id
                  ? 'text-flag font-semibold'
                  : 'text-ink-4 hover:text-ink-3'
              }`}
            >
              <span className="font-mono shrink-0 w-5 opacity-60">{m.moduleNumber}</span>
              <span>{m.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
