import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { EASE } from '../lib/motion'
import { Magnetic } from '../components/Magnetic'
import { RotatingBadge } from '../components/RotatingBadge'
import { SocialLinks } from '../components/SocialLinks'

type HeroProps = {
  ready: boolean
}

function AnimatedLine({
  word,
  className,
  ready,
  delay = 0,
}: {
  word: string
  className?: string
  ready: boolean
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <span className={`block ${className ?? ''}`} aria-hidden="true">
      {word.split('').map((character, index) => (
        <span key={`${character}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: '115%' }}
            animate={reduce || ready ? { y: 0 } : { y: '115%' }}
            transition={{
              duration: 0.95,
              delay: delay + index * 0.045,
              ease: EASE,
            }}
          >
            {character}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function Hero({ ready }: HeroProps) {
  return (
    <section id="top" className="relative px-3 pt-3 md:px-5 md:pt-5">
      <div className="grain relative mx-auto flex min-h-[calc(100svh-24px)] max-w-[1500px] flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-soft md:min-h-[calc(100svh-40px)] md:rounded-[2.25rem]">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-45 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]" />

        <span className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.42em] text-ink/20 [writing-mode:vertical-rl] xl:block">
          Portfolio · 2026
        </span>
        <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.42em] text-ink/20 [writing-mode:vertical-rl] xl:block">
          Disponible à plein temps
        </span>

        <div className="relative z-10 flex flex-col items-center px-5 pt-24 text-center md:pt-28 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper-soft/70 px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55 backdrop-blur"
          >
            <span className="size-2 rounded-full bg-olive animate-pulse-dot" />
            {profile.availability}
            <span className="text-ink/25">·</span>
            <span className="text-ink/40">{profile.location}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 font-hand text-2xl text-accent md:text-3xl"
          >
            Bonjour, je suis
          </motion.p>

          <h1
            aria-label="Godson PATAM"
            className="mt-1 select-none font-display text-[clamp(3.9rem,15.3vw,13.6rem)] font-bold leading-[0.8] tracking-[-0.06em] md:mt-2"
          >
            <AnimatedLine word="GODSON" className="text-outline" ready={ready} delay={0.2} />
            <AnimatedLine word="PATAM." className="relative z-0 text-ink" ready={ready} delay={0.42} />
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          className="relative z-20 mx-auto -mt-8 w-[min(82vw,330px)] md:-mt-10 md:w-[min(54vw,380px)] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[67%] lg:w-[min(30vw,420px)] lg:-translate-x-1/2"
        >
          <div className="arch relative aspect-[4/5] w-full overflow-hidden border-[6px] border-paper bg-mist shadow-[0_45px_90px_-35px_rgba(22,21,19,0.6)] md:border-[7px] lg:aspect-auto lg:h-full">
            <img
              src="/photo-godson.jpg"
              alt="Portrait de Godson PATAM, développeur full-stack"
              className="h-full w-full object-cover object-[50%_12%]"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-paper/30 bg-ink/40 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-paper backdrop-blur-md">
              Godson · Lomé
            </span>
          </div>

          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-[22%] z-30 hidden rotate-[-6deg] items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-paper shadow-soft sm:flex lg:-left-10"
          >
            <Code2 className="size-3.5 text-accent" />
            <span className="font-mono text-[9px] uppercase tracking-[0.16em]">Full-Stack</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute -right-3 bottom-[24%] z-30 rotate-3 rounded-2xl border border-ink/10 bg-paper-soft/95 px-4 py-3 text-left shadow-card backdrop-blur lg:-right-12"
          >
            <p className="font-display text-2xl font-bold leading-none">2+</p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-ink/50">
              ans d'expérience
            </p>
          </motion.div>

          <RotatingBadge className="absolute -right-10 top-[4%] hidden size-24 text-ink/45 xl:grid" />

          <span className="absolute -left-8 top-[8%] hidden animate-float text-4xl text-accent lg:block">
            ✳
          </span>
        </motion.div>

        <div className="absolute bottom-20 left-8 z-30 hidden max-w-[250px] lg:block">
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent">
            {profile.role}
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-ink/60">
            Je transforme des idées en applications web rapides, fiables et soignées.
          </p>
          <Magnetic className="mt-5 w-fit" strength={0.18}>
            <a
              href="#projets"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              Découvrir mes projets
              <span className="grid size-8 place-items-center rounded-full border border-ink/15 transition group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
                <ArrowDownRight className="size-3.5" />
              </span>
            </a>
          </Magnetic>
        </div>

        <div className="absolute bottom-20 right-8 z-30 hidden flex-col items-end gap-5 lg:flex">
          <SocialLinks size="sm" />
          <div className="text-right">
            <p className="flex items-center justify-end gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/55">
              <MapPin className="size-3 text-accent" />
              {profile.location}
            </p>
            <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/35">
              GMT · Ouvert aux opportunités
            </p>
          </div>
        </div>

        <a
          href="#apropos"
          className="absolute bottom-7 left-8 z-30 hidden items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-ink/35 transition hover:text-ink lg:flex"
        >
          <span className="grid size-7 place-items-center rounded-full border border-ink/15">
            <ArrowDown className="size-3" />
          </span>
          Scroll pour explorer
        </a>

        <div className="relative z-30 px-5 pb-8 pt-8 text-center lg:hidden">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent">
            {profile.role}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
            {profile.tagline}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="#projets"
              className="btn-sheen inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-semibold text-paper"
            >
              Voir mes projets
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[13px] font-semibold text-ink"
            >
              Me contacter
            </a>
          </div>
          <SocialLinks className="mt-6 justify-center" size="sm" />
          <p className="mt-5 flex items-center justify-center gap-4 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/40">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-olive animate-pulse-dot" />
              {profile.availability}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3 text-accent" />
              {profile.location}
            </span>
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-2xl lg:block" />
      </div>
    </section>
  )
}
