import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-neutral-950/60 dark:via-neutral-950/30 dark:to-neutral-950/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl dark:text-white"
            >
              Exploring the Future of Humans, Technology & Thought.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg dark:text-neutral-300"
            >
              Cognitive Futures is a student society exploring AI ethics, human cognition, future studies and modern philosophy through talks, workshops and collaborative research.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="pointer-events-auto mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 dark:bg-white dark:text-neutral-900"
              >
                Join Us
              </a>
              <a
                href="#events"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white"
              >
                Next Event
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="pointer-events-none relative h-[40vh] rounded-3xl border border-neutral-200/70 bg-white/30 p-[1px] backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/30 sm:h-[45vh] md:h-[55vh]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-indigo-500/10" />
              <div className="absolute inset-0 rounded-3xl" style={{background:"radial-gradient(600px 200px at 20% 10%, rgba(34,197,94,0.08), transparent), radial-gradient(400px 150px at 80% 80%, rgba(56,189,248,0.12), transparent)"}} />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/40 dark:ring-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
