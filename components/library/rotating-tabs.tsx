"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Zap, Shield, Sparkles } from "lucide-react"

const tabs = [
  { id: "fast", label: "Fast", icon: Zap, title: "Blazing fast", body: "Ships in milliseconds with zero layout shift." },
  { id: "safe", label: "Secure", icon: Shield, title: "Secure by default", body: "Hardened headers and scoped access baked in." },
  { id: "pretty", label: "Polished", icon: Sparkles, title: "Pixel perfect", body: "Spring physics tuned for a premium feel." },
]

export function RotatingTabs() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % tabs.length), 3000)
    return () => clearInterval(t)
  }, [])

  const current = tabs[active]

  return (
    <div className="flex w-72 flex-col items-center gap-4">
      <div className="flex gap-1 rounded-full border border-white/10 bg-neutral-800/60 p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActive(i)}
            className="relative rounded-full px-3.5 py-1.5 text-[13px] font-medium"
          >
            {active === i && (
              <motion.span
                layoutId="rotating-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-white/[0.12]"
              />
            )}
            <span className={`relative z-10 flex items-center gap-1.5 ${active === i ? "text-white" : "text-neutral-400"}`}>
              <tab.icon className="h-3.5 w-3.5" />
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      <div className="relative h-24 w-full" style={{ perspective: 1000 }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current.id}
            initial={{ rotateX: -70, opacity: 0, y: 12 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: 70, opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            style={{ transformStyle: "preserve-3d" }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 text-center"
          >
            <h3 className="text-lg font-semibold text-neutral-100">{current.title}</h3>
            <p className="text-pretty text-[13px] leading-relaxed text-neutral-400">{current.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
