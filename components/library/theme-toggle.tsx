"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [dark, setDark] = useState(true)

  return (
    <button
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle theme"
      className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10"
      style={{ backgroundColor: dark ? "#0b1020" : "#e0f2fe" }}
    >
      {/* Rays — each pivots around the sun's center */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 h-2.5 w-0.5 rounded-full bg-amber-400"
          style={{ transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-18px)` }}
          animate={{ scaleY: dark ? 0 : 1, opacity: dark ? 0 : 1 }}
          transition={{ delay: dark ? 0 : i * 0.03, duration: 0.2 }}
        />
      ))}

      {/* Sun / moon disc */}
      <motion.div
        animate={{
          scale: dark ? 1 : 0.9,
          backgroundColor: dark ? "#e2e8f0" : "#fbbf24",
          boxShadow: dark ? "0 0 0 0 transparent" : "0 0 20px 3px rgba(251,191,36,0.6)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative h-8 w-8 overflow-hidden rounded-full"
      >
        {/* Crescent shadow that slides away to reveal the sun */}
        <motion.div
          animate={{ x: dark ? 8 : 32, y: dark ? -4 : -12 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute h-8 w-8 rounded-full"
          style={{ backgroundColor: "#0b1020" }}
        />
      </motion.div>
    </button>
  )
}
