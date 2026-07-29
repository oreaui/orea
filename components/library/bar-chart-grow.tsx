"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const initial = [40, 65, 45, 80, 55, 90, 70]

export function BarChartGrow() {
  const [data, setData] = useState(initial)
  const [key, setKey] = useState(0)

  function shuffle() {
    setData(initial.map(() => 20 + Math.random() * 80))
    setKey((k) => k + 1)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-32 items-end gap-2">
        {data.map((value, i) => (
          <motion.div
            key={`${key}-${i}`}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 20 }}
            className="w-6 rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400"
            style={{ height: `${value}%` }}
          />
        ))}
      </div>
      <button onClick={shuffle} className="rounded-full bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-100">
        Shuffle
      </button>
    </div>
  )
}
