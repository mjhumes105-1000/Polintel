import type { NewsItem } from '@/lib/fetchNewsItems'

interface NewsFeedProps {
  items: NewsItem[]
  politicianName: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  })
}

export function NewsFeed({ items, politicianName }: NewsFeedProps) {
  if (items.length === 0) return null

  return (
    <section className="mb-12">
      <h2 className="label-caps text-accent/70 mb-4">NEWS & STATEMENTS</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 bg-surface border border-border rounded hover:border-accent hover:bg-surface-2 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors leading-snug mb-1">
                  {item.title}
                </p>
                {item.summary && (
                  <p className="text-xs text-ink-3 leading-relaxed line-clamp-2">{item.summary}</p>
                )}
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="font-mono text-[10px] text-ink-4">{item.source}</span>
                  <span className="text-ink-4 text-xs">·</span>
                  <span className="font-mono text-[10px] text-ink-4">{formatDate(item.date)}</span>
                </div>
              </div>
              <span className="text-ink-4 group-hover:text-accent transition-colors text-sm shrink-0 mt-0.5">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
