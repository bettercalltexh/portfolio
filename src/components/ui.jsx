import React, { useRef } from 'react'
import { motion } from 'framer-motion'

export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      {title && (
        <Reveal>
          <p className="mb-3 font-mono text-sm text-violet-400">{eyebrow}</p>
          <h2 className="mb-14 font-display text-3xl font-bold text-white md:text-5xl">{title}</h2>
        </Reveal>
      )}
      {children}
    </section>
  )
}

export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Card with a radial glow that follows the cursor. */
export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl glass transition duration-300 hover:border-white/20 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(500px circle at var(--x) var(--y), rgba(139,92,246,0.15), transparent 40%)' }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
