"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { useRef } from "react"

export function NumberTicker() {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `$${Math.round(v).toLocaleString()}`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, 48250, { duration: 2, ease: "easeOut" })
    return controls.stop
  }, [inView, count])

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm text-neutral-500">Monthly revenue</span>
      <motion.span ref={ref} className="text-4xl font-bold tabular-nums tracking-tight text-neutral-50">
        {rounded}
      </motion.span>
    </div>
  )
}
