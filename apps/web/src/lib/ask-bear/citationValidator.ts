import type { AskBearResponseDraft, EvidencePacket, ValidationResult } from '@political-intel/types'

const MOTIVE_PATTERN =
  /\b(bribed|bought|corrupt|quid[\s-]pro[\s-]quo|pay[\s-]to[\s-]play|caused|because[\s]+of[\s]+(?:donation|contribution|money)|in[\s]+exchange[\s]+for|proves?[\s]+(?:corruption|motive)|proof[\s]+of)\b/i

const REQUIRED_DISCLAIMER =
  'The following is an AI-generated editorial interpretation of the public record shown here. It represents one reading of the evidence, not a statement of fact.'

const REQUIRED_FINANCE_DISCLAIMER =
  'Campaign finance data provides context about funding patterns. It does not, by itself, prove motive, coordination, corruption, or causation.'

export function validateCitations(
  draft: AskBearResponseDraft,
  packet: EvidencePacket
): ValidationResult {
  const errors: string[] = []
  const knownIds = new Set(packet.sources.map(s => s.id))
  let hadRemovals = false

  // Ensure required disclaimer is in the answer
  if (!draft.answer.includes('AI-generated editorial interpretation')) {
    draft.answer = `${REQUIRED_DISCLAIMER}\n\n${draft.answer}`
  }

  // Validate recordShows — remove items with no valid sourceIds
  const validRecordShows = draft.recordShows.filter(item => {
    if (item.sourceIds.length === 0) {
      errors.push(`recordShows removed (no sourceIds): "${item.claimSupported.slice(0, 80)}"`)
      hadRemovals = true
      return false
    }
    const valid = item.sourceIds.filter(id => knownIds.has(id))
    if (valid.length === 0) {
      errors.push(`recordShows removed (no matching sourceIds): "${item.claimSupported.slice(0, 80)}"`)
      hadRemovals = true
      return false
    }
    item.sourceIds = valid
    return true
  })

  // Validate openSecretsShows — same rules
  const validOpenSecrets = draft.openSecretsShows.filter(item => {
    if (item.sourceIds.length === 0) {
      errors.push(`openSecretsShows removed (no sourceIds): "${item.claimSupported.slice(0, 80)}"`)
      hadRemovals = true
      return false
    }
    const valid = item.sourceIds.filter(id => knownIds.has(id))
    if (valid.length === 0) {
      errors.push(`openSecretsShows removed (no matching sourceIds): "${item.claimSupported.slice(0, 80)}"`)
      hadRemovals = true
      return false
    }
    item.sourceIds = valid
    return true
  })

  // Enforce campaign finance disclaimer when funding items are cited
  let campaignFinanceDisclaimer = draft.campaignFinanceDisclaimer
  if (validOpenSecrets.length > 0 && !campaignFinanceDisclaimer) {
    campaignFinanceDisclaimer = REQUIRED_FINANCE_DISCLAIMER
    errors.push('campaignFinanceDisclaimer missing — added automatically')
  }

  // recordTensionFlags: only allow when ≥2 record items support the tension
  const recordTensionFlags = draft.recordTensionFlags.filter(flag => {
    if (validRecordShows.length < 2) {
      errors.push(`recordTensionFlag removed (fewer than 2 supporting records): "${flag.slice(0, 80)}"`)
      hadRemovals = true
      return false
    }
    return true
  })

  // fundingContextFlags: strip any that imply motive or causation
  const fundingContextFlags = draft.fundingContextFlags.filter(flag => {
    if (MOTIVE_PATTERN.test(flag)) {
      errors.push(`fundingContextFlag removed (implies motive): "${flag.slice(0, 80)}"`)
      hadRemovals = true
      return false
    }
    return true
  })

  // Add limitation notice if items were removed
  let limitationNotice = draft.limitationNotice
  if (hadRemovals && !limitationNotice) {
    limitationNotice =
      'Some claims were removed during citation validation because they could not be matched to a cited source in the evidence packet. The answer above reflects only claims that could be verified against the available cited record.'
  }

  const sanitized: AskBearResponseDraft = {
    ...draft,
    recordShows: validRecordShows,
    openSecretsShows: validOpenSecrets,
    campaignFinanceDisclaimer,
    recordTensionFlags,
    fundingContextFlags,
    limitationNotice,
  }

  const valid = validRecordShows.length > 0 || validOpenSecrets.length > 0

  return { valid, errors, sanitized, hadRemovals }
}
