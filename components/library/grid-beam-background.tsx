"use client"

import { motion } from "framer-motion"

export function GridBeamBackground() {
  return (
    <div className="relative h-48 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <motion.div
        className="absolute left-0 top-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #3b82f6, transparent)" }}
        animate={{ y: [0, 192, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute left-0 top-0 h-full w-px"
        style={{ background: "linear-gradient(180deg, transparent, #ec4899, transparent)" }}
        animate={{ x: [0, 448, 0] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}
