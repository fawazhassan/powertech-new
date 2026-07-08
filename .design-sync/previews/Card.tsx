import * as React from "react"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "powertech-digital"
import { ExternalLink, Zap } from "lucide-react"

// Service card — the homepage "Our Services" composition.
export const ServiceCard = () => (
  <Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all cursor-pointer" style={{ maxWidth: 380 }}>
    <CardHeader>
      <div className="mb-4 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
        <Zap className="h-6 w-6 text-primary" />
      </div>
      <CardTitle>Power Platform Solutions</CardTitle>
      <CardDescription>
        Leverage Microsoft Power Platform to automate workflows, build custom apps, and visualize
        data
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          Power Apps Development
        </li>
        <li className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          Power Automate Flows
        </li>
        <li className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          Power BI Analytics
        </li>
      </ul>
    </CardContent>
  </Card>
)

// Branded showcase card — the products page gradient composition.
export const BrandedShowcase = () => (
  <Card className="bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] text-white border-0 shadow-2xl" style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle className="text-2xl text-white text-center">Stagently</CardTitle>
      <CardDescription className="text-white/80 text-center">
        Staging environments on demand
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Button size="lg" variant="secondary" className="w-full gap-2">
        Visit Website <ExternalLink className="h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
)

// Full anatomy: header, content, footer.
export const WithFooter = () => (
  <Card style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle>Book a discovery call</CardTitle>
      <CardDescription>30 minutes, no obligation — tell us about your project.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600">
        We&apos;ll walk through your current workflows and identify where automation or a custom
        build delivers the most value.
      </p>
    </CardContent>
    <CardFooter className="gap-3">
      <Button>Get in Touch</Button>
      <Button variant="ghost">Maybe later</Button>
    </CardFooter>
  </Card>
)
