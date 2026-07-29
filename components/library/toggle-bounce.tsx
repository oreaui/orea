"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function ToggleBounce() {
  const [on, setOn] = useState(false)

  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="flex h-8 w-14 items-center rounded-full p-1 transition-colors"
      style={{ backgroundColor: on ? "#3b82f6" : "rgba(255,255,255,0.15)", justifyContent: on ? "flex-end" : "flex-start" }}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 700, damping: 22, mass: 0.6 }}
        className="h-6 w-6 rounded-full bg-white shadow-md"
      />
    </button>
  )
}
