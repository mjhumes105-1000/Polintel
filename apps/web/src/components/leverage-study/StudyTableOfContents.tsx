'use client'

import { useState, useEffect, useRef } from 'react'
import type { StudyModule } from '@/data/leverage-study/modules'

export function StudyTableOfContents({ modules }: { modules: StudyModule[] }) {
  const [activeId, setActiveId] = useState<string | null>(modules[0]?.id ?? null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
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

  // Scroll the ToC panel so the active item stays visible
  useEffect(() => {
    if (!activeId || !scrollContainerRef.current) return
    const activeEl = itemRefs.current.get(activeId)
    if (!activeEl) return
    const container = scrollContainerRef.current
    const containerTop = container.scrollTop
    const containerBottom = containerTop + container.clientHeight
    const itemTop = activeEl.offsetTop
    const itemBottom = itemTop + activeEl.clientHeight
    if (itemTop < containerTop || itemBottom > containerBottom) {
      activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [activeId])

  if (modules.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="hidden lg:block w-56 shrink-0">
      <div
        ref={scrollContainerRef}
        className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2"
      >
        <p className="label-caps text-ink-4 mb-4">Contents</p>
        <ol className="space-y-0.5">
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
      </div>
    </nav>
  )
}
