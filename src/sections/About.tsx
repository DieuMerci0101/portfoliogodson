import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { TextReveal } from '../components/TextReveal'
import { profile } from '../data/profile'

const focus = ['Web full-stack', 'UI / UX', 'Design & contenus']

export function About() {
  return (
    <section id="apropos" className="relative px-3 py-3 md:px-5 md:py-4">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-soft px-5 py-16 md:rounded-[2.25rem] md:px-12 md:py-24 lg:px-16">
        <SectionLabel index="01" label="À propos" />

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <TextReveal
              as="h2"
              text="Faire simple. Bien fait. Beau."
              className="max-w-2xl font-display text-[clamp(2.35rem,5.4vw,4.9rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
            />

            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-ink/60 md:text-lg">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/45">
                Du design à la mise en ligne, je m'occupe de tout — avec le souci du détail et de
                l'expérience utilisateur.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-7 flex flex-wrap gap-2">
                {focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/12 bg-paper px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#contact"
                data-cursor="hover"
                className="group mt-9 inline-flex items-center gap-2.5 text-sm font-semibold text-ink"
              >
                Parlons de votre projet
                <span className="grid size-9 place-items-center rounded-full border border-ink/15 transition group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ink p-7 text-paper md:p-9">
                <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-olive/20 blur-3xl" />

                <div className="relative flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-paper/45">
                  <Sparkles className="size-3.5 text-accent" />
                  Ma façon de travailler
                </div>

                <p className="relative mt-10 font-hand text-3xl leading-snug text-paper md:text-4xl">
                  « Le détail fait la différence. »
                </p>

                <div className="relative mt-10 flex items-end justify-between gap-4 border-t border-paper/10 pt-5">
                  <div>
                    <p className="font-display text-lg font-semibold">Godson Patam</p>
                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/40">
                      Développeur full-stack · Lomé
                    </p>
                  </div>
                  <span className="font-display text-4xl font-bold text-outline-paper">GP</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
