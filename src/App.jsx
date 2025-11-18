import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Research from './components/Research'
import Join from './components/Join'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Events />
        <Research />
        <Join />
      </main>
      <Footer />
    </div>
  )
}

export default App
