import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BackButton } from '@/components/ui/BackButton'
import { committees, committeeBySlug } from '@/data/committees'
import { caDelegationProfiles } from '@/data/politicians/ca-delegation'
import committeeRostersRaw from '@/data/legislators/committee-rosters.json'
import { fetchCommitteeBills } from '@/lib/fetchCommitteeBills'

export const revalidate = 86400

// ─── Types ───────────────────────────────────────────────────────────────────

interface RosterMember {
  bioguide: string
  name: string
  party: string
  state: string
  district: number | null
  type: string
  rank: number | null
  title: string | null
  govtrack: number
}

type CommitteeRosters = Record<string, RosterMember[]>

const committeeRosters = committeeRostersRaw as CommitteeRosters

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  const slugsFromCommittees = committees.map((c) => ({ slug: c.slug }))
  const slugsFromRosters = Object.keys(committeeRosters).map((k) => ({ slug: k.toLowerCase() }))
  const allSlugs = new Map<string, { slug: string }>()
  for (const item of [...slugsFromCommittees, ...slugsFromRosters]) {
    allSlugs.set(item.slug, item)
  }
  return Array.from(allSlugs.values())
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const committee = committeeBySlug[slug]
  if (!committee) return {}
  return {
    title: committee.name,
    description: committee.summary,
  }
}

// ─── Helper: bioguide → profile slug map ─────────────────────────────────────

function buildBioguideToSlugMap(): Map<string, string> {
  const map = new Map<string, string>()
  for (const profile of Object.values(caDelegationProfiles)) {
    map.set(profile.id, profile.slug)
  }
  return map
}

// ─── Badge helpers ────────────────────────────────────────────────────────────

function powerBadgeColor(level: 'Supreme' | 'High' | 'Standard'): string {
  if (level === 'Supreme') return 'text-orange-400 border-orange-900/60 bg-orange-950/30'
  if (level === 'High') return 'text-accent border-accent/40 bg-accent/10'
  return 'text-ink-3 border-border bg-surface-2'
}

function chamberBadgeColor(chamber: 'House' | 'Senate' | 'Joint'): string {
  if (chamber === 'Senate') return 'text-teal-400 border-teal-900/60 bg-teal-950/30'
  if (chamber === 'Joint') return 'text-purple-400 border-purple-900/60 bg-purple-950/30'
  return 'text-ink-2 border-border bg-surface-2'
}

function statusBadgeColor(status: string): string {
  const s = status.toLowerCase()
  if (s === 'signed' || s === 'enacted') return 'text-teal-400 border-teal-900/60 bg-teal-950/30'
  if (s.includes('passed house') || s.includes('passed senate'))
    return 'text-accent border-accent/40 bg-accent/10'
  if (s.includes('passed committee')) return 'text-amber-400 border-amber-900/60 bg-amber-950/30'
  return 'text-ink-3 border-border bg-surface-2'
}

// ─── Avatar components ────────────────────────────────────────────────────────

