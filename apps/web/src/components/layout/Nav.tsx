'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { href: '/explore', label: 'Explore' },
  { href: '/bills', label: 'Bills' },
  { href: '/search', label: 'Search' },
  { href: '/compare', label: 'Compare' },
  { href: '/economy', label: 'Economy' },
  { href: '/methodology', label: 'Methodology' },
]

export function Nav() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between" style={{ height: '52px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
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

        {/* Desktop nav links */}
        <div className="hidden sm:flex items-center gap-5">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-xs text-ink-3 hover:text-ink-2 transition-colors">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-ink-3 hover:text-ink-2 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block w-5 h-px bg-current transition-transform duration-200 origin-center"
              style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-px bg-current transition-opacity duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-current transition-transform duration-200 origin-center"
              style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-bg/98 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 py-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center py-3 text-sm text-ink-3 hover:text-ink-2 transition-colors border-b border-border/40 last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
