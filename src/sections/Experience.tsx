import { ArrowUpRight, Award, Download, GraduationCap, MapPin } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { TextReveal } from '../components/TextReveal'
import { certifications, experience, profile } from '../data/profile'

export function Experience() {
  return (
    <section id="parcours" className="relative px-3 py-3 md:px-5 md:py-4">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-mist/45 px-5 py-16 md:rounded-[2.25rem] md:px-12 md:py-24 lg:px-16">
        <SectionLabel index="05" label="Parcours" />

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <TextReveal
                as="h2"
                text="Un parcours guidé par la curiosité."
                className="max-w-md font-display text-[clamp(2.35rem,4.8vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.045em]"
              />

              <Reveal delay={0.15}>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/55">
                  De la formation en génie logiciel aux projets en entreprise, chaque étape m'a
                  appris à construire des produits utiles, propres et durables.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href="/CV_Esso-wazam_Godson_PATAM.pdf"
                  download
                  data-cursor="hover"
                  className="btn-sheen mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
                >
                  Télécharger mon CV
                  <Download className="size-4" />
                </a>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-8 rounded-2xl border border-ink/10 bg-paper p-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40">
                    <GraduationCap className="size-3.5 text-accent" />
                    Diplôme
                  </div>
                  <p className="mt-3 font-display text-lg font-semibold leading-snug">
                    Licence en Génie Logiciel
                  </p>
                  <p className="mt-1 text-xs text-ink/50">IPT Defitech · 2023 — 2026</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-line pt-3">
                    <span className="size-2 rounded-full bg-olive animate-pulse-dot" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink/40">
                      {profile.availability}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative border-l border-ink/15 pl-6 md:pl-8">
              {experience.map((entry, index) => {
                const isEducation = entry.role.startsWith('Licence')
                return (
                  <Reveal key={`${entry.company}-${entry.period}`} delay={index * 0.08}>
                    <div className="relative pb-11 last:pb-0">
                      <span className="absolute -left-[31px] top-1.5 grid size-[18px] place-items-center rounded-full bg-paper md:-left-[39px]">
                        <span className="size-2.5 rounded-full bg-accent" />
                      </span>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-accent">
                          {entry.period}
                        </span>
                        <span className="rounded-full border border-ink/10 bg-paper/70 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-ink/40">
                          {isEducation ? 'Formation' : 'Expérience'}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-xl font-semibold tracking-[-0.025em] md:text-2xl">
                            {entry.role}
                          </h3>
                          <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink/55">
                            <span className="font-semibold text-ink/75">{entry.company}</span>
                            <span className="text-ink/20">·</span>
                            <span className="inline-flex items-center gap-1 text-xs text-ink/40">
                              <MapPin className="size-3" />
                              {entry.location}
                            </span>
                          </p>
                        </div>
                        <span className="grid size-9 place-items-center rounded-full border border-ink/10 bg-paper text-ink/30 md:size-10">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>

                      <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink/55 md:text-sm">
                        {entry.summary}
                      </p>

                      <ul className="mt-3 space-y-1.5">
                        {entry.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-[13px] leading-relaxed text-ink/50"
                          >
                            <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent/70" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-ink/10 bg-paper px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-ink/45"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              Certifications & distinctions
            </h3>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">
              03 éléments
            </span>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {certifications.map((certification, index) => (
              <Reveal key={certification.title} delay={index * 0.07}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-paper p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent">
                      <Award className="size-4" />
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-ink/35">
                      {certification.date}
                    </span>
                  </div>
                  <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.14em] text-accent">
                    {certification.type}
                  </p>
                  <p className="mt-2 font-display text-base font-semibold leading-snug">
                    {certification.title}
                  </p>
                  <p className="mt-2 text-xs text-ink/45">{certification.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-24 -left-16 hidden md:block">
          <GraduationCap className="size-52 text-ink/[0.035]" strokeWidth={0.7} />
        </div>
      </div>
    </section>
  )
}
