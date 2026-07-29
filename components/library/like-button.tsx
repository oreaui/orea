"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Heart } from "lucide-react"

export function LikeButton() {
  const [liked, setLiked] = useState(false)

  return (
    <button
      onClick={() => setLiked((v) => !v)}
      className="relative flex items-center gap-2 rounded-full border border-white/10 bg-neutral-800/80 px-5 py-2.5 text-sm text-neutral-100"
    >
      <span className="relative">
        <motion.span
          animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          <Heart
            className="h-4 w-4 transition-colors"
            fill={liked ? "#ef4444" : "transparent"}
            color={liked ? "#ef4444" : "currentColor"}
          />
        </motion.span>
        <AnimatePresence>
          {liked &&
            Array.from({ length: 6 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-red-500"
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{
                  opacity: 0,
                  x: Math.cos((i / 6) * Math.PI * 2) * 18,
                  y: Math.sin((i / 6) * Math.PI * 2) * 18,
                  scale: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
        </AnimatePresence>
      </span>
      Like
    </button>
  )
}
