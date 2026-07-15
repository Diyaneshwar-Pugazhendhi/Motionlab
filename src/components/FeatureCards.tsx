import { motion } from 'framer-motion'
import { SpotlightCard } from './Spotlight'

const features = [
  { title: 'Spotlight', desc: 'Cursor-following glow that reacts to every move.', tag: 'hover' },
  { title: 'Scroll Reveal', desc: 'Content fades and lifts into view as you scroll.', tag: 'viewport' },
  { title: 'Spring Physics', desc: 'Natural, bouncy transitions via Framer Motion.', tag: 'motion' },
  { title: 'Gradient Text', desc: 'Animated multi-color gradients that never rest.', tag: 'css' },
  { title: 'Stagger', desc: 'Sequenced entrances for lists and grids.', tag: 'sequence' },
  { title: 'Blur In', desc: 'Text sharpens from blur as it enters the frame.', tag: 'effect' },
]

export function FeatureCards() {
  return (
    <section id="components" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl"
      >
        A toolkit of <span className="text-gradient animate-gradient-pan">living</span> components
      </motion.h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          >
            <SpotlightCard className="h-full">
              <span className="mb-3 inline-block rounded-full bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white/40">
                {f.tag}
              </span>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/55">{f.desc}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
