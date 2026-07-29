"use client"

import { useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export function ProgressRing() {
  const [target, setTarget] = useState(72)
  const progress = useMotionValue(0)
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const offset = useTransform(progress, (p) => circumference * (1 - p / 100))
  const label = useTransform(progress, (p) => Math.round(p).toString())

  useEffect(() => {
    const controls = animate(progress, target, { duration: 1.1, ease: "easeOut" })
    return controls.stop
  }, [target, progress])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span className="text-2xl font-semibold text-neutral-50">{label}</motion.span>
          <span className="mt-1 text-sm text-neutral-400">%</span>
        </div>
      </div>
      <button
        onClick={() => setTarget(Math.floor(Math.random() * 100))}
        className="rounded-full bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-100"
      >
        Randomize
      </button>
    </div>
  )
}
