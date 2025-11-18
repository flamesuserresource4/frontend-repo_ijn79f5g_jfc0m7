import React from 'react'

export default function Footer(){
  return (
    <footer className="relative border-t border-neutral-200/80 py-10 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} Cognitive Futures</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Email</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Twitter</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
