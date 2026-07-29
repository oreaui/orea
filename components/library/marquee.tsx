"use client"

import { motion } from "framer-motion"

const items = ["Vercel", "Next.js", "React", "Framer", "Tailwind", "TypeScript", "Node", "Turbo"]

export function Marquee() {
  return (
    <div className="relative w-full max-w-md overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-neutral-300"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
