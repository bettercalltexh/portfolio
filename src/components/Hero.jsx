import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data'

function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const done = !deleting && text === word
    const empty = deleting && text === ''
    const t = setTimeout(
      () => {
        if (done) return setDeleting(true)
        if (empty) {
          setDeleting(false)
          return setI((n) => n + 1)
        }
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      },
      done ? pause : deleting ? speed / 2 : speed
    )
    return () => clearTimeout(t)
  }, [text, deleting, i, words, speed, pause])

  return text
}

const agentSteps = [
  { tag: 'user', color: 'text-cyan-300', text: 'Find the latest pump spec sheet and summarize it' },
  { tag: 'router', color: 'text-violet-300', text: 'intent → document_retrieval' },
  { tag: 'tool', color: 'text-fuchsia-300', text: 'sharepoint.search("pump spec")  ✓ 3 docs' },
  { tag: 'rag', color: 'text-amber-300', text: 'faiss.similarity_search(k=4)  ✓ 12ms' },
  { tag: 'llm', color: 'text-emerald-300', text: 'Generating grounded summary…' },
]

function AgentTerminal() {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setShown((n) => (n >= agentSteps.length + 3 ? 0 : n + 1)), 900)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/50 via-fuchsia-500/20 to-cyan-400/40 blur-sm" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">agent_graph.py — langgraph</span>
        </div>
        <div className="min-h-[15rem] space-y-3 p-5 font-mono text-[13px] leading-relaxed">
          {agentSteps.slice(0, shown).map((s, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
              <span className={`w-14 shrink-0 ${s.color}`}>[{s.tag}]</span>
              <span className="text-slate-300">{s.text}</span>
            </motion.div>
          ))}
          <span className="inline-block h-4 w-2 animate-pulse bg-violet-400 align-middle" />
        </div>
      </div>
    </div>
  )
}

const socials = [
  { href: profile.links.github, icon: Github, label: 'GitHub' },
  { href: profile.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
]

export default function Hero() {
  const role = useTypewriter(profile.roles)
  const fade = (d) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } })

  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-16 pt-28">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div {...fade(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to internships & full-time roles
          </motion.div>

          <motion.h1 {...fade(0.1)} className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">{profile.name.split(' ')[0]}</span>
            <br />
            {profile.name.split(' ').slice(1).join(' ')}.
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-6 flex h-8 items-center gap-2 font-mono text-lg text-violet-300 md:text-xl">
            <Sparkles size={18} className="shrink-0" />
            {role}
            <span className="inline-block h-6 w-[2px] animate-pulse bg-violet-300" />
          </motion.p>

          <motion.p {...fade(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href={profile.resume} download className="btn-ghost">
              <Download size={16} /> Resume
            </a>
          </motion.div>

          <motion.div {...fade(0.5)} className="mt-10 flex items-center gap-5 text-slate-400">
            {socials.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-white/10 p-2.5 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white">
                <Icon size={18} />
              </a>
            ))}
            <span className="ml-2 inline-flex items-center gap-1.5 text-sm">
              <MapPin size={14} /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <AgentTerminal />
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <motion.span animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </a>
    </section>
  )
}
