import type { EventType } from '@political-intel/types'

const styles: Record<EventType, string> = {
  vote:          'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-950 dark:text-blue-400 dark:border-blue-900',
  statement:     'bg-slate-100 text-slate-600 border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800',
  bill:          'bg-violet-100 text-violet-700 border-violet-300 dark:bg-violet-950 dark:text-violet-400 dark:border-violet-900',
  milestone:     'bg-teal-100 text-teal-700 border-teal-300 dark:bg-teal-950 dark:text-teal-400 dark:border-teal-900',
  funding:       'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-900',
  contradiction: 'bg-flag-bg text-flag border-flag-muted',
}

const labels: Record<EventType, string> = {
  vote:          'VOTE',
  statement:     'STATEMENT',
  bill:          'LEGISLATION',
  milestone:     'MILESTONE',
  funding:       'FUNDING',
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
