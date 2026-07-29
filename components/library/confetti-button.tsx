"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const colors = ["#3b82f6", "#ec4899", "#f59e0b", "#10b981", "#8b5cf6"]

export function ConfettiButton() {
  const [bursts, setBursts] = useState<number[]>([])

  function fire() {
    const id = Date.now()
    setBursts((prev) => [...prev, id])
    setTimeout(() => setBursts((prev) => prev.filter((b) => b !== id)), 900)
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {bursts.map((id) => (
          <div key={id} className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 14 }).map((_, i) => {
              const angle = (i / 14) * Math.PI * 2
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos(angle) * 70,
                    y: Math.sin(angle) * 70,
                    opacity: 0,
                    scale: 0.4,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute h-2 w-2 rounded-sm"
                  style={{ backgroundColor: colors[i % colors.length] }}
                />
              )
            })}
          </div>
        ))}
      </AnimatePresence>
      <motion.button
        onClick={fire}
        whileTap={{ scale: 0.92 }}
        className="relative rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900"
      >
        Celebrate
      </motion.button>
    </div>
  )
}
