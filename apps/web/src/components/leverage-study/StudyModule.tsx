import type { LeverageModule } from '@/data/leverage-study/modules'

interface StudyModuleProps {
  module: LeverageModule
}

export function StudyModule({ module }: StudyModuleProps) {
  // Module rendering will be implemented in a subsequent prompt.
  return (
    <section id={`module-${module.id}`} className="py-12 border-b border-border last:border-0">
      <p className="label-caps text-ink-4 mb-2">Module {module.id}</p>
      <h2 className="text-xl font-semibold text-ink mb-4">{module.title}</h2>
    </section>
  )
}
