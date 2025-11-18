import React from 'react'
import { motion } from 'framer-motion'

export default function Join(){
  return (
    <section id="join" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 p-8 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:border-neutral-800 dark:bg-neutral-900/50">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(800px_400px_at_20%_20%, rgba(59,130,246,0.12), transparent), radial-gradient(600px_300px_at_90%_80%, rgba(20,184,166,0.12), transparent)' }} />
          <div className="relative grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">Join the society</h3>
              <p className="mt-3 max-w-2xl text-neutral-700 dark:text-neutral-300">Become a member to access events, research sessions and our community forum. We welcome students from all disciplines.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">Membership</a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white">Volunteer</a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white">Newsletter</a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/40 bg-white/20 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-800/30">
                <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Why join?</div>
                <ul className="mt-3 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>Exclusive talks and debates</li>
                  <li>Hands-on research workshops</li>
                  <li>Publication opportunities</li>
                  <li>Interdisciplinary community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
