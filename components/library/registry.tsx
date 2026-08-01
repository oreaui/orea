import type { ComponentType } from "react"
import { TiltCard } from "./tilt-card"
import { DropdownMorph } from "./dropdown-morph"
import { AccordionDemo } from "./accordion-demo"
import { LikeButton } from "./like-button"
import { LearnMore } from "./learn-more"
import { CheckboxDraw } from "./checkbox-draw"
import { SpinningCounter } from "./spinning-counter"
import { ToggleBounce } from "./toggle-bounce"
import { SkeletonReveal } from "./skeleton-reveal"
import { TextReveal } from "./text-reveal"
import { TabsSlide } from "./tabs-slide"
import { TooltipDemo } from "./tooltip-demo"
import { HeroReveal } from "./hero-reveal"
import { Carousel } from "./carousel"
import { Marquee } from "./marquee"
import { MagneticButton } from "./magnetic-button"
import { SpotlightCard } from "./spotlight-card"
import { GradientText } from "./gradient-text"
import { ShimmerText } from "./shimmer-text"
import { Typewriter } from "./typewriter"
import { ProgressRing } from "./progress-ring"
import { StarRating } from "./star-rating"
import { Dock } from "./dock"
import { ToastStack } from "./toast-stack"
import { AvatarGroup } from "./avatar-group"
import { ConfettiButton } from "./confetti-button"
import { SegmentedControl } from "./segmented-control"
import { AnimatedModal } from "./animated-modal"
import { NumberTicker } from "./number-ticker"
import { CopyField } from "./copy-field"
import { BarChartGrow } from "./bar-chart-grow"
import { NotificationBell } from "./notification-bell"
import { AuroraBackground } from "./aurora-background"
import { MockChat } from "./mock-chat"
import { SearchGlow } from "./search-glow"
import { OtpInput } from "./otp-input"
import { CommandPalette } from "./command-palette"
import { ThemeToggle } from "./theme-toggle"
import { TerminalWindow } from "./terminal-window"
import { TextScramble } from "./text-scramble"
import { ChatConversation } from "./chat-conversation"
import { RotatingTabs } from "./rotating-tabs"
import { DynamicIsland } from "./dynamic-island"

export type Entry = {
  id: string
  title: string
  description: string
  pro?: boolean
  span?: 2 | 3
  Component: ComponentType
  code: string
}

