import type { TradeCategory } from '@political-intel/types'
import { formatBillions } from '@/lib/economy'
import { DataBar, SeriesSwatch } from '@/components/ui/DataBar'

interface Props {
  imports: TradeCategory[]
  exports: TradeCategory[]
  countryName: string
}

function CategoryBar({
  category,
  maxValue,
  color,
}: {
  category: TradeCategory
  maxValue: number
  color: string
}) {
  const pct = maxValue > 0 ? Math.min(100, (category.valueUSD / maxValue) * 100) : 0
  return (
    <div>
      <div className="flex items-center justify-between mb-1 gap-2">
        <span className="text-xs text-ink-2 leading-tight">{category.name}</span>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[10px] text-ink-4 tabular-nums">
            {category.percentOfTotal}%
          </span>
          <span className="font-mono text-[10px] text-ink-3 tabular-nums w-12 text-right">
            {formatBillions(category.valueUSD)}
          </span>
        </div>
      </div>
      <DataBar pct={pct} colorClass={color} heightClass="h-1" />
    </div>
  )
}

function FlowColumn({
  categories,
  direction,
  label,
}: {
  categories: TradeCategory[]
  direction: 'import' | 'export'
  label: string
}) {
  const maxValue = Math.max(...categories.map((c) => c.valueUSD))
  const color = direction === 'import' ? 'bg-accent' : 'bg-teal-600'

  return (
    <div>
      <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-3 flex items-center gap-1.5">
        <SeriesSwatch colorClass={color} />
        {label}
      </p>
      <div className="space-y-3">
        {categories.map((cat) => (
          <CategoryBar
            key={cat.name}
            category={cat}
            maxValue={maxValue}
            color={color}
          />
        ))}
      </div>
    </div>
  )
}

export function TradeFlowSection({ imports, exports, countryName }: Props) {
  if (imports.length === 0 && exports.length === 0) return null

  return (
    <section className="mb-10">
      <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-5">
        TRADE FLOW BREAKDOWN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface border border-border rounded p-5">
        {imports.length > 0 && (
          <FlowColumn
            categories={imports}
            direction="import"
            label={`TOP IMPORTS FROM ${countryName.toUpperCase()}`}
          />
        )}
        {exports.length > 0 && (
          <FlowColumn
            categories={exports}
            direction="export"
            label={`TOP U.S. EXPORTS TO ${countryName.toUpperCase()}`}
          />
        )}
      </div>
    </section>
  )
}
