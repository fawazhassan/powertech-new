import * as React from "react"
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from "powertech-digital"

// CardFooter only renders meaningfully inside a Card.
export const InContext = () => (
  <Card style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle>Ready to start?</CardTitle>
      <CardDescription>We usually reply within one business day.</CardDescription>
    </CardHeader>
    <CardFooter className="gap-3">
      <Button>Get in Touch</Button>
      <Button variant="outline">See pricing</Button>
    </CardFooter>
  </Card>
)
