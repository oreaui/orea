"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy } from "lucide-react"

export function CopyField() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText("npm i Orea-ui")
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-800/60 py-2 pl-4 pr-2 font-mono text-sm text-neutral-200">
      <span className="text-neutral-500">$</span>
      npm i Orea-ui
      <button
        onClick={copy}
        aria-label="Copy"
        className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-neutral-300 hover:text-white"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span key="c" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <Check className="h-4 w-4 text-green-400" />
            </motion.span>
          ) : (
            <motion.span key="i" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <Copy className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
