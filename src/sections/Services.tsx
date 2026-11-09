import { ArrowUpRight, Code2, Palette, Server, Wrench } from 'lucide-react'
import type { ComponentType } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { TextReveal } from '../components/TextReveal'
import { services } from '../data/profile'

const iconMap: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  code: Code2,
  server: Server,
  palette: Palette,
  wrench: Wrench,
}

export function Services() {
  return (
    <section id="services" className="relative px-3 py-3 md:px-5 md:py-4">
      <div className="grain relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] bg-ink px-5 py-16 text-paper md:rounded-[2.25rem] md:px-12 md:py-24 lg:px-16">
        <div className="pointer-events-none absolute -left-32 top-1/3 size-[520px] rounded-full bg-accent/15 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 size-[420px] rounded-full bg-olive/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.05]" />

        <SectionLabel index="03" label="Services" dark />

        <div className="relative mt-10 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <TextReveal
                as="h2"
                text="Ce que je peux construire pour vous."
                className="max-w-md font-display text-[clamp(2.35rem,4.8vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.045em]"
              />

              <Reveal delay={0.15}>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/50">
                  Une idée, un besoin, un produit à lancer ? Je vous accompagne de la conception
                  à la mise en ligne, avec une approche simple et rigoureuse.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href="#contact"
                  data-cursor="hover"
                  className="btn-sheen mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
                >
                  Discuter de votre projet
                  <ArrowUpRight className="size-4" />
                </a>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-10 flex items-center gap-4 border-t border-paper/10 pt-5">
                  <span className="font-display text-4xl font-semibold">4</span>
                  <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-paper/40">
                    domaines
                    <br />
                    d'expertise
                  </span>
                  <span className="ml-auto text-2xl text-accent">✳</span>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <Reveal key={service.number} delay={index * 0.07}>
                  <div className="service-row group -mx-3 rounded-2xl border-t border-paper/15 px-3 py-7 transition-colors duration-500 hover:bg-paper/[0.045] md:-mx-6 md:px-6 md:py-9">
                    <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 md:gap-7">
                      <div className="flex flex-col items-center gap-3 pt-1">
                        <span className="font-mono text-[10px] text-accent">{service.number}</span>
                        <span className="grid size-9 place-items-center rounded-full border border-paper/15 text-paper/45 transition-colors duration-500 group-hover:border-accent/50 group-hover:text-accent">
                          <Icon className="size-4" strokeWidth={1.7} />
                        </span>
                      </div>

                      <div>
                        <h3 className="font-display text-[clamp(1.4rem,2.6vw,2.15rem)] font-semibold tracking-[-0.03em] transition-colors duration-500 group-hover:text-accent">
                          {service.title}
                        </h3>
                        <p className="mt-2.5 max-w-xl text-[13px] leading-relaxed text-paper/50 md:text-sm">
                          {service.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-paper/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-paper/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <span className="service-arrow mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-paper/20 text-paper/60 md:size-12">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
            <div className="border-t border-paper/15" />
          </div>
        </div>
      </div>
    </section>
  )
}
