/**
 * Generates enrichment JSON for given states from raw legislators data.
 * Usage: node scripts/generate-enrichment.mjs MS NJ
 * Output: apps/web/src/data/legislators/ms-nj-enrichment.json
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dataDir = resolve(root, 'apps/web/src/data/legislators')

const targetStates = process.argv.slice(2).length > 0
  ? process.argv.slice(2)
  : ['MS', 'NJ']

const legislators = JSON.parse(readFileSync(resolve(dataDir, 'legislators-current.json'), 'utf8'))
const socialMedia = JSON.parse(readFileSync(resolve(dataDir, 'legislators-social-media.json'), 'utf8'))
const committeesRaw = JSON.parse(readFileSync(resolve(dataDir, 'committees-current.json'), 'utf8'))
const committeeMembership = JSON.parse(readFileSync(resolve(dataDir, 'committee-membership-current.json'), 'utf8'))

// Build full lookup: committeeId (e.g. "HSII") → { name, url, type, subcommittees: { "06" → name } }
const committeeById = {}
for (const c of committeesRaw) {
  committeeById[c.thomas_id] = {
    name: c.name,
    url: c.url ?? null,
    type: c.type, // house | senate | joint
    subs: {},
  }
  for (const sub of (c.subcommittees ?? [])) {
    committeeById[c.thomas_id].subs[sub.thomas_id] = sub.name
  }
}

// Build bioguide → committee list from committee-membership-current.json
// Keys are like "HSII" (parent) or "HSII06" (subcommittee)
const memberCommittees = {}
for (const [committeeId, members] of Object.entries(committeeMembership)) {
  if (!Array.isArray(members)) continue
  for (const m of members) {
    if (!m.bioguide) continue
    if (!memberCommittees[m.bioguide]) memberCommittees[m.bioguide] = []
    memberCommittees[m.bioguide].push({
      committeeId,
      rank: m.rank ?? null,
      title: m.title ?? null,
    })
  }
}

// Build bioguide → social (with known bad-data overrides)
const SOCIAL_OVERRIDES = {
  // Nellie Pou — source file has House CAO's social by mistake
  P000621: { twitter: 'RepNelliePou' },
  // Analilia Mejia — not in legislators-current.json at all (too new)
  M001246: { twitter: 'RepMejia', instagram: 'repanaliliamejia' },
}

const socialById = {}
for (const entry of socialMedia) {
  if (entry.id?.bioguide) {
    socialById[entry.id.bioguide] = entry.social ?? {}
  }
}
// Apply overrides
for (const [bioguide, override] of Object.entries(SOCIAL_OVERRIDES)) {
  socialById[bioguide] = { ...(socialById[bioguide] ?? {}), ...override }
}

function resolveCommittees(bioguide) {
  const entries = memberCommittees[bioguide] ?? []
  return entries.map(({ committeeId, rank, title }) => {
    // Determine if this is a subcommittee (parent ID + numeric suffix)
    const parentIdMatch = committeeId.match(/^([A-Z]+)\d+$/)
    const parentId = parentIdMatch ? parentIdMatch[1] : committeeId
    const isSubcommittee = parentId !== committeeId
    const subSuffix = isSubcommittee ? committeeId.slice(parentId.length) : null

    const parentComm = committeeById[parentId]
    if (!parentComm) return null

    const name = isSubcommittee
      ? (parentComm.subs[subSuffix] ?? `${parentComm.name} Subcommittee`)
      : parentComm.name

    const parentName = isSubcommittee ? parentComm.name : null

    return {
      thomasId: committeeId,
      name,
      parentName,
      type: parentComm.type === 'house' ? 'house' : parentComm.type === 'senate' ? 'senate' : 'joint',
      url: parentComm.url,
      rank,
      title,
    }
  }).filter(Boolean)
}

// Manual entries for members not in legislators-current.json
const MANUAL_MEMBERS = [
  {
    bioguide: 'M001246',
    officialName: 'Analilia Mejia',
    birthday: '1979-01-01', // approximate, not in public record
    gender: 'F',
    govtrack: null, // not yet in GovTrack
    currentTerm: {
      type: 'rep',
      start: '2025-01-03',
      end: '2027-01-03',
      state: 'NJ',
      district: 11,
      party: 'Democrat',
      url: 'https://mejia.house.gov',
      phone: '202-225-5034',
      office: null,
      address: null,
    },
  },
]

const result = {}

// Process from legislators-current.json
for (const legislator of legislators) {
  const lastTerm = legislator.terms[legislator.terms.length - 1]
  if (!targetStates.includes(lastTerm.state)) continue

  const bioguide = legislator.id.bioguide

  result[bioguide] = {
    bioguide,
    govtrack: legislator.id.govtrack ?? null,
    officialName: legislator.name.official_full ?? `${legislator.name.first} ${legislator.name.last}`,
    birthday: legislator.bio?.birthday ?? null,
    gender: legislator.bio?.gender ?? null,
    currentTerm: {
      type: lastTerm.type,
      start: lastTerm.start,
      end: lastTerm.end,
      state: lastTerm.state,
      district: lastTerm.district ?? null,
      party: lastTerm.party,
      url: lastTerm.url ?? null,
      phone: lastTerm.phone ?? null,
      office: lastTerm.office ?? null,
      address: lastTerm.address ?? null,
    },
    photoUrl: `https://bioguide.congress.gov/bioguide/photo/${bioguide[0]}/${bioguide}.jpg`,
    committees: resolveCommittees(bioguide),
    social: SOCIAL_OVERRIDES[bioguide] !== undefined
      ? { ...(socialById[bioguide] ?? {}), ...SOCIAL_OVERRIDES[bioguide] }
      : (socialById[bioguide] ?? {}),
  }
}

// Process manual members
for (const m of MANUAL_MEMBERS) {
  result[m.bioguide] = {
    bioguide: m.bioguide,
    govtrack: m.govtrack,
    officialName: m.officialName,
    birthday: m.birthday,
    gender: m.gender,
    currentTerm: m.currentTerm,
    photoUrl: `https://bioguide.congress.gov/bioguide/photo/${m.bioguide[0]}/${m.bioguide}.jpg`,
    committees: resolveCommittees(m.bioguide),
    social: socialById[m.bioguide] ?? {},
  }
}

const outPath = resolve(dataDir, 'ms-nj-enrichment.json')
writeFileSync(outPath, JSON.stringify(result, null, 2))
console.log(`Wrote ${Object.keys(result).length} entries to ${outPath}`)
for (const [id, entry] of Object.entries(result)) {
  const topLevel = entry.committees.filter(c => !c.parentName).length
  const subLevel = entry.committees.filter(c => c.parentName).length
  console.log(`  ${id} ${entry.officialName} — govtrack:${entry.govtrack} committees:${topLevel} (${subLevel} sub) social:[${Object.keys(entry.social).join(',')}]`)
}
