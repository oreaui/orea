"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function CheckboxDraw() {
  const [checked, setChecked] = useState(false)

  return (
    <button onClick={() => setChecked((v) => !v)} className="flex items-center gap-3 text-sm text-neutral-100">
      <motion.span
        animate={{
          backgroundColor: checked ? "#3b82f6" : "rgba(255,255,255,0)",
          borderColor: checked ? "#3b82f6" : "rgba(255,255,255,0.25)",
        }}
        className="flex h-5 w-5 items-center justify-center rounded-md border"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <motion.path
            d="M4 12.5L9.5 18L20 6"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
            transition={{
              pathLength: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: checked ? 0.05 : 0.15 },
            }}
          />
        </svg>
      </motion.span>
      Notify me
    </button>
  )
}
