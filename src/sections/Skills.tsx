import {
  Database,
  Languages,
  LayoutTemplate,
  Palette,
  Server,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { TextReveal } from '../components/TextReveal'
import { profile, skillGroups } from '../data/profile'

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  terminal: TerminalSquare,
  palette: Palette,
  sparkles: Sparkles,
}

const accentMap: Record<string, { badge: string; dot: string; hover: string }> = {
  terracotta: {
    badge: 'bg-accent/10 text-accent',
    dot: 'bg-accent',
    hover: 'group-hover:border-accent/35',
  },
  olive: {
    badge: 'bg-olive/10 text-olive',
    dot: 'bg-olive',
    hover: 'group-hover:border-olive/35',
  },
  ochre: {
    badge: 'bg-ochre/15 text-ochre',
    dot: 'bg-ochre',
    hover: 'group-hover:border-ochre/40',
  },
  ink: {
    badge: 'bg-ink/8 text-ink',
    dot: 'bg-ink',
    hover: 'group-hover:border-ink/30',
  },
}

export function Skills() {
  return (
    <section id="competences" className="relative px-3 py-3 md:px-5 md:py-4">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-soft px-5 py-16 md:rounded-[2.25rem] md:px-12 md:py-24 lg:px-16">
        <SectionLabel index="04" label="Compétences" />

        <div className="mt-10 flex flex-col gap-8 md:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <TextReveal
            as="h2"
            text="Une stack complète, du front au déploiement."
            className="max-w-3xl font-display text-[clamp(2.35rem,5.2vw,4.7rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
          />

          <div className="shrink-0">
            <p className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
              <Languages className="size-3.5 text-accent" />
              Langues
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((language) => (
                <span
                  key={language.name}
                  className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3.5 py-2 text-xs text-ink/65"
                >
                  <span className="font-semibold text-ink">{language.name}</span>
                  <span className="h-3 w-px bg-ink/10" />
                  {language.level}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon]
            const accent = accentMap[group.accent]
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <div
                  className={`group h-full rounded-2xl border border-ink/10 bg-paper p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft md:p-6 ${accent.hover}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`grid size-10 place-items-center rounded-xl ${accent.badge}`}>
                      <Icon className="size-[18px]" strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.12em] text-ink/25">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em]">
                    {group.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper-soft px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-ink/55 transition-colors group-hover:border-ink/15"
                      >
                        <span className={`size-1 rounded-full ${accent.dot} opacity-60`} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-dashed border-ink/15 bg-mist/30 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <p className="flex items-center gap-3 text-sm text-ink/55">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                <Sparkles className="size-4" />
              </span>
              En apprentissage continu : veille tech, design et nouveaux outils.
            </p>
            <a
              href="https://github.com/DieuMerci0101"
              target="_blank"
              rel="noreferrer"
              className="link-line w-fit font-mono text-[9px] uppercase tracking-[0.16em] text-ink/50 transition hover:text-ink"
            >
              Voir mon GitHub →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
