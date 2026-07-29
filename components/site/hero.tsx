"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Logo3D = dynamic(() => import("./logo-3d").then((m) => m.Logo3D), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-24 w-24 animate-pulse rounded-2xl bg-white/[0.04]" />
    </div>
  ),
})

export function Hero({ count }: { count: number }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      {/* soft ambient glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {count} premium components
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
            Premium animated components for modern products
          </h1>
          <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-neutral-400 lg:mx-0">
            Orea is a curated set of production-ready React components powered by Framer Motion. Preview,
            peek at the code, and copy it into your project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="#components"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-transform hover:scale-[1.02]"
            >
              Browse components
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/how-to-use"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.07]"
            >
              How to use
            </Link>
          </div>
        </div>

        <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[460px]">
          <Logo3D />
        </div>
      </div>
    </section>
  )
}
