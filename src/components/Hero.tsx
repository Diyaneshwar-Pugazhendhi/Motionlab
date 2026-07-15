import { motion } from 'framer-motion'
import { MagneticButton } from './MagneticButton'
import { scrollToSection } from '../lib/scroll'

export function Hero() {
  return (
    <section id="showcase" className="relative flex min-h-screen scroll-mt-24 items-center justify-center">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/60"
        >
          ✦ Dynamic & animated UI, built for demos
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Interfaces that <span className="text-gradient animate-gradient-pan">move</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/60"
        >
          Move your cursor — the field reacts. A live showcase of motion, particles, and
          spring-driven components, ready to preview and ship.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollToSection('components')}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View showcase
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection('about')}
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/5"
          >
            Source
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
