import React from 'react'
import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../data'
import { Section, Reveal, SpotlightCard } from './ui'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 — experience" title="Where I've worked.">
      <div className="relative space-y-10 border-l border-white/10 pl-8 md:pl-12">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={0.1 * i} className="relative">
            <span className="absolute -left-[41px] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-violet-400/50 bg-ink-950 md:-left-[57px]">
              <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
            </span>
            <SpotlightCard className="p-7 md:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{job.role}</h3>
                  <p className="mt-1 flex items-center gap-2 text-violet-300">
                    <Briefcase size={15} /> {job.company}
                  </p>
                </div>
                <div className="text-right">
                  <span className="chip font-mono">{job.period}</span>
                  <p className="mt-2 flex items-center justify-end gap-1 text-xs text-slate-500">
                    <MapPin size={12} /> {job.location}
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-slate-400">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
