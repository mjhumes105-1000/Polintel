import type { StrategicDependencySignal } from '@political-intel/types'
import { SeverityChip } from './SeverityChip'

const SEVERITY_ORDER = { critical: 0, high: 1, moderate: 2, low: 3, none: 4 }

const DIRECTION_STYLES: Record<string, string> = {
  inbound:  'text-flag/80 border-flag-muted',
  outbound: 'text-teal-400/80 border-teal-900',
  mutual:   'text-ink-3 border-border',
}

const DIRECTION_LABELS: Record<string, string> = {
  inbound:  'U.S. DEPENDENT',
  outbound: 'PARTNER DEPENDENT',
  mutual:   'MUTUAL',
}

interface Props {
  signals: StrategicDependencySignal[]
  countryName: string
}

export function DependenceTable({ signals, countryName }: Props) {
  if (signals.length === 0) return null

  const sorted = [...signals].sort(
    (a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]
  )

  const criticalCount = sorted.filter((s) => s.severity === 'critical').length
  const highCount = sorted.filter((s) => s.severity === 'high').length

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-1">
        <h2 className="font-mono text-[10px] tracking-widest text-accent/70">
          STRATEGIC DEPENDENCY
        </h2>
        <div className="flex items-center gap-3">
          {criticalCount > 0 && (
            <span className="font-mono text-[9px] text-flag">
              {criticalCount} CRITICAL
            </span>
          )}
          {highCount > 0 && (
            <span className="font-mono text-[9px] text-amber-400">
              {highCount} HIGH
            </span>
          )}
        </div>
      </div>

      <p className="font-mono text-[10px] text-ink-4 mb-3">
        Editorial assessment based on trade data, supply chain analysis, and policy reporting.
        Not a risk rating.
      </p>

      <div className="bg-surface border border-border rounded overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-2.5 bg-surface-2 border-b border-border">
          <span className="font-mono text-[9px] text-ink-4">CATEGORY</span>
          <span className="font-mono text-[9px] text-ink-4">SEVERITY</span>
          <span className="font-mono text-[9px] text-ink-4">DIRECTION</span>
        </div>

        {sorted.map((signal, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-3 border-b border-border last:border-0 items-start hover:bg-surface-2 transition-colors"
          >
            <div>
              <p className="text-sm text-ink leading-tight">{signal.category}</p>
              {signal.note && (
                <p className="text-[10px] text-ink-4 leading-relaxed mt-0.5 max-w-sm">
                  {signal.note}
                </p>
              )}
            </div>
            <SeverityChip severity={signal.severity} />
            <span
              className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${DIRECTION_STYLES[signal.direction]}`}
            >
              {DIRECTION_LABELS[signal.direction]}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
