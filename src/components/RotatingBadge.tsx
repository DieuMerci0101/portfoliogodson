import { useId } from 'react'
import { ArrowDown } from 'lucide-react'

type RotatingBadgeProps = {
  text?: string
  className?: string
}

export function RotatingBadge({
  text = 'DÉVELOPPEUR FULL-STACK • LOMÉ, TOGO • DISPONIBLE • ',
  className = '',
}: RotatingBadgeProps) {
  const pathId = `circle-${useId().replace(/:/g, '')}`

  return (
    <div className={`relative grid place-items-center ${className}`}>
      <svg viewBox="0 0 160 160" className="animate-spin-slow size-full">
        <defs>
          <path
            id={pathId}
            d="M 80,80 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
          />
        </defs>
        <text className="fill-current font-mono text-[8.3px] uppercase tracking-[0.28em]">
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      <span className="absolute grid size-10 place-items-center rounded-full border border-current/20 bg-accent text-paper">
        <ArrowDown className="size-4" />
      </span>
    </div>
  )
}
