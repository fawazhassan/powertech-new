"use client"

import { Mail, Linkedin, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary-900 dot-grid-dark py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Ready to start your project? Have questions about our services? We'd love to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Whether you want to explore Chironis, custom software development, or want to
                discuss your product idea, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[11px] bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:fawaz@powertech.digital"
                      className="text-primary hover:underline"
                    >
                      fawaz@powertech.digital
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[11px] bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">Schedule a call to discuss your project</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[11px] bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Remote-first, serving clients worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/powertech-digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>New Project Inquiry</CardTitle>
                  <CardDescription>
                    Interested in Chironis or custom development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Let's discuss your requirements and how we can help bring your vision to life.
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://calendly.com/fawaz-powertech/30min" target="_blank" rel="noopener noreferrer">
                      Book a Meeting
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Demo</CardTitle>
                  <CardDescription>
                    Want to see our products in action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Schedule a demo of Chironis, talent.voxle.ai, or stagently.com.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://calendly.com/fawaz-powertech/30min" target="_blank" rel="noopener noreferrer">
                      Book a Demo
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>General Inquiry</CardTitle>
                  <CardDescription>
                    Have questions about our services or capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We're happy to answer any questions you may have.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://calendly.com/fawaz-powertech/30min" target="_blank" rel="noopener noreferrer">
                      Book a Call
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
