export function AIAnalysisBadge() {
  return (
    <div className="flex items-start gap-3 border border-signal-ai/25 bg-signal-ai/5 rounded px-4 py-3 mb-5">
      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-signal-ai border-signal-ai/30 bg-signal-ai/10 shrink-0 mt-0.5">
        AI ANALYSIS
      </span>
      <p className="text-xs text-ink-3 leading-relaxed">
        AI-generated interpretation of sourced public record. Represents one reading of the evidence —
        not a statement of fact. Each item is grounded in cited events above.
      </p>
    </div>
  )
}
