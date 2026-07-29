"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { GithubIcon } from "./github-icon"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Components" },
  { href: "/how-to-use", label: "How to use" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "bg-white/[0.06] text-neutral-50"
                    : "text-neutral-400 hover:text-neutral-100",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/oreaui"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-200 transition-colors hover:bg-white/[0.07]"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-200 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm transition-colors",
                    active
                      ? "bg-white/[0.06] text-neutral-50"
                      : "text-neutral-400 hover:bg-white/[0.03] hover:text-neutral-100",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <a
              href="https://github.com/oreaui"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-neutral-200"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
