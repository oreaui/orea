"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const lines = ["Pull request opened", "Review requested from 3 teammates"]

export function TextReveal() {
  const [key, setKey] = useState(0)

  return (
    <div className="flex flex-col items-center gap-5">
      <div key={key} className="flex flex-col items-center">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 300, damping: 28 }}
              className={i === 0 ? "text-lg font-semibold text-neutral-100" : "text-sm text-neutral-400"}
            >
              {line}
            </motion.p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="rounded-full bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-100 hover:bg-neutral-700"
      >
        Animate
      </button>
    </div>
  )
}
