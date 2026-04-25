'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import type { ReactNode } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { countryProfiles } from '@/data/economy/countryProfiles'
import { countries } from '@/data/economy/countries'
import { formatBillions, signedBalance } from '@/lib/economy'
import { BalanceChip } from '@/components/economy/BalanceChip'
import { SeverityChip } from '@/components/economy/SeverityChip'
import { compareSummaries } from '@/data/economy/compareSummaries'
import { SaveComparisonButton } from '@/components/economy/SaveComparisonButton'
import { ExportMenu } from '@/components/economy/ExportMenu'
import { BriefingButton } from '@/components/economy/BriefingButton'
import { HistoricalTrendGate } from '@/components/economy/HistoricalTrendGate'
import { track } from '@/lib/analytics'
import type { CountryProfile, DependencySeverity } from '@political-intel/types'

// ─── Design tokens for side A and B ──────────────────────────────────────────

const A = {
  text:   'text-accent',
  textDim:'text-accent/70',
  border: 'border-accent/35',
  bar:    'bg-accent/55',
} as const

const B = {
  text:   'text-teal-400',
  textDim:'text-teal-400/70',
  border: 'border-teal-700/50',
  bar:    'bg-teal-600/55',
} as const

// ─── Shared layout atoms ──────────────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-[10px] tracking-widest text-accent/70 mb-4">
      {children}
    </h2>
  )
}

function Divider() {
  return <div className="border-t border-border my-10" />
}

// ─── Auto-generate plain-language summary from trade data ─────────────────────

function buildAutoSummary(a: CountryProfile, b: CountryProfile) {
  const totA = a.currentTrade.usExportsUSD + a.currentTrade.usImportsUSD
  const totB = b.currentTrade.usExportsUSD + b.currentTrade.usImportsUSD
  const larger  = totA >= totB ? a : b
  const smaller = totA >= totB ? b : a
  const balA = a.currentTrade.tradeBalanceUSD
  const balB = b.currentTrade.tradeBalanceUSD
  const ftaA = a.agreement.status === 'in-force'
  const ftaB = b.agreement.status === 'in-force'
  const critA = a.dependencySignals.filter(s => s.severity === 'critical').map(s => s.category)
  const critB = b.dependencySignals.filter(s => s.severity === 'critical').map(s => s.category)
  const shared  = critA.filter(c => critB.includes(c))
  const onlyA   = critA.filter(c => !critB.includes(c))
  const onlyB   = critB.filter(c => !critA.includes(c))

  const diff: string[] = []
  const ratio = Math.max(totA, totB) / Math.min(totA, totB)
  if (ratio >= 1.4) {
    diff.push(`The U.S. trades ${ratio.toFixed(1)}× more with ${larger.name} (${formatBillions(Math.max(totA, totB))}) than with ${smaller.name} (${formatBillions(Math.min(totA, totB))}).`)
  } else {
    diff.push(`${a.name} and ${b.name} are comparable in total U.S. trade volume — ${formatBillions(totA)} and ${formatBillions(totB)} respectively.`)
  }

  if (ftaA && !ftaB) {
    diff.push(`${a.name} trades under ${a.agreement.name}, a formal free trade agreement; ${b.name} has no FTA with the U.S. and faces standard or elevated tariff rates.`)
  } else if (!ftaA && ftaB) {
    diff.push(`${b.name} trades under ${b.agreement.name}, a free trade agreement; ${a.name} has no FTA with the U.S.`)
  } else if (ftaA && ftaB) {
    diff.push(`Both trade under formal free trade agreements — ${a.agreement.name} for ${a.name}, ${b.agreement.name} for ${b.name} — providing tariff predictability on most goods.`)
  }

  if (balA < 0 && balB < 0) {
    const big = Math.min(balA, balB)
    const bigC = balA < balB ? a : b
    const smlC = balA < balB ? b : a
    const r = Math.abs(big) / Math.abs(Math.max(balA, balB))
    if (r >= 1.4) {
      diff.push(`The U.S. deficit with ${bigC.name} (${formatBillions(Math.abs(big))}) is ${r.toFixed(1)}× larger than with ${smlC.name} (${formatBillions(Math.abs(Math.max(balA, balB)))}).`)
    }
  } else if (balA >= 0 && balB < 0) {
    const label = balA > 0 ? 'a trade surplus' : 'a roughly balanced trade relationship'
    diff.push(`The U.S. runs ${label} with ${a.name} but carries a ${formatBillions(Math.abs(balB))} deficit with ${b.name}.`)
  } else if (balB >= 0 && balA < 0) {
    const label = balB > 0 ? 'a trade surplus' : 'a roughly balanced trade relationship'
    diff.push(`The U.S. runs ${label} with ${b.name} but carries a ${formatBillions(Math.abs(balA))} deficit with ${a.name}.`)
  }

  const matters: string[] = []
  if (shared.length > 0) {
    matters.push(`Both relationships carry critical U.S. supply dependencies in ${shared.slice(0, 2).join(' and ')}.`)
  }
  if (onlyA.length > 0) matters.push(`${a.name} alone is a critical source for ${onlyA.slice(0, 2).join(' and ')}.`)
  if (onlyB.length > 0) matters.push(`${b.name} alone is a critical source for ${onlyB.slice(0, 2).join(' and ')}.`)
  if (matters.length === 0) {
    if (ftaA !== ftaB) {
      const noFTA = ftaA ? b : a
      matters.push(`${noFTA.name}'s absence of a formal trade agreement introduces tariff uncertainty and limits binding dispute resolution.`)
    } else {
      matters.push(`These relationships differ in region, strategic framing, and supply chain profile — making direct comparison useful for understanding U.S. trade diversification risk.`)
    }
  }

  return { whatsDifferent: diff.join(' '), whyItMatters: matters.join(' ') }
}

