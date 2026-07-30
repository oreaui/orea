import type { Metadata } from "next"
import { PageShell } from "@/components/site/page-shell"
import { ShieldCheck, EyeOff, Lock, Mail, Server } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Orea UI handles data privacy and user information. No personal data selling, no account required, privacy-friendly analytics.",
  openGraph: {
    title: "Orea UI Privacy Policy",
    description: "Transparent privacy practices for Orea UI. No personal data selling, no account required, minimal analytics.",
    url: "https://www.orea.ink/privacy",
  },
}

const highlights = [
  {
    icon: EyeOff,
    title: "No Personal Data Selling",
    body: "We do not track your identity, collect personal profiles, or monetize your activity data.",
  },
  {
    icon: Lock,
    title: "No Account Required",
    body: "You can browse, preview, and copy components without signing up or creating an account.",
  },
  {
    icon: Server,
    title: "Privacy-Friendly Analytics",
    body: "We use anonymous website analytics only to monitor traffic performance and improve user experience.",
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Your privacy comes first"
      description="Transparent, simple, and privacy-respecting practices for visitors of https://www.orea.ink/"
    >
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-neutral-50">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{h.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12">
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-neutral-50">1. Overview</h2>
            </div>
            <p className="text-pretty leading-relaxed text-neutral-400">
              Welcome to <strong>Orea UI</strong>, accessible at{" "}
              <a
                href="https://www.orea.ink/"
                className="text-blue-400 underline decoration-blue-500/30 underline-offset-4 hover:text-blue-300"
              >
                https://www.orea.ink/
              </a>. We value your trust and are committed to protecting your privacy. This policy outlines how information is collected, used, and safeguarded when you visit our site.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-50">2. Data Collection & Cookies</h2>
            <p className="text-pretty leading-relaxed text-neutral-400">
              Orea UI is designed as a copy-paste component library. We do not set non-essential tracking cookies or build behavioral profiles of our users.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400 list-disc list-inside">
              <li><strong>Local Storage:</strong> Temporary preferences (such as code view states) are stored locally in your web browser and never transmitted to our servers.</li>
              <li><strong>Analytics:</strong> Aggregated, privacy-focused traffic data is measured to help us optimize server performance and component usability.</li>
            </ul>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-50">3. Information Sent Via Contact Form</h2>
            <p className="text-pretty leading-relaxed text-neutral-400">
              If you reach out to us via our contact form or directly via email at{" "}
              <a
                href="mailto:info@orea.ink"
                className="text-blue-400 underline decoration-blue-500/30 underline-offset-4 hover:text-blue-300"
              >
                info@orea.ink
              </a>, we receive only the details you provide (such as your name, email address, and message). This information is solely used to respond to your inquiry.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-50">4. Third-Party Services</h2>
            <p className="text-pretty leading-relaxed text-neutral-400">
              Our site may include links to external services such as GitHub (for source code access) or TalentNet. We are not responsible for the privacy practices of external websites and encourage you to read their respective privacy statements.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <h2 className="text-xl font-semibold text-neutral-50">5. Contact Us</h2>
            </div>
            <p className="text-pretty leading-relaxed text-neutral-400">
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:
            </p>
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-5 text-neutral-200">
              <p className="font-semibold text-white">Orea UI Team</p>
              <p className="mt-1 text-sm text-neutral-400">
                Website:{" "}
                <a href="https://www.orea.ink/" className="text-blue-400 hover:underline">
                  https://www.orea.ink/
                </a>
              </p>
              <p className="text-sm text-neutral-400">
                Email:{" "}
                <a href="mailto:info@orea.ink" className="text-blue-400 hover:underline">
                  info@orea.ink
                </a>
              </p>
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  )
}
