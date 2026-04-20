import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Methodology',
  description: 'How PoliIntel collects, organizes, and presents the public record.',
}

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="font-mono text-[10px] tracking-widest text-ink-3 mb-3">METHODOLOGY</p>
      <h1 className="text-3xl font-semibold text-ink tracking-tight mb-3">
        How this works
      </h1>
      <p className="text-ink-2 text-base leading-relaxed mb-12">
        This platform is built around a single commitment: every factual claim must be traceable
        to a public source. Here is what we collect, how we present it, and where AI fits in.
      </p>

      <div className="space-y-10">
        <Section title="What we collect">
          <p>
            Each politician profile draws on publicly available primary sources:
          </p>
          <ul className="mt-3 space-y-1.5">
            {[
              'Official legislative records — bill text, vote histories, signing statements (via state and federal legislative information systems)',
              'Campaign finance disclosures — from the FEC and state equivalents such as Cal-Access',
              'Official government records — executive orders, press releases, budget documents',
              'Court records where relevant and publicly accessible',
              'Reporting from established news organizations, cited by publication and date',
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm text-ink-2">
                <span className="text-ink-4 mt-0.5 shrink-0">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            We do not use anonymous sources, social media posts, or unverified claims as evidence.
          </p>
        </Section>

        <Section title="Neutrality standards">
          <p>
            This platform takes no editorial positions on policy outcomes. We do not characterize a vote
            as right or wrong, a policy as good or bad, or a politician as trustworthy or dishonest.
          </p>
          <p className="mt-3">
            What we do: present the documented record, note observable patterns, and flag cases where
            a politician&apos;s stated positions are in documented tension with their actions. Flags are not
            judgments — they are evidence that something in the record requires scrutiny.
          </p>
          <p className="mt-3">
            We do not use partisan color-coding, approve/disapprove framing, or honesty ratings.
            The record speaks in facts, not grades.
          </p>
        </Section>

        <Section title="How AI is used">
          <p>
            AI is used in two ways on this platform:
          </p>
          <ol className="mt-3 space-y-2">
            <li className="flex gap-2 text-sm text-ink-2">
              <span className="font-mono text-ink-4 shrink-0">01</span>
              <span>
                <strong className="text-ink">Organization.</strong> Structured data models shape how evidence
                is collected, tagged, and displayed. AI helps surface patterns across a body of evidence.
              </span>
            </li>
            <li className="flex gap-2 text-sm text-ink-2">
              <span className="font-mono text-ink-4 shrink-0">02</span>
              <span>
                <strong className="text-ink">Record Assessment.</strong> The AI-generated editorial section
                at the bottom of each profile synthesizes the displayed evidence into a structured interpretation.
                It is explicitly not a statement of fact.
              </span>
            </li>
          </ol>
          <p className="mt-3">
            AI is not permitted to introduce facts that are not present in the structured evidence set.
            It operates strictly as an interpreter of what is shown, not a source of new information.
          </p>
        </Section>

        <Section title="The Record Assessment">
          <p>
            Every profile ends with a Record Assessment divided into three sections:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              ['What the record shows', 'A summary of documented facts in the timeline. These items are each traceable to a cited source.'],
              ['What we observe', 'Patterns, tensions, and notable features of the record as read by the AI. This is interpretation, not fact.'],
              ['What is unresolved', 'Questions the public record does not answer — things that remain open, contested, or unclear from available evidence.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-2 text-sm text-ink-2">
                <span className="text-ink-4 mt-0.5 shrink-0">–</span>
                <span><strong className="text-ink">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border border-flag-muted bg-flag-bg rounded px-4 py-3">
            <p className="text-xs text-ink-3 leading-relaxed">
              Every Record Assessment is preceded by a disclaimer: it is an AI-generated editorial
              interpretation of the public record shown on the page. It represents one reading of the
              evidence, not a statement of fact.
            </p>
          </div>
        </Section>

        <Section title="Source standards and limitations">
          <p>
            Every source is displayed with the publishing organization, date, and a direct link to
            the primary record where available. Some sources — such as news archives — may be behind
            paywalls or change over time.
          </p>
          <p className="mt-3">
            This platform is not comprehensive. We cover major documented events, not every vote
            or statement. Omission of an event does not imply that event did not occur.
          </p>
          <p className="mt-3">
            Data accuracy is tied to the retrieval dates shown on each source. Records are updated
            periodically; if you identify a factual error or a missing source, contact us.
          </p>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-semibold text-ink mb-3 pb-2 border-b border-border">{title}</h2>
      <div className="space-y-0 text-sm text-ink-2 leading-relaxed [&>p]:leading-relaxed">
        {children}
      </div>
    </section>
  )
}
