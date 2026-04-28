'use client'

import {
  BUDGET_YEAR,
  BUDGET_OVERVIEW,
  REVENUE_LINES,
  MANDATORY_LINES,
  DISCRETIONARY_LINES,
  MANDATORY_TOTAL,
  DISCRETIONARY_TOTAL,
  type BudgetLine,
} from '@/data/economy/budget'

function fmt(trillions: number): string {
  if (Math.abs(trillions) >= 1) return `$${trillions.toFixed(2)}T`
  return `$${(trillions * 1000).toFixed(0)}B`
}

function OverviewStrip() {
  const cells = [
    {
      label: 'TOTAL REVENUE',
      value: fmt(BUDGET_OVERVIEW.totalRevenueUSD),
      sub: BUDGET_YEAR,
      color: 'text-teal-600 dark:text-teal-400',
    },
    {
      label: 'TOTAL SPENDING',
      value: fmt(BUDGET_OVERVIEW.totalSpendingUSD),
      sub: BUDGET_YEAR,
      color: 'text-ink',
    },
    {
      label: 'BUDGET DEFICIT',
      value: fmt(Math.abs(BUDGET_OVERVIEW.deficitUSD)),
      sub: `${BUDGET_OVERVIEW.deficitPctGdp}% of GDP`,
      color: 'text-flag',
    },
    {
      label: 'DEBT HELD BY PUBLIC',
      value: fmt(BUDGET_OVERVIEW.debtHeldByPublicUSD),
      sub: `${BUDGET_OVERVIEW.debtPctGdp}% of GDP`,
      color: 'text-ink',
    },
    {
      label: 'NOMINAL GDP',
      value: fmt(BUDGET_OVERVIEW.gdpUSD),
      sub: 'Calendar year 2025',
      color: 'text-accent',
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border rounded overflow-hidden mb-10">
      {cells.map((cell) => (
        <div key={cell.label} className="bg-surface px-4 py-4">
          <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1.5 leading-tight">{cell.label}</p>
          <p className={`font-mono text-lg tabular-nums ${cell.color}`}>{cell.value}</p>
          <p className="font-mono text-[9px] text-ink-4 mt-0.5">{cell.sub}</p>
        </div>
      ))}
    </div>
  )
}

function BudgetBar({ line, maxPct }: { line: BudgetLine; maxPct: number }) {
  const barWidth = Math.min(100, (line.pct / maxPct) * 100)
  return (
    <div className="py-3 border-b border-border last:border-0">
      <div className="flex items-center justify-between mb-1.5 gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className={`font-mono text-[10px] tabular-nums font-semibold shrink-0 w-10 ${line.textColor}`}>
            {line.pct.toFixed(1)}%
          </span>
          <span className="text-xs text-ink leading-snug truncate">{line.category}</span>
        </div>
        <span className={`font-mono text-[10px] tabular-nums shrink-0 ${line.textColor}`}>
          {fmt(line.amountUSD)}
        </span>
      </div>
      <div className="ml-12 space-y-1">
        <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${line.color}`}
            style={{ width: `${barWidth}%` }}
          />
        </div>
        <p className="text-[10px] text-ink-4 leading-relaxed line-clamp-2">{line.description}</p>
      </div>
    </div>
  )
}

function BudgetSection({
  title,
  sub,
  lines,
  total,
  maxPct,
}: {
  title: string
  sub: string
  lines: BudgetLine[]
  total: number
  maxPct: number
}) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline justify-between mb-3">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-accent/70">{title}</p>
          <p className="text-xs text-ink-4 mt-0.5">{sub}</p>
        </div>
        <span className="font-mono text-sm text-ink tabular-nums shrink-0 ml-4">{fmt(total)}</span>
      </div>
      <div className="bg-surface border border-border rounded px-4">
        {lines.map((line) => (
          <BudgetBar key={line.category} line={line} maxPct={maxPct} />
        ))}
      </div>
    </div>
  )
}

export function BudgetView() {
  const revenueMax = Math.max(...REVENUE_LINES.map((l) => l.pct))
  const mandatoryMax = Math.max(...MANDATORY_LINES.map((l) => l.pct))
  const discretionaryMax = Math.max(...DISCRETIONARY_LINES.map((l) => l.pct))

  return (
    <div>
      <OverviewStrip />

      <BudgetSection
        title="FEDERAL REVENUE"
        sub={`Where the money comes from · Total: ${fmt(BUDGET_OVERVIEW.totalRevenueUSD)} · ${BUDGET_YEAR}`}
        lines={REVENUE_LINES}
        total={BUDGET_OVERVIEW.totalRevenueUSD}
        maxPct={revenueMax}
      />

      {/* Spending header */}
      <div className="mb-5 pt-2 border-t border-border">
        <div className="flex items-baseline justify-between mb-1">
          <p className="font-mono text-[10px] tracking-widest text-accent/70">FEDERAL SPENDING</p>
          <span className="font-mono text-sm text-ink tabular-nums">{fmt(BUDGET_OVERVIEW.totalSpendingUSD)}</span>
        </div>
        <p className="text-xs text-ink-4">
          Mandatory + Discretionary · {BUDGET_YEAR} · Deficit:{' '}
          <span className="text-flag">{fmt(Math.abs(BUDGET_OVERVIEW.deficitUSD))}</span>
          {' '}({BUDGET_OVERVIEW.deficitPctGdp}% of GDP)
        </p>
      </div>

      <BudgetSection
        title="MANDATORY SPENDING"
        sub={`Entitlements & net interest — set by law, not annual appropriations · ${fmt(MANDATORY_TOTAL)}`}
        lines={MANDATORY_LINES}
        total={MANDATORY_TOTAL}
        maxPct={mandatoryMax}
      />

      <BudgetSection
        title="DISCRETIONARY SPENDING"
        sub={`Appropriated annually by Congress · ${fmt(DISCRETIONARY_TOTAL)}`}
        lines={DISCRETIONARY_LINES}
        total={DISCRETIONARY_TOTAL}
        maxPct={discretionaryMax}
      />

      <p className="font-mono text-[10px] text-ink-4 mt-2">
        Source: CBO Budget and Economic Outlook · OMB Historical Tables · Treasury Fiscal Data ·{' '}
        {BUDGET_YEAR} (fiscal year ended Sept 30, 2025)
      </p>
    </div>
  )
}
