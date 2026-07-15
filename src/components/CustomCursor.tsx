import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function move(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target as HTMLElement
      const interactive = el.closest('button,a,[data-cursor="hover"]')
      if (ringRef.current) {
        const big = !!interactive
        ringRef.current.style.width = big ? '56px' : '30px'
        ringRef.current.style.height = big ? '56px' : '30px'
        ringRef.current.style.backgroundColor = big
          ? 'rgba(249,168,212,0.22)'
          : 'rgba(249,168,212,0)'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[100]"
      >
        <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference" />
      </motion.div>
      <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[100]">
        <div
          ref={ringRef}
          className="rounded-full border border-white/50 transition-[width,height,background-color] duration-200 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  )
}
