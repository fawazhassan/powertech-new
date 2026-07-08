import * as React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "powertech-digital"

// CardHeader only renders meaningfully inside a Card.
export const InContext = () => (
  <Card style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle>Custom Solutions</CardTitle>
      <CardDescription>
        Bespoke software development with cutting-edge AI/ML technologies
      </CardDescription>
    </CardHeader>
  </Card>
)
