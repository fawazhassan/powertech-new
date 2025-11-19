"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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
      color: "from-[#6577F3] to-[#9333ea]",
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
      color: "from-[#10b981] to-[#0FADCF]",
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
      color: "from-[#10b981] to-[#059669]",
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
      color: "from-[#259ae6] to-[#0FADCF]",
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
      <section className="bg-[#f5f7fd] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Custom Software Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From AI-powered applications to full-stack web and mobile solutions, we build
              bespoke software tailored to your unique business requirements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  View Our Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Custom Development Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive solutions leveraging the latest technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all group">
                  <CardHeader>
                    <div
                      className={`mb-4 w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies We Use
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We leverage modern, battle-tested technologies to build robust solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="pt-6">
                    <tech.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-gray-900">{tech.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Development Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Quality */}
      <section className="py-20 bg-[#f5f7fd]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
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
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <Lock className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
