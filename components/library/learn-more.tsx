"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function LearnMore() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-800/80 py-2.5 pl-5 pr-4 text-sm font-medium text-neutral-100"
    >
      Learn more
      <motion.span
        variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <ChevronRight className="h-4 w-4" />
      </motion.span>
    </motion.button>
  )
}
