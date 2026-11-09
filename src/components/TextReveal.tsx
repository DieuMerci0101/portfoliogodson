import { motion, useReducedMotion } from 'framer-motion'
import type { ElementType } from 'react'
import { EASE } from '../lib/motion'

type TextRevealProps = {
  text: string
  className?: string
  delay?: number
  as?: ElementType
  once?: boolean
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = 'h2',
  once = true,
}: TextRevealProps) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: '115%' }}
            whileInView={{ y: 0 }}
            viewport={{ once, margin: '-60px' }}
            transition={{
              duration: 0.9,
              delay: delay + index * 0.045,
              ease: EASE,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
