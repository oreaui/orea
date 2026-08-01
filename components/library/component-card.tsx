"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy, Code2 } from "lucide-react"
import type { Entry } from "./registry"

export function ComponentCard({ entry }: { entry: Entry }) {
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const { Component } = entry

  async function copy() {
    await navigator.clipboard.writeText(entry.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={`group rounded-3xl border border-white/[0.06] bg-card/60 p-2 transition-colors hover:border-white/10 ${
        entry.span === 3 ? "sm:col-span-2 lg:col-span-3" : entry.span === 2 ? "sm:col-span-2" : ""
      }`}
    >
      {entry.pro && (
        <span className="float-right mr-3 mt-3 rounded-md bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
          New
        </span>
      )}
      <div className="flex h-64 items-center justify-center overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          {showCode ? (
            <motion.pre
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full overflow-auto rounded-2xl bg-black/40 p-4 text-left font-mono text-[11px] leading-relaxed text-neutral-300"
            >
              <code>{entry.code}</code>
            </motion.pre>
          ) : (
            <motion.div
              key="demo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex w-full items-center justify-center p-4"
            >
              <Component />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-3 px-3 py-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-medium text-neutral-100">{entry.title}</h3>
          <p className="truncate text-sm text-neutral-500">{entry.description}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            onClick={() => setShowCode((v) => !v)}
            aria-label="Toggle code"
            className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 transition-colors ${
              showCode ? "bg-white/10 text-white" : "text-neutral-400 hover:text-neutral-100"
            }`}
          >
            <Code2 className="h-4 w-4" />
          </button>
          <button
            onClick={copy}
            aria-label="Copy code"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-neutral-400 transition-colors hover:text-neutral-100"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Check className="h-4 w-4 text-green-400" />
                </motion.span>
              ) : (
                <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Copy className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
