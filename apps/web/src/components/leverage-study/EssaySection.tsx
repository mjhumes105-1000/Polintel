import type { ReactNode } from 'react'
import type { EssaySection } from '@/data/leverage-study/essay'

// Parse [text](url) markdown links into <a> elements
function renderInline(text: string): ReactNode {
  if (!text.includes('[')) return text
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  if (parts.length === 1) return text
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (m) {
      return (
        <a
          key={i}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
        >
          {m[1]}
        </a>
      )
    }
    return part || null
  })
}

interface EssaySectionProps {
  section: EssaySection
  sectionNumber?: number
}

export function EssaySectionBlock({ section, sectionNumber }: EssaySectionProps) {
  return (
    <section id={section.id} className="py-16 border-b border-border/50 last:border-0">
      {section.title && (
        <div className="flex items-baseline gap-4 mb-7">
          {sectionNumber != null && (
            <span
              className="font-mono text-3xl font-bold leading-none shrink-0"
              style={{ color: 'rgba(232,146,12,0.30)' }}
              aria-hidden
            >
              {String(sectionNumber).padStart(2, '0')}
            </span>
          )}
          <h2 className="font-display text-3xl font-bold text-ink leading-snug max-w-[600px]">
            {section.title}
          </h2>
        </div>
      )}

      <div className="space-y-5">
        {section.body.map((paragraph, i) => (
          <p key={i} className="text-ink-2 text-base leading-[1.85] max-w-[68ch]">
            {renderInline(paragraph)}
          </p>
        ))}
      </div>
    </section>
  )
}
