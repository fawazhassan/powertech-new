import { cn } from "@/lib/utils"

// The Chironis "Hub" mark: five fingertips and the wrist, each joined to one
// palm node. Geometry from the Chironis repo (src/components/brand/mark.ts).
const PALM = { cx: 52.5, cy: 64, r: 6.5 }
const ENDS = [
  { cx: 23, cy: 52, r: 4.8 },
  { cx: 37.5, cy: 22.6, r: 4.8 },
  { cx: 52.5, cy: 14, r: 4.8 },
  { cx: 68.2, cy: 20.8, r: 4.8 },
  { cx: 75.6, cy: 36.4, r: 4.8 },
  { cx: 52.5, cy: 90, r: 3.6 },
]
const EDGES = ENDS.map((n) => `M${PALM.cx} ${PALM.cy}L${n.cx} ${n.cy}`).join("")

// Small renderings get heavier lines and fatter nodes so the graph survives.
function weights(px: number) {
  if (px <= 20) return { edge: 6.5, node: 1.75 }
  if (px <= 40) return { edge: 4.4, node: 1 }
  if (px <= 80) return { edge: 4, node: 0.8 }
  return { edge: 3, node: 0 }
}

export function ChironisMark({ size = 28, className }: { size?: number; className?: string }) {
  const w = weights(size)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <path d={EDGES} fill="none" stroke="currentColor" strokeWidth={w.edge} strokeLinecap="round" />
      {[PALM, ...ENDS].map((n) => (
        <circle key={`${n.cx},${n.cy}`} cx={n.cx} cy={n.cy} r={n.r + w.node} fill="currentColor" />
      ))}
    </svg>
  )
}

// Mark + name in the logo face (Manrope SemiBold). Ink by default; colour via `text-*`.
export function ChironisWordmark({ markSize = 28, className }: { markSize?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-ink text-[19px]", className)}>
      <ChironisMark size={markSize} />
      <span className="font-logo font-semibold tracking-[-0.02em]">Chironis</span>
    </span>
  )
}
