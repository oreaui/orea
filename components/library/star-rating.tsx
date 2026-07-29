"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function StarRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((value) => {
        const active = value <= (hover || rating)
        return (
          <motion.button
            key={value}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            whileTap={{ scale: 0.8 }}
            animate={{ scale: active ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            aria-label={`Rate ${value}`}
          >
            <Star
              className="h-7 w-7 transition-colors"
              fill={active ? "#f59e0b" : "transparent"}
              color={active ? "#f59e0b" : "rgba(255,255,255,0.25)"}
            />
          </motion.button>
        )
      })}
    </div>
  )
}
