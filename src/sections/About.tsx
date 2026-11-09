import { animate, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, Check, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { TextReveal } from '../components/TextReveal'
import { profile } from '../data/profile'
import { EASE } from '../lib/motion'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setDisplay(value)
      return
    }

    const controls = animate(0, value, {
      duration: 1.7,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })

    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="apropos" className="relative px-3 py-3 md:px-5 md:py-4">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-soft px-5 py-16 md:rounded-[2.25rem] md:px-12 md:py-24 lg:px-16">
        <SectionLabel index="01" label="À propos" />

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <TextReveal
              as="h2"
              text="Du code, du design et de l'impact."
              className="max-w-2xl font-display text-[clamp(2.35rem,5.4vw,4.9rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
            />

            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-ink/60 md:text-base">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Full-Stack', 'UI/UX', 'Design graphique', 'Contenus IA'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/12 bg-paper px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-end justify-between gap-5 border-t border-line pt-6">
                <div>
                  <p className="font-hand text-4xl text-ink md:text-5xl">Godson Patam</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/35">
                    Développeur full-stack · Lomé, Togo
                  </p>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-accent-soft/60 px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-dark">
                  <Sparkles className="size-3.5" />
                  Curieux par nature
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {profile.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.1 + index * 0.06}>
                  <div className="rounded-2xl border border-ink/10 bg-paper p-5 transition-colors duration-500 hover:border-accent/40 md:p-6">
                    <p className="font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.13em] text-ink/45">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="relative mt-3 overflow-hidden rounded-2xl bg-ink p-6 text-paper">
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent/25 blur-3xl" />
                <div className="relative flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/60">
                  <span className="size-2 rounded-full bg-olive animate-pulse-dot" />
                  {profile.availability}
                </div>
                <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-paper/65">
                  Ouvert aux opportunités full-stack, aux missions freelance et aux projets
                  ambitieux.
                </p>
                <div className="relative mt-5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/45">
                    <MapPin className="size-3 text-accent" />
                    {profile.location}
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-paper"
                  >
                    Discutons
                    <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-4 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {profile.atouts.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <p className="flex items-start gap-2.5 text-sm text-ink/65">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-olive/10 text-olive">
                  <Check className="size-3" strokeWidth={2.4} />
                </span>
                {item}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="pointer-events-none absolute -bottom-20 -right-16 hidden items-center gap-4 md:flex">
          <BadgeCheck className="size-40 text-ink/[0.035]" strokeWidth={0.7} />
        </div>
      </div>
    </section>
  )
}
