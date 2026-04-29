import type { PoliticianProfile } from '@political-intel/types'
import { PoliticianPhoto } from '@/components/ui/PoliticianPhoto'

interface ProfileHeaderProps {
  politician: PoliticianProfile
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

function ExternalLinkIcon() {
  return (
    <svg className="inline w-3 h-3 ml-0.5 opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 2H2v8h8V7M7 1h4m0 0v4m0-4L5 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ProfileHeader({ politician }: ProfileHeaderProps) {
  const { baselineCard, contact, social } = politician
  const sinceYear = baselineCard.currentOffice.startDate.slice(0, 4)

  // Derive last updated from the most recent source retrieval date
  const lastUpdated = politician.sources
    .map(s => s.retrievedAt)
    .filter(Boolean)
    .sort()
    .at(-1) ?? null

  const socialLinks = [
    social?.twitter && { label: 'X / Twitter', href: `https://twitter.com/${social.twitter}`, handle: `@${social.twitter}` },
    social?.instagram && { label: 'Instagram', href: `https://instagram.com/${social.instagram}`, handle: `@${social.instagram}` },
    social?.facebook && { label: 'Facebook', href: `https://facebook.com/${social.facebook}`, handle: social.facebook },
  ].filter(Boolean) as { label: string; href: string; handle: string }[]

  return (
    <header className="border-b border-border pb-8 mb-8">
      <p className="font-mono text-xs text-accent tracking-widest mb-4">
        PUBLIC RECORD
      </p>

      <div className="flex items-start gap-6">
        <PoliticianPhoto name={politician.name} photoUrl={politician.photoUrl} size={96} />

        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-semibold text-ink tracking-tight mb-1">
            {politician.name}
          </h1>
          <p className="text-lg text-ink-2 mb-3">
            {baselineCard.currentOffice.title},{' '}
            {baselineCard.currentOffice.jurisdiction}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-ink-3 mb-3">
            <span className="text-accent/80">{baselineCard.party}</span>
            <span className="text-ink-4">·</span>
            <span>In office since {sinceYear}</span>
            {baselineCard.birthDate && (
              <>
                <span className="text-ink-4">·</span>
                <span>Born {formatDate(baselineCard.birthDate)}</span>
              </>
            )}
            {lastUpdated && (
              <>
                <span className="text-ink-4">·</span>
                <span className="text-ink-4">Updated {lastUpdated}</span>
              </>
            )}
          </div>

          {/* Contact & social row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono">
            {contact?.website && (
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent/70 hover:text-accent transition-colors"
              >
                Official Website<ExternalLinkIcon />
              </a>
            )}
            {contact?.phone && (
              <span className="text-ink-3">
                DC: {contact.phone}
              </span>
            )}
            {contact?.office && (
              <span className="text-ink-4">{contact.office}</span>
            )}
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-ink-2 transition-colors"
                title={s.label}
              >
                {s.handle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
