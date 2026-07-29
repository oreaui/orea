"use client"

import { motion } from "framer-motion"

export function OreaBackground() {
  return (
    <div className="relative h-48 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%)" }}
        animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/3 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.45), transparent 70%)" }}
        animate={{ x: [0, -100, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.4), transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <div className="relative flex h-full items-center justify-center">
        <span className="text-lg font-semibold text-white/90">Orea</span>
      </div>
    </div>
  )
}
