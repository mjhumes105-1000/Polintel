import type { EventType } from '@political-intel/types'

const styles: Record<EventType, string> = {
  vote: 'bg-blue-950 text-blue-400 border-blue-900',
  statement: 'bg-slate-900 text-slate-400 border-slate-800',
  bill: 'bg-violet-950 text-violet-400 border-violet-900',
  milestone: 'bg-teal-950 text-teal-400 border-teal-900',
  funding: 'bg-emerald-950 text-emerald-400 border-emerald-900',
  contradiction: 'bg-flag-bg text-flag border-flag-muted',
}

const labels: Record<EventType, string> = {
  vote: 'VOTE',
  statement: 'STATEMENT',
  bill: 'LEGISLATION',
  milestone: 'MILESTONE',
  funding: 'FUNDING',
  contradiction: '⚑ FLAG',
}

interface TagProps {
  type: EventType
}

export function Tag({ type }: TagProps) {
  return (
    <span
      className={[
        'inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium border',
        styles[type],
      ].join(' ')}
    >
      {labels[type]}
    </span>
  )
}
