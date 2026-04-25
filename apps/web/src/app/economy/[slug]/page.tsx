import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { countryProfiles } from '@/data/economy/countryProfiles'
import { BackButton } from '@/components/ui/BackButton'
import { SourceBadge } from '@/components/ui/SourceBadge'
import { CompareButtonPill } from '@/components/economy/CompareButton'
import { MetricsStrip } from '@/components/economy/MetricsStrip'
import { TradeFlowSection } from '@/components/economy/TradeFlowSection'
import { TariffSection } from '@/components/economy/TariffSection'
import { AgreementSection } from '@/components/economy/AgreementSection'
import { InvestmentSection } from '@/components/economy/InvestmentSection'
import { AidSection } from '@/components/economy/AidSection'
import { DependenceTable } from '@/components/economy/DependenceTable'
import { BalanceChip } from '@/components/economy/BalanceChip'
import { AlertButton } from '@/components/economy/AlertButton'
import { ExportMenu } from '@/components/economy/ExportMenu'
import { HistoricalTrendGate } from '@/components/economy/HistoricalTrendGate'
import { EconomyCountryTracker } from '@/components/economy/EconomyCountryTracker'

export function generateStaticParams() {
  return Object.keys(countryProfiles).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const profile = countryProfiles[slug]
  if (!profile) return {}

  const title = `${profile.name} — U.S. Trade & Economic Exposure · PoliIntel`
  const description =
    profile.geopoliticalContext?.slice(0, 160) ??
    `U.S. trade flows, tariffs, investment, and strategic dependency data for ${profile.name}.`

  return {
    title,
    description,
    openGraph: { title, description },
  }
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const profile = countryProfiles[slug]
  if (!profile) notFound()

  const { currentTrade } = profile
  const totalTrade = currentTrade.usExportsUSD + currentTrade.usImportsUSD

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <EconomyCountryTracker slug={profile.slug} name={profile.name} rank={profile.tradePartnerRank} />

      {/* Back + breadcrumb */}
      <div className="flex items-center gap-3 mb-6">
        <BackButton fallbackHref="/economy" label="ECONOMY" />
        <span className="text-ink-4 font-mono text-[10px]">/</span>
        <span className="font-mono text-[10px] text-ink-3">{profile.name.toUpperCase()}</span>
      </div>

      {/* Hero header */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-3">
          <span className="text-4xl leading-none">{profile.flagEmoji}</span>
          <div>
            <h1 className="text-2xl font-semibold text-ink leading-tight">{profile.name}</h1>
            <p className="text-sm text-ink-3 mt-0.5">{profile.officialName}</p>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span className="font-mono text-[10px] text-ink-4 border border-border rounded px-1.5 py-0.5">
                #{profile.tradePartnerRank} U.S. TRADE PARTNER
              </span>
              <BalanceChip balance={currentTrade.tradeBalanceUSD} size="md" />
              {profile.currency && (
                <span className="font-mono text-[10px] text-ink-4">{profile.currency}</span>
              )}
              <CompareButtonPill slug={profile.slug} />
              <AlertButton slug={profile.slug} countryName={profile.name} />
            </div>
          </div>
        </div>

        {profile.geopoliticalContext && (
          <p className="text-sm text-ink-3 leading-relaxed max-w-3xl mt-4 border-l-2 border-border pl-4">
            {profile.geopoliticalContext}
          </p>
        )}
      </div>

      {/* Metrics strip */}
      <MetricsStrip
        totalTradeUSD={totalTrade}
        usImportsUSD={currentTrade.usImportsUSD}
        usExportsUSD={currentTrade.usExportsUSD}
        tradeBalanceUSD={currentTrade.tradeBalanceUSD}
        gdpUSD={profile.gdpUSD}
        fiscalYear={currentTrade.fiscalYear}
      />

      {/* Trade flow breakdown */}
      <TradeFlowSection
        imports={currentTrade.topImportCategories}
        exports={currentTrade.topExportCategories}
        countryName={profile.name}
      />

      {/* Tariffs */}
      <TariffSection tariffs={profile.tariffs} />

      {/* Trade agreement */}
      <AgreementSection agreement={profile.agreement} />

      {/* Investment */}
      <InvestmentSection investment={profile.investment} countryName={profile.name} />

      {/* Aid (only for recipients) */}
      {profile.aid && (
        <AidSection aid={profile.aid} countryName={profile.name} />
      )}

      {/* Strategic dependency */}
      <DependenceTable signals={profile.dependencySignals} countryName={profile.name} />

      {/* Historical trend (Pro gate) — placed after all free content */}
      <HistoricalTrendGate countryName={profile.name} />

      {/* Compare CTA */}
      <div className="border border-dashed border-border rounded px-5 py-4 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-ink-3 mb-0.5">COMPARE</p>
          <p className="text-sm text-ink-2">
            Add {profile.name} to the compare tray, then select a second partner to run a full side-by-side comparison.
          </p>
        </div>
        <div className="shrink-0">
          <CompareButtonPill slug={profile.slug} />
        </div>
      </div>

      {/* Sources */}
      {profile.sources.length > 0 && (
        <section className="mb-6">
          <p className="font-mono text-[9px] tracking-widest text-ink-4 mb-2">SOURCES</p>
          <div className="flex flex-wrap gap-1.5">
            {profile.sources.map((s) => (
              <SourceBadge key={s.id} source={s} />
            ))}
          </div>
        </section>
      )}

      {/* Footer nav */}
      <div className="border-t border-border pt-6 flex items-center justify-between flex-wrap gap-3">
        <Link
          href="/economy"
          className="font-mono text-[10px] tracking-widest text-ink-4 hover:text-accent transition-colors"
        >
          ← ALL PARTNERS
        </Link>
        <div className="flex items-center gap-2">
          <ExportMenu context={profile.name} />
          <span className="font-mono text-[9px] text-ink-4">
            Data: U.S. Census Bureau · USTR · BEA · ForeignAssistance.gov
          </span>
        </div>
      </div>
    </div>
  )
}
