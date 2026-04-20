'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PoliticianPhotoProps {
  name: string
  photoUrl?: string
  size?: number
  className?: string
}

export function PoliticianPhoto({ name, photoUrl, size = 96, className = '' }: PoliticianPhotoProps) {
  const [failed, setFailed] = useState(false)

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const sizeClass = `w-[${size}px] h-[${size}px]`

  if (!photoUrl || failed) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`rounded overflow-hidden border border-border bg-surface-3 flex items-center justify-center shrink-0 ${className}`}
      >
        <span
          className="font-mono font-semibold text-ink-3 select-none"
          style={{ fontSize: size * 0.28 }}
        >
          {initials}
        </span>
      </div>
    )
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded overflow-hidden border border-border bg-surface-2 shrink-0 ${className}`}
    >
      <Image
        src={photoUrl}
        alt={name}
        width={size}
        height={size}
        className="w-full h-full object-cover object-top"
        onError={() => setFailed(true)}
        priority
      />
    </div>
  )
}
