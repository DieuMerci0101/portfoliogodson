import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { marqueeTech } from './data/profile'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'

function TechStrip() {
  return (
    <div className="relative z-20 mt-5 overflow-hidden py-4 md:mt-7 md:py-6">
      <div className="-rotate-[1.1deg] border-y border-ink/15 bg-ink py-4 text-paper shadow-[0_25px_50px_-30px_rgba(22,21,19,0.7)] md:py-5">
        <Marquee
          items={marqueeTech}
          speed={42}
          className="font-display text-lg font-medium uppercase tracking-[0.08em] md:text-2xl"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent md:w-28" />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const handleLoaded = useCallback(() => setLoading(false), [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper">
      <AnimatePresence>{loading && <Loader onDone={handleLoaded} />}</AnimatePresence>

      <ScrollProgress />
      <Cursor />
      <Navbar />

      <main>
        <Hero ready={!loading} />
        <TechStrip />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
      <div className="grain-fixed" aria-hidden="true" />
    </div>
  )
}
