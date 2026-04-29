/**
 * Generates a comprehensive enrichment JSON for all 536 current Congress members.
 * Output: apps/web/src/data/legislators/all-enrichment.json
 *
 * Sources:
 *   - legislators-current.json  (terms, bio, govtrack)
 *   - legislators-social-media.json (social handles)
 *   - committee-rosters.json   (committee membership with rank/title)
 *   - committees-current.json  (committee names and types)
 */

import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '..', 'apps', 'web', 'src', 'data', 'legislators')

const legislators = require(join(DATA_DIR, 'legislators-current.json'))
const socialMedia = require(join(DATA_DIR, 'legislators-social-media.json'))
const rosters = require(join(DATA_DIR, 'committee-rosters.json'))
const committeesRaw = require(join(DATA_DIR, 'committees-current.json'))

// ── Build lookup maps ─────────────────────────────────────────────────────────

// Social media by bioguide
const socialByBioguide = {}
for (const entry of socialMedia) {
  const bg = entry.id?.bioguide
  if (bg) socialByBioguide[bg] = entry.social ?? {}
}

// Committee metadata by thomasId
const committeeInfo = {}
for (const com of committeesRaw) {
  const id = com.thomas_id
  committeeInfo[id] = { name: com.name, type: com.type, url: com.url ?? null }
  if (com.subcommittees) {
    for (const sub of com.subcommittees) {
      const subId = id + sub.thomas_id
      committeeInfo[subId] = {
        name: sub.name,
        type: com.type,
        url: sub.url ?? null,
        parentName: com.name,
      }
    }
  }
}

// Committee membership by bioguide  (from committee-rosters.json)
// rosters format: { THOMASID: [ { bioguide, name, party, state, district, type, rank, title, govtrack }, ... ] }
const committeesByBioguide = {}
for (const [thomasId, members] of Object.entries(rosters)) {
  const info = committeeInfo[thomasId]
  for (const m of members) {
    const bg = m.bioguide
    if (!bg) continue
    if (!committeesByBioguide[bg]) committeesByBioguide[bg] = []
    committeesByBioguide[bg].push({
      thomasId,
      name: info?.name ?? thomasId,
      parentName: info?.parentName ?? null,
      type: info?.type ?? (thomasId.startsWith('HS') ? 'house' : 'senate'),
      url: info?.url ?? null,
      rank: m.rank ?? null,
      title: m.title ?? null,
    })
  }
}

// ── Build enrichment for each legislator ────────────────────────────────────

const enrichment = {}
let count = 0

for (const leg of legislators) {
  const bioguide = leg.id?.bioguide
  if (!bioguide) continue

  // Find the current term (last in the terms array that is in the 119th Congress range)
  // Current Congress started 2025-01-03
  const currentTerms = leg.terms.filter(t =>
    t.end && t.end >= '2025-01-03'
  )
  const currentTerm = currentTerms[currentTerms.length - 1]
  if (!currentTerm) continue

  const govtrack = leg.id?.govtrack ?? null
  const birthday = leg.bio?.birthday ?? null
  const gender = leg.bio?.gender ?? null
  const social = socialByBioguide[bioguide] ?? {}
  const committees = committeesByBioguide[bioguide] ?? []

  enrichment[bioguide] = {
    bioguide,
    govtrack,
    officialName: leg.name?.official_full ?? `${leg.name?.first} ${leg.name?.last}`,
    birthday,
    gender,
    currentTerm: {
      type: currentTerm.type,
      start: currentTerm.start,
      end: currentTerm.end,
      state: currentTerm.state,
      district: currentTerm.district ?? null,
      party: currentTerm.party,
      url: currentTerm.url ?? null,
      phone: currentTerm.phone ?? null,
      office: currentTerm.office ?? null,
      address: currentTerm.address ?? null,
    },
    photoUrl: `https://bioguide.congress.gov/bioguide/photo/${bioguide[0]}/${bioguide}.jpg`,
    committees,
    social: {
      twitter: social.twitter ?? undefined,
      twitter_id: social.twitter_id ?? undefined,
      instagram: social.instagram ?? undefined,
      instagram_id: social.instagram_id ?? undefined,
      facebook: social.facebook ?? undefined,
      youtube: social.youtube ?? undefined,
      youtube_id: social.youtube_id ?? undefined,
    },
  }
  count++
}

const outPath = join(DATA_DIR, 'all-enrichment.json')
writeFileSync(outPath, JSON.stringify(enrichment, null, 2))
console.log(`✓ Generated enrichment for ${count} legislators → ${outPath}`)