function InitialsAvatar({ name, party }: { name: string; party: string }) {
  const initials = name
    .split(' ')
    .filter((w) => w.length > 0)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join('')

  const color =
    party === 'D'
      ? 'bg-accent/20 text-accent border-accent/30'
      : 'bg-red-950/40 text-red-400 border-red-900/50'

  return (
    <div
      className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono text-xs font-bold shrink-0 ${color}`}
    >
      {initials}
    </div>
  )
}

function PhotoAvatar({ bioguide, name, party }: { bioguide: string; name: string; party: string }) {
  const photoUrl = `https://bioguide.congress.gov/bioguide/photo/${bioguide[0]}/${bioguide}.jpg`
  const ringColor = party === 'D' ? 'ring-accent/40' : 'ring-red-500/40'

  return (
    <div className={`w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ${ringColor}`}>
      <Image
        src={photoUrl}
        alt={name}
        width={40}
        height={40}
        className="object-cover w-full h-full"
        unoptimized
      />
    </div>
  )
}

// ─── Role label ───────────────────────────────────────────────────────────────

function roleLabel(title: string | null): string {
  if (!title) return 'Member'
  const t = title.toLowerCase()
  if (t.includes('chair')) return 'Chair'
  if (t.includes('ranking')) return 'Ranking Member'
  return 'Member'
}

function roleBadgeColor(title: string | null): string {
  const r = roleLabel(title)
  if (r === 'Chair') return 'text-accent border-accent/40 bg-accent/10'
  if (r === 'Ranking Member') return 'text-teal-400 border-teal-900/60 bg-teal-950/30'
  return 'text-ink-4 border-border bg-surface-2'
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function CommitteePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const committee = committeeBySlug[slug]
  if (!committee) notFound()

  const thomasId = committee.thomasId
  const roster: RosterMember[] = committeeRosters[thomasId] ?? []

  // Build bioguide → profile slug map for CA members
  const bioguideToSlug = buildBioguideToSlugMap()
  const caBioguides = new Set(bioguideToSlug.keys())

  // Count CA members in this committee's roster
  const caMembersInRoster = roster.filter((m) => caBioguides.has(m.bioguide))

  // Separate majority (R first when R chairs, else D first) and minority
  // Determine majority party from chair (rank=1 or title=Chair)
  const chairMember = roster.find(
    (m) => m.title?.toLowerCase().includes('chair') && !m.title?.toLowerCase().includes('ranking')
  )
  const majorityParty = chairMember?.party ?? 'R'
  const minority = majorityParty === 'R' ? 'D' : 'R'

  const majorityMembers = roster.filter((m) => m.party === majorityParty)
  const minorityMembers = roster.filter((m) => m.party === minority)
  const otherMembers = roster.filter((m) => m.party !== majorityParty && m.party !== minority)

  // Get govtrack IDs of top 6 members (by rank, chair+ranking first)
  const sortedByRank = [...roster].sort((a, b) => {
    // Chair and Ranking Member first by title, then by rank number
    const aIsLeader = a.title && (a.title.includes('Chair') || a.title.includes('Ranking'))
    const bIsLeader = b.title && (b.title.includes('Chair') || b.title.includes('Ranking'))
    if (aIsLeader && !bIsLeader) return -1
    if (!aIsLeader && bIsLeader) return 1
    return (a.rank ?? 99) - (b.rank ?? 99)
  })
  const top6GovtrackIds = sortedByRank
    .slice(0, 6)
    .map((m) => m.govtrack)
    .filter((id) => id > 0)

  // Fetch live bills (non-blocking — page still renders if this fails)
  let liveBills: Awaited<ReturnType<typeof fetchCommitteeBills>> = []
  try {
    liveBills = await fetchCommitteeBills(thomasId, top6GovtrackIds)
  } catch {
    // silently fall back to empty
  }

  const partyLabel: Record<string, string> = { D: 'Democrat', R: 'Republican', I: 'Independent' }
  const partyColor: Record<string, string> = {
    D: 'text-accent border-accent/40 bg-accent/5',
    R: 'text-red-400 border-red-900/60 bg-red-950/30',
    I: 'text-purple-400 border-purple-900/60 bg-purple-950/10',
  }

  function MemberRow({ member }: { member: RosterMember }) {
    const isCA = caBioguides.has(member.bioguide)
    const profileSlug = bioguideToSlug.get(member.bioguide)
    const role = roleLabel(member.title)
    const roleBadge = roleBadgeColor(member.title)
    const districtLabel =
      member.type === 'sen'
        ? `${member.state} · Senator`
        : `${member.state}-${member.district ?? '?'}`

    return (
      <div className="flex items-center gap-3 py-2 px-3 rounded border border-border bg-surface-2 hover:bg-surface transition-colors">
        {isCA && profileSlug ? (
          <PhotoAvatar bioguide={member.bioguide} name={member.name} party={member.party} />
        ) : (
          <InitialsAvatar name={member.name} party={member.party} />
        )}
        <div className="flex-1 min-w-0">
          {isCA && profileSlug ? (
            <Link
              href={`/politicians/${profileSlug}`}
              className="text-sm font-semibold text-ink hover:text-accent transition-colors truncate block"
            >
              {member.name}
            </Link>
          ) : (
            <p className="text-sm font-semibold text-ink truncate">{member.name}</p>
          )}
          <p className="font-mono text-[9px] text-ink-4">{districtLabel}</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {role !== 'Member' && (
            <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded border ${roleBadge}`}>
              {role.toUpperCase()}
            </span>
          )}
          <span
            className={`font-mono text-[8px] px-1.5 py-0.5 rounded border ${partyColor[member.party] ?? 'text-ink-4 border-border bg-surface-2'}`}
          >
            {partyLabel[member.party] ?? member.party}
          </span>
          {isCA && (
            <span className="font-mono text-[8px] px-1.5 py-0.5 rounded border text-amber-400 border-amber-900/60 bg-amber-950/30">
              CA
            </span>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Back nav */}
      <div className="mb-6">
        <BackButton />
      </div>

      {/* Header badges */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span
          className={`font-mono text-[10px] px-2 py-0.5 rounded border ${chamberBadgeColor(committee.chamber)}`}
        >
          {committee.chamber.toUpperCase()}
        </span>
        <span
          className={`font-mono text-[10px] px-2 py-0.5 rounded border ${powerBadgeColor(committee.powerLevel)}`}
        >
          {committee.powerLevel.toUpperCase()} INFLUENCE
        </span>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-ink-4 bg-surface-2">
          {thomasId}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-ink mb-3 leading-tight">
        {committee.name}
      </h1>

      {/* Summary */}
      <p className="text-base text-ink-2 leading-relaxed mb-8 max-w-3xl">{committee.summary}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-10">
        {committee.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] px-2 py-0.5 rounded border border-border text-ink-4 bg-surface-2"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <div className="space-y-6">
        {/* Why This Matters */}
        <div className="bg-surface border border-border rounded p-5">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
            WHY THIS MATTERS
          </p>
          <p className="text-sm text-ink-2 leading-relaxed">{committee.whyItMatters}</p>
        </div>

        {/* What It Does */}
        <div className="bg-surface border border-border rounded p-5">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
            WHAT IT DOES
          </p>
          <p className="text-sm text-ink-2 leading-relaxed">{committee.whatItDoes}</p>
        </div>

        {/* Jurisdiction */}
        <div className="bg-surface border border-border rounded p-5">
          <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">JURISDICTION</p>
          <div className="flex flex-wrap gap-2">
            {committee.jurisdiction.map((item) => (
              <span
                key={item}
                className="text-xs text-ink-2 bg-surface-2 border border-border rounded px-3 py-1.5 leading-snug"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Member Roster */}
        {roster.length > 0 && (
          <div className="bg-surface border border-border rounded p-5">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <p className="font-mono text-[10px] tracking-widest text-accent/70">MEMBERS</p>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-border text-ink-3 bg-surface-2">
                  {roster.length} MEMBERS
                </span>
                {caMembersInRoster.length > 0 && (
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-amber-900/60 text-amber-400 bg-amber-950/30">
                    {caMembersInRoster.length} FROM CALIFORNIA
                  </span>
                )}
              </div>
            </div>

            {/* Majority */}
            {majorityMembers.length > 0 && (
              <div className="mb-4">
                <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">
                  MAJORITY ({majorityParty === 'R' ? 'REPUBLICAN' : 'DEMOCRAT'})
                </p>
                <div className="space-y-1.5">
                  {majorityMembers.map((m) => (
                    <MemberRow key={m.bioguide} member={m} />
                  ))}
                </div>
              </div>
            )}

            {/* Minority */}
            {minorityMembers.length > 0 && (
              <div className="mb-4">
                <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">
                  MINORITY ({minority === 'D' ? 'DEMOCRAT' : 'REPUBLICAN'})
                </p>
                <div className="space-y-1.5">
                  {minorityMembers.map((m) => (
                    <MemberRow key={m.bioguide} member={m} />
                  ))}
                </div>
              </div>
            )}

            {/* Other (independents, etc.) */}
            {otherMembers.length > 0 && (
              <div>
                <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">OTHER</p>
                <div className="space-y-1.5">
                  {otherMembers.map((m) => (
                    <MemberRow key={m.bioguide} member={m} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Subcommittees */}
        {committee.subcommittees.length > 0 && (
          <div className="bg-surface border border-border rounded p-5">
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3">
              SUBCOMMITTEES
            </p>
            <ul className="space-y-1.5">
              {committee.subcommittees.map((sub) => (
                <li key={sub} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                  <span className="text-sm text-ink-2">{sub}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Live Bills */}
        {liveBills.length > 0 ? (
          <div className="bg-surface border border-border rounded p-5">
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
              RECENT LEGISLATION BY MEMBERS
            </p>
            <div className="space-y-3">
              {liveBills.map((bill) => (
                <div
                  key={bill.billRef}
                  className="flex items-start gap-3 bg-surface-2 border border-border rounded px-3 py-2.5"
                >
                  <div className="shrink-0 mt-0.5">
                    <span className="font-mono text-[10px] text-accent">{bill.billRef}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink leading-snug">{bill.title}</p>
                    <p className="font-mono text-[9px] text-ink-4 mt-0.5">
                      {bill.sponsorName} · {bill.introducedDate}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${statusBadgeColor(bill.status)}`}
                    >
                      {bill.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : committee.notableBills.length > 0 ? (
          <div className="bg-surface border border-border rounded p-5">
            <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
              NOTABLE RECENT LEGISLATION
            </p>
            <div className="space-y-3">
              {committee.notableBills.map((bill) => (
                <div
                  key={bill.number}
                  className="flex items-start gap-3 bg-surface-2 border border-border rounded px-3 py-2.5"
                >
                  <div className="shrink-0 mt-0.5">
                    <span className="font-mono text-[10px] text-accent">{bill.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink leading-snug">{bill.title}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${statusBadgeColor(bill.status)}`}
                    >
                      {bill.status.toUpperCase()}
                    </span>
                    <span className="font-mono text-[9px] text-ink-4 tabular-nums">{bill.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
