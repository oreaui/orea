import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/site/page-shell"
import { Search, MousePointerClick, Copy, Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "How to use",
  description: "Learn how to browse, preview, and copy Orea animated React components into your own project in minutes. Copy-paste workflow with Framer Motion and Lucide.",
  openGraph: {
    title: "How to use Orea UI",
    description: "Browse, preview, and copy animated React components into your project with our simple four-step workflow.",
    url: "https://www.orea.ink/how-to-use",
  },
}

const steps = [
  {
    icon: Search,
    title: "1. Browse the library",
    body: "Explore the component grid on the home page. Each card shows a live, interactive preview of the component.",
  },
  {
    icon: MousePointerClick,
    title: "2. Preview and inspect",
    body: "Hover and interact with any component to see how it behaves, then open the code view to read the full source.",
  },
  {
    icon: Copy,
    title: "3. Copy the code",
    body: "Hit the copy button to grab the component's source, then paste it into your project as a new file.",
  },
  {
    icon: Rocket,
    title: "4. Install and ship",
    body: "Make sure the peer dependencies are installed, drop the component into your page, and you're done.",
  },
]

export default function HowToUsePage() {
  return (
    <PageShell
      eyebrow="How to use"
      title="From preview to production in four steps"
      description="Orea is copy-paste first. There's no CLI to learn and no lock-in. Here's the whole workflow."
    >
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-50">{s.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-neutral-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-50">Install the peer dependencies</h2>
          <p className="mt-2 leading-relaxed text-neutral-400">
            Most Orea components rely on Framer Motion for animation and Lucide for icons. Install them once:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/[0.06] bg-neutral-950 p-4 text-sm text-neutral-200">
            <code>{`npm install framer-motion lucide-react`}</code>
          </pre>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-50">Use a component</h2>
          <p className="mt-2 leading-relaxed text-neutral-400">
            After pasting a component into your project, import it and render it like any other React component:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/[0.06] bg-neutral-950 p-4 text-sm text-neutral-200">
            <code>{`import { SearchGlow } from "@/components/search-glow"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SearchGlow />
    </div>
  )
}`}</code>
          </pre>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-lg font-medium text-neutral-50">Ready to build?</h3>
            <p className="mt-1 text-neutral-400">Jump into the library and grab your first component.</p>
          </div>
          <Link
            href="/#components"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-transform hover:scale-[1.02]"
          >
            Browse components
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