export const registry: Entry[] = [
  {
    id: "tilt-card",
    title: "3D tilt",
    description: "3D pointer tilt with cursor glare",
    Component: TiltCard,
    code: `"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

export function TiltCard() {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 22)
    rotateX.set((0.5 - py) * 22)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  const glare = useMotionTemplate\`radial-gradient(circle at \${glareX}% \${glareY}%, rgba(255,255,255,0.28), transparent 55%)\`

  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => { rotateX.set(0); rotateY.set(0) }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-44 w-72 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-5"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: glare }} />
        {/* card content */}
      </motion.div>
    </div>
  )
}`,
  },
  {
    id: "dropdown-morph",
    title: "Dropdown menu morph",
    description: "Button morphs into a menu surface",
    Component: DropdownMorph,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, User, Settings, LogOut } from "lucide-react"

const items = [
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Sign out" },
]

// Explicit dimensions keep the morph perfectly smooth (no "height: auto" measuring).
const SIZE = 48
const ITEM_H = 40
const OPEN_WIDTH = 208
const OPEN_HEIGHT = SIZE + items.length * ITEM_H + 8
const easing = [0.22, 1, 0.36, 1] as const

export function DropdownMorph() {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="overflow-hidden border border-white/10 bg-neutral-800/90 shadow-xl"
      initial={false}
      animate={{
        width: open ? OPEN_WIDTH : SIZE,
        height: open ? OPEN_HEIGHT : SIZE,
        borderRadius: open ? 20 : 999,
      }}
      transition={{ duration: 0.4, ease: easing }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex h-12 w-12 shrink-0 items-center justify-center outline-none"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.4, ease: easing }}>
          <Plus className="h-5 w-5 text-neutral-200" />
        </motion.span>
      </button>
      <motion.ul
        className="px-2 pb-2"
        aria-hidden={!open}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: open ? 0.1 : 0 }}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        {items.map((item, i) => (
          <motion.li
            key={item.label}
            animate={{ opacity: open ? 1 : 0, x: open ? 0 : -10 }}
            transition={{ duration: 0.28, ease: easing, delay: open ? 0.12 + i * 0.05 : 0 }}
          >
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-neutral-200 transition-colors hover:bg-white/10"
              style={{ height: ITEM_H }}
            >
              <item.icon className="h-4 w-4 shrink-0 text-neutral-400" />
              {item.label}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}`,
  },
  {
    id: "accordion",
    title: "Accordion",
    description: "Grid-rows height with chevron morph",
    Component: AccordionDemo,
    code: `"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function AccordionDemo() {
  const [open, setOpen] = useState(true)
  return (
    <div className="w-64 overflow-hidden rounded-xl border border-white/10 bg-neutral-800/60">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-sm text-neutral-100">
        Appearance
        <motion.span animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown className="h-4 w-4 text-neutral-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-sm text-neutral-400">Choose how the interface looks.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}`,
  },
  {
    id: "like-button",
    title: "Like button",
    description: "Heart pops with a burst of particles",
    Component: LikeButton,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function LikeButton() {
  const [liked, setLiked] = useState(false)
  return (
    <button onClick={() => setLiked((v) => !v)} className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-800/80 px-5 py-2.5 text-sm text-neutral-100">
      <motion.span animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }} transition={{ duration: 0.35 }}>
        <Heart className="h-4 w-4" fill={liked ? "#ef4444" : "transparent"} color={liked ? "#ef4444" : "currentColor"} />
      </motion.span>
      Like
    </button>
  )
}`,
  },
  {
    id: "learn-more",
    title: "Learn more hover",
    description: "Chevron shifts and opens on hover",
    Component: LearnMore,
    code: `"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function LearnMore() {
  return (
    <motion.button initial="rest" whileHover="hover" className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-800/80 py-2.5 pl-5 pr-4 text-sm text-neutral-100">
      Learn more
      <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
        <ChevronRight className="h-4 w-4" />
      </motion.span>
    </motion.button>
  )
}`,
  },
  {
    id: "checkbox-draw",
    title: "Checkbox check",
    description: "Check draws on with a stroke path",
    Component: CheckboxDraw,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function CheckboxDraw() {
  const [checked, setChecked] = useState(false)
  return (
    <button onClick={() => setChecked((v) => !v)} className="flex items-center gap-3 text-sm text-neutral-100">
      <motion.span
        animate={{ backgroundColor: checked ? "#3b82f6" : "rgba(255,255,255,0)", borderColor: checked ? "#3b82f6" : "rgba(255,255,255,0.25)" }}
        className="flex h-5 w-5 items-center justify-center rounded-md border"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <motion.path d="M4 12.5L9.5 18L20 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
            transition={{ pathLength: { duration: 0.3, ease: "easeInOut" }, opacity: { duration: checked ? 0.05 : 0.15 } }} />
        </svg>
      </motion.span>
      Notify me
    </button>
  )
}`,
  },
  {
    id: "spinning-counter",
    title: "Spinning counter",
    description: "Digits spin like a reel to the value",
    Component: SpinningCounter,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"

function Digit({ value }: { value: number }) {
  return (
    <div className="relative h-10 w-6 overflow-hidden">
      <motion.div animate={{ y: \`-\${value * 10}%\` }} transition={{ type: "spring", stiffness: 200, damping: 26 }} className="absolute inset-x-0 flex flex-col">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="flex h-10 items-center justify-center text-3xl font-semibold text-white">{i}</span>
        ))}
      </motion.div>
    </div>
  )
}

export function SpinningCounter() {
  const [value, setValue] = useState(0)
  const digits = String(value).padStart(3, "0").split("").map(Number)
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex">{digits.map((d, i) => <Digit key={i} value={d} />)}</div>
      <button onClick={() => setValue(Math.floor(Math.random() * 1000))} className="rounded-full bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-100">Animate</button>
    </div>
  )
}`,
  },
  {
    id: "toggle",
    title: "Toggle",
    description: "Thumb slides with a spring bounce",
    Component: ToggleBounce,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function ToggleBounce() {
  const [on, setOn] = useState(false)
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="flex h-8 w-14 items-center rounded-full p-1"
      style={{ backgroundColor: on ? "#3b82f6" : "rgba(255,255,255,0.15)", justifyContent: on ? "flex-end" : "flex-start" }}
    >
      <motion.span layout transition={{ type: "spring", stiffness: 700, damping: 22, mass: 0.6 }} className="h-6 w-6 rounded-full bg-white" />
    </button>
  )
}`,
  },
  {
    id: "skeleton-reveal",
    title: "Skeleton loader and reveal",
    description: "Pulse to content cross-fade",
    Component: SkeletonReveal,
    code: `"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function SkeletonReveal() {
  const [loading, setLoading] = useState(true)
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="s" exit={{ opacity: 0 }} className="flex items-center gap-3">
          <div className="h-10 w-10 animate-pulse rounded-full bg-white/10" />
          <div className="flex flex-col gap-2">
            <div className="h-3 w-40 animate-pulse rounded bg-white/10" />
            <div className="h-3 w-28 animate-pulse rounded bg-white/10" />
          </div>
        </motion.div>
      ) : (
        <motion.div key="c" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
          {/* content */}
        </motion.div>
      )}
    </AnimatePresence>
  )
}`,
  },
  {
    id: "text-reveal",
    title: "Texts reveal",
    description: "Two lines rise with offset stagger",
    Component: TextReveal,
    code: `"use client"

import { motion } from "framer-motion"

const lines = ["Pull request opened", "Review requested from 3 teammates"]

export function TextReveal() {
  return (
    <div className="flex flex-col items-center">
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 300, damping: 28 }}
          >
            {line}
          </motion.p>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    id: "tabs-slide",
    title: "Tabs sliding",
    description: "Pill indicator follows the active tab",
    Component: TabsSlide,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const tabs = ["Plan", "Debug", "Ask"]

