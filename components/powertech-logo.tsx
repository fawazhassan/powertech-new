import { cn } from "@/lib/utils"

// The PowerTech "PT" mark: the T's bar runs on into the P's bowl as one
// emerald stroke, with the stem set apart in ink. Flat, two colours, no
// gradients, so it holds from a 16px favicon to a full-width banner.
const HOOK = "M14 24H58a22 22 0 0 1 0 44H50"
const STEM = "M38 36V88"

export function PowerTechMark({
  size = 28,
  className,
  hookClassName = "text-primary",
}: {
  size?: number
  className?: string
  /** Colour of the bar-and-bowl stroke. Use a lighter emerald on dark surfaces. */
  hookClassName?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      strokeWidth={14}
      className={cn("shrink-0 text-ink", className)}
      aria-hidden="true"
    >
      <path d={HOOK} stroke="currentColor" className={hookClassName} />
      <path d={STEM} stroke="currentColor" />
    </svg>
  )
}

// Mark + company name. Ink by default; pass `text-white` and a lighter
// `hookClassName` for dark surfaces.
export function PowerTechWordmark({
  markSize = 32,
  className,
  hookClassName,
}: {
  markSize?: number
  className?: string
  hookClassName?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink", className)}>
      <PowerTechMark size={markSize} className="text-current" hookClassName={hookClassName} />
      PowerTech Digital
    </span>
  )
}
