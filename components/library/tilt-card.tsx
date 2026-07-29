"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

export function TiltCard() {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 22)
    rotateX.set((0.5 - py) * 22)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  function reset() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28), transparent 55%)`

  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-44 w-72 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-5 shadow-2xl"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: glare }} />
        <div className="flex items-start justify-between">
          <span className="text-sm text-neutral-300">Credit</span>
          <span className="font-mono text-lg font-bold italic tracking-tight text-white">VISA</span>
        </div>
        <div className="mt-10 font-mono text-sm text-neutral-200">
          <p>John Smith</p>
          <p className="mt-1 tracking-widest">4111 - 1111 - 1111 - 1111</p>
        </div>
      </motion.div>
    </div>
  )
}
