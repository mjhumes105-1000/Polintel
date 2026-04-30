import { readFileSync, readdirSync } from 'fs'
const dir = new URL('../apps/web/public/data', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const files = readdirSync(dir).filter(f => f.endsWith('-districts.json')).sort()
let anyDups = false
for (const file of files) {
  const raw = readFileSync(dir + '/' + file, 'utf8').replace(/^﻿/, '')
  const data = JSON.parse(raw)
  const seen = {}; const dups = []
  for (const f of data.features) {
    const cd = f.properties?.CD119 ?? 'null'
    if (seen[cd]) dups.push(cd)
    else seen[cd] = true
  }
  const state = file.replace('-districts.json','').toUpperCase()
  if (dups.length) {
    console.log(state, 'DUPS:', dups.join(','), '| features:', data.features.length, '| all vals:', Object.keys(seen).join(','))
    anyDups = true
  }
}
if (!anyDups) console.log('No duplicate CD119 values found in any state file.')
