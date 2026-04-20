import type { Source } from '@political-intel/types'

interface SourceBadgeProps {
  source: Source
  className?: string
}

export function SourceBadge({ source, className }: SourceBadgeProps) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      title={source.label}
      className={[
        'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono',
        'bg-surface-2 border border-border text-ink-3',
        'hover:border-accent hover:text-accent transition-colors',
        className ?? '',
      ].join(' ')}
    >
      <span className="opacity-40">[</span>
      <span className="truncate max-w-[160px]">{source.publisher.split(',')[0].split('—')[0].trim()}</span>
      <span className="opacity-40">]</span>
    </a>
  )
}
