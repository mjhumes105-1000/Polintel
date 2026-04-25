import type { DependencySeverity } from '@political-intel/types'

const STYLES: Record<DependencySeverity, string> = {
  critical: 'text-flag border-flag-muted bg-flag-bg',
  high:     'text-amber-400 border-amber-900 bg-amber-950/30',
  moderate: 'text-ink-2 border-border bg-surface-2',
  low:      'text-ink-4 border-border',
  none:     'text-ink-4 border-border opacity-40',
}

const LABELS: Record<DependencySeverity, string> = {
  critical: 'CRITICAL',
  high:     'HIGH',
  moderate: 'MODERATE',
  low:      'LOW',
  none:     'NONE',
}

interface Props {
  severity: DependencySeverity
}

export function SeverityChip({ severity }: Props) {
  return (
    <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${STYLES[severity]}`}>
      {LABELS[severity]}
    </span>
  )
}
