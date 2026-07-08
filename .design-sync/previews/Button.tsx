import * as React from "react"
import { Button } from "powertech-digital"
import { ArrowRight, ExternalLink } from "lucide-react"

export const Variants = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button className="gap-2">
      Get Started <ArrowRight className="h-4 w-4" />
    </Button>
    <Button variant="secondary">Learn More</Button>
    <Button variant="outline">View Our Work</Button>
    <Button variant="ghost">Dismiss</Button>
    <Button variant="link">Read case study</Button>
    <Button variant="destructive">Delete Project</Button>
  </div>
)

export const Sizes = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg" className="gap-2">
      Visit Website <ExternalLink className="h-4 w-4" />
    </Button>
  </div>
)

export const States = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button>Get in Touch</Button>
    <Button disabled>Sending…</Button>
    <Button variant="outline" disabled>
      Unavailable
    </Button>
  </div>
)
