import Link from "next/link"
import { Logo } from "./logo"
import { GithubIcon } from "./github-icon"

const links = [
  {
    title: "Product",
    items: [
      { href: "/", label: "Components" },
      { href: "/how-to-use", label: "How to use" },
    ],
  },
  {
    title: "Company",
    items: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact us" },
    ],
  },
  {
    title: "Legal",
    items: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/license", label: "License" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-pretty text-sm leading-relaxed text-neutral-500">
              A curated set of premium, animated React components. Preview, copy, and ship faster.
            </p>
            <a
              href="https://github.com/oreaui"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-200 transition-colors hover:bg-white/[0.07]"
            >
              <GithubIcon className="h-4 w-4" />
              github.com/oreaui
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {links.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-sm font-medium text-neutral-300">{group.title}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} Orea. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-neutral-500">
            <span>Built with Framer Motion &amp; React Three Fiber</span>
            <span className="text-neutral-700">•</span>
            <span>Developed by</span>
            <a
              href="https://talentnet.ir"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-300 transition-colors hover:text-blue-400 underline decoration-white/20 underline-offset-4"
            >
              TalentNet
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
