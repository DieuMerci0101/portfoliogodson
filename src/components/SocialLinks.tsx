import { socials } from '../data/profile'
import { BrandIcon } from './BrandIcons'

type SocialLinksProps = {
  dark?: boolean
  className?: string
  size?: 'sm' | 'md'
}

export function SocialLinks({ dark = false, className = '', size = 'md' }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          title={social.name}
          data-cursor="hover"
          className={`grid place-items-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
            size === 'sm' ? 'size-9' : 'size-10 md:size-11'
          } ${
            dark
              ? 'border-paper/20 text-paper hover:border-accent hover:bg-accent'
              : 'border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-paper'
          }`}
        >
          <BrandIcon name={social.name} className={size === 'sm' ? 'size-3.5' : 'size-4'} />
        </a>
      ))}
    </div>
  )
}