// ─── 2. Summary section ───────────────────────────────────────────────────────

function SummarySection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  const key = [a.slug, b.slug].sort().join(':')
  const authored = compareSummaries[key] ?? null
  const s = authored ?? buildAutoSummary(a, b)

  return (
    <section className="mb-10">
      <SectionLabel>{authored ? 'EDITORIAL SUMMARY' : 'DATA SUMMARY'}</SectionLabel>
      <div className="bg-surface border border-border rounded p-6 space-y-5">
        <div>
          <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">WHAT'S DIFFERENT</p>
          <p className="text-sm text-ink-2 leading-relaxed">{s.whatsDifferent}</p>
        </div>
        <div className="border-t border-border pt-5">
          <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">WHY IT MATTERS</p>
          <p className="text-sm text-ink-2 leading-relaxed">{s.whyItMatters}</p>
        </div>
        {!authored && (
          <p className="font-mono text-[9px] text-ink-4 border-t border-border pt-4">
            Auto-generated from trade data. Authored analysis available for select country pairs.
          </p>
        )}
      </div>
    </section>
  )
}

// ─── 3. Key metrics strip ─────────────────────────────────────────────────────

function MetricRow({
  label, aVal, bVal, aColor, bColor, aNote, bNote,
}: {
  label: string
  aVal: ReactNode
  bVal: ReactNode
  aColor?: string
  bColor?: string
  aNote?: string
  bNote?: string
}) {
  return (
    <div className="grid grid-cols-[1fr_10rem_1fr] items-start gap-2 py-3 border-b border-border last:border-0">
      <div className="text-right">
        <p className={`font-mono text-sm tabular-nums leading-tight ${aColor ?? 'text-ink-2'}`}>{aVal}</p>
        {aNote && <p className="font-mono text-[9px] text-ink-4 mt-0.5">{aNote}</p>}
      </div>
      <p className="font-mono text-[9px] tracking-wider text-ink-4 text-center self-start pt-0.5">{label}</p>
      <div>
        <p className={`font-mono text-sm tabular-nums leading-tight ${bColor ?? 'text-ink-2'}`}>{bVal}</p>
        {bNote && <p className="font-mono text-[9px] text-ink-4 mt-0.5">{bNote}</p>}
      </div>
    </div>
  )
}

function MetricsSection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  const totA = a.currentTrade.usExportsUSD + a.currentTrade.usImportsUSD
  const totB = b.currentTrade.usExportsUSD + b.currentTrade.usImportsUSD
  const balA = a.currentTrade.tradeBalanceUSD
  const balB = b.currentTrade.tradeBalanceUSD

  return (
    <section className="mb-10">
      <SectionLabel>KEY METRICS — FY{a.currentTrade.fiscalYear}</SectionLabel>
      <div className="bg-surface border border-border rounded">
        <div className="grid grid-cols-[1fr_10rem_1fr] gap-2 px-4 py-2.5 border-b border-border bg-surface-2 rounded-t">
          <p className={`text-right font-mono text-[10px] ${A.text}`}>{a.flagEmoji} {a.name.toUpperCase()}</p>
          <span />
          <p className={`font-mono text-[10px] ${B.text}`}>{b.flagEmoji} {b.name.toUpperCase()}</p>
        </div>
        <div className="px-4">
          <MetricRow
            label="TRADE VOLUME"
            aVal={formatBillions(totA)}
            bVal={formatBillions(totB)}
            aColor={totA >= totB ? A.text : 'text-ink-2'}
            bColor={totB > totA ? B.text : 'text-ink-2'}
          />
          <MetricRow
            label="U.S. IMPORTS FROM"
            aVal={formatBillions(a.currentTrade.usImportsUSD)}
            bVal={formatBillions(b.currentTrade.usImportsUSD)}
          />
          <MetricRow
            label="U.S. EXPORTS TO"
            aVal={formatBillions(a.currentTrade.usExportsUSD)}
            bVal={formatBillions(b.currentTrade.usExportsUSD)}
          />
          <MetricRow
            label="TRADE BALANCE"
            aVal={signedBalance(balA)}
            bVal={signedBalance(balB)}
            aColor={balA < 0 ? 'text-flag' : 'text-teal-400'}
            bColor={balB < 0 ? 'text-flag' : 'text-teal-400'}
            aNote={balA < 0 ? 'U.S. deficit' : balA > 0 ? 'U.S. surplus' : 'Balanced'}
            bNote={balB < 0 ? 'U.S. deficit' : balB > 0 ? 'U.S. surplus' : 'Balanced'}
          />
          {(a.gdpUSD || b.gdpUSD) && (
            <MetricRow
              label="PARTNER GDP"
              aVal={a.gdpUSD ? formatBillions(a.gdpUSD) : '—'}
              bVal={b.gdpUSD ? formatBillions(b.gdpUSD) : '—'}
            />
          )}
          <MetricRow
            label="TRADE PARTNER RANK"
            aVal={`#${a.tradePartnerRank}`}
            bVal={`#${b.tradePartnerRank}`}
            aColor={a.tradePartnerRank <= b.tradePartnerRank ? A.text : 'text-ink-2'}
            bColor={b.tradePartnerRank < a.tradePartnerRank ? B.text : 'text-ink-2'}
          />
          <MetricRow
            label="TRADE AGREEMENT"
            aVal={a.agreement.status === 'in-force' ? a.agreement.name : 'None'}
            bVal={b.agreement.status === 'in-force' ? b.agreement.name : 'None'}
            aColor={a.agreement.status === 'in-force' ? 'text-teal-400' : 'text-ink-4'}
            bColor={b.agreement.status === 'in-force' ? 'text-teal-400' : 'text-ink-4'}
          />
        </div>
      </div>
    </section>
  )
}

