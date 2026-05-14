import { studyModules } from '@/data/leverage-study/modules'
import { StudyModule } from '@/components/leverage-study/StudyModule'
import { StudyTableOfContents } from '@/components/leverage-study/StudyTableOfContents'

export default function LeverageStudyPage() {
  const intro = studyModules[0]

  return (
    <div className="py-16">
      {/* Hero */}
      <header className="max-w-[760px] mb-20">
        <p className="label-caps text-flag mb-5">Leverage Study</p>
        <h1 className="font-serif text-5xl text-ink leading-tight mb-5">
          Politically Expensive to Ignore
        </h1>
        <p className="text-ink-3 text-lg leading-relaxed mb-6">
          A study of Black political power and what it would take to make it real
        </p>
        {intro && intro.body.length > 0 && (
          <p className="text-ink-2 text-base leading-[1.75] max-w-[640px] mb-8">
            {intro.body[0]}
          </p>
        )}
        <p className="label-caps text-ink-4">21 modules · ~25 minute read</p>
      </header>

      {/* Table of contents + modules */}
      <div className="flex gap-12 items-start">
        <StudyTableOfContents modules={studyModules} />

        <main className="flex-1 min-w-0">
          {studyModules.length === 0 ? (
            <p className="text-ink-3 text-sm font-mono py-16">Module content coming soon.</p>
          ) : (
            studyModules.map((module) => (
              <StudyModule key={module.id} module={module} />
            ))
          )}

          {/* Closing card */}
          <div className="mt-24 py-24 bg-[#07070f] rounded-sm px-8 sm:px-16 text-center space-y-5">
            <p className="font-serif italic text-2xl text-ink-2">
              You will not be told who to vote for.
            </p>
            <p className="font-serif italic text-2xl text-ink-2">
              You will not be told who you are.
            </p>
            <p className="text-2xl font-semibold text-ink">
              You will be politically expensive to ignore.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
