"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 15 })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - rect.left - rect.width / 2
    const my = e.clientY - rect.top - rect.height / 2
    x.set(mx * 0.4)
    y.set(my * 0.4)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ x, y }}
      className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-900"
    >
      Magnetic
    </motion.button>
  )
}
