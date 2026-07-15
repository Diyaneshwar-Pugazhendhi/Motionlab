import { motion } from 'framer-motion'

const words = 'Motion should feel effortless, not engineered.'.split(' ')

export function AnimatedText() {
  return (
    <section id="motion" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-32 text-center">
      <p className="text-3xl font-medium leading-snug tracking-tight md:text-5xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </section>
  )
}
