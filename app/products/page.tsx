"use client"

import { motion } from "framer-motion"
import { ExternalLink, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
  const products = [
    {
      name: "talent.voxle.ai",
      url: "https://talent.voxle.ai?utm_source=ptd",
      tagline: "AI-Powered Recruitment Platform",
      description:
        "Stop losing top talent to lengthy hiring processes and inconsistent candidate evaluations. Our intelligent platform combines data-driven CV screening, AI-powered interviews, and talent validation to help you build exceptional teams faster and more confidently.",
      logo: "/assets/images/voxle-logo.png",
      color: "from-[#8b5cf6] to-[#7c3aed]",
      features: [
        "Intelligent CV Analysis with line-by-line scoring",
        "AI Content Detection (95% accuracy)",
        "AI Prescreening Interviews (multiple formats)",
        "Comprehensive Analytics and recordings",
        "ATS Integration with 50+ platforms",
      ],
    },
    {
      name: "furnishly.app",
      url: "https://furnishly.app?utm_source=ptd",
      tagline: "AI Product Photography",
      description:
        "Transform simple product shots into stunning lifestyle images that boost sales and conversions. Generate professional homeware photography in under 60 seconds.",
      logo: "/assets/images/furnishly-logo.png",
      color: "from-[#6b7280] to-[#4b5563]",
      features: [
        "AI-powered product photography in seconds",
        "10+ homeware categories supported",
        "Preset, seasonal, and custom styles",
        "E-commerce and social media ready",
        "Starting at $0.29 per image",
      ],
    },
    {
      name: "stagently.com",
      url: "https://stagently.com?utm_source=ptd",
      tagline: "AI Virtual Staging",
      description:
        "Transform empty rooms into beautifully staged spaces that sell faster and for more. AI-powered virtual staging in under 60 seconds with MLS-acceptable results.",
      logo: "/assets/images/stagently-logo.png",
      color: "from-[#d13976] to-[#a82d5e]",
      features: [
        "AI virtual staging in seconds",
        "Multiple staging style options",
        "Support for all room types",
        "MLS-acceptable staged photos",
        "Starting at $0.29 per image with free credits",
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#f5f7fd] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Innovative SaaS solutions built by PowerTech Digital to solve real-world business
              challenges. Each product showcases our commitment to excellence in software
              development and user experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${product.color} text-white text-sm font-medium mb-4`}
                    >
                      <span>{product.tagline}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
                    <p className="text-lg text-gray-600 mb-6">{product.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link href={product.url} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2">
                        Visit {product.name}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Product Showcase Card */}
                  <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                    <Card
                      className={`bg-gradient-to-br ${product.color} text-white border-0 shadow-2xl`}
                    >
                      <CardHeader>
                        <div className="w-32 h-32 mx-auto rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center mb-4 p-4">
                          <div className="relative w-full h-full">
                            <Image
                              src={product.logo}
                              alt={product.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <CardTitle className="text-2xl text-white text-center">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-white/80 text-center">
                          {product.tagline}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href={product.url} target="_blank" rel="noopener noreferrer">
                          <Button size="lg" variant="secondary" className="w-full gap-2">
                            Visit Website
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built with Cutting-Edge Technology
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our products leverage the same technologies and expertise we bring to client
              projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                description: "Advanced algorithms for intelligent automation and insights",
              },
              {
                title: "Cloud Infrastructure",
                description: "Scalable, secure, and reliable cloud-based architecture",
              },
              {
                title: "Modern Stack",
                description: "Built with React, Next.js, and cutting-edge frameworks",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#10b981] to-[#10b981] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want to Build Your Own Product?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              We can help you create innovative SaaS solutions just like these. Let's discuss
              your product idea and turn it into reality.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/custom-solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
