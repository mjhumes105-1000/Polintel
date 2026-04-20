interface EmptyStateProps {
  label: string
  message?: string
  icon?: string
}

export function EmptyState({ label, message, icon = '—' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-12 px-6 text-center border border-border rounded bg-surface">
      <span className="font-mono text-2xl text-ink-4">{icon}</span>
      <p className="label-caps text-ink-4">{label}</p>
      {message && (
        <p className="text-xs text-ink-4 leading-relaxed max-w-xs">{message}</p>
      )}
    </div>
  )
}
