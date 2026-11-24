import React from 'react'
import { Award, Medal, Trophy, Users } from 'lucide-react'
import { achievements, certifications } from '../data'
import { Section, Reveal, SpotlightCard } from './ui'

const icons = { trophy: Trophy, users: Users, medal: Medal }

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05 — achievements" title="Highlights & leadership.">
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[a.icon] || Trophy
          return (
            <Reveal key={a.title} delay={0.08 * i}>
              <SpotlightCard className="h-full p-7">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 p-3 text-fuchsia-300">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-xs text-slate-500">{a.year}</span>
                </div>
                <h3 className="mt-5 font-semibold leading-snug text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.detail}</p>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-14">
        <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-white">
          <Award size={20} className="text-violet-300" /> Certifications
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((c) => (
            <div key={c.title} className="flex items-center justify-between gap-4 rounded-xl glass px-5 py-4">
              <div>
                <p className="font-medium text-slate-200">{c.title}</p>
                <p className="text-sm text-slate-500">{c.issuer}</p>
              </div>
              <span className="chip shrink-0 font-mono">{c.year}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
