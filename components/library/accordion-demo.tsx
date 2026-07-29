"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function AccordionDemo() {
  const [open, setOpen] = useState(true)

  return (
    <div className="w-64 overflow-hidden rounded-xl border border-white/10 bg-neutral-800/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-neutral-100"
      >
        Appearance
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 26 }}>
          <ChevronDown className="h-4 w-4 text-neutral-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-sm leading-relaxed text-neutral-400">
              Choose how the interface looks. Sync with your system or lock a theme.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
