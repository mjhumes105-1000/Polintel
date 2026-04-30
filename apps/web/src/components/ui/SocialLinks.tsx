import type { LegislatorSocial, LegislatorContact } from '@political-intel/types'

interface SocialLinksProps {
  social?: LegislatorSocial
  contact?: LegislatorContact
  className?: string
}

const PLATFORMS = [
  {
    key: 'website' as const,
    label: 'WEBSITE',
    icon: '🌐',
    href: (v: string) => v,
    isContact: true,
  },
  {
    key: 'truthsocial' as const,
    label: 'TRUTH SOCIAL',
    icon: '◉',
    href: (v: string) => `https://truthsocial.com/@${v}`,
    isContact: false,
  },
  {
    key: 'twitter' as const,
    label: 'X',
    icon: '𝕏',
    href: (v: string) => `https://x.com/${v}`,
    isContact: false,
  },
  {
    key: 'instagram' as const,
    label: 'INSTAGRAM',
    icon: '◻',
    href: (v: string) => `https://instagram.com/${v}`,
    isContact: false,
  },
  {
    key: 'facebook' as const,
    label: 'FACEBOOK',
    icon: 'f',
    href: (v: string) => `https://facebook.com/${v}`,
    isContact: false,
  },
  {
    key: 'youtube' as const,
    label: 'YOUTUBE',
    icon: '▶',
    href: (v: string) => `https://youtube.com/${v.startsWith('@') ? v : '@' + v}`,
    isContact: false,
  },
]

export function SocialLinks({ social, contact, className = '' }: SocialLinksProps) {
  const links: { label: string; icon: string; url: string }[] = []

  for (const platform of PLATFORMS) {
    const value = platform.isContact
      ? contact?.[platform.key as keyof LegislatorContact]
      : social?.[platform.key as keyof LegislatorSocial]
    if (value) {
      links.push({ label: platform.label, icon: platform.icon, url: platform.href(value) })
    }
  }

  if (links.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ label, icon, url }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded hover:border-accent/50 hover:bg-surface-2 transition-colors group"
        >
          <span className="text-xs text-ink-3 group-hover:text-accent transition-colors select-none w-3 text-center">
            {icon}
          </span>
          <span className="font-mono text-[9px] tracking-widest text-ink-3 group-hover:text-accent transition-colors">
            {label}
          </span>
        </a>
      ))}
    </div>
  )
}
