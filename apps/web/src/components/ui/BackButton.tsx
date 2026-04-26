'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface BackButtonProps {
  href?: string
  label?: string
}

export function BackButton({ href, label = 'BACK' }: BackButtonProps) {
  const router = useRouter()

  if (href) {
    return (
      <Link
        href={href}
        className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-accent transition-colors"
      >
        ← {label}
      </Link>
    )
  }

  return (
    <button
      onClick={() => router.back()}
      className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-accent transition-colors"
    >
      ← {label}
    </button>
  )
}
