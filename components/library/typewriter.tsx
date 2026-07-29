"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const phrases = ["design systems.", "micro-interactions.", "delightful UIs.", "motion details."]

export function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    const done = text === current
    const empty = text === ""

    const timeout = setTimeout(
      () => {
        if (!deleting && done) {
          setDeleting(true)
        } else if (deleting && empty) {
          setDeleting(false)
          setIndex((i) => (i + 1) % phrases.length)
        } else {
          setText(current.slice(0, text.length + (deleting ? -1 : 1)))
        }
      },
      deleting ? 45 : done ? 1200 : 90,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <p className="text-lg font-medium text-neutral-100">
      We craft{" "}
      <span className="text-blue-400">{text}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="ml-0.5 inline-block h-5 w-0.5 translate-y-0.5 bg-blue-400"
      />
    </p>
  )
}
