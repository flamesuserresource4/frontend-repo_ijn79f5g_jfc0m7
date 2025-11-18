import React from 'react'
import { motion } from 'framer-motion'

const events = [
  {
    date: 'Oct 24',
    title: 'Debate: Can Alignment Be Solved?',
    desc: 'A structured debate on tractability and timelines with invited guests.'
  },
  {
    date: 'Nov 3',
    title: 'Workshop: Cognitive Architectures',
    desc: 'Hands-on session exploring memory, planning and tool-use in modern systems.'
  },
  {
    date: 'Nov 19',
    title: 'Talk: Futures Literacy for Engineers',
    desc: 'Scenario thinking, weak signals, and strategic foresight techniques.'
  }
]

export default function Events(){
  return (
    <section id="events" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Events</h2>
          <a href="#join" className="text-sm text-neutral-700 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Propose an event</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, idx) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-5 backdrop-blur-md transition dark:border-neutral-800 dark:bg-neutral-900/60"
            >
              <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                <span className="rounded-lg border border-neutral-200 bg-white px-2 py-1 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">{e.date}</span>
                <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
              </div>
              <div className="mt-4 text-lg font-medium text-neutral-900 dark:text-neutral-100">{e.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{e.desc}</div>
              <div className="absolute -bottom-10 right-0 h-36 w-36 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-2xl transition-all duration-500 group-hover:bottom-0" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-6 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60">
            <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Timeline</div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {events.map((e) => (
                <div key={e.title} className="relative">
                  <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{e.date}</div>
                  <div className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">{e.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
