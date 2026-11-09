import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.28 })
  const ringY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.28 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    function onMove(event: MouseEvent) {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)
      const target = event.target as Element | null
      setHovering(Boolean(target?.closest('a, button, [data-cursor]')))
    }

    function onLeave() {
      setVisible(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[200] size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovering ? 54 : 34,
          height: hovering ? 54 : 34,
          borderWidth: hovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.28 }}
        className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white mix-blend-difference"
      />
    </>
  )
}