// ─── 4. Trade balance visual ──────────────────────────────────────────────────

function BalanceBar({
  profile, balance, maxAbs,
}: {
  profile: CountryProfile
  balance: number
  maxAbs: number
}) {
  const pct = maxAbs > 0 ? (Math.abs(balance) / maxAbs) * 100 : 0
  const isDeficit = balance < 0
  const barColor = isDeficit ? 'bg-flag/40' : 'bg-teal-600/50'
  const valColor = isDeficit ? 'text-flag' : 'text-teal-400'
  const chipLabel = isDeficit ? 'DEFICIT' : balance === 0 ? 'BALANCED' : 'SURPLUS'
  const chipStyle = isDeficit
    ? 'text-flag border-flag-muted bg-flag-bg'
    : balance > 0
    ? 'text-teal-400 border-teal-900 bg-teal-950/30'
    : 'text-ink-3 border-border'

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-lg leading-none shrink-0">{profile.flagEmoji}</span>
          <span className="text-sm font-medium text-ink truncate">{profile.name}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`font-mono text-sm tabular-nums ${valColor}`}>{signedBalance(balance)}</span>
          <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${chipStyle}`}>
            {chipLabel}
          </span>
        </div>
      </div>
      <div className="h-2.5 rounded-full overflow-hidden bg-surface-3">
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

function TradeBalanceSection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  const balA = a.currentTrade.tradeBalanceUSD
  const balB = b.currentTrade.tradeBalanceUSD
  const maxAbs = Math.max(Math.abs(balA), Math.abs(balB))

  return (
    <section className="mb-10">
      <SectionLabel>TRADE BALANCE — FY{a.currentTrade.fiscalYear}</SectionLabel>
      <div className="bg-surface border border-border rounded p-5 space-y-5">
        <BalanceBar profile={a} balance={balA} maxAbs={maxAbs} />
        <BalanceBar profile={b} balance={balB} maxAbs={maxAbs} />
        <p className="font-mono text-[9px] text-ink-4 border-t border-border pt-3">
          Bars are proportional to the larger of the two. Goods trade only; services excluded.
        </p>
      </div>
    </section>
  )
}

// ─── 5. Import / export categories ───────────────────────────────────────────

function CategoryBar({
  name, value, pct, maxValue, barClass,
}: {
  name: string; value: number; pct: number; maxValue: number; barClass: string
}) {
  const w = maxValue > 0 ? (value / maxValue) * 100 : 0
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <span className="text-xs text-ink-2 leading-tight truncate">{name}</span>
        <div className="flex items-baseline gap-1.5 shrink-0">
          <span className="font-mono text-[9px] text-ink-4">{pct}%</span>
          <span className="font-mono text-[10px] text-ink-3 tabular-nums w-11 text-right">{formatBillions(value)}</span>
        </div>
      </div>
      <div className="h-1 rounded-full overflow-hidden bg-surface-3">
        <div className={`h-full rounded-full ${barClass}`} style={{ width: `${w}%` }} />
      </div>
    </div>
  )
}

function CategoryCol({
  cats, label, barClass,
}: {
  cats: { name: string; valueUSD: number; percentOfTotal: number }[]
  label: string
  barClass: string
}) {
  const maxVal = cats.length > 0 ? Math.max(...cats.map(c => c.valueUSD)) : 1
  return (
    <div>
      <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-3">{label}</p>
      {cats.length > 0 ? (
        <div className="space-y-3">
          {cats.map(c => (
            <CategoryBar
              key={c.name}
              name={c.name}
              value={c.valueUSD}
              pct={c.percentOfTotal}
              maxValue={maxVal}
              barClass={barClass}
            />
          ))}
        </div>
      ) : (
        <p className="text-xs text-ink-4 italic">No category data available.</p>
      )}
    </div>
  )
}

function CategorySection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  return (
    <section className="mb-10">
      <SectionLabel>IMPORT / EXPORT BREAKDOWN</SectionLabel>
      <div className="space-y-4">
        <div className="bg-surface border border-border rounded p-5">
          <p className="font-mono text-[9px] tracking-widest text-ink-3 mb-5">U.S. IMPORTS — TOP CATEGORIES</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CategoryCol
              cats={a.currentTrade.topImportCategories}
              label={`FROM ${a.name.toUpperCase()}`}
              barClass={A.bar}
            />
            <CategoryCol
              cats={b.currentTrade.topImportCategories}
              label={`FROM ${b.name.toUpperCase()}`}
              barClass={B.bar}
            />
          </div>
        </div>
        <div className="bg-surface border border-border rounded p-5">
          <p className="font-mono text-[9px] tracking-widest text-ink-3 mb-5">U.S. EXPORTS — TOP CATEGORIES</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CategoryCol
              cats={a.currentTrade.topExportCategories}
              label={`TO ${a.name.toUpperCase()}`}
              barClass={A.bar}
            />
            <CategoryCol
              cats={b.currentTrade.topExportCategories}
              label={`TO ${b.name.toUpperCase()}`}
              barClass={B.bar}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 6. Tariffs ───────────────────────────────────────────────────────────────

function TariffCard({
  profile, side,
}: {
  profile: CountryProfile
  side: 'a' | 'b'
}) {
  const { tariffs } = profile
  const tokens = side === 'a' ? A : B
  const avg = tariffs.length > 0 ? tariffs.reduce((s, t) => s + t.rate, 0) / tariffs.length : null
  const max = tariffs.length > 0 ? Math.max(...tariffs.map(t => t.rate)) : null

  return (
    <div className="bg-surface border border-border rounded p-4">
      <div className="flex items-center justify-between mb-3">
        <p className={`font-mono text-[9px] tracking-widest ${tokens.textDim}`}>
          {profile.flagEmoji} {profile.name.toUpperCase()}
        </p>
        {avg !== null && (
          <p className="font-mono text-[9px] text-ink-4">AVG {avg.toFixed(1)}% · MAX {max}%</p>
        )}
      </div>
      {tariffs.length === 0 ? (
        <p className="text-xs text-ink-3 italic">MFN rates apply. No sector-specific measures tracked.</p>
      ) : (
        <div className="space-y-2.5">
          {tariffs.map((t, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-ink-2 leading-tight">{t.sector}</p>
                <p className="font-mono text-[9px] text-ink-4 mt-0.5">{t.legalBasis ?? t.status.toUpperCase()}</p>
              </div>
              <span className={`font-mono text-sm tabular-nums shrink-0 ${
                t.rate >= 50 ? 'text-flag' :
                t.rate >= 20 ? 'text-amber-400' :
                t.rate >= 5  ? 'text-ink-2' : 'text-ink-3'
              }`}>
                {t.rate}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function TariffCompareSection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  return (
    <section className="mb-10">
      <SectionLabel>TARIFF SNAPSHOT</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TariffCard profile={a} side="a" />
        <TariffCard profile={b} side="b" />
      </div>
      <p className="font-mono text-[10px] text-ink-4 mt-2">
        Ad-valorem rates shown. Antidumping and countervailing duties may apply on top.
      </p>
    </section>
  )
}

// ─── 7. Trade agreements ──────────────────────────────────────────────────────

function AgreementCard({
  profile, side,
}: {
  profile: CountryProfile
  side: 'a' | 'b'
}) {
  const ag = profile.agreement
  const tokens = side === 'a' ? A : B
  const statusStyle =
    ag.status === 'in-force'    ? 'text-teal-400 border-teal-900 bg-teal-950/30' :
    ag.status === 'negotiating' ? 'text-accent border-accent/40 bg-accent/5' :
    ag.status === 'suspended'   ? 'text-ink-3 border-border bg-surface-2' :
                                  'text-ink-4 border-border'
  const statusLabel =
    ag.status === 'in-force'    ? 'IN FORCE' :
    ag.status === 'negotiating' ? 'NEGOTIATING' :
    ag.status === 'suspended'   ? 'SUSPENDED' : 'NO FTA'

  return (
    <div className="bg-surface border border-border rounded p-4">
      <p className={`font-mono text-[9px] tracking-widest mb-3 ${tokens.textDim}`}>
        {profile.flagEmoji} {profile.name.toUpperCase()}
      </p>
      <div className="flex items-start justify-between gap-3 mb-2">
        <p className="text-sm font-medium text-ink leading-snug">{ag.name}</p>
        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border shrink-0 ${statusStyle}`}>
          {statusLabel}
        </span>
      </div>
      {ag.inForceDate && (
        <p className="font-mono text-[9px] text-ink-4 mb-2">In force: {ag.inForceDate}</p>
      )}
      <p className="text-xs text-ink-3 leading-relaxed">
        {ag.summary.length > 220 ? ag.summary.slice(0, 220) + '…' : ag.summary}
      </p>
      {ag.keyProvisions && ag.keyProvisions.length > 0 && (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="font-mono text-[9px] text-ink-4 mb-1.5">KEY PROVISIONS</p>
          <ul className="space-y-1">
            {ag.keyProvisions.slice(0, 3).map((p, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-ink-4 text-[10px] mt-0.5 shrink-0">·</span>
                <span className="text-[10px] text-ink-3 leading-relaxed">{p.length > 100 ? p.slice(0, 100) + '…' : p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function AgreementCompareSection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  return (
    <section className="mb-10">
      <SectionLabel>TRADE AGREEMENTS</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AgreementCard profile={a} side="a" />
        <AgreementCard profile={b} side="b" />
      </div>
    </section>
  )
}

// ─── 8. Investment exposure ───────────────────────────────────────────────────

function InvestmentCard({
  profile, side,
}: {
  profile: CountryProfile
  side: 'a' | 'b'
}) {
  const inv = profile.investment
  const tokens = side === 'a' ? A : B

  if (inv.dataAvailability === 'not-applicable') {
    return (
      <div className="bg-surface border border-border rounded p-4">
        <p className={`font-mono text-[9px] tracking-widest mb-2 ${tokens.textDim}`}>
          {profile.flagEmoji} {profile.name.toUpperCase()}
        </p>
        <p className="text-xs text-ink-3 italic">Investment data not applicable for this partner.</p>
      </div>
    )
  }

  return (
    <div className="bg-surface border border-border rounded p-4 space-y-3">
      <p className={`font-mono text-[9px] tracking-widest ${tokens.textDim}`}>
        {profile.flagEmoji} {profile.name.toUpperCase()}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'U.S. FDI ABROAD', val: inv.usFDIAbroadUSD },
          { label: 'FDI IN U.S.',     val: inv.foreignFDIInUSUSD },
        ].map(({ label, val }) => (
          <div key={label} className="bg-surface-2 rounded p-3">
            <p className="font-mono text-[9px] text-ink-4 mb-1 leading-tight">{label}</p>
            {val
              ? <p className="font-mono text-base text-ink tabular-nums">{formatBillions(val)}</p>
              : <p className="font-mono text-xs text-ink-4 italic">Pending</p>
            }
          </div>
        ))}
      </div>
      {inv.majorUSInvestors && inv.majorUSInvestors.length > 0 && (
        <div>
          <p className="font-mono text-[9px] text-ink-4 mb-1.5">NOTABLE U.S. INVESTORS</p>
          <div className="flex flex-wrap gap-1">
            {inv.majorUSInvestors.slice(0, 5).map(n => (
              <span key={n} className="font-mono text-[9px] px-1.5 py-0.5 rounded border text-ink-3 border-border">
                {n}
              </span>
            ))}
          </div>
        </div>
      )}
      {inv.dataAvailability === 'pending' && (
        <p className="font-mono text-[9px] text-ink-4">Figures are estimates. Full BEA data pending.</p>
      )}
    </div>
  )
}

function InvestmentCompareSection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  return (
    <section className="mb-10">
      <SectionLabel>U.S. INVESTMENT EXPOSURE</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InvestmentCard profile={a} side="a" />
        <InvestmentCard profile={b} side="b" />
      </div>
    </section>
  )
}

// ─── 9. Aid & financial outflows ─────────────────────────────────────────────

function AidCard({
  profile, side,
}: {
  profile: CountryProfile
  side: 'a' | 'b'
}) {
  const { aid } = profile
  const tokens = side === 'a' ? A : B

  if (!aid) {
    return (
      <div className="bg-surface border border-border rounded p-4">
        <p className={`font-mono text-[9px] tracking-widest mb-2 ${tokens.textDim}`}>
          {profile.flagEmoji} {profile.name.toUpperCase()}
        </p>
        <p className="text-xs text-ink-3">No U.S. foreign assistance tracked for this partner.</p>
      </div>
    )
  }

  const breakdown = [
    { label: 'ECONOMIC',     val: aid.economicAssistanceUSD },
    { label: 'MILITARY',     val: aid.militaryAssistanceUSD },
    { label: 'HUMANITARIAN', val: aid.humanitarianUSD },
  ].filter(e => e.val)

  return (
    <div className="bg-surface border border-border rounded p-4 space-y-3">
      <p className={`font-mono text-[9px] tracking-widest ${tokens.textDim}`}>
        {profile.flagEmoji} {profile.name.toUpperCase()}
      </p>
      <div>
        <p className="font-mono text-[9px] text-ink-4 mb-0.5">TOTAL AID — FY{aid.fiscalYear}</p>
        <p className="font-mono text-xl text-ink tabular-nums">{formatBillions(aid.totalUSD)}</p>
      </div>
      {breakdown.length > 0 && (
        <div className="grid grid-cols-3 gap-1.5">
          {breakdown.map(({ label, val }) => (
            <div key={label} className="bg-surface-2 rounded p-2 text-center">
              <p className="font-mono text-[8px] text-ink-4 mb-0.5">{label}</p>
              <p className="font-mono text-xs text-ink-2 tabular-nums">{formatBillions(val!)}</p>
            </div>
          ))}
        </div>
      )}
      {aid.majorPrograms && aid.majorPrograms.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {aid.majorPrograms.slice(0, 3).map(p => (
            <span key={p} className="font-mono text-[8px] px-1.5 py-0.5 rounded border text-ink-3 border-border">{p}</span>
          ))}
        </div>
      )}
    </div>
  )
}

