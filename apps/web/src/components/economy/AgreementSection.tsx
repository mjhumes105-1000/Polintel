import type { TradeAgreement, AgreementStatus } from '@political-intel/types'

const STATUS_STYLES: Record<AgreementStatus, string> = {
  'in-force':    'text-teal-700 border-teal-300 bg-teal-100 dark:text-teal-400 dark:border-teal-900 dark:bg-teal-950/30',
  'negotiating': 'text-accent border-accent/40 bg-accent/5',
  'suspended':   'text-ink-3 border-border bg-surface-2',
  'none':        'text-ink-4 border-border',
}

const STATUS_LABELS: Record<AgreementStatus, string> = {
  'in-force':    'IN FORCE',
  'negotiating': 'NEGOTIATING',
  'suspended':   'SUSPENDED',
  'none':        'NO FTA',
}

interface Props {
  agreement: TradeAgreement
}

export function AgreementSection({ agreement }: Props) {
  return (
    <section className="mb-10">
      <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
        TRADE AGREEMENT
      </h2>
      <div className="bg-surface border border-border rounded p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-base font-semibold text-ink leading-tight">{agreement.name}</p>
            {agreement.inForceDate && (
              <p className="font-mono text-[10px] text-ink-4 mt-0.5">
                In force: {agreement.inForceDate}
              </p>
            )}
          </div>
          <span className={`font-mono text-[9px] px-2 py-0.5 rounded border shrink-0 ${STATUS_STYLES[agreement.status]}`}>
            {STATUS_LABELS[agreement.status]}
          </span>
        </div>

        <p className="text-sm text-ink-3 leading-relaxed mb-4">{agreement.summary}</p>

        {agreement.keyProvisions && agreement.keyProvisions.length > 0 && (
          <div>
            <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">KEY PROVISIONS</p>
            <ul className="space-y-1">
              {agreement.keyProvisions.map((provision, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-ink-4 text-xs mt-0.5 shrink-0">·</span>
                  <span className="text-xs text-ink-3 leading-relaxed">{provision}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
