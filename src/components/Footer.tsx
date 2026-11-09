import { ArrowUp } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="relative px-3 pb-4 pt-1 md:px-5 md:pb-5">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-soft px-5 pb-6 pt-12 md:rounded-[2.25rem] md:px-12 md:pb-8 md:pt-16">
        <div className="flex flex-col gap-10 border-b border-line pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-ink font-display text-lg font-bold text-paper">
                G<span className="text-accent">.</span>
              </span>
              <span className="font-display text-base font-bold tracking-tight">GODSON PATAM</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-ink/55">
              Développeur full-stack basé à Lomé. Je conçois des applications web rapides,
              accessibles et pensées pour durer.
            </p>
            <SocialLinks className="mt-6" size="sm" />
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:gap-x-16">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">Navigation</p>
              <div className="mt-4 flex flex-col gap-2.5">
                {navLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="link-line w-fit text-sm text-ink/65 transition hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">Liens</p>
              <div className="mt-4 flex flex-col gap-2.5">
                {navLinks.slice(3).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="link-line w-fit text-sm text-ink/65 transition hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/CV_Esso-wazam_Godson_PATAM.pdf"
                  download
                  className="link-line w-fit text-sm text-ink/65 transition hover:text-ink"
                >
                  Télécharger le CV
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">Contact</p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-ink/65">
                <a href={`mailto:${profile.email}`} className="link-line w-fit hover:text-ink">
                  {profile.email}
                </a>
                <a href={`tel:${profile.phoneRaw}`} className="link-line w-fit hover:text-ink">
                  {profile.phone}
                </a>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 select-none overflow-hidden">
          <p className="font-display text-[clamp(3.2rem,15vw,12.5rem)] font-bold leading-[0.8] tracking-[-0.06em] text-outline">
            GODSON
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-5 text-[11px] text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Godson PATAM. Tous droits réservés.</p>
          <p className="flex items-center gap-1.5">
            Codé avec <span className="text-accent">♥</span> et beaucoup de café.
          </p>
          <a
            href="#top"
            data-cursor="hover"
            className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/50 transition hover:text-ink"
          >
            Retour en haut
            <span className="grid size-7 place-items-center rounded-full border border-ink/15 transition group-hover:bg-ink group-hover:text-paper">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
