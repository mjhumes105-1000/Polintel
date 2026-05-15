'use client'

import { useState, useEffect, useRef } from 'react'

interface TocSection {
  id: string
  title: string
}

interface Props {
  sections: TocSection[]
}

export function StudyTableOfContents({ sections }: Props) {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null)
  const listRef = useRef<HTMLOListElement>(null)
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())

  useEffect(() => {
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  // Scroll the ToC list to keep the active item visible
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

  if (sections.length === 0) return null

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block w-56 shrink-0 sticky top-20 self-start"
    >
      <p className="label-caps text-ink-4 mb-4">Contents</p>
      <ol
        ref={listRef}
        className="space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
      >
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              ref={(el) => {
                if (el) itemRefs.current.set(s.id, el)
                else itemRefs.current.delete(s.id)
              }}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`flex items-start gap-2 py-1.5 text-xs leading-snug transition-colors ${
                activeId === s.id
                  ? 'text-flag font-semibold'
                  : 'text-ink-4 hover:text-ink-3'
              }`}
            >
              <span className="font-mono shrink-0 w-5 opacity-50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{s.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
