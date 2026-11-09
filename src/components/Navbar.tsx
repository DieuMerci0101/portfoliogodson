import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navLinks, profile, socials } from '../data/profile'
import { EASE } from '../lib/motion'
import { Magnetic } from './Magnetic'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const previousOverflow = useRef('')

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      previousOverflow.current = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow.current
    }

    return () => {
      document.body.style.overflow = previousOverflow.current
    }
  }, [open])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 md:px-5 md:pt-5">
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between gap-4 rounded-full border px-3 py-2.5 transition-all duration-500 md:px-5 ${
            scrolled
              ? 'border-ink/10 bg-paper/85 shadow-soft backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a
            href="#top"
            data-cursor="hover"
            className="group flex items-center gap-2.5 md:gap-3"
            aria-label="Retour en haut"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-ink font-display text-lg font-bold text-paper transition-transform duration-500 group-hover:-rotate-6">
              G<span className="text-accent">.</span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-[13px] font-bold tracking-tight md:text-sm">
                GODSON PATAM
              </span>
              <span className="mt-1 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-ink/45 sm:block">
                Développeur full-stack
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="hover"
                className="group relative flex items-baseline gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 transition-colors hover:text-ink"
              >
                {link.label}
                <sup className="text-[8px] text-accent">{link.index}</sup>
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="hidden items-center gap-2 rounded-full border border-ink/10 bg-paper-soft/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/60 xl:flex">
              <span className="size-2 rounded-full bg-olive animate-pulse-dot" />
              Disponible
            </span>

            <Magnetic className="hidden sm:block" strength={0.18}>
              <a
                href="#contact"
                data-cursor="hover"
                className="btn-sheen inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-[13px] font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5 md:px-5"
              >
                Parlons-en
                <ArrowUpRight className="size-4" />
              </a>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full border border-ink/15 bg-paper-soft/80 text-ink transition hover:bg-ink hover:text-paper lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.65, ease: EASE }}
            className="fixed inset-0 z-[110] flex flex-col overflow-y-auto bg-ink text-paper lg:hidden"
          >
            <div className="pointer-events-none absolute -right-24 top-1/4 size-[420px] rounded-full bg-accent/20 blur-[100px]" />
            <div className="relative flex items-center justify-between px-5 py-4">
              <span className="flex items-center gap-2.5">
                <span className="grid size-10 place-items-center rounded-xl bg-paper font-display text-lg font-bold text-ink">
                  G<span className="text-accent">.</span>
                </span>
                <span className="font-display text-sm font-bold">GODSON PATAM</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="grid size-11 place-items-center rounded-full border border-paper/20 text-paper transition hover:bg-paper hover:text-ink"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="relative flex flex-1 flex-col justify-center gap-1 px-6 py-10" aria-label="Menu mobile">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.06, duration: 0.6, ease: EASE }}
                  className="group flex items-center justify-between border-b border-paper/10 py-3"
                >
                  <span className="flex items-start gap-3">
                    <span className="mt-2 font-mono text-[10px] text-accent">{link.index}</span>
                    <span className="font-display text-[clamp(2.3rem,10vw,4rem)] font-semibold leading-none tracking-[-0.04em] transition-colors group-hover:text-accent">
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight className="size-6 text-paper/30 transition group-hover:rotate-45 group-hover:text-accent" />
                </motion.a>
              ))}
            </nav>

            <div className="relative flex flex-col gap-5 border-t border-paper/10 px-6 py-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/65 hover:text-paper"
                >
                  {profile.email}
                </a>
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/55">
                  <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
                  {profile.availability}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-paper/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-paper/70 transition hover:border-accent hover:bg-accent hover:text-paper"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
