import type { CSSProperties, ReactNode } from 'react'

type MarqueeProps = {
  items: string[]
  speed?: number
  reverse?: boolean
  className?: string
  separator?: ReactNode
}

export function Marquee({
  items,
  speed = 38,
  reverse = false,
  className = '',
  separator = <span className="mx-5 text-accent md:mx-7">✳</span>,
}: MarqueeProps) {
  return (
    <div
      className={`marquee-paused relative overflow-hidden ${reverse ? 'marquee-reverse' : ''} ${className}`}
    >
      <div
        className="marquee-track"
        style={{ '--marquee-duration': `${speed}s` } as CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center whitespace-nowrap">
                <span>{item}</span>
                {separator}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
