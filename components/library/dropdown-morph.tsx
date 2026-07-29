"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus, User, Settings, LogOut } from "lucide-react"

const items = [
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Sign out" },
]

export function DropdownMorph() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      onClick={() => setOpen((v) => !v)}
      className="cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-neutral-800/80 shadow-xl"
      style={{ borderRadius: open ? 16 : 999 }}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
    >
      <motion.div layout className="flex h-12 w-12 items-center justify-center">
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 24 }}>
          <Plus className="h-5 w-5 text-neutral-200" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-44 px-2 pb-2"
          >
            {items.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
