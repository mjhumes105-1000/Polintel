/**
 * Generate a Record Assessment for a politician profile.
 *
 * Usage:
 *   pnpm --filter enrichment enrich -- --politician gavin-newsom
 *
 * Output is printed as JSON and saved to data/assessment-<slug>.json
 * Copy the output into the politician's data file to update their assessment.
 */
import 'dotenv/config'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { generateRecordAssessment } from '../generate-assessment.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

function arg(flag: string): string | undefined {
  const i = process.argv.indexOf(flag)
  return i !== -1 ? process.argv[i + 1] : undefined
}

async function run() {
  const slug = arg('--politician')
  if (!slug) {
    console.error('Usage: pnpm --filter enrichment enrich -- --politician <slug>')
    console.error('Example: pnpm --filter enrichment enrich -- --politician gavin-newsom')
    process.exit(1)
  }

  // Dynamically import the politician data file from the web app
  const profilePath = resolve(
    __dirname,
    `../../../../apps/web/src/data/politicians/${slug}.ts`
  )

  let profile
  try {
    const mod = await import(profilePath)
    profile = mod.default
  } catch {
    console.error(`Could not load profile at ${profilePath}`)
    console.error('Make sure the slug matches a file in apps/web/src/data/politicians/')
    process.exit(1)
  }

  const assessment = await generateRecordAssessment(profile)

  const outPath = resolve(__dirname, `../../../../data/assessment-${slug}.json`)
  writeFileSync(outPath, JSON.stringify(assessment, null, 2))

  console.log('\n✓ Record Assessment generated:\n')
  console.log(JSON.stringify(assessment, null, 2))
  console.log(`\nSaved to ${outPath}`)
  console.log('\nCopy the recordAssessment field into the politician data file to update.')
}

run().catch((err) => { console.error(err); process.exit(1) })
