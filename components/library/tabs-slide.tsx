"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const tabs = ["Plan", "Debug", "Ask"]

export function TabsSlide() {
  const [active, setActive] = useState(2)

  return (
    <div className="flex gap-1 rounded-full border border-white/10 bg-neutral-800/60 p-1">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActive(i)}
          className="relative rounded-full px-4 py-1.5 text-sm font-medium"
        >
          {active === i && (
            <motion.span
              layoutId="tab-pill"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute inset-0 rounded-full bg-white/15"
            />
          )}
          <span className={`relative z-10 ${active === i ? "text-white" : "text-neutral-400"}`}>{tab}</span>
        </button>
      ))}
    </div>
  )
}
