import type { PoliticianProfile } from '@political-intel/types'
import { AIAnalysisBadge } from '@/components/ui/AIAnalysisBadge'

interface RecordAssessmentProps {
  politician: PoliticianProfile
}

export function RecordAssessment({ politician }: RecordAssessmentProps) {
  const { recordAssessment } = politician

  return (
    <section className="mb-12">
      <h2 className="label-caps text-accent/70 mb-4">RECORD ASSESSMENT</h2>

      <AIAnalysisBadge />

      <div className="space-y-4">
        <AssessmentBlock
          label="WHAT THE RECORD SHOWS"
          items={recordAssessment.whatTheRecordShows}
          accentClass="text-ink-2"
          borderClass="border-border"
        />
        <AssessmentBlock
          label="WHAT WE OBSERVE"
          items={recordAssessment.whatWeObserve}
          accentClass="text-ink-2"
          borderClass="border-accent-muted"
        />
        <AssessmentBlock
          label="WHAT IS UNRESOLVED"
          items={recordAssessment.whatIsUnresolved}
          accentClass="text-ink-3"
          borderClass="border-border"
          italic
        />
      </div>
    </section>
  )
}

function AssessmentBlock({
  label,
  items,
  accentClass,
  borderClass,
  italic,
}: {
  label: string
  items: string[]
  accentClass: string
  borderClass: string
  italic?: boolean
}) {
  return (
    <div className={`bg-surface border rounded p-5 ${borderClass}`}>
      <p className="label-caps text-ink-4 mb-3">{label}</p>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="font-mono text-xs text-ink-4 mt-0.5 shrink-0 tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className={`text-sm leading-relaxed ${accentClass} ${italic ? 'italic' : ''}`}>
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
