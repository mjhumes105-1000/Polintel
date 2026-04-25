import { formatBillions, signedBalance } from '@/lib/economy'

interface Props {
  totalTradeUSD: number
  usImportsUSD: number
  usExportsUSD: number
  tradeBalanceUSD: number
  gdpUSD?: number
  fiscalYear?: string
}

interface CellProps {
  label: string
  value: string
  sub?: string
  color?: string
}

function Cell({ label, value, sub, color = 'text-ink' }: CellProps) {
  return (
    <div className="bg-surface px-4 py-4">
      <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-1.5 leading-tight">{label}</p>
      <p className={`font-mono text-lg tabular-nums ${color}`}>{value}</p>
      {sub && <p className="font-mono text-[9px] text-ink-4 mt-0.5">{sub}</p>}
    </div>
  )
}

export function MetricsStrip({
  totalTradeUSD,
  usImportsUSD,
  usExportsUSD,
  tradeBalanceUSD,
  gdpUSD,
  fiscalYear = '2023',
}: Props) {
  const cols = gdpUSD ? 5 : 4
  const gridClass = cols === 5
    ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
    : 'grid grid-cols-2 sm:grid-cols-4'

  return (
    <div className={`${gridClass} gap-px bg-border border border-border rounded overflow-hidden mb-10`}>
      <Cell
        label="TOTAL TRADE VOLUME"
        value={formatBillions(totalTradeUSD)}
        sub={`FY${fiscalYear}`}
      />
      <Cell
        label="U.S. IMPORTS FROM"
        value={formatBillions(usImportsUSD)}
        sub={`Goods, FY${fiscalYear}`}
        color="text-accent"
      />
      <Cell
        label="U.S. EXPORTS TO"
        value={formatBillions(usExportsUSD)}
        sub={`Goods, FY${fiscalYear}`}
        color="text-teal-400"
      />
      <Cell
        label="TRADE BALANCE"
        value={signedBalance(tradeBalanceUSD)}
        sub={tradeBalanceUSD < 0 ? 'U.S. deficit' : tradeBalanceUSD > 0 ? 'U.S. surplus' : 'Balanced'}
        color={tradeBalanceUSD < 0 ? 'text-flag' : tradeBalanceUSD > 0 ? 'text-teal-400' : 'text-ink-3'}
      />
      {gdpUSD && (
        <Cell
          label="PARTNER GDP"
          value={formatBillions(gdpUSD)}
          sub="World Bank est."
        />
      )}
    </div>
  )
}
