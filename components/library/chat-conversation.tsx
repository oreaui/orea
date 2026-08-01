"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type Msg = { id: number; role: "them" | "me"; text: string }

const conversation: Omit<Msg, "id">[] = [
  { role: "them", text: "Hey! Did you ship the new components?" },
  { role: "me", text: "Just pushed them 🚀" },
  { role: "them", text: "The morph animation is so smooth" },
  { role: "me", text: "All spring-based, buttery 60fps" },
]

export function ChatConversation() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) =>
      new Promise<void>((res) => timers.push(setTimeout(res, ms)))

    async function run() {
      while (!cancelled) {
        setMessages([])
        await wait(600)
        let id = 0
        for (const msg of conversation) {
          if (cancelled) return
          setTyping(true)
          await wait(msg.text.length * 22 + 500)
          if (cancelled) return
          setTyping(false)
          setMessages((prev) => [...prev, { ...msg, id: id++ }])
          await wait(650)
        }
        await wait(2400)
      }
    }
    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="flex w-72 flex-col gap-2">
      <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`flex ${msg.role === "me" ? "justify-end" : "justify-start"}`}
            >
              <span
                className={`max-w-[78%] rounded-2xl px-3 py-1.5 text-[13px] ${
                  msg.role === "me"
                    ? "rounded-br-sm bg-blue-600 text-white"
                    : "rounded-bl-sm bg-white/[0.08] text-neutral-100"
                }`}
              >
                {msg.text}
              </span>
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex justify-start"
            >
              <span className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/[0.08] px-3 py-2.5">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-neutral-400"
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY, delay: i * 0.15 }}
                  />
                ))}
              </span>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  )
}
