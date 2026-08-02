<div align="center">

# Orea

**Premium quality, zero cost.**

A free, open-source library of animated React components built with Framer Motion.

[Website](https://orea.ink) · [Components](https://orea.ink/docs) · [Report a bug](https://github.com/oreaui/orea-ui/issues) · [Contributing](./CONTRIBUTING.md)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![npm](https://img.shields.io/npm/v/@oreaui/orea-ui)
![Made with TypeScript](https://img.shields.io/badge/made%20with-TypeScript-blue)

</div>

---

## What is Orea?

Orea is a collection of 37+ animated, production-ready React components — cards, buttons, backgrounds, navigation elements, and more — built with **Framer Motion** and styled with **Tailwind CSS**.

Orea is not a replacement for your component library (shadcn/ui, MUI, etc.) — it's an animation-focused layer that works alongside whatever you're already using.

Orea also ships with **orea-skill**, an AI Agent Skill you can hand to coding assistants like Claude or Cursor so they generate new components that stay visually consistent with your existing design system, instead of falling back on generic, repetitive templates.

---

## Installation

### Option 1 — npm

```bash
npm install @oreaui/orea-ui
```

Peer dependencies:

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

### Option 2 — Copy-paste (recommended)

Like shadcn/ui, you can pull the raw source of a single component directly into your project. You own the code — no version lock-in, full freedom to customize.

```bash
npx @oreaui/cli add tilt-card
```

### Option 3 — GitHub Packages

See [installation docs](https://orea.ink/docs/installation) for the GitHub Packages setup.

---

## Usage

```tsx
import { TiltCard } from "@oreaui/orea-ui";

export default function Example() {
  return (
    <TiltCard>
      <h3>Hover me</h3>
    </TiltCard>
  );
}
```

Browse the full component list and live previews at **[orea.ink](https://orea.ink)**.

---

## Components

A few examples of what's included:

| Component | Description |
|---|---|
| `TiltCard` | Interactive 3D tilt effect on hover |
| `ConfettiButton` | Button with a confetti burst micro-interaction |
| `AuroraBackground` | Animated gradient background |
| `CommandPalette` | Keyboard-driven command menu |
| `NumberTicker` | Animated number counter |
| `Marquee` | Smooth infinite scrolling content |
| `ThemeToggle` | Animated light/dark mode switch |

See the [full component list](https://orea.ink/docs) for all 37+ components.

---

## orea-skill — for AI coding tools

AI coding assistants often default to repetitive, generic UI and struggle with nuanced tasks like color handling inside nested components or adding a specific animation without breaking the layout.

`orea-skill` gives tools like Claude and Cursor a structured design reference — covering design tokens, color logic, spacing, and animation patterns — so AI-generated components stay visually coherent with the rest of your project.

See [orea-skill](https://github.com/oreaui/orea-skill) for setup instructions.

---

## Design tokens

Colors, typography, spacing, and border-radius values live in [orea-tokens](https://github.com/oreaui/orea-tokens), acting as a single source of truth for consistent styling across every component.

---

## Browser & device support

Tested on desktop and mobile — Chrome, Edge, and Android. If something renders incorrectly on your device or browser, please [open an issue](https://github.com/oreaui/orea-ui/issues) with your device/browser details — this is actively maintained and fixed based on feedback.

---

## Contributing

Contributions are very welcome — code, design, documentation, or bug reports. See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get started, including tasks that don't require writing code (showcase GIFs, docs, testing on your device).

---

## Showcase

Built something with Orea? Open a PR to add it here.

---

## License

MIT © [Orea / Talentnet](https://orea.ink) — free to use, modify, and redistribute. No attribution required.

---

<div align="center">

If Orea saved you time, a ⭐ on the repo helps a lot.

</div>