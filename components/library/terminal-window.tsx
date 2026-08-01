"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type Line =
  | { type: "cmd"; text: string }
  | { type: "out"; text: string; tone?: "muted" | "success" | "accent" }

const script: Line[] = [
  { type: "cmd", text: "npx orea add dynamic-island" },
  { type: "out", text: "◇ Resolving registry...", tone: "muted" },
  { type: "out", text: "◇ Fetching component source", tone: "muted" },
  { type: "out", text: "✔ Installed to components/ui", tone: "success" },
  { type: "cmd", text: "orea build --premium" },
  { type: "out", text: "▲ 12 components compiled", tone: "accent" },
  { type: "out", text: "✔ Done in 1.2s", tone: "success" },
]

const toneClass: Record<string, string> = {
  muted: "text-neutral-500",
  success: "text-emerald-400",
  accent: "text-blue-400",
}

export function TerminalWindow() {
  const [rendered, setRendered] = useState<Line[]>([])
  const [typing, setTyping] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let timers: ReturnType<typeof setTimeout>[] = []

    async function run() {
      const wait = (ms: number) =>
        new Promise<void>((res) => {
          const t = setTimeout(res, ms)
          timers.push(t)
        })

      while (!cancelled) {
        setRendered([])
        setTyping("")
        await wait(500)

        for (const line of script) {
          if (cancelled) return
          if (line.type === "cmd") {
            for (let i = 1; i <= line.text.length; i++) {
              if (cancelled) return
              setTyping(line.text.slice(0, i))
              await wait(34)
            }
            await wait(260)
            setTyping("")
            setRendered((prev) => [...prev, line])
          } else {
            setRendered((prev) => [...prev, line])
            await wait(240)
          }
        }
        await wait(2200)
      }
    }

    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [rendered, typing])

  return (
    <div className="w-72 overflow-hidden rounded-xl border border-white/10 bg-neutral-950/90 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-[11px] text-neutral-500">zsh — orea</span>
      </div>
      <div ref={scrollRef} className="h-40 overflow-hidden p-3 font-mono text-[12px] leading-relaxed">
        {rendered.map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.type === "cmd" ? (
              <>
                <span className="shrink-0 text-blue-400">$</span>
                <span className="text-neutral-100">{line.text}</span>
              </>
            ) : (
              <span className={toneClass[line.tone ?? "muted"]}>{line.text}</span>
            )}
          </div>
        ))}
        {typing && (
          <div className="flex gap-2">
            <span className="shrink-0 text-blue-400">$</span>
            <span className="text-neutral-100">
              {typing}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-blue-400"
              />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
