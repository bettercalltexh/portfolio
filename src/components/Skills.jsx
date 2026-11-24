import React from 'react'
import { Brain, Code2, Server, Wrench } from 'lucide-react'
import { skills } from '../data'
import { Section, Reveal, SpotlightCard } from './ui'

const icons = { brain: Brain, server: Server, code: Code2, wrench: Wrench }
const tints = ['text-violet-300 bg-violet-500/10', 'text-cyan-300 bg-cyan-500/10', 'text-emerald-300 bg-emerald-500/10', 'text-amber-300 bg-amber-500/10']

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 — skills" title="My toolkit.">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, i) => {
          const Icon = icons[group.icon] || Code2
          return (
            <Reveal key={group.title} delay={0.08 * i}>
              <SpotlightCard className="h-full p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className={`rounded-xl p-2.5 ${tints[i % tints.length]}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className="chip px-3.5 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
