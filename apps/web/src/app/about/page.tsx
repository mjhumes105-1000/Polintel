import Link from 'next/link'
import { allBills } from '@/data/bills'
import { countries } from '@/data/economy/countries'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <p className="font-mono text-[10px] tracking-widest text-accent mb-3">ABOUT</p>
      <h1 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-6">
        The public record, organized.
      </h1>

      {/* Mission */}
      <section className="mb-12">
        <p className="text-base text-ink-2 leading-relaxed mb-4">
          PoliIntel is a non-partisan civic information platform. We aggregate votes, campaign funding,
          trade data, and legislative activity from primary government sources and present them without
          editorial spin or partisan framing.
        </p>
        <p className="text-base text-ink-2 leading-relaxed mb-4">
          We built this because the public record is technically open but practically inaccessible.
          FEC filings, congressional votes, and trade statistics are public — but spread across dozens
          of agency websites, formatted for bureaucrats rather than citizens. PoliIntel organizes that
          record in one place.
        </p>
        <p className="text-base text-ink-2 leading-relaxed">
          This site is for journalists, researchers, and engaged citizens who want to verify facts
          rather than consume interpretations.
        </p>
      </section>

      {/* Who it's for */}
      <section className="mb-12 border border-border rounded p-6 bg-surface">
        <p className="font-mono text-[9px] tracking-widest text-accent/70 mb-4">WHO IT&apos;S FOR</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              label: 'Journalists',
              desc: 'Verify a claim. Pull a voting record. Trace a campaign contribution. Every data point links to the primary source.',
            },
            {
              label: 'Researchers',
              desc: 'Cross-tabulate votes, funding, and trade exposure. Compare politicians on the same bill. Export what you need.',
            },
            {
              label: 'Citizens',
              desc: 'Look up your representatives. See how they voted, who funds them, and what bills they sponsored.',
            },
          ].map(({ label, desc }) => (
            <div key={label}>
              <p className="text-sm font-medium text-ink mb-1.5">{label}</p>
              <p className="text-xs text-ink-3 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we cover */}
      <section className="mb-12">
        <p className="font-mono text-[9px] tracking-widest text-accent/70 mb-4">WHAT WE COVER</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              area: 'Politicians',
              detail: `${180}+ full profiles — voting records, campaign funding, committee assignments, timeline of public statements.`,
              href: '/politicians',
            },
            {
              area: 'Legislation',
              detail: `${allBills.length} bills tracked with full context — sponsors, committee status, floor votes, amendments.`,
              href: '/bills',
            },
            {
              area: 'Economy & Trade',
              detail: `${countries.length} bilateral trade relationships — import/export flows, tariff exposure, strategic dependency indicators.`,
              href: '/economy',
            },
            {
              area: 'Campaign Finance',
              detail: 'FEC filings integrated directly. Every contribution figure links to the underlying FEC record.',
              href: '/methodology',
            },
          ].map(({ area, detail, href }) => (
            <Link
              key={area}
              href={href}
              className="group flex flex-col gap-1.5 p-4 bg-surface border border-border rounded hover:border-accent/40 transition-colors"
            >
              <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">{area} →</p>
              <p className="text-xs text-ink-3 leading-relaxed">{detail}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="mb-12">
        <p className="font-mono text-[9px] tracking-widest text-accent/70 mb-4">PRINCIPLES</p>
        <div className="space-y-4">
          {[
            {
              title: 'Primary sources only',
              body: 'We cite Congress.gov, FEC.gov, the Federal Register, the U.S. Census Bureau, and USTR — not secondary aggregators. When a primary source changes, our data reflects that.',
            },
            {
              title: 'No partisan framing',
              body: 'Voting records are facts. Funding amounts are facts. We present the record as filed, without characterizing intent or outcome. We do not take editorial positions on policy.',
            },
            {
              title: 'Every figure cited',
              body: 'Each data point shows its source with a direct link to the underlying record or filing. If a number appears on this site, you can verify it in two clicks.',
            },
            {
              title: 'AI assistance, clearly labeled',
              body: 'Some profile summaries and record assessments are generated with AI assistance. These are clearly labeled and represent an interpretation of evidence — not a statement of fact. The underlying data they interpret is always sourced.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="w-px bg-accent/30 shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium text-ink mb-1">{title}</p>
                <p className="text-xs text-ink-3 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="flex flex-wrap gap-4 pt-6 border-t border-border">
        <Link href="/methodology" className="font-mono text-[10px] tracking-widest text-ink-3 hover:text-accent transition-colors">
          METHODOLOGY →
        </Link>
        <Link href="/politicians" className="font-mono text-[10px] tracking-widest text-ink-3 hover:text-accent transition-colors">
          BROWSE POLITICIANS →
        </Link>
        <a href="mailto:contact@poliintel.com" className="font-mono text-[10px] tracking-widest text-ink-3 hover:text-accent transition-colors">
          CONTACT →
        </a>
      </section>
    </div>
  )
}