function AidCompareSection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  if (!a.aid && !b.aid) return null
  return (
    <section className="mb-10">
      <SectionLabel>U.S. AID & FINANCIAL OUTFLOWS</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AidCard profile={a} side="a" />
        <AidCard profile={b} side="b" />
      </div>
    </section>
  )
}

// ─── 10. Strategic dependency matrix ─────────────────────────────────────────

const SEV_ORDER: Record<DependencySeverity, number> = {
  critical: 0, high: 1, moderate: 2, low: 3, none: 4,
}

function DependencySection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  const mapA = new Map(a.dependencySignals.map(s => [s.category, s]))
  const mapB = new Map(b.dependencySignals.map(s => [s.category, s]))
  const cats = [...new Set([...mapA.keys(), ...mapB.keys()])].sort((x, y) => {
    const px = Math.min(SEV_ORDER[mapA.get(x)?.severity ?? 'none'], SEV_ORDER[mapB.get(x)?.severity ?? 'none'])
    const py = Math.min(SEV_ORDER[mapA.get(y)?.severity ?? 'none'], SEV_ORDER[mapB.get(y)?.severity ?? 'none'])
    return px - py || x.localeCompare(y)
  })
  if (cats.length === 0) return null

  const sumA = { crit: cats.filter(c => mapA.get(c)?.severity === 'critical').length, high: cats.filter(c => mapA.get(c)?.severity === 'high').length }
  const sumB = { crit: cats.filter(c => mapB.get(c)?.severity === 'critical').length, high: cats.filter(c => mapB.get(c)?.severity === 'high').length }

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <SectionLabel>STRATEGIC DEPENDENCY</SectionLabel>
        <div className="flex items-center gap-5 pb-1">
          <span className="font-mono text-[9px] text-ink-4">
            <span className={A.text}>{a.name.split(' ')[0]}</span>
            {' '}{sumA.crit} critical · {sumA.high} high
          </span>
          <span className="font-mono text-[9px] text-ink-4">
            <span className={B.text}>{b.name.split(' ')[0]}</span>
            {' '}{sumB.crit} critical · {sumB.high} high
          </span>
        </div>
      </div>
      <div className="bg-surface border border-border rounded overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-4 py-2.5 bg-surface-2 border-b border-border">
          <span className="font-mono text-[9px] text-ink-4">CATEGORY</span>
          <span className={`font-mono text-[9px] w-[4.5rem] text-center ${A.text}`}>
            {a.flagEmoji} {a.name.split(' ')[0].toUpperCase()}
          </span>
          <span className={`font-mono text-[9px] w-[4.5rem] text-center ${B.text}`}>
            {b.flagEmoji} {b.name.split(' ')[0].toUpperCase()}
          </span>
        </div>
        {cats.map(cat => {
          const sigA = mapA.get(cat)
          const sigB = mapB.get(cat)
          const note = sigA?.note ?? sigB?.note
          return (
            <div
              key={cat}
              className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-4 py-3 border-b border-border last:border-0 items-start hover:bg-surface-2/50 transition-colors"
            >
              <div>
                <p className="text-xs text-ink-2">{cat}</p>
                {note && (
                  <p className="font-mono text-[9px] text-ink-4 mt-0.5 leading-relaxed max-w-sm">
                    {note.length > 110 ? note.slice(0, 110) + '…' : note}
                  </p>
                )}
              </div>
              <div className="w-[4.5rem] flex justify-center pt-0.5">
                {sigA ? <SeverityChip severity={sigA.severity} /> : <span className="font-mono text-[9px] text-ink-4">—</span>}
              </div>
              <div className="w-[4.5rem] flex justify-center pt-0.5">
                {sigB ? <SeverityChip severity={sigB.severity} /> : <span className="font-mono text-[9px] text-ink-4">—</span>}
              </div>
            </div>
          )
        })}
      </div>
      <p className="font-mono text-[10px] text-ink-4 mt-2">
        Editorial assessment based on trade data and supply chain analysis. Not a risk rating. Dependency direction (U.S. dependent / partner dependent / mutual) on individual country profiles.
      </p>
    </section>
  )
}

