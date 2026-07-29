"use client"

import { motion } from "framer-motion"

export function GradientText() {
  return (
    <motion.span
      className="bg-clip-text text-6xl font-bold tracking-tight text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #ec4899, #f59e0b, #22d3ee, #3b82f6, #ec4899)",
        backgroundSize: "300% 100%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, ease: "linear", repeat: Infinity }}
    >
      Pro
    </motion.span>
  )
}
