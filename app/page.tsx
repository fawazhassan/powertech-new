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
      <section className="relative bg-background dot-grid py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
              <Link
                href="/chironis"
                className="mb-7 inline-flex items-center gap-2 rounded-full border-[1.5px] border-primary-800 bg-white px-3.5 py-1.5 shadow-[2px_2px_0_rgba(6,95,70,0.25)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                <ChironisMark size={16} className="text-ink" />
                <span className="text-sm font-medium text-primary">
                  Introducing Chironis, our AI &amp; automation platform
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-primary" />
              </Link>
              <h1 className="text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] text-gray-900 sm:text-6xl lg:text-7xl">
                Transforming Ideas into <span className="text-primary">Powerful Solutions</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                We build cutting-edge custom software, and with Chironis, our own platform, we find
                where AI and automation pay off and prove what they give back.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
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
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-gray-900 sm:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Link href="/chironis">
                <Card className="h-full border-0 bg-ink p-2 text-white transition-shadow duration-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.28)] sm:p-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-3xl">
                      <ChironisMark size={28} className="text-primary-400" />
                      Chironis
                    </CardTitle>
                    <CardDescription className="max-w-lg pt-2 text-base text-slate-300">
                      AI automation analysts at scale: find, size and prove where AI pays,
                      starting with a four-week roadmap assessment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                        Process analysis across every team at once
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                        A graded, sized automation roadmap
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                        Benefit counted case by case
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="lg:col-span-2">
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
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-gray-900 sm:text-5xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Innovative SaaS solutions built by our team
            </p>
          </div>

          <div className="mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
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
                      <div className="mb-4 h-14 w-14">
                        <div className="relative w-full h-full">
                          <Image
                            src={product.logo}
                            alt={product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-primary font-semibold">
                        Visit Site <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary-900 dot-grid-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
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
