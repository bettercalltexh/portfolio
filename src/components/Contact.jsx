import React, { useState } from 'react'
import { Check, Copy, Github, Linkedin, Mail, Code2, Trophy } from 'lucide-react'
import { profile } from '../data'
import { Section, Reveal } from './ui'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const links = [
    { label: 'GitHub', href: profile.links.github, icon: Github },
    { label: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin },
    { label: 'Codeforces', href: profile.links.codeforces, icon: Trophy },
    { label: 'LeetCode', href: profile.links.leetcode, icon: Code2 },
  ]

  return (
    <>
      <Section id="contact">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-ink-900 to-cyan-500/10 p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="relative">
              <p className="font-mono text-sm text-violet-300">06 — contact</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold text-white md:text-6xl">
                Let's build something <span className="gradient-text">intelligent</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-slate-400">
                I'm looking for internships and roles in AI/LLM engineering and backend development. My inbox is always open.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail size={16} /> Say hello
                </a>
                <button onClick={copy} className="btn-ghost font-mono">
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  {copied ? 'Copied!' : profile.email}
                </button>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {links.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="chip gap-2 px-4 py-2 text-sm transition hover:border-violet-400/40 hover:text-white">
                    <Icon size={15} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.fullName} · Built with React, Tailwind & Framer Motion
      </footer>
    </>
  )
}
