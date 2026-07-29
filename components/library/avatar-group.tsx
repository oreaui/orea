"use client"

import { motion } from "framer-motion"

const people = [
  { name: "AM", color: "#3b82f6" },
  { name: "JS", color: "#ec4899" },
  { name: "KP", color: "#f59e0b" },
  { name: "RG", color: "#10b981" },
  { name: "TL", color: "#8b5cf6" },
]

export function AvatarGroup() {
  return (
    <div className="flex">
      {people.map((person, i) => (
        <motion.div
          key={person.name}
          whileHover={{ y: -8, scale: 1.08, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="-ml-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-neutral-900 text-sm font-semibold text-white first:ml-0"
          style={{ backgroundColor: person.color, zIndex: people.length - i }}
        >
          {person.name}
        </motion.div>
      ))}
    </div>
  )
}
