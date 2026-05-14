interface ConversationGrenadeProps {
  quote: string
  attribution?: string
}

export function ConversationGrenade({ quote, attribution }: ConversationGrenadeProps) {
  // Pull-quote rendering will be implemented in a subsequent prompt.
  return (
    <blockquote className="my-8 pl-4 border-l-2 border-accent">
      <p className="text-ink-2 text-base italic leading-relaxed">{quote}</p>
      {attribution && (
        <footer className="mt-2 label-caps text-ink-4">{attribution}</footer>
      )}
    </blockquote>
  )
}
