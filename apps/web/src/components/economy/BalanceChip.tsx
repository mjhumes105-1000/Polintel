interface Props {
  balance: number
  size?: 'sm' | 'md'
}

export function BalanceChip({ balance, size = 'sm' }: Props) {
  const base = size === 'md'
    ? 'font-mono text-[10px] px-2 py-0.5 rounded border'
    : 'font-mono text-[9px] px-1.5 py-0.5 rounded border'

  if (balance > 0) {
    return (
      <span className={`${base} text-teal-400 border-teal-900 bg-teal-950/30 shrink-0`}>
        SURPLUS
      </span>
    )
  }
  if (balance < 0) {
    return (
      <span className={`${base} text-flag border-flag-muted bg-flag-bg shrink-0`}>
        DEFICIT
      </span>
    )
  }
  return (
    <span className={`${base} text-ink-3 border-border shrink-0`}>
      BALANCED
    </span>
  )
}
