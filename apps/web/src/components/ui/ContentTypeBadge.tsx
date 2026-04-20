import type { EventType } from '@political-intel/types'

type BadgeType = EventType | 'ai'

const config: Record<BadgeType, { label: string; className: string }> = {
  vote: {
    label: 'VOTE',
    className: 'text-signal-vote border-signal-vote/30 bg-signal-vote/10',
  },
  statement: {
    label: 'STATEMENT',
    className: 'text-signal-statement border-signal-statement/30 bg-signal-statement/10',
  },
  bill: {
    label: 'LEGISLATION',
    className: 'text-signal-bill border-signal-bill/30 bg-signal-bill/10',
  },
  milestone: {
    label: 'MILESTONE',
    className: 'text-signal-milestone border-signal-milestone/30 bg-signal-milestone/10',
  },
  funding: {
    label: 'FUNDING',
    className: 'text-signal-funding border-signal-funding/30 bg-signal-funding/10',
  },
  contradiction: {
    label: '⚑ FLAG',
    className: 'text-signal-flag border-signal-flag/40 bg-signal-flag/10',
  },
  ai: {
    label: 'AI ANALYSIS',
    className: 'text-signal-ai border-signal-ai/30 bg-signal-ai/10',
  },
}

interface ContentTypeBadgeProps {
  type: BadgeType
}

export function ContentTypeBadge({ type }: ContentTypeBadgeProps) {
  const { label, className } = config[type]
  return (
    <span
      className={[
        'inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-medium border',
        className,
      ].join(' ')}
    >
      {label}
    </span>
  )
}
