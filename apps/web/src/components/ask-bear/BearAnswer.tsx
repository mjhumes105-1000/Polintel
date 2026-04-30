'use client'

import type { AskBearResponse, EvidenceSource } from '@political-intel/types'

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')  // bold
    .replace(/\*(.+?)\*/g, '$1')       // italic
    .replace(/__(.+?)__/g, '$1')       // bold (underscore)
    .replace(/_(.+?)_/g, '$1')         // italic (underscore)
}

function SourceBadge({ id, sources }: { id: string; sources: EvidenceSource[] }) {
  const src = sources.find(s => s.id === id)
  if (!src) return <span className="font-mono text-[9px] text-ink-4 border border-border rounded px-1">{id}</span>

  const label = src.sourceType === 'campaign_finance' || src.sourceType === 'opensecrets'
    ? `FIN·${id}`
    : `SRC·${id}`

  return (
    <a
      href={src.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${src.title} — ${src.publisher}`}
      className="inline-block font-mono text-[9px] px-1.5 py-0.5 rounded border border-accent/30 text-accent/70 hover:text-accent hover:border-accent/60 transition-colors cursor-pointer ml-1 align-middle"
    >
      {label}
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] tracking-widest text-accent/60 mb-3 mt-6 first:mt-0">
      {children}
    </p>
  )
}

function Divider() {
  return <div className="border-t border-border/40 mt-6" />
}

interface BearAnswerProps {
  response: AskBearResponse
  onCopy: () => void
  onReport: () => void
  copied: boolean
}

export function BearAnswer({ response, onCopy, onReport, copied }: BearAnswerProps) {
  const hasFunding = (response.openSecretsShows?.length ?? 0) > 0
  const hasTension = (response.recordTensionFlags?.length ?? 0) > 0
  const isGeneralMode = response.mode === 'general' || response.recordShows.length === 0

  // Strip the required disclaimer from the answer for separate display
  const disclaimerEnd = response.answer.indexOf('not a statement of fact.')
  const cleanAnswer = stripMarkdown(
    disclaimerEnd !== -1
      ? response.answer.slice(disclaimerEnd + 'not a statement of fact.'.length)
      : response.answer
  ).trim()

  return (
    <div className="mt-4 bg-surface border border-border rounded overflow-hidden">
      {/* Disclaimer banner — only for evidence-based (politician) answers */}
      {!isGeneralMode && (
        <div className="border-b border-border bg-surface-2 px-4 py-2.5 flex items-start gap-2">
          <span className="text-amber-500 text-xs mt-px shrink-0">⚠</span>
          <p className="text-[11px] text-ink-3 leading-relaxed">
            AI-generated editorial interpretation of the public record. Represents one reading of the evidence, not a statement of fact.
          </p>
        </div>
      )}

      <div className="px-5 py-5">
        {/* Tension + Funding context flags */}
        {(hasTension || hasFunding) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {hasTension && (
              <span className="font-mono text-[9px] px-2 py-1 rounded border border-amber-700/60 text-amber-500 bg-amber-950/20">
                RECORD TENSION DETECTED
              </span>
            )}
            {hasFunding && (
              <span className="font-mono text-[9px] px-2 py-1 rounded border border-accent/30 text-accent/70 bg-accent/5">
                FUNDING CONTEXT INCLUDED
              </span>
            )}
          </div>
        )}

        {/* Limitation notice */}
        {response.limitationNotice && (
          <div className="mb-4 px-3 py-2.5 bg-surface-2 border border-border rounded text-xs text-ink-3 leading-relaxed">
            <span className="font-mono text-[9px] text-ink-4 mr-2">LIMITED EVIDENCE</span>
            {response.limitationNotice}
          </div>
        )}

        {/* Answer */}
        <SectionLabel>ANSWER</SectionLabel>
        <p className="text-sm text-ink leading-relaxed">{cleanAnswer}</p>

        {/* What the record shows */}
        {response.recordShows.length > 0 && (
          <>
            <Divider />
            <SectionLabel>WHAT THE RECORD SHOWS</SectionLabel>
            <ul className="space-y-3">
              {response.recordShows.map(item => (
                <li key={item.id} className="flex gap-2 text-sm">
                  <span className="text-accent/40 mt-0.5 shrink-0">·</span>
                  <div>
                    <span className="text-ink-2 leading-relaxed">{stripMarkdown(item.claimSupported)}</span>
                    {item.quote && (
                      <blockquote className="mt-1.5 pl-3 border-l-2 border-border text-xs text-ink-3 italic leading-relaxed">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    )}
                    <div className="mt-1 flex flex-wrap items-center gap-0.5">
                      {item.date && (
                        <span className="font-mono text-[9px] text-ink-4 mr-1">{item.date}</span>
                      )}
                      {item.sourceIds.map(id => (
                        <SourceBadge key={id} id={id} sources={response.sources} />
                      ))}
                      <span className={`ml-1 font-mono text-[8px] px-1 py-0.5 rounded ${
                        item.confidence === 'high'
                          ? 'text-teal-600 dark:text-teal-400'
                          : item.confidence === 'medium'
                          ? 'text-amber-600 dark:text-amber-500'
                          : 'text-ink-4'
                      }`}>
                        {item.confidence.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* What OpenSecrets / campaign finance shows */}
        {hasFunding && (
          <>
            <Divider />
            <SectionLabel>WHAT THE FUNDING RECORD SHOWS</SectionLabel>
            {response.campaignFinanceDisclaimer && (
              <p className="text-[11px] text-ink-4 mb-3 leading-relaxed italic">
                {response.campaignFinanceDisclaimer}
              </p>
            )}
            <ul className="space-y-3">
              {response.openSecretsShows!.map(item => (
                <li key={item.id} className="flex gap-2 text-sm">
                  <span className="text-accent/40 mt-0.5 shrink-0">·</span>
                  <div>
                    <span className="text-ink-2 leading-relaxed">{stripMarkdown(item.claimSupported)}</span>
                    <div className="mt-1 flex flex-wrap items-center gap-1">
                      {item.cycle && (
                        <span className="font-mono text-[9px] text-ink-4">CYCLE {item.cycle}</span>
                      )}
                      {item.industry && (
                        <span className="font-mono text-[9px] text-ink-4 border border-border rounded px-1">
                          {item.industry}
                        </span>
                      )}
                      {item.amount != null && (
                        <span className="font-mono text-[9px] text-ink-3">
                          ${item.amount.toLocaleString()}
                        </span>
                      )}
                      {item.sourceIds.map(id => (
                        <SourceBadge key={id} id={id} sources={response.sources} />
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Tension flags */}
            {hasTension && response.recordTensionFlags!.map((flag, i) => (
              <div key={i} className="mt-3 flex gap-2 px-3 py-2 bg-amber-950/20 border border-amber-800/40 rounded">
                <span className="text-amber-500 text-xs shrink-0">⚠</span>
                <p className="text-xs text-amber-400/80 leading-relaxed">{flag}</p>
              </div>
            ))}
          </>
        )}

        {/* What we observe / Also worth knowing */}
        {response.observations.length > 0 && (
          <>
            <Divider />
            <SectionLabel>{isGeneralMode ? 'ALSO WORTH KNOWING' : 'WHAT WE OBSERVE'}</SectionLabel>
            {!isGeneralMode && (
              <p className="text-[10px] font-mono text-ink-4 mb-2">INTERPRETATION — NOT ESTABLISHED FACT</p>
            )}
            <ul className="space-y-2">
              {response.observations.map((obs, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-ink-4 mt-0.5 shrink-0">·</span>
                  <span className="text-ink-3 leading-relaxed italic">{stripMarkdown(obs)}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* What is unresolved */}
        {response.unresolved.length > 0 && (
          <>
            <Divider />
            <SectionLabel>WHAT IS UNRESOLVED</SectionLabel>
            <ul className="space-y-2">
              {response.unresolved.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-ink-4 mt-0.5 shrink-0">—</span>
                  <span className="text-ink-3 leading-relaxed">{stripMarkdown(item)}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Sources */}
        {response.sources.length > 0 && (
          <>
            <Divider />
            <SectionLabel>{isGeneralMode ? 'WEB SOURCES' : 'SOURCES'}</SectionLabel>
            <ul className="space-y-2">
              {response.sources.map(src => (
                <li key={src.id} className="flex items-start gap-2 text-xs">
                  <span className="font-mono text-[9px] text-ink-4 pt-0.5 shrink-0">[{src.id}]</span>
                  <div className="min-w-0">
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/80 hover:text-accent transition-colors leading-snug break-words"
                    >
                      {src.title}
                    </a>
                    <span className="text-ink-4 mx-1">·</span>
                    <span className="text-ink-4">{src.publisher}</span>
                    {src.publishedAt && (
                      <span className="font-mono text-[9px] text-ink-4 ml-2">{src.publishedAt.slice(0, 10)}</span>
                    )}
                    {(src.sourceType === 'campaign_finance' || src.sourceType === 'opensecrets') && (
                      <span className="ml-2 font-mono text-[8px] px-1 py-0.5 rounded border border-accent/20 text-accent/50">
                        CAMPAIGN FINANCE
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Action bar */}
        <Divider />
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <button
            onClick={onCopy}
            className="font-mono text-[10px] px-3 py-1.5 rounded border border-border text-ink-3 hover:text-ink hover:border-accent/40 transition-colors"
          >
            {copied ? '✓ COPIED' : 'COPY CITED ANSWER'}
          </button>
          {!isGeneralMode && (
            <a
              href={response.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] px-3 py-1.5 rounded border border-border text-ink-3 hover:text-ink hover:border-accent/40 transition-colors"
            >
              VIEW SOURCE RECORDS ↗
            </a>
          )}
          <button
            onClick={onReport}
            className="font-mono text-[10px] text-ink-4 hover:text-ink-3 transition-colors ml-auto"
          >
            REPORT ISSUE
          </button>
        </div>

        <p className="mt-4 text-[10px] text-ink-4 font-mono leading-relaxed">
          Generated {new Date(response.createdAt).toLocaleString()} · Ask Teddy uses PoliIntel&apos;s cited record — it does not browse the web or access information beyond the evidence packet shown above.
        </p>
      </div>
    </div>
  )
}
