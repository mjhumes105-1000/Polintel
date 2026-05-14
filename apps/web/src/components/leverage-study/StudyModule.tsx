import type { StudyModule } from '@/data/leverage-study/modules'
import { ConversationGrenade } from './ConversationGrenade'

interface StudyModuleProps {
  module: StudyModule
}

export function StudyModule({ module }: StudyModuleProps) {
  return (
    <section id={module.id} className="py-32 border-b border-border last:border-0">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="label-caps text-ink-4">{module.moduleNumber}</span>
        {module.eyebrow && (
          <>
            <span className="text-border text-xs">·</span>
            <span className="label-caps text-ink-4">{module.eyebrow}</span>
          </>
        )}
      </div>

      <h2 className="font-serif text-3xl font-normal text-ink leading-snug mb-8 max-w-[600px]">
        {module.title}
      </h2>

      <div className="space-y-5">
        {module.body.map((paragraph, i) => (
          <p
            key={i}
            className="text-ink-2 text-base leading-[1.75] max-w-[68ch]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <ConversationGrenade quote={module.conversationGrenade} />
      </div>
    </section>
  )
}
