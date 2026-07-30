import type { Metadata } from "next"
import { PageShell } from "@/components/site/page-shell"
import { Sparkles, Code2, Zap, Heart } from "lucide-react"
import { registry } from "@/components/library/registry"

export const metadata: Metadata = {
  title: "About us",
  description:
    "Orea is a curated library of premium, animated React components built to help teams ship polished interfaces faster. Open-source, copy-paste UI powered by Framer Motion.",
  openGraph: {
    title: "About Orea UI — Premium animated components",
    description:
      "Learn about Orea: a curated collection of production-ready, animated React components. Open-source and free for personal and commercial use.",
    url: "https://www.orea.ink/about",
  },
}

const values = [
  {
    icon: Sparkles,
    title: "Premium by default",
    body: "Every component is designed to feel considered, with motion and detail that elevate the whole product.",
  },
  {
    icon: Code2,
    title: "Copy, don't install",
    body: "No black boxes. Read the source, copy it into your project, and own it completely.",
  },
  {
    icon: Zap,
    title: "Motion-first",
    body: "Powered by Framer Motion, each component ships with tasteful, performant animation out of the box.",
  },
  {
    icon: Heart,
    title: "Built for real products",
    body: "Accessible, responsive, and production-ready. Not just demos, but pieces you can actually ship.",
  },
]

const stats = [
  { value: `${registry.length}+`, label: "Components" },
  { value: "100%", label: "Open source" },
  { value: "0", label: "Runtime deps to copy" },
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About us"
      title="We build the components you wish you had"
      description="Orea is a curated collection of premium, animated React components. Our goal is simple: help you ship interfaces that feel great, without reinventing the wheel."
    >
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-50">{v.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-neutral-400">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-semibold tracking-tight text-neutral-50">{s.value}</div>
              <div className="mt-2 text-sm text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-neutral-50">Our story</h2>
          <p className="mt-4 text-pretty leading-relaxed text-neutral-400">
            Orea started as an internal collection of the animated pieces we kept rebuilding across projects:
            the perfect button, the delightful toggle, the search bar with just the right glow. We polished
            them, documented them, and opened them up so any team can move faster while keeping quality high.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] p-8 text-center">
          <h3 className="text-lg font-semibold text-neutral-50">Developed by TalentNet</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            Orea is proudly developed and maintained by the team at{" "}
            <a
              href="https://talentnet.ir"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-400 underline decoration-blue-500/30 underline-offset-4 transition-colors hover:text-blue-300"
            >
              TalentNet (talentnet.ir)
            </a>.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
