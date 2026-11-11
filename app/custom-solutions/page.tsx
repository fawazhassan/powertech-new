"use client"

import Link from "next/link"
import {
  Brain,
  Code2,
  Smartphone,
  Cloud,
  Database,
  Cpu,
  Globe,
  Lock,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CustomSolutionsPage() {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge AI and ML technologies",
      features: [
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Predictive Analytics & Forecasting",
        "Recommendation Systems",
        "Custom ML Model Development",
      ],
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, scalable web applications built with the latest frameworks",
      features: [
        "React, Next.js, Vue.js Development",
        "Progressive Web Apps (PWA)",
        "E-commerce Platforms",
        "Content Management Systems",
        "Real-time Collaboration Tools",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: [
        "React Native Development",
        "Native iOS & Android Apps",
        "Cross-platform Solutions",
        "Mobile-first Design",
        "App Store Optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "AWS, Azure, GCP Deployment",
        "Cloud Architecture Design",
        "Serverless Applications",
        "DevOps & CI/CD",
        "Cloud Migration Services",
      ],
    },
  ]

  const technologies = [
    { name: "Python", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "React/Next.js", icon: Code2 },
    { name: "TensorFlow", icon: Brain },
    { name: "PyTorch", icon: Brain },
    { name: "Node.js", icon: Cpu },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business needs, challenges, and goals. We define project scope, timelines, and success metrics.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our team creates detailed technical specifications, system architecture, and UI/UX designs aligned with best practices.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using agile methodologies with regular sprints, demos, and comprehensive testing throughout.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy to production, provide training, and offer ongoing maintenance and support to ensure long-term success.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary-900 dot-grid-dark py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-6xl">
              Custom Software Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-100">
              From AI-powered applications to full-stack web and mobile solutions, we build
              bespoke software tailored to your unique business requirements.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 bg-transparent text-white shadow-none hover:bg-white/10"
                >
                  View Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Custom Development Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive solutions leveraging the latest technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <service.icon className="h-5 w-5 text-primary" />
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies We Use
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We leverage modern, battle-tested technologies to build robust solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <tech.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-gray-900">{tech.name}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Development Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={item.step}
              >
                <div className="relative">
                  <div className="mb-3 text-2xl font-bold tabular-nums text-primary">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Quality */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Security & Quality First
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We follow industry best practices to ensure your application is secure, scalable,
                and maintainable.
              </p>
              <div className="space-y-4">
                {[
                  "OWASP Top 10 security compliance",
                  "Code reviews and quality assurance",
                  "Automated testing and CI/CD",
                  "Performance optimization",
                  "Regular security audits",
                  "Comprehensive documentation",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Lock className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="bg-white border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Ready to Build Something Amazing?</CardTitle>
                  <CardDescription>
                    Let's turn your vision into reality with custom software solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Whether you need an AI-powered application, a mobile app, or a comprehensive
                    web platform, our team has the expertise to deliver exceptional results.
                  </p>
                  <Link href="/contact">
                    <Button size="lg" className="w-full gap-2">
                      Schedule a Consultation <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
