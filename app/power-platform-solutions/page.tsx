"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Zap, TrendingUp, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PowerPlatformSolutionsPage() {
  const services = [
    {
      icon: "/assets/icons/power-apps.svg",
      title: "Power Apps",
      description: "Build custom business applications without extensive coding",
      features: [
        "Canvas and Model-driven apps",
        "Mobile-responsive design",
        "Integration with Microsoft 365",
        "Custom connectors and APIs",
      ],
    },
    {
      icon: "/assets/icons/power-automate.svg",
      title: "Power Automate",
      description: "Automate workflows and business processes effortlessly",
      features: [
        "Process automation",
        "Approval workflows",
        "Scheduled and triggered flows",
        "Integration with 400+ services",
      ],
    },
    {
      icon: "/assets/icons/power-bi.svg",
      title: "Power BI",
      description: "Transform data into actionable insights with interactive dashboards",
      features: [
        "Real-time analytics",
        "Custom visualizations",
        "Data modeling and ETL",
        "Embedded reports",
      ],
    },
    {
      icon: "/assets/icons/power-pages.svg",
      title: "Power Pages",
      description: "Create external-facing websites with built-in security",
      features: [
        "Low-code website builder",
        "Secure data access",
        "Responsive templates",
        "Portal customization",
      ],
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Build and deploy solutions 5-10x faster than traditional development",
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description: "Reduce development costs while maintaining enterprise-grade quality",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "Built-in security, compliance, and governance features",
    },
  ]

  const useCases = [
    "Employee onboarding and management",
    "Approval and workflow automation",
    "Inventory and asset tracking",
    "Customer portal and self-service",
    "Document management systems",
    "Field service applications",
    "Financial reporting and analytics",
    "Sales pipeline tracking",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#f5f7fd] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Microsoft Power Platform Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Accelerate your digital transformation with the Microsoft Power Platform. We help
                you build powerful, custom business applications and automate workflows with
                minimal code.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/contact">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                <Image
                  src="/assets/icons/power-platform.png"
                  alt="Microsoft Power Platform"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Power Platform Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive solutions across the entire Power Platform ecosystem
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
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="mb-4 w-16 h-16 relative">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
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

      {/* Benefits */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Power Platform?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unlock the full potential of low-code development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Common Use Cases
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Power Platform can transform virtually any business process. Here are some
                solutions we've built for our clients:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{useCase}</span>
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
              <Card className="bg-gradient-to-br from-[#10b981] to-[#10b981] text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Ready to Transform Your Business?
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Let's discuss how Power Platform can solve your specific challenges
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-50">
                    Schedule a consultation with our Power Platform experts to explore how we can
                    help automate your workflows, build custom applications, and unlock insights
                    from your data.
                  </p>
                  <Link href="/contact">
                    <Button variant="secondary" size="lg" className="w-full">
                      Schedule Consultation
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
