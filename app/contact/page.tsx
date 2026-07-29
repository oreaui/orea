import type { Metadata } from "next"
import { PageShell } from "@/components/site/page-shell"
import { ContactForm } from "@/components/site/contact-form"
import { GithubIcon } from "@/components/site/github-icon"
import { Mail, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact us — Orea",
  description: "Get in touch with the Orea team. Questions, feedback, or partnership ideas — we'd love to hear from you.",
}

const channels = [
  {
    icon: Mail,
    title: "Email",
    body: "hello@orea.dev",
    href: "mailto:hello@orea.dev",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    body: "github.com/oreaui",
    href: "https://github.com/oreaui",
  },
  {
    icon: MessageSquare,
    title: "Community",
    body: "Join the discussion and share feedback.",
    href: "https://github.com/oreaui",
  },
]

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact us"
      title="Let's talk"
      description="Have a question, found a bug, or want to request a component? Drop us a message and we'll get back to you."
    >
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-50">Other ways to reach us</h2>
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-50">{c.title}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{c.body}</p>
                </div>
              </a>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </PageShell>
  )
}
