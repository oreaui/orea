"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion"
import { Home, Search, Music, Camera, Settings, Mail } from "lucide-react"

const apps = [Home, Search, Music, Camera, Mail, Settings]

function DockItem({ mouseX, Icon }: { mouseX: MotionValue<number>; Icon: typeof Home }) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const sizeSync = useTransform(distance, [-120, 0, 120], [44, 72, 44])
  const size = useSpring(sizeSync, { stiffness: 300, damping: 20 })

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]"
    >
      <Icon className="h-5 w-5 text-neutral-200" />
    </motion.div>
  )
}

export function Dock() {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className="flex items-end gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 pb-3 pt-2 backdrop-blur"
    >
      {apps.map((Icon, i) => (
        <DockItem key={i} mouseX={mouseX} Icon={Icon} />
      ))}
    </motion.div>
  )
}
