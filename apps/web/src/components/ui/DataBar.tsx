// Shared horizontal bar mark.
// Mark spec: thin bar, square at the baseline (left), rounded data-end (right),
// solid series color on a recessive track — never a border, never both ends rounded.
interface DataBarProps {
  /** 0–100 */
  pct: number
  /** tailwind bg class carrying the series color, e.g. 'bg-accent' */
  colorClass: string
  /** tailwind height class; bars stay thin */
  heightClass?: string
}

export function DataBar({ pct, colorClass, heightClass = 'h-1.5' }: DataBarProps) {
  return (
    <div className={`${heightClass} bg-surface-3 rounded-r-full overflow-hidden`}>
      <div
        className={`h-full rounded-r-full transition-all ${colorClass}`}
        style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
      />
    </div>
  )
}

/** Small colored square keyed to a series — identity rides the mark, not the text. */
export function SeriesSwatch({ colorClass }: { colorClass: string }) {
  return <span className={`inline-block w-2 h-2 rounded-[2px] shrink-0 ${colorClass}`} aria-hidden />
}
