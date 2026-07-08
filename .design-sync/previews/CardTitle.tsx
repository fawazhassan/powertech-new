import * as React from "react"
import { Card, CardHeader, CardTitle } from "powertech-digital"

// CardTitle only renders meaningfully inside a CardHeader.
export const InContext = () => (
  <Card style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle>Power Platform Solutions</CardTitle>
    </CardHeader>
  </Card>
)
