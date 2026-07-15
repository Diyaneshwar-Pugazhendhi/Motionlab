import { motion } from 'framer-motion'

const items = [
  'React',
  'Framer Motion',
  'Tailwind',
  'Vite',
  'TypeScript',
  'GSAP',
  'Three.js',
  'WebGL',
]

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-white/10 py-6">
      <motion.div
        className="flex shrink-0 gap-10 pr-10"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="whitespace-nowrap text-3xl font-semibold text-white/25 md:text-5xl">
            {t} <span className="text-pink-200/70">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
