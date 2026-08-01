"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Music, Phone, PhoneOff, Timer } from "lucide-react"

type State = "idle" | "music" | "call" | "timer"

const order: State[] = ["idle", "music", "call", "timer"]

const sizes: Record<State, { width: number; height: number; radius: number }> = {
  idle: { width: 120, height: 36, radius: 20 },
  music: { width: 288, height: 72, radius: 30 },
  call: { width: 288, height: 72, radius: 30 },
  timer: { width: 200, height: 44, radius: 24 },
}

const spring = { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.9 }

export function DynamicIsland() {
  const [state, setState] = useState<State>("idle")

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i = (i + 1) % order.length
      setState(order[i])
    }, 2600)
    return () => clearInterval(t)
  }, [])

  const size = sizes[state]

  return (
    <div className="flex flex-col items-center gap-5">
      <motion.div
        animate={{ width: size.width, height: size.height, borderRadius: size.radius }}
        transition={spring}
        className="flex items-center justify-center overflow-hidden bg-black text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {state === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={spring}
              className="flex items-center gap-2 px-4"
            >
              <span className="h-2 w-2 rounded-full bg-neutral-600" />
            </motion.div>
          )}

          {state === "music" && (
            <motion.div
              key="music"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={spring}
              className="flex w-full items-center gap-3 px-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                <Music className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-[13px] font-medium">Midnight City</p>
                <p className="truncate text-[11px] text-neutral-400">M83</p>
              </div>
              <div className="flex items-end gap-0.5">
                {[0, 1, 2, 3].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1 rounded-full bg-blue-400"
                    animate={{ height: [6, 18, 10, 20, 6] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.12 }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {state === "call" && (
            <motion.div
              key="call"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={spring}
              className="flex w-full items-center gap-3 px-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-[13px] font-medium">Incoming call</p>
                <p className="truncate text-[11px] text-neutral-400">Ava Chen</p>
              </div>
              <div className="flex gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                <PhoneOff className="h-3.5 w-3.5" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                <Phone className="h-3.5 w-3.5" />
              </button>
              </div>
            </motion.div>
          )}

          {state === "timer" && (
            <motion.div
              key="timer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={spring}
              className="flex items-center gap-2 px-4"
            >
              <Timer className="h-4 w-4 text-orange-400" />
              <span className="font-mono text-sm tabular-nums">00:24</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex gap-1.5">
        {order.map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            aria-label={s}
            className={`h-1.5 rounded-full transition-all ${state === s ? "w-5 bg-white" : "w-1.5 bg-white/25"}`}
          />
        ))}
      </div>
    </div>
  )
}