export function TabsSlide() {
  const [active, setActive] = useState(2)
  return (
    <div className="flex gap-1 rounded-full border border-white/10 bg-neutral-800/60 p-1">
      {tabs.map((tab, i) => (
        <button key={tab} onClick={() => setActive(i)} className="relative rounded-full px-4 py-1.5 text-sm font-medium">
          {active === i && (
            <motion.span layoutId="tab-pill" transition={{ type: "spring", stiffness: 400, damping: 30 }} className="absolute inset-0 rounded-full bg-white/15" />
          )}
          <span className={\`relative z-10 \${active === i ? "text-white" : "text-neutral-400"}\`}>{tab}</span>
        </button>
      ))}
    </div>
  )
}`,
  },
  {
    id: "tooltip",
    title: "Tooltip open/close",
    description: "Appear-only delay, instant exit",
    Component: TooltipDemo,
    code: `"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function TooltipDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
            transition={{ delay: 0.35, type: "spring", stiffness: 400, damping: 26 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-white px-3 py-1.5 text-xs text-neutral-900"
          >
            Nice to meet you
          </motion.div>
        )}
      </AnimatePresence>
      <button onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="rounded-full border border-white/10 bg-neutral-800/80 px-5 py-2.5 text-sm text-neutral-100">
        Hover me
      </button>
    </div>
  )
}`,
  },
  {
    id: "hero-reveal",
    title: "Hero reveal",
    description: "Headline words rise word-by-word",
    span: 3,
    Component: HeroReveal,
    code: `"use client"

import { motion } from "framer-motion"

const words = ["Build", "premium", "interfaces", "that", "feel", "alive."]

export function HeroReveal() {
  return (
    <h2 className="flex flex-wrap justify-center gap-x-2 text-4xl font-semibold text-neutral-50">
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden py-1">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, type: "spring", stiffness: 300, damping: 26 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  )
}`,
  },
  {
    id: "carousel",
    title: "Carousel",
    description: "Slides spring in with directional swipe",
    span: 2,
    Component: Carousel,
    code: `"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
}

export function Carousel() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  function paginate(delta: number) {
    setState(([i]) => [(i + delta + slides.length) % slides.length, delta])
  }
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-2xl">
      {/* mode="sync" keeps absolute slides full-width; popLayout collapses them */}
      <AnimatePresence initial={false} custom={dir} mode="sync">
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 32 }, opacity: { duration: 0.2 } }}
          className="absolute inset-0"
        >
          {/* slide content */}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}`,
  },
  {
    id: "marquee",
    title: "Marquee",
    description: "Infinite logo strip with edge fade",
    span: 2,
    Component: Marquee,
    code: `"use client"

import { motion } from "framer-motion"

const items = ["Vercel", "Next.js", "React", "Framer", "Tailwind"]

export function Marquee() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-neutral-300">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}`,
  },
  {
    id: "magnetic-button",
    title: "Magnetic button",
    description: "Button chases the cursor with spring",
    Component: MagneticButton,
    code: `"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 15 })

  function handleMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ x, y }}
      className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-900"
    >
      Magnetic
    </motion.button>
  )
}`,
  },
  {
    id: "spotlight-card",
    title: "Spotlight card",
    description: "Radial glow tracks the pointer",
    Component: SpotlightCard,
    code: `"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

export function SpotlightCard() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  function handleMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect()
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate\`radial-gradient(240px circle at \${mx}px \${my}px, rgba(59,130,246,0.18), transparent 70%)\`

  return (
    <div ref={ref} onMouseMove={handleMove} className="relative h-48 w-72 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6">
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      {/* content */}
    </div>
  )
}`,
  },
  {
    id: "gradient-text",
    title: "Pro gradient text",
    description: "Colour washes orbit the letters",
    pro: true,
    Component: GradientText,
    code: `"use client"

import { motion } from "framer-motion"

export function GradientText() {
  return (
    <motion.span
      className="bg-clip-text text-6xl font-bold text-transparent"
      style={{
        backgroundImage: "linear-gradient(90deg, #ec4899, #f59e0b, #22d3ee, #3b82f6, #ec4899)",
        backgroundSize: "300% 100%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, ease: "linear", repeat: Infinity }}
    >
      Pro
    </motion.span>
  )
}`,
  },
  {
    id: "shimmer-text",
    title: "Shimmer text",
    description: "Masked gradient sweep across text",
    Component: ShimmerText,
    code: `"use client"

import { motion } from "framer-motion"

export function ShimmerText() {
  return (
    <motion.span
      className="bg-clip-text text-xl font-medium text-transparent"
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.25) 40%, #fff 50%, rgba(255,255,255,0.25) 60%)",
        backgroundSize: "200% 100%",
      }}
      animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
      transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
    >
      Planning next moves
    </motion.span>
  )
}`,
  },
  {
    id: "typewriter",
    title: "Typewriter",
    description: "Types and deletes rotating phrases",
    Component: Typewriter,
    code: `"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const phrases = ["design systems.", "micro-interactions.", "delightful UIs."]

export function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    const timeout = setTimeout(() => {
      if (!deleting && text === current) setDeleting(true)
      else if (deleting && text === "") { setDeleting(false); setIndex((i) => (i + 1) % phrases.length) }
      else setText(current.slice(0, text.length + (deleting ? -1 : 1)))
    }, deleting ? 45 : text === current ? 1200 : 90)
    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <p className="text-lg font-medium text-neutral-100">
      We craft <span className="text-blue-400">{text}</span>
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="ml-0.5 inline-block h-5 w-0.5 bg-blue-400" />
    </p>
  )
}`,
  },
  {
    id: "progress-ring",
    title: "Progress ring",
    description: "Stroke sweeps to an animated value",
    Component: ProgressRing,
    code: `"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

export function ProgressRing() {
  const [target, setTarget] = useState(72)
  const progress = useMotionValue(0)
  const c = 2 * Math.PI * 52
  const offset = useTransform(progress, (p) => c * (1 - p / 100))
  const label = useTransform(progress, (p) => Math.round(p).toString())

  useEffect(() => {
    const controls = animate(progress, target, { duration: 1.1, ease: "easeOut" })
    return controls.stop
  }, [target, progress])

  return (
    <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
      <motion.circle cx="60" cy="60" r="52" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round"
        strokeDasharray={c} style={{ strokeDashoffset: offset }} />
    </svg>
  )
}`,
  },
  {
    id: "star-rating",
    title: "Star rating",
    description: "Stars spring and fill on hover",
    Component: StarRating,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function StarRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((value) => {
        const active = value <= (hover || rating)
        return (
          <motion.button key={value} onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)} onMouseLeave={() => setHover(0)}
            whileTap={{ scale: 0.8 }} animate={{ scale: active ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <Star className="h-7 w-7" fill={active ? "#f59e0b" : "transparent"} color={active ? "#f59e0b" : "rgba(255,255,255,0.25)"} />
          </motion.button>
        )
      })}
    </div>
  )
}`,
  },
  {
    id: "dock",
    title: "Magnify dock",
    description: "macOS-style icons scale near cursor",
    span: 2,
    Component: Dock,
    code: `"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion"

function DockItem({ mouseX, Icon }: { mouseX: MotionValue<number>; Icon: any }) {
  const ref = useRef<HTMLDivElement>(null)
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })
  const size = useSpring(useTransform(distance, [-120, 0, 120], [44, 72, 44]), { stiffness: 300, damping: 20 })
  return (
    <motion.div ref={ref} style={{ width: size, height: size }} className="flex items-center justify-center rounded-2xl bg-white/[0.06]">
      <Icon className="h-5 w-5 text-neutral-200" />
    </motion.div>
  )
}

export function Dock({ apps }: { apps: any[] }) {
  const mouseX = useMotionValue(Infinity)
  return (
    <div onMouseMove={(e) => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)} className="flex items-end gap-3 rounded-2xl bg-black/30 p-3">
      {apps.map((Icon, i) => <DockItem key={i} mouseX={mouseX} Icon={Icon} />)}
    </div>
  )
}`,
  },
  {
    id: "toast-stack",
    title: "Toast stack",
    description: "Toasts spring in and swipe away",
    Component: ToastStack,
    code: `"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function ToastStack() {
  const [toasts, setToasts] = useState<{ id: number; text: string }[]>([])
  function push() {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, text: "Changes saved" }])
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3200)
  }
  return (
    <AnimatePresence>
      {toasts.map((toast) => (
        <motion.div key={toast.id} layout
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
          className="rounded-xl border border-white/10 bg-neutral-800 px-3 py-2.5 text-sm">
          {toast.text}
        </motion.div>
      ))}
    </AnimatePresence>
  )
}`,
  },
  {
    id: "avatar-group",
    title: "Avatar group",
    description: "Avatars lift out of the stack on hover",
    Component: AvatarGroup,
    code: `"use client"

