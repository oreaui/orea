"use client"

import { useState } from "react"
import { motion } from "framer-motion"

function Digit({ value }: { value: number }) {
  return (
    <div className="relative h-10 w-6 overflow-hidden">
      <motion.div
        animate={{ y: `-${value * 10}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
        className="absolute inset-x-0 flex flex-col"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="flex h-10 items-center justify-center text-3xl font-semibold text-white">
            {i}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function SpinningCounter() {
  const [value, setValue] = useState(0)
  const digits = String(value).padStart(3, "0").split("").map(Number)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex">
        {digits.map((d, i) => (
          <Digit key={i} value={d} />
        ))}
      </div>
      <button
        onClick={() => setValue(Math.floor(Math.random() * 1000))}
        className="rounded-full bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-100 hover:bg-neutral-700"
      >
        Animate
      </button>
    </div>
  )
}
