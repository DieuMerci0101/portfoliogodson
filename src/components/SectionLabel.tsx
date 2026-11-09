type SectionLabelProps = {
  index: string
  label: string
  dark?: boolean
  className?: string
}

export function SectionLabel({ index, label, dark = false, className = '' }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] md:text-[11px] ${
        dark ? 'text-paper/55' : 'text-ink/55'
      } ${className}`}
    >
      <span className="text-accent">/</span>
      <span>{label}</span>
      <span className={`h-px w-10 md:w-16 ${dark ? 'bg-paper/20' : 'bg-ink/20'}`} />
      <span className={dark ? 'text-paper/30' : 'text-ink/30'}>{index}</span>
    </div>
  )
}
