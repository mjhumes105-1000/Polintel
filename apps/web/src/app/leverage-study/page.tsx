import { essay, tocSections } from '@/data/leverage-study/essay'
import { EssaySectionBlock } from '@/components/leverage-study/EssaySection'
import { StudyTableOfContents } from '@/components/leverage-study/StudyTableOfContents'

export default function QuarterlyStudyPage() {
  let sectionCounter = 0

  return (
    <>
      {/* Hero — full-bleed dark panel */}
      <div className="relative overflow-hidden bg-[#06060f] px-6 pb-20 pt-16">
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
          <p className="label-caps mb-8" style={{ color: '#e8920c', letterSpacing: '0.22em' }}>
            Quarterly Study · POLINTEL
          </p>

          <h1
            className="font-display font-black leading-[1.0] mb-8 max-w-[820px]"
            style={{
              fontSize: 'clamp(2.8rem, 7.5vw, 6rem)',
              background: 'linear-gradient(128deg, #eef2ff 0%, #eef2ff 42%, #e8920c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {essay.title}
          </h1>

          <p
            className="text-xl leading-relaxed max-w-[560px] mb-14 font-display italic"
            style={{ color: '#8895b8' }}
          >
            {essay.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-8">
            <div>
              <p className="font-display text-5xl font-black" style={{ color: '#e8920c' }}>
                {tocSections.length}
              </p>
              <p className="label-caps mt-1" style={{ color: '#6272a0' }}>sections</p>
            </div>
            <div className="h-14 w-px" style={{ background: '#1e2040' }} />
            <div>
              <p className="font-display text-5xl font-black" style={{ color: '#eef2ff' }}>~15</p>
              <p className="label-caps mt-1" style={{ color: '#6272a0' }}>minute read</p>
            </div>
            <div className="h-14 w-px" style={{ background: '#1e2040' }} />
            <a
              href={`#${tocSections[0]?.id}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: '#e8920c', color: '#06060f' }}
            >
              Begin Reading
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* ToC + essay content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex gap-14 items-start">
          <StudyTableOfContents sections={tocSections} />

          <main className="flex-1 min-w-0">
            {essay.sections.map((section) => {
              const num = section.title ? ++sectionCounter : undefined
              return (
                <EssaySectionBlock
                  key={section.id}
                  section={section}
                  sectionNumber={num}
                />
              )
            })}

            {/* Closing card */}
            <div
              className="mt-20 py-20 px-8 sm:px-16 text-center space-y-5 rounded"
              style={{ background: '#06060f' }}
            >
              <p
                className="font-display italic text-2xl"
                style={{ color: '#6272a0' }}
              >
                The books are overdue.
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
                The first audit starts here.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
