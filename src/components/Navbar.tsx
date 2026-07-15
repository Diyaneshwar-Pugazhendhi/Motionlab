import { motion } from 'framer-motion'
import { scrollToSection } from '../lib/scroll'

const links = [
  { label: 'Showcase', id: 'showcase' },
  { label: 'Motion', id: 'motion' },
  { label: 'Components', id: 'components' },
  { label: 'About', id: 'about' },
]

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md md:px-12"
    >
      <button
        onClick={() => scrollToSection('showcase')}
        className="text-lg font-semibold tracking-tight"
      >
        <span className="text-gradient animate-gradient-pan">Aurora</span>
        <span className="text-white/50">.ui</span>
      </button>
      <div className="hidden gap-8 text-sm text-white/60 md:flex">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollToSection(l.id)}
            className="transition-colors hover:text-white"
          >
            {l.label}
          </button>
        ))}
      </div>
      <button
        onClick={() => scrollToSection('components')}
        className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white transition hover:bg-white/10"
      >
        Get started
      </button>
    </motion.nav>
  )
}
