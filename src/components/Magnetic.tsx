import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'
import { useRef } from 'react'

type MagneticProps = {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className = '', strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const xValue = useMotionValue(0)
  const yValue = useMotionValue(0)
  const x = useSpring(xValue, { stiffness: 180, damping: 18, mass: 0.25 })
  const y = useSpring(yValue, { stiffness: 180, damping: 18, mass: 0.25 })

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    xValue.set((event.clientX - rect.left - rect.width / 2) * strength)
    yValue.set((event.clientY - rect.top - rect.height / 2) * strength)
  }

  function handleLeave() {
    xValue.set(0)
    yValue.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  )
}
