import * as React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "powertech-digital"

// CardDescription only renders meaningfully inside a CardHeader.
export const InContext = () => (
  <Card style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle>Power BI Analytics</CardTitle>
      <CardDescription>
        Turn raw business data into interactive dashboards your whole team can read.
      </CardDescription>
    </CardHeader>
  </Card>
)
