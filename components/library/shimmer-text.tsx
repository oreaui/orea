"use client"

import { motion } from "framer-motion"

export function ShimmerText() {
  return (
    <motion.span
      className="bg-clip-text text-xl font-medium text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.25) 40%, #fff 50%, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.25) 100%)",
        backgroundSize: "200% 100%",
      }}
      animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
      transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
    >
      Planning next moves
    </motion.span>
  )
}
