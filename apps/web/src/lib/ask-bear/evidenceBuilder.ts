import type { PoliticianProfile, Source, SourceType } from '@political-intel/types'
import type { EvidencePacket, EvidenceSource, EvidenceItem, FundingEvidenceItem, EvidenceSourceType } from '@political-intel/types'

function mapSourceType(type: SourceType): EvidenceSourceType {
  switch (type) {
    case 'campaign-finance': return 'campaign_finance'
    case 'official-government': return 'official_government'
    case 'legislative-record': return 'official_government'
    case 'news': return 'reputable_secondary'
    case 'court-record': return 'official_government'
    case 'academic': return 'reputable_secondary'
    default: return 'internal_record'
  }
}

function toEvidenceSource(src: Source, accessedAt: string): EvidenceSource {
  return {
    id: src.id,
    title: src.label,
    sourceType: mapSourceType(src.type),
    publisher: src.publisher,
    url: src.url,
    publishedAt: src.publishedAt ?? src.retrievedAt,
    accessedAt,
    reliabilityTier: src.type === 'campaign-finance' ? 2 : 1,
    recordType: src.type,
  }
}

export function buildPoliticianEvidencePacket(politician: PoliticianProfile): EvidencePacket {
  const accessedAt = new Date().toISOString()
  const sources: EvidenceSource[] = []
  const items: EvidenceItem[] = []
  const fundingItems: FundingEvidenceItem[] = []
  const addedSourceIds = new Set<string>()

  function addSource(src: EvidenceSource) {
    if (!addedSourceIds.has(src.id)) {
      sources.push(src)
      addedSourceIds.add(src.id)
    }
  }

  // Convert profile sources
  for (const src of politician.sources) {
    addSource(toEvidenceSource(src, accessedAt))
  }

  // Internal profile source (always available as fallback)
  const profileSourceId = `internal-${politician.id}`
  addSource({
    id: profileSourceId,
    title: `${politician.name} — PoliIntel Profile`,
    sourceType: 'internal_record',
    publisher: 'PoliIntel',
    url: `/politicians/${politician.slug}`,
    accessedAt,
    reliabilityTier: 1,
    recordType: 'politician_profile',
  })

  function resolveSourceIds(ids: string[]): string[] {
    const valid = ids.filter(id => addedSourceIds.has(id))
    return valid.length > 0 ? valid : [profileSourceId]
  }

  // ── Bio ──────────────────────────────────────────────────────────────────────
  if (politician.bio) {
    items.push({
      id: `bio-${politician.id}`,
      claimSupported: politician.bio,
      sourceIds: resolveSourceIds(politician.sources.slice(0, 1).map(s => s.id)),
      confidence: 'high',
    })
  }

  // ── Baseline card ─────────────────────────────────────────────────────────────
  const { baselineCard } = politician
  const baselineSourceIds = resolveSourceIds(baselineCard.sourceIds)

  items.push({
    id: `baseline-${politician.id}`,
    claimSupported: `${politician.name} is a ${baselineCard.party} who has served in public office for approximately ${baselineCard.yearsInPublicService} years. Current role: ${baselineCard.currentOffice.title} (${baselineCard.currentOffice.jurisdiction}) since ${baselineCard.currentOffice.startDate}.`,
    sourceIds: baselineSourceIds,
    date: baselineCard.currentOffice.startDate,
    confidence: 'high',
  })

  if (baselineCard.previousOffices.length > 0) {
    items.push({
      id: `prev-offices-${politician.id}`,
      claimSupported: `Previous offices: ${baselineCard.previousOffices.map(o => `${o.title} (${o.jurisdiction}, ${o.startDate}${o.endDate ? `–${o.endDate}` : '–present'})`).join('; ')}.`,
      sourceIds: baselineSourceIds,
      confidence: 'high',
    })
  }

  if (baselineCard.birthDate) {
    items.push({
      id: `birth-${politician.id}`,
      claimSupported: `Date of birth: ${baselineCard.birthDate}${baselineCard.birthPlace ? `. Born in ${baselineCard.birthPlace}` : ''}.`,
      sourceIds: baselineSourceIds,
      date: baselineCard.birthDate,
      confidence: 'high',
    })
  }

  // ── Committee memberships ─────────────────────────────────────────────────────
  if (politician.committees && politician.committees.length > 0) {
    items.push({
      id: `committees-${politician.id}`,
      claimSupported: `Committee assignments: ${politician.committees.map(c => `${c.name} (${c.chamber}, ${c.role})`).join('; ')}.`,
      sourceIds: [profileSourceId],
      confidence: 'high',
    })
  }

  // ── Timeline events ───────────────────────────────────────────────────────────
  for (const event of politician.timeline) {
    const sourceIds = resolveSourceIds(event.sourceIds)

    let claim = `[${event.type.toUpperCase()}] ${event.title}: ${event.summary}`
    if (event.vote) claim += ` (Recorded vote: ${event.vote})`
    if (event.billPassed !== undefined) claim += ` (Bill ${event.billPassed ? 'passed' : 'did not pass'})`
    if (event.billCategory) claim += ` (Role: ${event.billCategory})`

    items.push({
      id: `timeline-${event.id}`,
      claimSupported: claim,
      sourceIds,
      quote: event.detail ? event.detail.slice(0, 400) : undefined,
      date: event.date,
      confidence: 'high',
    })

    if (event.contradiction) {
      items.push({
        id: `tension-${event.id}`,
        claimSupported: `Record tension: ${event.contradiction.description}`,
        sourceIds,
        date: event.date,
        confidence: 'medium',
      })
    }
  }

  // ── Record assessment ─────────────────────────────────────────────────────────
  const { recordAssessment } = politician
  for (const [i, show] of recordAssessment.whatTheRecordShows.entries()) {
    items.push({
      id: `assessment-show-${politician.id}-${i}`,
      claimSupported: show,
      sourceIds: [profileSourceId],
      confidence: 'medium',
    })
  }

  // ── Funding cycles ────────────────────────────────────────────────────────────
  for (const cycle of politician.funding) {
    // Ensure cycle sources are in the sources list
    for (const srcId of cycle.sourceIds) {
      if (!addedSourceIds.has(srcId)) {
        addSource({
          id: srcId,
          title: `Campaign Finance — ${cycle.label}`,
          sourceType: 'campaign_finance',
          publisher: 'FEC / Campaign Finance Records',
          url: `https://www.fec.gov/data/candidate/?q=${encodeURIComponent(politician.name)}`,
          accessedAt,
          reliabilityTier: 2,
          recordType: 'campaign_finance',
        })
      }
    }

    const cycleSourceIds = resolveSourceIds(cycle.sourceIds)

    fundingItems.push({
      id: `funding-${cycle.cycle}-total`,
      claimSupported: `${politician.name} raised $${cycle.totalRaised.toLocaleString()} total in the ${cycle.label}.`,
      sourceIds: cycleSourceIds,
      cycle: cycle.cycle,
      amount: cycle.totalRaised,
      confidence: 'high',
    })

    for (const [ci, cat] of cycle.topDonorCategories.entries()) {
      fundingItems.push({
        id: `funding-${cycle.cycle}-cat-${ci}`,
        claimSupported: `${cat.category} sector: $${cat.amount.toLocaleString()} (${cat.percentage.toFixed(1)}% of total raised) in the ${cycle.label}.`,
        sourceIds: cycleSourceIds,
        cycle: cycle.cycle,
        industry: cat.category,
        amount: cat.amount,
        confidence: 'high',
      })

      if (cat.topDonors) {
        for (const [di, donor] of cat.topDonors.entries()) {
          fundingItems.push({
            id: `funding-${cycle.cycle}-cat-${ci}-donor-${di}`,
            claimSupported: `${donor.name} (${donor.type}) contributed $${donor.amount.toLocaleString()} in the ${cycle.label} (${cat.category} sector).`,
            sourceIds: cycleSourceIds,
            cycle: cycle.cycle,
            contributor: donor.name,
            industry: cat.category,
            pac: donor.type === 'pac' ? donor.name : undefined,
            amount: donor.amount,
            confidence: 'high',
          })
        }
      }
    }
  }

  return {
    contextType: 'politician',
    contextId: politician.id,
    contextLabel: `${politician.name} — ${politician.currentTitle} — ${politician.state} — ${baselineCard.party}`,
    sources,
    items,
    fundingItems,
  }
}
