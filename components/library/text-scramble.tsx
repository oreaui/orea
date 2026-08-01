"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const words = ["Premium", "Animated", "Effortless", "Beautiful"]
const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}=+*^?#"

export function TextScramble() {
  const [display, setDisplay] = useState(words[0])
  const frame = useRef(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    let wordIndex = 0
    let queue: { from: string; to: string; start: number; end: number }[] = []
    let frameReq: number

    function setText(newText: string) {
      const oldText = display
      const length = Math.max(oldText.length, newText.length)
      queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ""
        const to = newText[i] || ""
        const start = Math.floor(Math.random() * 20)
        const end = start + Math.floor(Math.random() * 20) + 12
        queue.push({ from, to, start, end })
      }
      frame.current = 0
      update()
    }

    function update() {
      let output = ""
      let complete = 0
      for (const item of queue) {
        const { from, to, start, end } = item
        if (frame.current >= end) {
          complete++
          output += to
        } else if (frame.current >= start) {
          const char = glyphs[Math.floor(Math.random() * glyphs.length)]
          output += char
        } else {
          output += from
        }
      }
      setDisplay(output)
      if (complete === queue.length) {
        return
      }
      frame.current++
      frameReq = requestAnimationFrame(update)
    }

    const interval = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length
      setText(words[wordIndex])
    }, 2200)

    raf.current = frameReq!
    return () => {
      clearInterval(interval)
      cancelAnimationFrame(frameReq!)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">Build something</span>
      <div className="flex h-14 items-center justify-center">
        <motion.span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text font-mono text-4xl font-semibold tracking-tight text-transparent">
          {display}
        </motion.span>
      </div>
      <span className="h-px w-40 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
    </div>
  )
}
