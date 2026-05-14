'use client'

import { useState } from 'react'

type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

export interface EntrySubmission {
  question: string
  selectedOption: OptionKey
  answerText: string
  otherText: string
  submittedAt: string
}

const QUESTION = 'What would give Black communities more influence over domestic policy over the next decade?'

const OPTIONS: { key: OptionKey; text: string }[] = [
  { key: 'A', text: 'Political independence that forces every party to compete for Black support' },
  { key: 'B', text: 'Economic ownership that turns community wealth into policy leverage' },
  { key: 'C', text: 'Clear policy demands around safety, education, housing, business, and healthcare' },
  { key: 'D', text: 'Public accountability tools that measure what elected officials actually deliver' },
  { key: 'E', text: 'Independent Black-led interest groups that turn community priorities into policy demands, scorecards, funding pressure, and negotiation power' },
  { key: 'F', text: 'Other' },
]

// TODO: Replace with real persistence:
// await fetch('/api/entry-submissions', { method: 'POST', body: JSON.stringify(submission) })
// or: await supabase.from('entry_submissions').insert(submission)
function persistEntrySubmission(submission: EntrySubmission) {
  console.log('[leverage-study] entry submission:', submission)
}

interface EntrySurveyProps {
  onComplete: (submission: EntrySubmission) => void
}

export function EntrySurvey({ onComplete }: EntrySurveyProps) {
  const [selected, setSelected] = useState<OptionKey | null>(null)
  const [otherText, setOtherText] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSelect(key: OptionKey) {
    setSelected(key)
    setError(null)
  }

  function handleSubmit() {
    if (!selected) {
      setError('Please select one option before continuing.')
      return
    }
    if (selected === 'F' && !otherText.trim()) {
      setError('Please describe your answer before continuing.')
      return
    }
    const option = OPTIONS.find(o => o.key === selected)!
    const submission: EntrySubmission = {
      question: QUESTION,
      selectedOption: selected,
      answerText: selected === 'F' ? 'Other' : option.text,
      otherText: selected === 'F' ? otherText.trim() : '',
      submittedAt: new Date().toISOString(),
    }
    persistEntrySubmission(submission)
    onComplete(submission)
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, rgba(232,146,12,0.10) 0%, rgba(91,144,224,0.07) 45%, rgb(var(--color-bg)) 70%)',
      }}
    >
      <div className="w-full max-w-2xl mx-auto px-6 py-16">
        <fieldset>
          <legend className="block w-full mb-8">
            <p className="label-caps text-flag mb-4">Leverage Study · Entry</p>
            <h1 className="font-serif text-3xl text-ink leading-snug mb-4">{QUESTION}</h1>
            <p className="text-sm text-ink-3 leading-relaxed">
              Answer once before entering. Your response is recorded so the study can learn what its
              readers actually believe. There is no right answer.
            </p>
          </legend>

          <div className="space-y-3 mb-8" role="radiogroup" aria-label={QUESTION}>
            {OPTIONS.map((opt) => {
              const isSelected = selected === opt.key
              return (
                <div
                  key={opt.key}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onClick={() => handleSelect(opt.key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleSelect(opt.key)
                    }
                  }}
                  className={`flex items-start gap-4 px-4 py-4 rounded border cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'border-flag bg-flag-bg/40'
                      : 'border-border bg-surface hover:border-accent/40 hover:bg-surface-2'
                  }`}
                >
                  <span
                    className={`font-serif italic text-2xl leading-none mt-0.5 shrink-0 w-6 ${
                      isSelected ? 'text-flag' : 'text-ink-4'
                    }`}
                  >
                    {opt.key}
                  </span>
                  <p
                    className={`flex-1 text-sm leading-relaxed ${
                      isSelected ? 'text-ink' : 'text-ink-2'
                    }`}
                  >
                    {opt.key === 'F' ? 'Other' : opt.text}
                  </p>
                  <div
                    className={`w-3 h-3 rounded-full border shrink-0 mt-1 transition-colors ${
                      isSelected ? 'bg-flag border-flag' : 'border-ink-4'
                    }`}
                  />
                </div>
              )
            })}
          </div>

          {selected === 'F' && (
            <div className="mb-8 animate-fade-up">
              <textarea
                value={otherText}
                onChange={(e) => setOtherText(e.target.value.slice(0, 800))}
                placeholder="Describe your answer..."
                rows={4}
                maxLength={800}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent resize-none"
              />
              <p className="text-right label-caps text-ink-4 mt-1">{otherText.length} / 800</p>
            </div>
          )}

          {error && (
            <p role="alert" className="mb-6 font-mono text-xs text-flag">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-flag hover:bg-amber-500 text-zinc-900 font-mono text-[10px] tracking-widest rounded font-semibold transition-colors"
          >
            Submit &amp; enter the study
          </button>
        </fieldset>
      </div>
    </div>
  )
}
