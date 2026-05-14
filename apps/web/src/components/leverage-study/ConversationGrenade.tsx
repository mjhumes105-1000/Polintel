interface ConversationGrenadeProps {
  quote: string
}

export function ConversationGrenade({ quote }: ConversationGrenadeProps) {
  return (
    <aside className="my-10 pl-5 border-l-2 border-flag bg-flag-bg/40 py-4 pr-4 rounded-r">
      <p className="label-caps text-flag mb-3">Conversation Grenade</p>
      <p className="font-serif italic text-lg leading-relaxed text-ink-2">{quote}</p>
    </aside>
  )
}
