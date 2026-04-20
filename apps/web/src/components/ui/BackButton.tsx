'use client'

import { useRouter } from 'next/navigation'

interface BackButtonProps {
  fallbackHref?: string
  label?: string
}

export function BackButton({ fallbackHref = '/', label = 'BACK' }: BackButtonProps) {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-accent transition-colors"
    >
      ← {label}
    </button>
  )
}
