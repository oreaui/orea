import type { Metadata } from "next"
import { PageShell } from "@/components/site/page-shell"
import { CheckCircle2, ShieldAlert, FileText, Code2, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "License",
  description: "Orea UI is open source software released under the MIT License. Free for personal and commercial use. Modify, distribute, and build without restrictions.",
  openGraph: {
    title: "Orea UI License — MIT Open Source",
    description: "Orea UI is free for personal and commercial projects under the MIT License. Copy, modify, and build without restrictions.",
    url: "https://www.orea.ink/license",
  },
}

const permissions = [
  {
    title: "Commercial use",
    desc: "Use components in paid projects, client builds, and commercial SaaS applications.",
  },
  {
    title: "Modification",
    desc: "Customize, adapt, and rewrite the component source code to fit your exact design system.",
  },
  {
    title: "Distribution",
    desc: "Share and bundle the components as part of open-source or proprietary projects.",
  },
  {
    title: "Private use",
    desc: "Use, test, and integrate components in private repositories or internal tools.",
  },
]

export default function LicensePage() {
  return (
    <PageShell
      eyebrow="License"
      title="Open source MIT License"
      description="Free for personal and commercial projects. Copy, modify, and build without restrictions."
    >
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {permissions.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <div>
                <h3 className="font-semibold text-neutral-50">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12">
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-6">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-blue-400" />
              <div>
                <h2 className="text-xl font-semibold text-neutral-50">MIT License Terms</h2>
                <p className="text-xs text-neutral-400">Copyright (c) {new Date().getFullYear()} Orea UI</p>
              </div>
            </div>
            <a
              href="https://github.com/oreaui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:bg-white/[0.08]"
            >
              <Code2 className="h-4 w-4 text-neutral-400" />
              GitHub Repository
            </a>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-black/40 p-6 font-mono text-xs leading-relaxed text-neutral-300">
            <p className="text-neutral-400 mb-4">MIT License</p>
            <p className="mb-4">Copyright (c) {new Date().getFullYear()} orea (https://www.orea.ink)</p>
            <p className="mb-4">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the &quot;Software&quot;), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p className="mb-4">
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/[0.03] p-6">
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
              <div>
                <h3 className="text-sm font-semibold text-neutral-50">Need custom licensing or have questions?</h3>
                <p className="mt-1 text-xs text-neutral-400">
                  Feel free to contact the Orea UI team at{" "}
                  <a href="mailto:info@orea.ink" className="text-blue-400 underline hover:text-blue-300">
                    info@orea.ink
                  </a>{" "}
                  or visit our main website at{" "}
                  <a href="https://www.orea.ink/" className="text-blue-400 underline hover:text-blue-300">
                    https://www.orea.ink/
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
