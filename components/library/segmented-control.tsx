"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"

const options = [
  { label: "Light", Icon: Sun },
  { label: "Dark", Icon: Moon },
  { label: "System", Icon: Monitor },
]

export function SegmentedControl() {
  const [active, setActive] = useState(1)
  return (
    <div className="flex rounded-xl border border-white/10 bg-neutral-800/60 p-1">
      {options.map((option, i) => (
        <button
          key={option.label}
          onClick={() => setActive(i)}
          className="relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
        >
          {active === i && (
            <motion.span
              layoutId="segment"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="absolute inset-0 rounded-lg bg-white/10"
            />
          )}
          <option.Icon className={`relative z-10 h-4 w-4 ${active === i ? "text-white" : "text-neutral-400"}`} />
          <span className={`relative z-10 ${active === i ? "text-white" : "text-neutral-400"}`}>{option.label}</span>
        </button>
      ))}
    </div>
  )
}
