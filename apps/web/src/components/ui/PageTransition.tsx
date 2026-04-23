'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.animation = 'none'
    // Force reflow so removing then re-adding the animation restarts it
    void el.offsetHeight
    el.style.animation = ''
  }, [pathname])

  return (
    <div ref={ref} className="animate-page-enter">
      {children}
    </div>
  )
}
