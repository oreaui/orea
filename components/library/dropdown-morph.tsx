"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, User, Settings, LogOut } from "lucide-react"

const items = [
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Sign out" },
]

// Explicit dimensions keep the morph perfectly smooth (no "height: auto" measuring).
const SIZE = 48 // closed circle + header height
const ITEM_H = 40 // height of each menu row
const LIST_PAD = 8 // bottom padding of the list
const OPEN_WIDTH = 208
const OPEN_HEIGHT = SIZE + items.length * ITEM_H + LIST_PAD

const easing = [0.22, 1, 0.36, 1] as const

export function DropdownMorph() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="overflow-hidden border border-white/10 bg-neutral-800/90 shadow-xl"
      initial={false}
      animate={{
        width: open ? OPEN_WIDTH : SIZE,
        height: open ? OPEN_HEIGHT : SIZE,
        borderRadius: open ? 20 : 999,
      }}
      transition={{ duration: 0.4, ease: easing }}
    >
      {/* Trigger — stays pinned top-left so it reads as the same element morphing */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-12 w-12 shrink-0 items-center justify-center outline-none"
      >
        <motion.span
          className="flex items-center justify-center"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: easing }}
        >
          <Plus className="h-5 w-5 text-neutral-200" />
        </motion.span>
      </button>

      {/* Menu — always mounted, revealed as the container grows */}
      <motion.ul
        className="px-2 pb-2"
        aria-hidden={!open}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: open ? 0.1 : 0 }}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        {items.map((item, i) => (
          <motion.li
            key={item.label}
            animate={{
              opacity: open ? 1 : 0,
              x: open ? 0 : -10,
            }}
            transition={{
              duration: 0.28,
              ease: easing,
              delay: open ? 0.12 + i * 0.05 : 0,
            }}
          >
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-neutral-200 transition-colors hover:bg-white/10"
              style={{ height: ITEM_H }}
            >
              <item.icon className="h-4 w-4 shrink-0 text-neutral-400" />
              {item.label}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