// ─── 11. CTA ─────────────────────────────────────────────────────────────────

function CTASection({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  const [copied, setCopied] = useState(false)

  function copyLink() {
    if (typeof window === 'undefined') return
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {})
  }

  const context = `${a.name} vs ${b.name}`

  return (
    <section className="mb-4">
      {/* Premium toolbar */}
      <div className="flex items-center gap-2 flex-wrap mb-5">
        <SaveComparisonButton slugA={a.slug} slugB={b.slug} />
        <ExportMenu context={context} />
        <BriefingButton label="BRIEFING" context={context} />
        <button
          onClick={copyLink}
          className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest px-3 py-2 rounded border border-border text-ink-4 hover:border-accent/30 hover:text-ink-3 transition-colors ml-auto"
        >
          {copied ? '✓ COPIED' : '⎘ COPY LINK'}
        </button>
      </div>

      <SectionLabel>DIVE DEEPER</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          href={`/economy/${a.slug}`}
          className={`flex flex-col p-4 bg-surface border rounded hover:bg-surface-2 transition-colors group ${A.border}`}
        >
          <span className="text-2xl mb-2.5">{a.flagEmoji}</span>
          <p className={`font-mono text-[9px] tracking-widest mb-1 ${A.textDim}`}>FULL PROFILE</p>
          <p className={`text-sm font-semibold transition-colors group-hover:brightness-125 ${A.text}`}>
            {a.name}
          </p>
          <p className="text-xs text-ink-3 mt-0.5 leading-snug">Trade flow, tariffs, investment & aid →</p>
        </Link>

        <Link
          href={`/economy/${b.slug}`}
          className={`flex flex-col p-4 bg-surface border rounded hover:bg-surface-2 transition-colors group ${B.border}`}
        >
          <span className="text-2xl mb-2.5">{b.flagEmoji}</span>
          <p className={`font-mono text-[9px] tracking-widest mb-1 ${B.textDim}`}>FULL PROFILE</p>
          <p className={`text-sm font-semibold transition-colors group-hover:brightness-125 ${B.text}`}>
            {b.name}
          </p>
          <p className="text-xs text-ink-3 mt-0.5 leading-snug">Trade flow, tariffs, investment & aid →</p>
        </Link>
      </div>
    </section>
  )
}

