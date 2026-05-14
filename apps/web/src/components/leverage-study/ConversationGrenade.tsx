interface ConversationGrenadeProps {
  quote: string
}

export function ConversationGrenade({ quote }: ConversationGrenadeProps) {
  return (
    <aside className="my-10 pl-6 border-l-[3px] border-flag bg-flag-bg/40 dark:bg-flag-bg/70 py-5 pr-6 rounded-r-sm">
      <p className="label-caps text-flag mb-3">Conversation Grenade</p>
      <p className="font-display italic text-xl leading-relaxed text-ink max-w-[56ch]">{quote}</p>
    </aside>
  )
}
