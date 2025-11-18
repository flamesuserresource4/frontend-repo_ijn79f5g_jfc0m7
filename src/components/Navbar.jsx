import React, { useEffect, useState } from 'react'
import { Menu, Moon, Sun, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-neutral-200/70 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:bg-neutral-900/70 dark:border-neutral-800">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.span>
              </div>
              <div className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Cognitive Futures
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#about" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors dark:text-neutral-300 dark:hover:text-white">About</a>
              <a href="#events" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors dark:text-neutral-300 dark:hover:text-white">Events</a>
              <a href="#research" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors dark:text-neutral-300 dark:hover:text-white">Research</a>
              <a href="#join" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors dark:text-neutral-300 dark:hover:text-white">Join</a>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle theme"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white/70 text-neutral-700 transition hover:bg-white dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <a
                href="#join"
                className="hidden md:inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
              >
                Join Us
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white/70 text-neutral-700 transition hover:bg-white md:hidden dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-neutral-200 px-4 py-3 md:hidden dark:border-neutral-800">
              <div className="grid gap-2">
                <a href="#about" className="rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-800">About</a>
                <a href="#events" className="rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-800">Events</a>
                <a href="#research" className="rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-800">Research</a>
                <a href="#join" className="rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-800">Join</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
