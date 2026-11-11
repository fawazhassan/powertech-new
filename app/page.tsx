"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Brain, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChironisMark } from "@/components/chironis-logo"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background dot-grid py-20 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-6 inline-flex"
            >
              <Link
                href="/chironis"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-primary-800 bg-white px-3.5 py-1.5 shadow-[2px_2px_0_rgba(6,95,70,0.25)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                <ChironisMark size={16} className="text-ink" />
                <span className="text-sm font-medium text-primary">
                  Introducing Chironis, our AI &amp; automation platform
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-primary" />
              </Link>
            </div>
            <h1
              className="text-4xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-6xl"
            >
              Transforming Ideas into Powerful Solutions
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-muted-foreground"
            >
              We build cutting-edge custom software, and with Chironis, our own platform, we find
              where AI and automation pay off and prove what they give back.
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Link href="/chironis">
                <Card className="h-full transition-[box-shadow,border-color] duration-200 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <ChironisMark size={28} className="text-ink" />
                      Chironis
                    </CardTitle>
                    <CardDescription>
                      AI automation analysts at scale: find, size and prove where AI pays,
                      starting with a four-week roadmap assessment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Process analysis across every team at once
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        A graded, sized automation roadmap
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Benefit counted case by case
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div>
              <Link href="/custom-solutions">
                <Card className="h-full transition-[box-shadow,border-color] duration-200 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Code className="h-6 w-6 text-primary" />
                      Custom Solutions
                    </CardTitle>
                    <CardDescription>
                      Bespoke software development with cutting-edge AI/ML technologies and
                      full-stack expertise
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Custom Web & Mobile Apps
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        AI/ML Integration
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Cloud Solutions
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Innovative SaaS solutions built by our team
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                name: "talent.voxle.ai",
                url: "https://talent.voxle.ai?utm_source=ptd",
                description: "AI-Powered Recruitment Platform",
                logo: "/assets/images/voxle-logo.png",
              },
              {
                name: "stagently.com",
                url: "https://stagently.com?utm_source=ptd",
                description: "AI Virtual Staging",
                logo: "/assets/images/stagently-logo.png",
              },
            ].map((product, index) => (
              <div
                key={product.name}
              >
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full transition-[box-shadow,border-color] duration-200 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)]">
                    <CardHeader>
                      <div className="mb-4 h-16 w-16 mx-auto">
                        <div className="relative w-full h-full">
                          <Image
                            src={product.logo}
                            alt={product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <CardTitle className="text-center">{product.name}</CardTitle>
                      <CardDescription className="text-center">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center text-sm text-primary font-semibold">
                        Visit Site <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-ink dot-grid-dark py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
