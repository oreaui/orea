"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

export function AnimatedModal() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <button onClick={() => setOpen(true)} className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900">
        Open dialog
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="absolute z-20 w-64 rounded-2xl border border-white/10 bg-neutral-900 p-5"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3 top-3 text-neutral-500 hover:text-neutral-200"
              >
                <X className="h-4 w-4" />
              </button>
              <h3 className="text-base font-semibold text-neutral-100">Delete project</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                This action cannot be undone. Are you sure?
              </p>
              <div className="mt-4 flex justify-end gap-2">
                <button onClick={() => setOpen(false)} className="rounded-lg px-3 py-1.5 text-sm text-neutral-300">
                  Cancel
                </button>
                <button onClick={() => setOpen(false)} className="rounded-lg bg-red-500 px-3 py-1.5 text-sm text-white">
                  Delete
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
