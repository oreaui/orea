"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search, FileText, Settings, User, ArrowRight } from "lucide-react"

const items = [
  { icon: FileText, label: "New document" },
  { icon: User, label: "Invite teammate" },
  { icon: Settings, label: "Open settings" },
  { icon: ArrowRight, label: "Go to dashboard" },
]

export function CommandPalette() {
  const [open, setOpen] = useState(true)
  const [query, setQuery] = useState("")

  const filtered = useMemo(
    () => items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border border-white/10 bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-100"
      >
        Toggle <kbd className="ml-1 rounded bg-white/10 px-1.5 py-0.5 text-xs">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="w-72 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/95 shadow-2xl backdrop-blur"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <Search className="h-4 w-4 text-neutral-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command..."
                className="w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
              />
            </div>
            <ul className="max-h-44 overflow-auto p-1.5">
              {filtered.map((item) => (
                <motion.li key={item.label} layout>
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/[0.06] hover:text-white">
                    <item.icon className="h-4 w-4 text-neutral-500" />
                    {item.label}
                  </button>
                </motion.li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-neutral-500">No results</li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
