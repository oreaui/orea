"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export function OtpInput() {
  const [values, setValues] = useState(["", "", "", ""])
  const refs = useRef<(HTMLInputElement | null)[]>([])

  function handleChange(i: number, v: string) {
    const digit = v.replace(/\D/g, "").slice(-1)
    setValues((prev) => {
      const next = [...prev]
      next[i] = digit
      return next
    })
    if (digit && i < 3) refs.current[i + 1]?.focus()
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !values[i] && i > 0) refs.current[i - 1]?.focus()
  }

  const complete = values.every(Boolean)

  return (
    <div className="flex gap-3">
      {values.map((value, i) => (
        <motion.input
          key={i}
          ref={(el) => {
            refs.current[i] = el
          }}
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          inputMode="numeric"
          maxLength={1}
          animate={{
            scale: value ? [1, 1.12, 1] : 1,
            borderColor: complete ? "#34d399" : value ? "#3b82f6" : "rgba(255,255,255,0.12)",
          }}
          transition={{ duration: 0.2 }}
          className="h-14 w-12 rounded-xl border bg-neutral-800/60 text-center text-2xl font-semibold text-neutral-50 focus:outline-none"
        />
      ))}
    </div>
  )
}
