import type { AidFlow } from '@political-intel/types'
import { formatBillions } from '@/lib/economy'

interface Props {
  aid: AidFlow
  countryName: string
}

function AidBar({
  label,
  value,
  total,
  color,
}: {
  label: string
  value: number
  total: number
  color: string
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono text-[9px] text-ink-4">{label}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] text-ink-4">{pct}%</span>
          <span className="font-mono text-[10px] text-ink-3 tabular-nums w-12 text-right">
            {formatBillions(value)}
          </span>
        </div>
      </div>
      <div className="h-1 bg-surface-3 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function AidSection({ aid, countryName }: Props) {
  const hasBreakdown =
    aid.economicAssistanceUSD || aid.militaryAssistanceUSD || aid.humanitarianUSD

  return (
    <section className="mb-10">
      <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
        U.S. AID & FINANCIAL OUTFLOWS
      </h2>
      <div className="bg-surface border border-border rounded p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-mono text-[9px] text-ink-4 mb-1">TOTAL ANNUAL AID TO {countryName.toUpperCase()}</p>
            <p className="font-mono text-2xl text-ink tabular-nums">{formatBillions(aid.totalUSD)}</p>
          </div>
          <span className="font-mono text-[9px] text-ink-4">FY{aid.fiscalYear}</span>
        </div>

        {hasBreakdown && (
          <div className="space-y-3 mb-4">
            {aid.economicAssistanceUSD && (
              <AidBar
                label="ECONOMIC ASSISTANCE"
                value={aid.economicAssistanceUSD}
                total={aid.totalUSD}
                color="bg-accent/50"
              />
            )}
            {aid.militaryAssistanceUSD && (
              <AidBar
                label="MILITARY ASSISTANCE"
                value={aid.militaryAssistanceUSD}
                total={aid.totalUSD}
                color="bg-flag/60"
              />
            )}
            {aid.humanitarianUSD && (
              <AidBar
                label="HUMANITARIAN AID"
                value={aid.humanitarianUSD}
                total={aid.totalUSD}
                color="bg-teal-600/60"
              />
            )}
          </div>
        )}

        {aid.majorPrograms && aid.majorPrograms.length > 0 && (
          <div>
            <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">MAJOR PROGRAMS</p>
            <div className="flex flex-wrap gap-1.5">
              {aid.majorPrograms.map((prog) => (
                <span
                  key={prog}
                  className="font-mono text-[9px] px-2 py-0.5 rounded border text-ink-3 border-border"
                >
                  {prog}
                </span>
              ))}
            </div>
          </div>
        )}

        {aid.note && (
          <p className="font-mono text-[10px] text-ink-4 mt-3 leading-relaxed">{aid.note}</p>
        )}
      </div>
    </section>
  )
}
