import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "powertech-digital"

// CardContent only renders meaningfully inside a Card.
export const InContext = () => (
  <Card style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle>What&apos;s included</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          Discovery workshop
        </li>
        <li className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          Solution architecture
        </li>
        <li className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          Delivery &amp; support
        </li>
      </ul>
    </CardContent>
  </Card>
)
