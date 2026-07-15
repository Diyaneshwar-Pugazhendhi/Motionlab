import { ParticleField } from './ParticleField'

export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft pastel ambient glows, present across the whole page */}
      <div
        className="absolute -left-40 -top-40 h-[760px] w-[760px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(251,207,232,0.22) 0%, rgba(254,215,170,0.08) 42%, rgba(251,207,232,0) 70%)',
        }}
      />
      <div
        className="absolute -right-32 bottom-0 h-[760px] w-[760px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(186,230,253,0.18) 0%, rgba(191,219,254,0.06) 42%, rgba(186,230,253,0) 70%)',
        }}
      />
      <ParticleField />
    </div>
  )
}
