import type { DependencySeverity } from '@political-intel/types'

export function formatBillions(n: number): string {
  const abs = Math.abs(n)
  if (abs >= 1_000_000_000_000) return `$${(abs / 1_000_000_000_000).toFixed(1)}T`
  if (abs >= 1_000_000_000) return `$${Math.round(abs / 1_000_000_000)}B`
  if (abs >= 1_000_000) return `$${Math.round(abs / 1_000_000)}M`
  return `$${n.toLocaleString()}`
}

export function signedBalance(n: number): string {
  return (n >= 0 ? '+' : '−') + formatBillions(Math.abs(n))
}

export function balanceStatement(name: string, balance: number): string {
  const abs = formatBillions(Math.abs(balance))
  if (balance < 0) return `The U.S. runs a ${abs} goods deficit with ${name}.`
  if (balance > 0) return `The U.S. runs a ${abs} goods surplus with ${name}.`
  return `The U.S. trade relationship with ${name} is roughly balanced.`
}

export function tariffSeverity(rate: number): DependencySeverity {
  if (rate >= 50) return 'critical'
  if (rate >= 20) return 'high'
  if (rate >= 5) return 'moderate'
  if (rate > 0) return 'low'
  return 'none'
}
