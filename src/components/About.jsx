import React from 'react'
import { GraduationCap } from 'lucide-react'
import { about, stats, education, skills } from '../data'
import { Section, Reveal, SpotlightCard } from './ui'

export default function About() {
  const marquee = skills.flatMap((s) => s.items)
  return (
    <>
      <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.01] py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-lg text-slate-500">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s} <span className="text-violet-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Section id="about" eyebrow="01 — about" title="Building AI that's actually useful.">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-400">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl glass p-4 text-center">
                  <div className="gradient-text font-display text-2xl font-bold md:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={0.1 * i}>
                <SpotlightCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-violet-500/10 p-3 text-violet-300">
                      <GraduationCap size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold text-white">{e.school}</h3>
                        <span className="font-mono text-xs text-slate-500">{e.period}</span>
                      </div>
                      <p className="mt-1 text-sm text-slate-400">{e.degree}</p>
                      <span className="chip mt-3 border-violet-400/20 text-violet-300">{e.score}</span>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
