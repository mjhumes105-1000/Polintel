import type { StudyModule } from '@/data/leverage-study/modules'
import { ConversationGrenade } from './ConversationGrenade'

interface StudyModuleProps {
  module: StudyModule
}

export function StudyModule({ module }: StudyModuleProps) {
  return (
    <section id={module.id} className="py-20 border-b border-border/50 last:border-0">
      {/* Module number + eyebrow */}
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-mono text-3xl font-bold leading-none" style={{ color: 'rgba(232,146,12,0.35)' }}>
          {module.moduleNumber}
        </span>
        {module.eyebrow && (
          <>
            <span className="text-border text-xs">·</span>
            <span className="label-caps text-flag">{module.eyebrow}</span>
          </>
        )}
      </div>

      {/* Title */}
      <h2 className="font-display text-4xl font-bold text-ink leading-tight mb-8 max-w-[640px]">
        {module.title}
      </h2>

      {/* Body paragraphs */}
      <div className="space-y-5">
        {module.body.map((paragraph, i) => (
          <p
            key={i}
            className="text-ink-2 text-base leading-[1.80] max-w-[68ch]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {module.conversationGrenade && (
        <div className="mt-10">
          <ConversationGrenade quote={module.conversationGrenade} />
        </div>
      )}
    </section>
  )
}
