'use client'

import { useState, useEffect } from 'react'
import type { StudyModule } from '@/data/leverage-study/modules'

export function StudyTableOfContents({ modules }: { modules: StudyModule[] }) {
  const [activeId, setActiveId] = useState<string | null>(modules[0]?.id ?? null)

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

  if (modules.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="hidden lg:block w-52 shrink-0">
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
        <p className="label-caps text-ink-4 mb-4">Contents</p>
        <ol className="space-y-0.5">
          {modules.map((m) => (
            <li key={m.id}>
              <a
                href={`#${m.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(m.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`flex items-start gap-2 py-1.5 text-xs leading-snug transition-colors ${
                  activeId === m.id ? 'text-accent' : 'text-ink-4 hover:text-ink-3'
                }`}
              >
                <span className="font-mono shrink-0 w-5">{m.moduleNumber}</span>
                <span>{m.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
