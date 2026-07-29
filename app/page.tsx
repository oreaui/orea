import { ComponentCard } from "@/components/library/component-card"
import { registry } from "@/components/library/registry"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <header className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Powered by Framer Motion
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
          Orea UI
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-neutral-400">
          A curated set of premium, animated React components. Preview, peek at the code, and copy it into your project.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {registry.map((entry) => (
          <ComponentCard key={entry.id} entry={entry} />
        ))}
      </section>

      <footer className="border-t border-white/[0.06] py-8 text-center text-sm text-neutral-500">
        {registry.length} components and counting
      </footer>
    </main>
  )
}
