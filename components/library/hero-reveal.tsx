"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const words = ["Build", "premium", "interfaces", "that", "feel", "alive."]

export function HeroReveal() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-400"
      >
        Introducing Orea
      </motion.span>
      <h2 className="flex flex-wrap justify-center gap-x-2 text-2xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden py-1">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 300, damping: 26 }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mx-auto mt-4 max-w-sm text-pretty text-sm leading-relaxed text-neutral-400"
      >
        A motion-first component kit for teams that sweat the details.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900"
      >
        Get started
        <ArrowRight className="h-4 w-4" />
      </motion.button>
    </div>
  )
}
