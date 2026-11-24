import React from 'react'
import { ArrowUpRight, Github, Star } from 'lucide-react'
import { projects } from '../data'
import { Section, Reveal, SpotlightCard } from './ui'

function ProjectCard({ p }) {
  return (
    <SpotlightCard className={`flex h-full flex-col p-7 ${p.featured ? 'md:p-10' : ''}`}>
      <div className={`mb-6 h-1 w-16 rounded-full bg-gradient-to-r ${p.accent}`} />
      <div className="flex items-start justify-between gap-4">
        <div>
          {p.featured && (
            <span className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-amber-300">
              <Star size={12} fill="currentColor" /> Featured project
            </span>
          )}
          <h3 className={`font-display font-bold text-white ${p.featured ? 'text-3xl' : 'text-2xl'}`}>{p.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{p.subtitle}</p>
        </div>
        <div className="flex gap-2">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`} className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-white/30 hover:text-white">
              <Github size={16} />
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-white/30 hover:text-white">
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-5 leading-relaxed text-slate-400">{p.description}</p>

      <ul className="mt-5 space-y-2">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-slate-400">
            <span className="text-violet-400">→</span> {h}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        {p.tags.map((t) => (
          <span key={t} className="rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-slate-400">{t}</span>
        ))}
      </div>
    </SpotlightCard>
  )
}

export default function Projects() {
  const [featured, ...rest] = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  return (
    <Section id="projects" eyebrow="03 — projects" title="Things I've built.">
      <Reveal>
        <ProjectCard p={featured} />
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={0.1 * i}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
