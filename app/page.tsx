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
      <section className="relative bg-[#f5f7fd] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Transforming Ideas into{" "}
              <span className="text-primary">Powerful Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
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
                <Card className="h-full hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
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
                <Card className="h-full hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Code className="h-6 w-6 text-purple-600" />
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
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                        Custom Web & Mobile Apps
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                        AI/ML Integration
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Innovative SaaS solutions built by our team
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                name: "talent.voxle.ai",
                url: "https://talent.voxle.ai",
                description: "AI-Powered Recruitment Platform",
                logo: "/assets/images/voxle-logo.png",
                color: "from-[#8b5cf6] to-[#7c3aed]",
              },
              {
                name: "furnishly.app",
                url: "https://furnishly.app",
                description: "AI Product Photography",
                logo: "/assets/images/furnishly-logo.png",
                color: "from-[#6b7280] to-[#4b5563]",
              },
              {
                name: "stagently.com",
                url: "https://stagently.com",
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
                  <Card className={`h-full hover:shadow-2xl transition-all cursor-pointer bg-gradient-to-br ${product.color} text-white border-0`}>
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
      <section className="bg-gradient-to-br from-[#10b981] to-[#10b981] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
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
