import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Nav() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-13 flex items-center justify-between" style={{ height: '52px' }}>
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-11 h-11 shrink-0 rounded-xl bg-ink dark:bg-transparent overflow-hidden">
            <Image
              src={`${basePath}/polintel-logo.png`}
              alt="PoliIntel"
              width={44}
              height={44}
              className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              priority
            />
          </div>
          <span className="font-mono text-xs tracking-widest text-ink-2 group-hover:text-ink transition-colors">
            POLINTEL
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/explore" className="text-xs text-ink-3 hover:text-ink-2 transition-colors">Explore</Link>
          <Link href="/bills" className="text-xs text-ink-3 hover:text-ink-2 transition-colors">Bills</Link>
          <Link href="/search" className="text-xs text-ink-3 hover:text-ink-2 transition-colors">Search</Link>
          <Link href="/compare" className="text-xs text-ink-3 hover:text-ink-2 transition-colors">Compare</Link>
          <Link href="/economy" className="text-xs text-ink-3 hover:text-ink-2 transition-colors">Economy</Link>
          <Link href="/methodology" className="text-xs text-ink-3 hover:text-ink-2 transition-colors">Methodology</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
