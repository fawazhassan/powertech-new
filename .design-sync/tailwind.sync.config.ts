// Design-sync Tailwind config: extends the site config with content globs
// that include authored previews, plus a safelist of the brand utility
// families the Claude Design agent is told about in conventions.md.
import type { Config } from "tailwindcss"
import base from "../tailwind.config"

const config = {
  ...base,
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./.design-sync/previews/**/*.{ts,tsx}",
  ],
  safelist: [
    { pattern: /^(bg|text|border|ring|from|to|via)-(primary|secondary|accent)$/ },
    {
      pattern:
        /^(bg|text|border|ring|from|to|via)-(primary|secondary)-(50|100|200|300|400|500|600|700|800|900|foreground)$/,
      variants: ["hover"],
    },
    { pattern: /^(bg|text|border)-accent-(foreground|purple|cyan|teal)$/ },
    { pattern: /^(bg|text|border)-(background|foreground|muted|card|popover|destructive|input|ring)$/ },
    { pattern: /^(bg|text)-(muted|card|popover|destructive|primary|secondary|accent)-foreground$/ },
    "border-border",
    "rounded-lg",
    "rounded-md",
    "rounded-sm",
    "rounded-[11px]",
    // Lumina signature layer — keep available for the design agent even when
    // no site page or preview currently uses one of them.
    "mono-label",
    "serif-accent",
    "text-gradient-brand",
    "hairline-gradient",
    "hairline-gradient-center",
    "dot-grid",
    "dot-grid-dark",
    "font-serif-accent",
    "font-mono-label",
    "bg-ink",
    "text-ink",
    "border-ink",
    "text-slate-300",
    "text-slate-400",
    "before:hidden",
  ],
} satisfies Config

export default config
