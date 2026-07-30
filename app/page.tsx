import { ComponentCard } from "@/components/library/component-card"
import { registry } from "@/components/library/registry"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Hero } from "@/components/site/hero"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero count={registry.length} />

        <section id="components" aria-labelledby="library-heading" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
          <div className="mb-10 text-center">
            <h2 id="library-heading" className="text-balance text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl">
              The component library
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-neutral-400">
              Hover to preview, then flip any card to copy the code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {registry.map((entry) => (
              <ComponentCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
