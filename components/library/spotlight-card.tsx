"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

export function SpotlightCard() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${mx}px ${my}px, rgba(59,130,246,0.18), transparent 70%)`

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="group relative h-48 w-72 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      <div className="relative">
        <h3 className="text-lg font-semibold text-neutral-100">Spotlight</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          Move your cursor across the card to reveal the glow that follows it.
        </p>
      </div>
    </div>
  )
}
