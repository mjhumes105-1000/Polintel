import type { InvestmentExposure } from '@political-intel/types'
import { formatBillions } from '@/lib/economy'

interface Props {
  investment: InvestmentExposure
  countryName: string
}

function InvestCell({
  label,
  value,
  sub,
}: {
  label: string
  value: string | null
  sub?: string
}) {
  return (
    <div className="bg-surface-2 rounded p-4">
      <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1.5">{label}</p>
      {value ? (
        <p className="font-mono text-lg text-ink tabular-nums">{value}</p>
      ) : (
        <p className="font-mono text-sm text-ink-4 italic">Data pending</p>
      )}
      {sub && <p className="font-mono text-[9px] text-ink-4 mt-0.5">{sub}</p>}
    </div>
  )
}

export function InvestmentSection({ investment, countryName }: Props) {
  if (investment.dataAvailability === 'not-applicable') {
    return (
      <section className="mb-10">
        <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
          U.S. INVESTMENT EXPOSURE
        </h2>
        <div className="bg-surface border border-border rounded px-5 py-4">
          <p className="text-sm text-ink-3">
            Investment exposure data is not applicable for this partner.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-mono text-[10px] tracking-widest text-accent/70">
          U.S. INVESTMENT EXPOSURE
        </h2>
        {investment.fiscalYear && (
          <span className="font-mono text-[9px] text-ink-4">FY{investment.fiscalYear} · BEA</span>
        )}
      </div>

      <div className="bg-surface border border-border rounded p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InvestCell
            label={`U.S. FDI IN ${countryName.toUpperCase()}`}
            value={investment.usFDIAbroadUSD ? formatBillions(investment.usFDIAbroadUSD) : null}
            sub={investment.fiscalYear ? 'Net annual FDI flows · BEA ITA' : 'Direct investment position'}
          />
          <InvestCell
            label={`${countryName.toUpperCase()} FDI IN U.S.`}
            value={investment.foreignFDIInUSUSD ? formatBillions(investment.foreignFDIInUSUSD) : null}
            sub={investment.fiscalYear ? 'Net annual FDI flows · BEA ITA' : 'Direct investment position'}
          />
        </div>

        {investment.usPortfolioExposureUSD && (
          <div>
            <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1.5">
              U.S. PORTFOLIO EXPOSURE
            </p>
            <p className="text-sm text-ink-3">
              {formatBillions(investment.usPortfolioExposureUSD)} in bonds and equities
            </p>
          </div>
        )}

        {investment.majorUSInvestors && investment.majorUSInvestors.length > 0 && (
          <div>
            <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">
              NOTABLE U.S. INVESTORS
            </p>
            <div className="flex flex-wrap gap-1.5">
              {investment.majorUSInvestors.map((name) => (
                <span
                  key={name}
                  className="font-mono text-[9px] px-2 py-0.5 rounded border text-ink-3 border-border"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}

        {investment.dataAvailability === 'pending' && (
          <p className="font-mono text-[10px] text-ink-4">
            Full investment position data is pending. Figures are estimates from available BEA reporting.
          </p>
        )}
      </div>
    </section>
  )
}
