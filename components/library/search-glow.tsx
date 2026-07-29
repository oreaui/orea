"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export function SearchGlow() {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-[22px] border border-white/[0.06] bg-neutral-900/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="relative z-10 flex items-center gap-3 px-5 py-4">
        <Search className="h-5 w-5 shrink-0 text-neutral-500" />
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search"
          className="w-full bg-transparent text-[15px] text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
        />
      </div>

      {/* Rainbow glow bleeding softly from the bottom edge */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 bottom-0 h-3 translate-y-1/2 rounded-full blur-lg"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #f472b6 20%, #f59e0b 40%, #34d399 60%, #22d3ee 78%, #6366f1 92%, transparent 100%)",
        }}
        animate={{ opacity: focused ? 0.85 : 0.5, scaleX: focused ? 1 : 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
      />
    </div>
  )
}
