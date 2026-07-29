"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, X } from "lucide-react"

type Toast = { id: number; text: string }

export function ToastStack() {
  const [toasts, setToasts] = useState<Toast[]>([])

  function push() {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, text: "Changes saved successfully" }])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3200)
  }

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4">
      <button onClick={push} className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900">
        Show toast
      </button>
      <div className="flex w-full flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-100"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
              <span className="flex-1">{toast.text}</span>
              <button
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                aria-label="Dismiss"
                className="text-neutral-500 hover:text-neutral-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