import { motion } from "framer-motion"

export function AvatarGroup({ people }: { people: { name: string; color: string }[] }) {
  return (
    <div className="flex">
      {people.map((person, i) => (
        <motion.div key={person.name}
          whileHover={{ y: -8, scale: 1.08, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="-ml-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-neutral-900 text-sm font-semibold text-white first:ml-0"
          style={{ backgroundColor: person.color, zIndex: people.length - i }}>
          {person.name}
        </motion.div>
      ))}
    </div>
  )
}`,
  },
  {
    id: "confetti-button",
    title: "Confetti button",
    description: "Particles burst radially on click",
    Component: ConfettiButton,
    code: `"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const colors = ["#3b82f6", "#ec4899", "#f59e0b", "#10b981", "#8b5cf6"]

export function ConfettiButton() {
  const [bursts, setBursts] = useState<number[]>([])
  function fire() {
    const id = Date.now()
    setBursts((prev) => [...prev, id])
    setTimeout(() => setBursts((p) => p.filter((b) => b !== id)), 900)
  }
  return (
    <div className="relative">
      <AnimatePresence>
        {bursts.map((id) => (
          <div key={id} className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 14 }).map((_, i) => {
              const angle = (i / 14) * Math.PI * 2
              return (
                <motion.span key={i} initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ x: Math.cos(angle) * 70, y: Math.sin(angle) * 70, opacity: 0, scale: 0.4 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute h-2 w-2 rounded-sm" style={{ backgroundColor: colors[i % colors.length] }} />
              )
            })}
          </div>
        ))}
      </AnimatePresence>
      <motion.button onClick={fire} whileTap={{ scale: 0.92 }} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900">
        Celebrate
      </motion.button>
    </div>
  )
}`,
  },
  {
    id: "segmented-control",
    title: "Segmented control",
    description: "Active pill slides between options",
    Component: SegmentedControl,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function SegmentedControl({ options }: { options: string[] }) {
  const [active, setActive] = useState(1)
  return (
    <div className="flex rounded-xl border border-white/10 bg-neutral-800/60 p-1">
      {options.map((option, i) => (
        <button key={option} onClick={() => setActive(i)} className="relative rounded-lg px-4 py-2 text-sm font-medium">
          {active === i && (
            <motion.span layoutId="segment" transition={{ type: "spring", stiffness: 400, damping: 32 }} className="absolute inset-0 rounded-lg bg-white/10" />
          )}
          <span className={\`relative z-10 \${active === i ? "text-white" : "text-neutral-400"}\`}>{option}</span>
        </button>
      ))}
    </div>
  )
}`,
  },
  {
    id: "animated-modal",
    title: "Animated dialog",
    description: "Backdrop blur with spring scale-in",
    Component: AnimatedModal,
    code: `"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function AnimatedModal() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900">Open dialog</button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 z-10 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="fixed left-1/2 top-1/2 z-20 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-neutral-900 p-5">
              {/* dialog content */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}`,
  },
  {
    id: "number-ticker",
    title: "Number ticker",
    description: "Counts up when scrolled into view",
    Component: NumberTicker,
    code: `"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"

export function NumberTicker() {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => \`$\${Math.round(v).toLocaleString()}\`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, 48250, { duration: 2, ease: "easeOut" })
    return controls.stop
  }, [inView, count])

  return <motion.span ref={ref} className="text-4xl font-bold tabular-nums text-neutral-50">{rounded}</motion.span>
}`,
  },
  {
    id: "copy-field",
    title: "Copy field",
    description: "Icon swaps to a check on copy",
    Component: CopyField,
    code: `"use client"

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
    <button onClick={copy} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-neutral-300">
      <AnimatePresence mode="wait" initial={false}>
        {copied
          ? <motion.span key="c" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check className="h-4 w-4 text-green-400" /></motion.span>
          : <motion.span key="i" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Copy className="h-4 w-4" /></motion.span>}
      </AnimatePresence>
    </button>
  )
}`,
  },
  {
    id: "bar-chart",
    title: "Bar chart grow",
    description: "Bars spring up with staggered delay",
    Component: BarChartGrow,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const initial = [40, 65, 45, 80, 55, 90, 70]

export function BarChartGrow() {
  const [data, setData] = useState(initial)
  const [key, setKey] = useState(0)
  return (
    <div className="flex h-32 items-end gap-2">
      {data.map((value, i) => (
        <motion.div key={\`\${key}-\${i}\`}
          initial={{ height: 0 }}
          animate={{ height: \`\${value}%\` }}
          transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 20 }}
          className="w-6 rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400" />
      ))}
    </div>
  )
}`,
  },
  {
    id: "notification-bell",
    title: "Notification bell",
    description: "Bell shakes and badge pops on ring",
    Component: NotificationBell,
    code: `"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bell } from "lucide-react"

export function NotificationBell() {
  const [count, setCount] = useState(3)
  const [ring, setRing] = useState(false)
  function shake() {
    setCount((c) => c + 1)
    setRing(true)
    setTimeout(() => setRing(false), 700)
  }
  return (
    <button onClick={shake} className="relative rounded-full border border-white/10 bg-neutral-800/80 p-3.5">
      <motion.span animate={ring ? { rotate: [0, -18, 16, -12, 8, 0] } : { rotate: 0 }} transition={{ duration: 0.6 }} style={{ transformOrigin: "top center" }} className="block">
        <Bell className="h-5 w-5 text-neutral-200" />
      </motion.span>
      <AnimatePresence>
        {count > 0 && (
          <motion.span key={count} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white">
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}`,
  },
  {
    id: "aurora-background",
    title: "Aurora background",
    description: "Animated glowing ambient orbs backdrop",
    span: 2,
    Component: AuroraBackground,
    code: `"use client"

import { motion } from "framer-motion"

export function AuroraBackground() {
  return (
    <div className="relative h-48 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%)" }}
        animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/3 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.45), transparent 70%)" }}
        animate={{ x: [0, -100, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.4), transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
      />
      <div className="relative flex h-full items-center justify-center">
        <span className="text-lg font-semibold text-white/90">Orea</span>
      </div>
    </div>
  )
}`,
  },
  {
    id: "mock-chat",
    title: "Mock chat input",
    description: "Compact prompt input box with tags and send button",
    Component: MockChat,
    code: `"use client"

import React from "react"
import { motion } from "framer-motion"

interface TagProps {
  label: string
  icon?: React.ReactNode
}

interface MockChatProps {
  placeholder?: string
  className?: string
}

const Tag: React.FC<TagProps> = ({ label, icon }) => (
  <div className="flex items-center gap-1 px-[8px] pr-[6px] h-6 bg-white/5 rounded-[36px] text-[12px] text-[#caccce] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),inset_0_1px_0_0_rgba(255,255,255,0.04)] cursor-pointer hover:bg-white/10 transition-colors">
    {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
    <span>{label}</span>
  </div>
)

export function MockChat({ 
  placeholder = "Build anything...",
  className = "" 
}: MockChatProps) {
  return (
    <div className={\`group relative inline-block rounded-[20px] p-[1px] overflow-hidden bg-[#1d1d1d] shadow-[inset_0_0_0_1px_rgba(44,47,54,0.52),inset_0_0_50px_0_rgba(255,255,255,0.02)] \${className}\`}>
      {/* Animated Border Beam Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px]">
        <motion.div
          className="absolute -inset-[100%] opacity-80 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, rgba(59,130,246,0.9) 320deg, rgba(168,85,247,0.9) 350deg, transparent 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Inner Content Container */}
      <div className="relative rounded-[19px] bg-[#1d1d1d]">
        <div className="mock-chat-inner flex flex-col w-[273px] min-h-[100px] p-[7px_7px_8px] bg-transparent font-sans text-[#fbfbfb]">
          <div className="placeholder pt-2 px-1 pb-0 text-[13px] text-[#4e4e4e] selection:bg-white/10">
            {placeholder}
          </div>

          <div className="bottom-row mt-[23px] flex items-center gap-2">
            <Tag 
              label="Agent" 
              icon={
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 11L10 8L7 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              } 
            />
            <Tag label="Auto" />

            <button className="send-btn ml-auto w-7 h-7 flex items-center justify-center bg-white/5 rounded-full text-[#fbfbfb] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:bg-white/10 active:scale-95 transition-all outline-none">
              <svg width="12" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12.6667V3.33333M12.6667 8L8 3.33333L3.33333 8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    id: "search-glow",
    title: "Rainbow search",
    description: "Search bar with a rainbow glow that blooms on focus",
    pro: true,
    span: 2,
    Component: SearchGlow,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export function SearchGlow() {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-[22px] border border-white/[0.06] bg-neutral-900/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="relative z-10 flex items-center gap-3 px-5 py-4">
        <Search className="h-5 w-5 shrink-0 text-neutral-500" />
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search"
          className="w-full bg-transparent text-[15px] text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
        />
      </div>

      {/* Rainbow glow bleeding softly from the bottom edge */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 bottom-0 h-3 translate-y-1/2 rounded-full blur-lg"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #f472b6 20%, #f59e0b 40%, #34d399 60%, #22d3ee 78%, #6366f1 92%, transparent 100%)",
        }}
        animate={{ opacity: focused ? 0.85 : 0.5, scaleX: focused ? 1 : 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
      />
    </div>
  )
}`,
  },
  {
    id: "otp-input",
    title: "OTP input",
    description: "Auto-advancing code fields that pop and turn green",
    Component: OtpInput,
    code: `"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export function OtpInput() {
  const [values, setValues] = useState(["", "", "", ""])
  const refs = useRef<(HTMLInputElement | null)[]>([])

  function handleChange(i: number, v: string) {
    const digit = v.replace(/\\D/g, "").slice(-1)
    setValues((prev) => {
      const next = [...prev]
      next[i] = digit
      return next
    })
    if (digit && i < 3) refs.current[i + 1]?.focus()
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !values[i] && i > 0) refs.current[i - 1]?.focus()
  }

  const complete = values.every(Boolean)

  return (
    <div className="flex gap-3">
      {values.map((value, i) => (
        <motion.input
          key={i}
          ref={(el) => { refs.current[i] = el }}
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          inputMode="numeric"
          maxLength={1}
          animate={{
            scale: value ? [1, 1.12, 1] : 1,
            borderColor: complete ? "#34d399" : value ? "#3b82f6" : "rgba(255,255,255,0.12)",
          }}
          transition={{ duration: 0.2 }}
          className="h-14 w-12 rounded-xl border bg-neutral-800/60 text-center text-2xl font-semibold text-neutral-50 focus:outline-none"
        />
      ))}
    </div>
  )
}`,
  },
  {
    id: "command-palette",
    title: "Command palette",
    description: "Spring-in ⌘K menu with live filtering",
    pro: true,
    span: 2,
    Component: CommandPalette,
    code: `"use client"

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
      <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-white/10 bg-neutral-800/80 px-4 py-1.5 text-sm text-neutral-100">
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
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a command..." className="w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none" />
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
              {filtered.length === 0 && <li className="px-3 py-6 text-center text-sm text-neutral-500">No results</li>}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}`,
  },
  {
    id: "theme-toggle",
    title: "Theme toggle",
    description: "Sun morphs into a moon with animated rays",
    Component: ThemeToggle,
    code: `"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [dark, setDark] = useState(true)

  return (
    <button
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle theme"
      className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10"
      style={{ backgroundColor: dark ? "#0b1020" : "#e0f2fe" }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 h-2.5 w-0.5 rounded-full bg-amber-400"
          style={{ transform: \`translate(-50%, -50%) rotate(\${i * 45}deg) translateY(-18px)\` }}
          animate={{ scaleY: dark ? 0 : 1, opacity: dark ? 0 : 1 }}
          transition={{ delay: dark ? 0 : i * 0.03, duration: 0.2 }}
        />
      ))}
      <motion.div
        animate={{
          scale: dark ? 1 : 0.9,
          backgroundColor: dark ? "#e2e8f0" : "#fbbf24",
          boxShadow: dark ? "0 0 0 0 transparent" : "0 0 20px 3px rgba(251,191,36,0.6)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative h-8 w-8 overflow-hidden rounded-full"
      >
        <motion.div
          animate={{ x: dark ? 8 : 32, y: dark ? -4 : -12 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute h-8 w-8 rounded-full"
          style={{ backgroundColor: "#0b1020" }}
        />
      </motion.div>
    </button>
  )
}`,
  },
  {
    id: "terminal-window",
    title: "Terminal",
    description: "Auto-typing terminal with animated command output",
    span: 2,
    Component: TerminalWindow,
    code: `"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type Line =
  | { type: "cmd"; text: string }
  | { type: "out"; text: string; tone?: "muted" | "success" | "accent" }

const script: Line[] = [
  { type: "cmd", text: "npx orea add dynamic-island" },
  { type: "out", text: "✔ Installed to components/ui", tone: "success" },
  { type: "cmd", text: "orea build --premium" },
  { type: "out", text: "✔ Done in 1.2s", tone: "success" },
]

export function TerminalWindow() {
  const [rendered, setRendered] = useState<Line[]>([])
  const [typing, setTyping] = useState("")

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) => new Promise<void>((res) => timers.push(setTimeout(res, ms)))

    async function run() {
      while (!cancelled) {
        setRendered([]); setTyping(""); await wait(500)
        for (const line of script) {
          if (cancelled) return
          if (line.type === "cmd") {
            for (let i = 1; i <= line.text.length; i++) { setTyping(line.text.slice(0, i)); await wait(34) }
            await wait(260); setTyping(""); setRendered((p) => [...p, line])
          } else { setRendered((p) => [...p, line]); await wait(240) }
        }
        await wait(2200)
      }
    }
    run()
    return () => { cancelled = true; timers.forEach(clearTimeout) }
  }, [])

  return (
    <div className="w-72 overflow-hidden rounded-xl border border-white/10 bg-neutral-950/90">
      <div className="flex gap-1.5 border-b border-white/[0.06] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
      </div>
      <div className="h-40 p-3 font-mono text-[12px] leading-relaxed">
        {rendered.map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.type === "cmd"
              ? <><span className="text-blue-400">$</span><span className="text-neutral-100">{line.text}</span></>
              : <span className="text-emerald-400">{line.text}</span>}
          </div>
        ))}
        {typing && (
          <div className="flex gap-2">
            <span className="text-blue-400">$</span>
            <span className="text-neutral-100">{typing}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }}
                className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-blue-400" />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    id: "text-scramble",
    title: "Text scramble",
    description: "Glyph decode effect that morphs between words",
    Component: TextScramble,
    code: `"use client"

import { useEffect, useRef, useState } from "react"

const words = ["Premium", "Animated", "Effortless", "Beautiful"]
const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_/[]{}=+*^?#"

export function TextScramble() {
  const [display, setDisplay] = useState(words[0])
  const frame = useRef(0)

  useEffect(() => {
    let wordIndex = 0
    let queue: { from: string; to: string; start: number; end: number }[] = []
    let req: number

    function setText(next: string) {
      const prev = display
      const len = Math.max(prev.length, next.length)
      queue = []
      for (let i = 0; i < len; i++) {
        const start = Math.floor(Math.random() * 20)
        queue.push({ from: prev[i] || "", to: next[i] || "", start, end: start + Math.floor(Math.random() * 20) + 12 })
      }
      frame.current = 0
      update()
    }

    function update() {
      let out = "", done = 0
      for (const q of queue) {
        if (frame.current >= q.end) { done++; out += q.to }
        else if (frame.current >= q.start) out += glyphs[Math.floor(Math.random() * glyphs.length)]
        else out += q.from
      }
      setDisplay(out)
      if (done === queue.length) return
      frame.current++
      req = requestAnimationFrame(update)
    }

    const interval = setInterval(() => { wordIndex = (wordIndex + 1) % words.length; setText(words[wordIndex]) }, 2200)
    return () => { clearInterval(interval); cancelAnimationFrame(req) }
  }, [])

  return (
    <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text font-mono text-4xl font-semibold text-transparent">
      {display}
    </span>
  )
}`,
  },
  {
    id: "chat-conversation",
    title: "Chat conversation",
    description: "Messages stream in with a bouncing typing indicator",
    span: 2,
    Component: ChatConversation,
    code: `"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type Msg = { id: number; role: "them" | "me"; text: string }
const conversation: Omit<Msg, "id">[] = [
  { role: "them", text: "Did you ship the new components?" },
  { role: "me", text: "Just pushed them 🚀" },
  { role: "them", text: "The morph is so smooth" },
]

export function ChatConversation() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) => new Promise<void>((res) => timers.push(setTimeout(res, ms)))
    async function run() {
      while (!cancelled) {
        setMessages([]); await wait(600); let id = 0
        for (const msg of conversation) {
          setTyping(true); await wait(msg.text.length * 22 + 500)
          setTyping(false); setMessages((p) => [...p, { ...msg, id: id++ }]); await wait(650)
        }
        await wait(2400)
      }
    }
    run()
    return () => { cancelled = true; timers.forEach(clearTimeout) }
  }, [])

  return (
    <div className="flex w-72 flex-col gap-2">
      <AnimatePresence initial={false}>
        {messages.map((msg) => (
          <motion.div key={msg.id} layout
            initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={\`flex \${msg.role === "me" ? "justify-end" : "justify-start"}\`}>
            <span className={\`max-w-[78%] rounded-2xl px-3 py-1.5 text-[13px] \${msg.role === "me" ? "bg-blue-600 text-white" : "bg-white/[0.08] text-neutral-100"}\`}>
              {msg.text}
            </span>
          </motion.div>
        ))}
        {typing && (
          <motion.div key="typing" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <span className="flex gap-1 rounded-2xl bg-white/[0.08] px-3 py-2.5">
              {[0, 1, 2].map((i) => (
                <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-neutral-400"
                  animate={{ y: [0, -4, 0] }} transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }} />
              ))}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}`,
  },
  {
    id: "rotating-tabs",
    title: "Rotating tabs",
    description: "3D flip panels driven by a sliding tab pill",
    Component: RotatingTabs,
    code: `"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Zap, Shield, Sparkles } from "lucide-react"

const tabs = [
  { id: "fast", label: "Fast", icon: Zap, title: "Blazing fast", body: "Ships in milliseconds." },
  { id: "safe", label: "Secure", icon: Shield, title: "Secure by default", body: "Hardened by default." },
  { id: "pretty", label: "Polished", icon: Sparkles, title: "Pixel perfect", body: "Spring physics tuned." },
]

export function RotatingTabs() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % tabs.length), 3000)
    return () => clearInterval(t)
  }, [])
  const current = tabs[active]

  return (
    <div className="flex w-72 flex-col items-center gap-4">
      <div className="flex gap-1 rounded-full border border-white/10 bg-neutral-800/60 p-1">
        {tabs.map((tab, i) => (
          <button key={tab.id} onClick={() => setActive(i)} className="relative rounded-full px-3.5 py-1.5 text-[13px] font-medium">
            {active === i && (
              <motion.span layoutId="rotating-pill" transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-white/[0.12]" />
            )}
            <span className={\`relative z-10 flex items-center gap-1.5 \${active === i ? "text-white" : "text-neutral-400"}\`}>
              <tab.icon className="h-3.5 w-3.5" />{tab.label}
            </span>
          </button>
        ))}
      </div>
      <div className="relative h-24 w-full" style={{ perspective: 1000 }}>
        <AnimatePresence mode="popLayout">
          <motion.div key={current.id}
            initial={{ rotateX: -70, opacity: 0, y: 12 }} animate={{ rotateX: 0, opacity: 1, y: 0 }} exit={{ rotateX: 70, opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }} style={{ transformStyle: "preserve-3d" }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 text-center">
            <h3 className="text-lg font-semibold text-neutral-100">{current.title}</h3>
            <p className="text-[13px] text-neutral-400">{current.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}`,
  },
  {
    id: "dynamic-island",
    title: "Dynamic Island",
    description: "iOS-style island morphing between live activities",
    pro: true,
    span: 2,
    Component: DynamicIsland,
    code: `"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Music, Phone, PhoneOff, Timer } from "lucide-react"

type State = "idle" | "music" | "call" | "timer"
const order: State[] = ["idle", "music", "call", "timer"]
const sizes: Record<State, { width: number; height: number; radius: number }> = {
  idle:  { width: 120, height: 36, radius: 20 },
  music: { width: 288, height: 72, radius: 30 },
  call:  { width: 288, height: 72, radius: 30 },
  timer: { width: 200, height: 44, radius: 24 },
}
const spring = { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.9 }

export function DynamicIsland() {
  const [state, setState] = useState<State>("idle")
  useEffect(() => {
    let i = 0
    const t = setInterval(() => { i = (i + 1) % order.length; setState(order[i]) }, 2600)
    return () => clearInterval(t)
  }, [])
  const size = sizes[state]

  return (
    <div className="flex flex-col items-center gap-5">
      <motion.div animate={{ width: size.width, height: size.height, borderRadius: size.radius }} transition={spring}
        className="flex items-center justify-center overflow-hidden bg-black text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <AnimatePresence mode="popLayout" initial={false}>
          {state === "idle" && (
            <motion.div key="idle" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }} transition={spring}
              className="flex items-center gap-2 px-4">
              <span className="h-2 w-2 rounded-full bg-neutral-600" />
            </motion.div>
          )}
          {state === "music" && (
            <motion.div key="music" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }} transition={spring}
              className="flex w-full items-center gap-3 px-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                <Music className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-[13px] font-medium">Midnight City</p>
                <p className="truncate text-[11px] text-neutral-400">M83</p>
              </div>
              <div className="flex items-end gap-0.5">
                {[0, 1, 2, 3].map((i) => (
                  <motion.span key={i} className="w-1 rounded-full bg-blue-400" animate={{ height: [6, 18, 10, 20, 6] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.12 }} />
                ))}
              </div>
            </motion.div>
          )}
          {state === "call" && (
            <motion.div key="call" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }} transition={spring}
              className="flex w-full items-center gap-3 px-3">
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
            <motion.div key="timer" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={spring}
              className="flex items-center gap-2 px-4">
              <Timer className="h-4 w-4 text-orange-400" />
              <span className="font-mono text-sm tabular-nums">00:24</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="flex gap-1.5">
        {order.map((s) => (
          <button key={s} onClick={() => setState(s)} aria-label={s}
            className={\`h-1.5 rounded-full transition-all \${state === s ? "w-5 bg-white" : "w-1.5 bg-white/25"}\`} />
        ))}
      </div>
    </div>
  )
}`,
  },
]
