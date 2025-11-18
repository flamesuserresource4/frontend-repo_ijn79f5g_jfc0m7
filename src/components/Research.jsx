import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Atom, ShieldQuestion, Compass } from 'lucide-react'

const items = [
  { icon: Brain, title: 'Cognitive Models', text: 'Representations, memory systems, attention and agency across architectures.' },
  { icon: Atom, title: 'Emergent Systems', text: 'Collective intelligence, simulation, and complex adaptive dynamics.' },
  { icon: ShieldQuestion, title: 'Ethics & Alignment', text: 'Normative frameworks, risk analysis, governance and stewardship.' },
  { icon: Compass, title: 'Futures & Foresight', text: 'Scenarios, horizon scanning, weak signals and strategy.' },
]

export default function Research(){
  return (
    <section id="research" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Research & Ideas</h2>
          <a href="#" className="text-sm text-neutral-700 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">View notes</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-6 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100">{it.title}</div>
              </div>
              <div className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{it.text}</div>
              <div className="absolute -bottom-10 right-0 h-36 w-36 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-2xl transition-all duration-500 group-hover:bottom-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
