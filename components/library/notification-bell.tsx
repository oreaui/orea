"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bell } from "lucide-react"

export function NotificationBell() {
  const [count, setCount] = useState(3)
  const [ring, setRing] = useState(false)

  function shake() {
    setCount((c) => c + 1)
    setRing(true)
    setTimeout(() => setRing(false), 700)
  }

  return (
    <button onClick={shake} className="relative rounded-full border border-white/10 bg-neutral-800/80 p-3.5" aria-label="Notifications">
      <motion.span
        animate={ring ? { rotate: [0, -18, 16, -12, 8, 0] } : { rotate: 0 }}
        transition={{ duration: 0.6 }}
        className="block"
        style={{ transformOrigin: "top center" }}
      >
        <Bell className="h-5 w-5 text-neutral-200" />
      </motion.span>
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
