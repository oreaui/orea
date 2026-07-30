import type { ReactNode } from "react"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section aria-labelledby="page-heading" className="relative overflow-hidden border-b border-white/[0.06]">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
            style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
          />
          <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {eyebrow}
            </div>
            <h1 id="page-heading" className="text-balance text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-neutral-400">
              {description}
            </p>
          </div>
        </section>

        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
