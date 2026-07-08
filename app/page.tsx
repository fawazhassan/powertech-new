"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Zap, Brain, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background dot-grid py-20 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(16,185,129,0.08), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border-[1.5px] border-primary-800 bg-white px-3.5 py-1.5 shadow-[2px_2px_0_rgba(6,95,70,0.25)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              <span className="mono-label normal-case tracking-normal text-primary">
                Microsoft Power Platform specialists
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-6xl"
            >
              Transforming Ideas into{" "}
              <span className="serif-accent text-gradient-brand text-[1.12em] pr-1">
                Powerful Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-muted-foreground"
            >
              We build cutting-edge custom software solutions and harness the power of
              Microsoft Power Platform to drive your business forward.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mono-label text-primary mb-4">{"// Services"}</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/power-platform-solutions">
                <Card className="h-full cursor-pointer">
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <div className="w-12 h-12 rounded-[11px] bg-primary-50 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-mono-label text-xs text-[#C2CCD4]">01</span>
                    </div>
                    <CardTitle>Power Platform Solutions</CardTitle>
                    <CardDescription>
                      Leverage Microsoft Power Platform to automate workflows, build custom apps,
                      and visualize data
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
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/custom-solutions">
                <Card className="h-full cursor-pointer">
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <div className="w-12 h-12 rounded-[11px] bg-indigo-50 flex items-center justify-center">
                        <Code className="h-6 w-6 text-accent" />
                      </div>
                      <span className="font-mono-label text-xs text-[#C2CCD4]">02</span>
                    </div>
                    <CardTitle>Custom Solutions</CardTitle>
                    <CardDescription>
                      Bespoke software development with cutting-edge AI/ML technologies and
                      full-stack expertise
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Custom Web & Mobile Apps
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        AI/ML Integration
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Cloud Solutions
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mono-label text-primary mb-4">{"// Products"}</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Innovative SaaS solutions built by our team
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                name: "talent.voxle.ai",
                url: "https://talent.voxle.ai?utm_source=ptd",
                description: "AI-Powered Recruitment Platform",
                logo: "/assets/images/voxle-logo.png",
                color: "from-[#8b5cf6] to-[#7c3aed]",
              },
              {
                name: "furnishly.app",
                url: "https://furnishly.app?utm_source=ptd",
                description: "AI Product Photography",
                logo: "/assets/images/furnishly-logo.png",
                color: "from-[#6b7280] to-[#4b5563]",
              },
              {
                name: "stagently.com",
                url: "https://stagently.com?utm_source=ptd",
                description: "AI Virtual Staging",
                logo: "/assets/images/stagently-logo.png",
                color: "from-[#d13976] to-[#a82d5e]",
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  <Card className={`h-full before:hidden hover:shadow-2xl cursor-pointer bg-gradient-to-br ${product.color} text-white border-0`}>
                    <CardHeader>
                      <div className="mb-4 w-20 h-20 mx-auto rounded-xl bg-white flex items-center justify-center p-3">
                        <div className="relative w-full h-full">
                          <Image
                            src={product.logo}
                            alt={product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <CardTitle className="text-white text-center">{product.name}</CardTitle>
                      <CardDescription className="text-white/90 text-center">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center text-sm text-white font-medium">
                        Visit Site <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
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
        <div className="hairline-gradient-center absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mono-label text-primary-400 mb-4">{"// Get started"}</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your{" "}
              <span className="serif-accent text-primary-400 text-[1.1em]">project?</span>
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