// ─── Suggested comparisons ────────────────────────────────────────────────────

const SUGGESTIONS = [
  { a: 'china', b: 'mexico' },
  { a: 'china', b: 'canada' },
  { a: 'mexico', b: 'canada' },
  { a: 'china', b: 'vietnam' },
  { a: 'germany', b: 'japan' },
  { a: 'south-korea', b: 'taiwan' },
]

function SuggestedComparisons({ onSelect }: { onSelect: (a: string, b: string) => void }) {
  return (
    <div className="border border-dashed border-border rounded p-6">
      <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-3">POPULAR COMPARISONS</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {SUGGESTIONS.map(({ a, b }) => {
          const pa = countryProfiles[a]
          const pb = countryProfiles[b]
          if (!pa || !pb) return null
          return (
            <button
              key={`${a}:${b}`}
              onClick={() => onSelect(a, b)}
              className="flex items-center gap-2 px-3 py-2.5 bg-surface border border-border rounded hover:border-accent/40 hover:bg-surface-2 transition-colors text-left group"
            >
              <span className="text-lg leading-none shrink-0">{pa.flagEmoji}</span>
              <span className="font-mono text-[9px] text-ink-4 shrink-0">VS</span>
              <span className="text-lg leading-none shrink-0">{pb.flagEmoji}</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-ink group-hover:text-accent transition-colors truncate">
                  {pa.name} · {pb.name}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Country picker ───────────────────────────────────────────────────────────

function CountryPicker({
  value, onChange, exclude, label, side,
}: {
  value: string
  onChange: (slug: string) => void
  exclude: string
  label: string
  side: 'a' | 'b'
}) {
  const [query, setQuery] = useState('')
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const tokens = side === 'a' ? A : B
  const list = countries.filter(c => c.slug !== exclude)
  const filtered = query
    ? list.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.region.toLowerCase().includes(query.toLowerCase())
      )
    : list
  const selected = value ? countryProfiles[value] : null

  function handleQueryChange(val: string) {
    setQuery(val)
    if (searchTimer.current) clearTimeout(searchTimer.current)
    if (val.length >= 2) {
      searchTimer.current = setTimeout(() => {
        const count = list.filter(c =>
          c.name.toLowerCase().includes(val.toLowerCase()) ||
          c.region.toLowerCase().includes(val.toLowerCase())
        ).length
        track('economy.search.queried', {
          query: val,
          result_count: Math.min(count, 12),
          surface: 'compare_picker',
        })
      }, 600)
    }
  }

  function handleSelect(slug: string, name: string, rank: number) {
    if (query) {
      track('economy.search.result_clicked', {
        slug,
        name,
        rank,
        query,
        surface: 'compare_picker',
      })
    }
    onChange(slug)
    setQuery('')
  }

  return (
    <div className="flex-1 min-w-0">
      <p className={`font-mono text-[9px] tracking-widest mb-2 ${tokens.textDim}`}>{label}</p>
      {selected ? (
        <div className={`flex items-center gap-3 px-3 py-2.5 bg-surface border rounded ${tokens.border}`}>
          <span className="text-xl leading-none shrink-0">{selected.flagEmoji}</span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-ink truncate">{selected.name}</p>
            <p className="font-mono text-[9px] text-ink-3">#{selected.tradePartnerRank} U.S. trade partner</p>
          </div>
          <button
            onClick={() => onChange('')}
            className="text-ink-4 hover:text-ink-2 font-mono text-xs shrink-0 transition-colors"
          >
            ✕
          </button>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search country…"
            value={query}
            onChange={e => handleQueryChange(e.target.value)}
            className="w-full bg-surface border border-border rounded px-3 py-2 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent transition-colors mb-1"
            autoComplete="off"
          />
          <div className="border border-border rounded overflow-hidden bg-surface" style={{ maxHeight: '13rem', overflowY: 'auto' }}>
            {filtered.slice(0, 12).map(c => (
              <button
                key={c.slug}
                onClick={() => handleSelect(c.slug, c.name, c.tradePartnerRank)}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-surface-2 transition-colors text-left border-b border-border last:border-0"
              >
                <span className="text-base leading-none shrink-0">{c.flagEmoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-ink truncate">{c.name}</p>
                  <p className="font-mono text-[9px] text-ink-3">#{c.tradePartnerRank} · {c.region}</p>
                </div>
                <BalanceChip balance={c.tradeBalanceUSD} />
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="px-3 py-3 text-xs text-ink-3">No results.</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Full comparison body ─────────────────────────────────────────────────────

function ComparisonBody({ a, b }: { a: CountryProfile; b: CountryProfile }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {([{ p: a, side: 'a' as const }, { p: b, side: 'b' as const }]).map(({ p, side }) => {
          const tokens = side === 'a' ? A : B
          return (
            <Link
              key={p.slug}
              href={`/economy/${p.slug}`}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-surface border rounded hover:bg-surface-2 transition-colors group ${tokens.border}`}
            >
              <span className="text-3xl leading-none shrink-0">{p.flagEmoji}</span>
              <div className="min-w-0">
                <p className={`text-base font-semibold leading-tight ${tokens.text}`}>{p.name}</p>
                <p className="text-xs text-ink-3 mt-0.5">{p.officialName}</p>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="font-mono text-[9px] text-ink-4 border border-border rounded px-1.5 py-0.5">
                    #{p.tradePartnerRank} PARTNER
                  </span>
                  <BalanceChip balance={p.currentTrade.tradeBalanceUSD} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <SummarySection        a={a} b={b} />
      <Divider />
      <MetricsSection        a={a} b={b} />
      <TradeBalanceSection   a={a} b={b} />
      <CategorySection       a={a} b={b} />
      <Divider />
      <TariffCompareSection  a={a} b={b} />
      <AgreementCompareSection a={a} b={b} />
      <Divider />
      <InvestmentCompareSection a={a} b={b} />
      <AidCompareSection     a={a} b={b} />
      <Divider />
      <DependencySection     a={a} b={b} />
      {/* Historical trend gate — after all free content */}
      <HistoricalTrendGate   countryName={`${a.name} & ${b.name}`} />
      <Divider />
      <CTASection            a={a} b={b} />
    </div>
  )
}

// ─── Orchestrator ─────────────────────────────────────────────────────────────

function EconomyCompareInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [slugA, setSlugA] = useState(searchParams.get('a') ?? '')
  const [slugB, setSlugB] = useState(searchParams.get('b') ?? '')

  const profileA = slugA ? countryProfiles[slugA] ?? null : null
  const profileB = slugB ? countryProfiles[slugB] ?? null : null

  // Fire once per valid pair (fires again if either slot changes)
  useEffect(() => {
    if (!slugA || !slugB) return
    const key = [slugA, slugB].sort().join(':')
    track('economy.compare.page_viewed', {
      slug_a: slugA,
      slug_b: slugB,
      has_editorial_summary: key in compareSummaries,
    })
  }, [slugA, slugB])

  function handleChange(which: 'a' | 'b', slug: string) {
    const nextA = which === 'a' ? slug : slugA
    const nextB = which === 'b' ? slug : slugB
    if (which === 'a') setSlugA(slug)
    else setSlugB(slug)
    const params = new URLSearchParams()
    if (nextA) params.set('a', nextA)
    if (nextB) params.set('b', nextB)
    router.replace(`/economy/compare?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link
        href="/economy"
        className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-accent transition-colors"
      >
        ← ECONOMY
      </Link>

      <h1 className="text-2xl font-semibold text-ink mt-4 mb-1">Compare Trade Partners</h1>
      <p className="text-sm text-ink-3 mb-8">
        Select two countries to compare U.S. trade exposure side by side.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
        <CountryPicker
          value={slugA}
          onChange={s => handleChange('a', s)}
          exclude={slugB}
          label="COUNTRY A"
          side="a"
        />
        <div className="hidden sm:flex items-start pt-7 shrink-0">
          <span className="font-mono text-xs text-ink-4 px-1">VS</span>
        </div>
        <CountryPicker
          value={slugB}
          onChange={s => handleChange('b', s)}
          exclude={slugA}
          label="COUNTRY B"
          side="b"
        />
      </div>

      {profileA && profileB ? (
        <ComparisonBody a={profileA} b={profileB} />
      ) : profileA || profileB ? (
        <div className="text-center py-16 border border-dashed border-border rounded">
          <p className="text-ink-3 text-sm">Select the second country to begin.</p>
        </div>
      ) : (
        <SuggestedComparisons onSelect={(a, b) => {
          setSlugA(a)
          setSlugB(b)
          const params = new URLSearchParams({ a, b })
          router.replace(`/economy/compare?${params.toString()}`, { scroll: false })
        }} />
      )}
    </div>
  )
}

export function EconomyCompareClient() {
  return (
    <Suspense>
      <EconomyCompareInner />
    </Suspense>
  )
}
