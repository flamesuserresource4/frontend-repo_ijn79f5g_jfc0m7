import React from 'react'
import { motion } from 'framer-motion'

const bullets = [
  {
    title: 'Future Studies',
    text: 'Exploring trajectories of society, climate, and governance to shape responsible futures.'
  },
  {
    title: 'Human Sciences',
    text: 'Cognition, behavior, perception and culture — grounded in empirical work and theory.'
  },
  {
    title: 'AI & Ethics',
    text: 'From alignment to agency, we interrogate how intelligent systems impact humanity.'
  },
  {
    title: 'Modern Philosophy',
    text: 'Analytic rigor meets creative speculation — with space for disagreement and debate.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-neutral-900/40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">About Cognitive Futures</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              We are a student-led community examining the intersection of mind, technology and society. We host talks and workshops, publish research notes, and prototype ideas for better futures.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {bullets.map((b) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-neutral-200 bg-white/70 p-6 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60"
                >
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{b.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{b.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/60 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(600px 300px at 10% 20%, rgba(99,102,241,0.15), transparent), radial-gradient(500px 250px at 90% 80%, rgba(20,184,166,0.15), transparent)' }} />
              <div className="absolute inset-0 grid grid-cols-12 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-l border-neutral-200/50 dark:border-neutral-800/60" />
                ))}
              </div>
              <div className="absolute inset-0 [mask-image:radial-gradient(600px_circle_at_60%_20%,black,transparent)]">
                <svg className="absolute -left-10 top-10 h-64 w-64 text-blue-400/30" viewBox="0 0 200 200" fill="currentColor">
                  <circle cx="100" cy="100" r="80" />
                </svg>
                <svg className="absolute right-10 bottom-10 h-48 w-48 text-cyan-400/30" viewBox="0 0 200 200" fill="currentColor">
                  <rect x="40" y="40" width="120" height="120" rx="24" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
