import Link from 'next/link'

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-11 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-xs tracking-widest text-ink-2 hover:text-ink transition-colors"
        >
          POLINTEL
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/explore"
            className="text-xs text-ink-3 hover:text-ink-2 transition-colors"
          >
            Explore
          </Link>
          <Link
            href="/methodology"
            className="text-xs text-ink-3 hover:text-ink-2 transition-colors"
          >
            Methodology
          </Link>
        </div>
      </div>
    </nav>
  )
}
