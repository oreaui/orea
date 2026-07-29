"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { title: "Northern Lights", tag: "Iceland", from: "#1e3a5f", to: "#0f2027" },
  { title: "Dune Sunset", tag: "Sahara", from: "#7c2d12", to: "#431407" },
  { title: "Deep Forest", tag: "Oregon", from: "#14532d", to: "#052e16" },
  { title: "Ocean Drift", tag: "Maldives", from: "#155e75", to: "#083344" },
]

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
}

export function Carousel() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const slide = slides[index]

  function paginate(delta: number) {
    setState(([i]) => [(i + delta + slides.length) % slides.length, delta])
  }

  return (
    <div className="flex w-full max-w-md min-w-[280px] flex-col items-center gap-4">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10">
        <AnimatePresence initial={false} custom={dir} mode="sync">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 32 }, opacity: { duration: 0.2 } }}
            className="absolute inset-0 flex flex-col justify-end p-5"
            style={{ background: `linear-gradient(135deg, ${slide.from}, ${slide.to})` }}
          >
            <span className="text-xs font-medium text-white/70">{slide.tag}</span>
            <span className="text-xl font-semibold text-white">{slide.title}</span>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          aria-label="Previous"
          className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => paginate(1)}
          aria-label="Next"
          className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setState([i, i > index ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === index ? 24 : 8,
              backgroundColor: i === index ? "#fff" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
