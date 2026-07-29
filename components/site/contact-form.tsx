"use client"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Send } from "lucide-react"

type Status = "idle" | "submitting" | "success"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address."
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus("submitting")
    // Simulate a network request; wire this to your backend or email service.
    await new Promise((r) => setTimeout(r, 900))
    setStatus("success")
  }

  const field =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 transition-colors focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-lg font-medium text-neutral-50">Message sent</h3>
            <p className="mt-2 max-w-sm text-pretty leading-relaxed text-neutral-400">
              Thanks for reaching out, {form.name.split(" ")[0] || "there"}. We&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => {
                setForm({ name: "", email: "", message: "" })
                setStatus("idle")
              }}
              className="mt-6 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-200 transition-colors hover:bg-white/[0.07]"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-5"
            noValidate
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-neutral-300">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className={field}
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-neutral-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className={field}
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-neutral-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you're building..."
                className={`${field} resize-none`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-950 transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              {status === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
