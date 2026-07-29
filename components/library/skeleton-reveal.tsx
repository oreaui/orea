"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function SkeletonReveal() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-16 w-64">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-10 w-10 animate-pulse rounded-full bg-white/10" />
              <div className="flex flex-col gap-2">
                <div className="h-3 w-40 animate-pulse rounded bg-white/10" />
                <div className="h-3 w-28 animate-pulse rounded bg-white/10" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                JS
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-100">John Smith</p>
                <p className="text-xs text-neutral-400">Product designer</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={() => setLoading((v) => !v)}
        className="rounded-full bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-100 hover:bg-neutral-700"
      >
        Animate
      </button>
    </div>
  )
}
