import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/5 bg-ink-950/70 backdrop-blur-xl' : ''}`}>
      <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-bold text-white">
          {profile.name.split(' ')[0]}<span className="text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const id = l.toLowerCase()
            return (
              <li key={l}>
                <a
                  href={`#${id}`}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${active === id ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {active === id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/[0.07]" transition={{ type: 'spring', duration: 0.5 }} />
                  )}
                  <span className="relative">{l}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <button className="text-slate-300 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/5 bg-ink-950/95 px-6 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-slate-300 hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
