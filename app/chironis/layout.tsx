import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chironis: AI automation analysts at scale",
  description:
    "Chironis does the heavy lifting of process analysis across your whole organisation, sizes where AI pays with graded evidence and proves what each automation gives back. Start with a four-week, fixed-fee roadmap assessment.",
  alternates: {
    canonical: "https://powertech.digital/chironis",
  },
}

export default function ChironisLayout({ children }: { children: React.ReactNode }) {
  return children
}
