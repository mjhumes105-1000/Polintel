import { studyModules } from '@/data/leverage-study/modules'
import { StudyModule } from '@/components/leverage-study/StudyModule'
import { StudyTableOfContents } from '@/components/leverage-study/StudyTableOfContents'

export default function QuarterlyStudyPage() {
  return (
    <>
      {/* Hero — full-bleed dark panel */}
      <div className="relative overflow-hidden bg-[#06060f] px-6 pb-20 pt-16">
        {/* Amber + blue radial glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 12% 65%, rgba(232,146,12,0.20) 0%, transparent 52%), ' +
              'radial-gradient(ellipse at 85% 15%, rgba(91,144,224,0.12) 0%, transparent 48%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p
            className="label-caps mb-8"
            style={{ color: '#e8920c', letterSpacing: '0.22em' }}
          >
            Quarterly Study · POLINTEL
          </p>

          {/* Main display title */}
          <h1
            className="font-display font-black leading-[1.0] mb-8 max-w-[860px]"
            style={{
              fontSize: 'clamp(2.8rem, 7.5vw, 6rem)',
              background: 'linear-gradient(128deg, #eef2ff 0%, #eef2ff 42%, #e8920c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Politically Expensive<br />to Ignore
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl leading-relaxed max-w-[520px] mb-14"
            style={{ color: '#6272a0' }}
          >
            A study of Black political power and what it would take to make it real.
          </p>

          {/* Stats + CTA row */}
          <div className="flex flex-wrap items-center gap-8">
            <div>
              <p className="font-display text-5xl font-black" style={{ color: '#e8920c' }}>21</p>
              <p className="label-caps mt-1" style={{ color: '#6272a0' }}>modules</p>
            </div>
            <div className="h-14 w-px" style={{ background: '#1e2040' }} />
            <div>
              <p className="font-display text-5xl font-black" style={{ color: '#eef2ff' }}>~25</p>
              <p className="label-caps mt-1" style={{ color: '#6272a0' }}>minute read</p>
            </div>
            <div className="h-14 w-px" style={{ background: '#1e2040' }} />
            <a
              href="#opening"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: '#e8920c', color: '#06060f' }}
            >
              Begin Reading
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* ToC + module content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex gap-14 items-start">
          <StudyTableOfContents modules={studyModules} />

          <main className="flex-1 min-w-0">
            {studyModules.map((module) => (
              <StudyModule key={module.id} module={module} />
            ))}

            {/* Closing card */}
            <div
              className="mt-24 py-24 px-8 sm:px-16 text-center space-y-6 rounded"
              style={{ background: '#06060f' }}
            >
              <p className="font-display italic text-2xl" style={{ color: '#6272a0' }}>
                You will not be told who to vote for.
              </p>
              <p className="font-display italic text-2xl" style={{ color: '#6272a0' }}>
                You will not be told who you are.
              </p>
              <p
                className="font-display font-black text-3xl"
                style={{
                  background: 'linear-gradient(128deg, #eef2ff 0%, #e8920c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                You will be politically expensive to ignore.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
