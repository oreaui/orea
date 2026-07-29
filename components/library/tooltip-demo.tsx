"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function TooltipDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
            transition={{ delay: 0.35, type: "spring", stiffness: 400, damping: 26 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-neutral-900 shadow-lg"
          >
            Nice to meet you
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="rounded-full border border-white/10 bg-neutral-800/80 px-5 py-2.5 text-sm text-neutral-100"
      >
        Hover me
      </button>
    </div>
  )
}
