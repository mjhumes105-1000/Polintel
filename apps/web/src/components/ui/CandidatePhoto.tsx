'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CandidatePhotoProps {
  name: string
  photoUrl?: string
}

export function CandidatePhoto({ name, photoUrl }: CandidatePhotoProps) {
  const [failed, setFailed] = useState(false)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const resolvedSrc = photoUrl?.startsWith('/') ? `${basePath}${photoUrl}` : photoUrl

  if (!resolvedSrc || failed) {
    return (
      <div className="w-10 h-10 rounded-full bg-surface-3 border border-border flex items-center justify-center shrink-0">
        <span className="font-mono text-[10px] text-ink-4">{name.charAt(0)}</span>
      </div>
    )
  }

  return (
    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-surface-3 shrink-0">
      <Image
        src={resolvedSrc}
        alt={name}
        width={40}
        height={40}
        className="object-cover w-full h-full"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
