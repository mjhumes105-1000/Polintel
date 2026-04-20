export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-ink-3 max-w-2xl leading-relaxed">
            PoliIntel is a non-partisan platform. All factual claims are sourced to publicly available records.
            AI-generated content is clearly labeled and represents an interpretation of evidence, not a statement
            of fact. No editorial positions are taken on policy outcomes.
          </p>
          <p className="text-xs text-ink-4 font-mono">
            MVP v0.1 · Data accurate to the retrieval dates shown on each source
          </p>
        </div>
      </div>
    </footer>
  )
}
