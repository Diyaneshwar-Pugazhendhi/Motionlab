import { useState } from 'react'

export function Footer() {
  const [copied, setCopied] = useState(false)
  const command = 'npm install && npm run dev'

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <footer
      id="about"
      className="scroll-mt-24 border-t border-white/10 px-6 py-16 text-center"
    >
      <p className="text-sm text-white/40">
        Built with <span className="text-white/70">React · Tailwind · Framer Motion</span> — a demo
        showcase.
      </p>
      <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-white/70">
        <span>{command}</span>
        <button
          onClick={copy}
          className="rounded-full bg-white/10 px-3 py-1 text-xs text-white transition hover:bg-white/20"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </footer>
  )
}
