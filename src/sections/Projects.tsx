import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { TextReveal } from '../components/TextReveal'
import { projects, type Project, type ProjectCategory } from '../data/profile'
import { EASE } from '../lib/motion'

const categories: ProjectCategory[] = ['Tous', 'Full-stack', 'Front-end']

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: EASE }}
      className={`project-card group relative ${index % 2 === 1 ? 'lg:mt-14' : ''}`}
    >
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        data-cursor="hover"
        aria-label={`Voir le projet ${project.title}`}
        className="block"
      >
        <div className="relative overflow-hidden rounded-[1.6rem] border border-ink/10 bg-mist/70 p-2 transition-all duration-500 group-hover:border-ink/25 group-hover:shadow-card md:p-2.5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.15rem] bg-ink">
            <img
              src={project.image}
              alt={`Aperçu du projet ${project.title}`}
              loading="lazy"
              className="project-img h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent opacity-80" />

            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-paper/95 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-ink/70 backdrop-blur">
                Projet réel
              </span>
              <span className="rounded-full border border-paper/20 bg-ink/50 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-paper backdrop-blur">
                {project.year}
              </span>
            </div>

            <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3">
              <span className="rounded-full border border-paper/25 bg-ink/40 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-paper backdrop-blur">
                {project.category}
              </span>
              <span className="project-arrow grid size-10 place-items-center rounded-full bg-paper text-ink md:size-11">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-5 px-2.5 pb-2 pt-5">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink/55">
                {project.description}
              </p>
            </div>
            <span className="pt-1 font-mono text-[9px] text-ink/30">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 px-2.5 pb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/10 bg-paper/60 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-ink/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('Tous')
  const filtered = filter === 'Tous' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projets" className="relative px-3 py-3 md:px-5 md:py-4">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-mist/45 px-5 py-16 md:rounded-[2.25rem] md:px-12 md:py-24 lg:px-16">
        <SectionLabel index="02" label="Projets choisis" />

        <div className="mt-10 flex flex-col gap-8 md:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <TextReveal
              as="h2"
              text="Des projets qui parlent d'eux-mêmes."
              className="max-w-3xl font-display text-[clamp(2.35rem,5.2vw,4.7rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
            />
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/55 md:text-base">
                Une sélection de plateformes et d'applications conçues du front-end au back-end,
                avec une attention particulière à l'expérience utilisateur.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="shrink-0">
            <div className="flex flex-wrap items-center gap-3">
              <div className="no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-full border border-ink/10 bg-paper/80 p-1">
                {categories.map((category) => {
                  const active = filter === category
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setFilter(category)}
                      aria-pressed={active}
                      className="relative shrink-0 rounded-full px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors"
                    >
                      {active && (
                        <motion.span
                          layoutId="project-filter"
                          className="absolute inset-0 rounded-full bg-ink"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className={`relative ${active ? 'text-paper' : 'text-ink/55'}`}>
                        {category}
                      </span>
                    </button>
                  )
                })}
              </div>
              <a
                href="https://github.com/DieuMerci0101"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.1em] text-ink/60 transition hover:border-ink hover:bg-ink hover:text-paper"
              >
                GitHub
                <ArrowUpRight className="size-3.5 transition group-hover:rotate-45" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-line pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/35">
          <span>{filtered.length} projets sélectionnés</span>
          <span className="hidden sm:block">2024 — 2026</span>
        </div>

        <motion.div layout className="mt-6 grid items-start gap-5 md:grid-cols-2 md:gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
