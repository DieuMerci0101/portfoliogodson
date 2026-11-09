import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { EASE } from '../lib/motion'

type LoaderProps = {
  onDone: () => void
}

export function Loader({ onDone }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const reduce = useReducedMotion()
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    const body = document.body
    const previousOverflow = body.style.overflow
    body.style.overflow = 'hidden'

    if (reduce) {
      setProgress(100)
      const timeout = window.setTimeout(() => {
        body.style.overflow = previousOverflow
        onDoneRef.current()
      }, 220)

      return () => {
        window.clearTimeout(timeout)
        body.style.overflow = previousOverflow
      }
    }

    let current = 0
    let finished = false
    const interval = window.setInterval(() => {
      current = Math.min(100, current + Math.random() * 9 + 4)
      setProgress(Math.floor(current))

      if (current >= 100 && !finished) {
        finished = true
        window.clearInterval(interval)
        window.setTimeout(() => {
          body.style.overflow = previousOverflow
          onDoneRef.current()
        }, 420)
      }
    }, 85)

    return () => {
      window.clearInterval(interval)
      body.style.overflow = previousOverflow
    }
  }, [reduce])

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex flex-col overflow-hidden bg-ink text-paper"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.85, ease: EASE }}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative flex items-center justify-between px-5 py-5 md:px-8">
        <span className="flex items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-xl bg-paper font-display text-lg font-bold text-ink">
            G<span className="text-accent">.</span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
            Portfolio 2026
          </span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
          Lomé · Togo
        </span>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-5 text-center">
        <p className="mb-3 font-hand text-3xl text-accent md:text-4xl">Bonjour, je suis</p>
        <p className="font-display text-[clamp(3.4rem,13vw,10rem)] font-bold leading-[0.82] tracking-[-0.06em]">
          <span className="text-outline-paper">GODSON</span>
          <br />
          PATAM<span className="text-accent">.</span>
        </p>
        <p className="mt-8 max-w-xs font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-paper/40">
          Développeur full-stack · Chargement de l'expérience
        </p>
      </div>

      <div className="relative px-5 pb-6 md:px-8 md:pb-8">
        <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">
          <span>Prêt à construire</span>
          <span className="font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
            {progress}
            <span className="text-accent">%</span>
          </span>
        </div>
        <div className="mt-3 h-px w-full overflow-hidden bg-paper/15">
          <motion.div
            className="h-full bg-accent"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.25, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
