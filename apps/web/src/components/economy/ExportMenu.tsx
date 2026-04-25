'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/lib/useAuth'
import { useAnalytics } from '@/lib/useAnalytics'
import { UpgradeModal } from '@/components/ui/UpgradeModal'

export function ExportMenu({ context }: { context: string }) {
  const { isPremium } = useAuth()
  const { track } = useAnalytics()
  const [menuOpen, setMenuOpen] = useState(false)
  const [upgradeOpen, setUpgradeOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function handleExport(format: 'csv' | 'pdf') {
    setMenuOpen(false)
    if (!isPremium) {
      track('economy.premium.gate_clicked', {
        feature: format === 'csv' ? 'export_csv' : 'export_pdf',
        context,
      })
      setUpgradeOpen(true)
      return
    }
    track('economy.export.clicked', { format, context })
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setMenuOpen(v => !v)}
        className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest px-3 py-2 rounded border border-border text-ink-4 hover:border-accent/30 hover:text-ink-3 transition-colors"
      >
        <span className="opacity-70">↓</span>
        EXPORT
        {!isPremium && <span className="ml-0.5 text-accent opacity-80">PRO</span>}
      </button>

      {menuOpen && (
        <div className="absolute right-0 bottom-full mb-1 z-30 bg-surface border border-border rounded shadow-xl overflow-hidden min-w-[9rem]">
          {(['csv', 'pdf'] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => handleExport(fmt)}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-left hover:bg-surface-2 transition-colors"
            >
              {!isPremium && (
                <span className="font-mono text-[9px] text-accent shrink-0">PRO</span>
              )}
              <span className="font-mono text-[9px] tracking-widest text-ink-3">
                {fmt.toUpperCase()} EXPORT
              </span>
            </button>
          ))}
        </div>
      )}

      <UpgradeModal
        open={upgradeOpen}
        onClose={() => setUpgradeOpen(false)}
        trigger="Export data to CSV or PDF"
      />
    </div>
  )
}
