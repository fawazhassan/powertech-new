"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Eye, Award, Users2, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      title: "True Value",
      description: "Delivering tangible business outcomes through strategic implementation of Enterprise Low-code and custom solutions.",
      icon: Target,
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI integration and transformative solutions.",
      icon: Eye,
    },
    {
      title: "Radical Candour",
      description: "Building trust through transparent communication and honest feedback.",
      icon: Users2,
    },
    {
      title: "Excellence",
      description: "Ensuring robust governance and best practices in every solution.",
      icon: Award,
    },
  ]

  const expertise = [
    "Power Platform",
    "AI Integration",
    "Solution Architecture",
    "Full Stack Development",
    "Cloud Architecture",
    "Process Automation",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Azure",
    "Vercel",
    "Strategic Consulting",
    "Innovation Leadership",
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
              About PowerTech Digital
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              UK-based innovators re-defining what good digital transformation should look like in
              the golden age of AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Why Choose PowerTech Digital?
            </h2>
            <p className="text-lg text-gray-600 text-left">
              At PowerTech Digital, we're innovators at the forefront of AI and Low-Code technology.
              We bring extensive experience in building Power Platform solutions for both FTSE 100
              companies and medium sized business. Our expertise in governance, delivery, and design
              authority services ensures that your solutions will utilise the suitable, most
              up-to-date, secure, scalable, and aligned with your business objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
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
              Leadership
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-5xl"
          >
            <Card className="overflow-hidden border-2">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-8">
                  <div className="relative w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden">
                    <Image
                      src="/assets/images/fawaz-profile.jpeg"
                      alt="Fawaz Hassan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Fawaz Hassan</h3>
                  <p className="text-primary font-semibold mb-4">
                    CEO & Power Platform Architect
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-8 bg-gray-50 border-t">
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    Fawaz Hassan is a versatile technology leader and CEO of PowerTech Digital, with
                    a career spanning the full spectrum of digital transformation and software
                    development. His journey as a transformation and innovation lead and experienced
                    in full-stack developer uniquely positions him at the intersection of traditional
                    development, modern low-code solutions, and AI technologies.
                  </p>

                  <p>
                    With extensive experience across the entire technology stack and multiple
                    leadership roles including Business Analyst, Technical Lead, Practice and
                    Innovation Lead, and COO of an AI / Low-Code consultancy, allows him to bring a
                    comprehensive understanding of both traditional development and modern
                    cloud-native solutions. His expertise encompasses:
                  </p>

                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Leading and delivering transformation and innovation projects and practives
                      using the Power Platform
                    </li>
                    <li>
                      Architecting and delivering full-stack solutions using Next.js, React, and
                      Node.js
                    </li>
                    <li>
                      Building cloud-native applications leveraging Azure, Vercel, and Fly.io
                    </li>
                    <li>Developing AI-enhanced solutions across various platforms and technologies</li>
                    <li>
                      Creating innovative frameworks that bridge traditional development with low-code
                      solutions
                    </li>
                  </ul>

                  <p>
                    As a technology executive with experience working at both startups and large
                    organizations, Fawaz has consistently been at the forefront of emerging
                    technologies. His vision for PowerTech Digital is to revolutionise how businesses
                    approach digital transformation by seamlessly combining traditional development
                    expertise with modern low-code solutions and AI technologies.
                  </p>

                  <p>
                    Fawaz's technical breadth ensures that PowerTech Digital delivers comprehensive
                    solutions that leverage the best of both worlds - the flexibility and control of
                    custom development alongside the rapid delivery capabilities of low-code platforms.
                    From cloud architecture to front-end development, from AI integration to scalable
                    backend solutions, his holistic approach drives innovation and delivers exceptional
                    results.
                  </p>

                  <p className="font-semibold">
                    Under Fawaz's leadership, PowerTech Digital is committed to:
                  </p>

                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Delivering cutting-edge solutions that combine custom development with low-code
                      efficiency
                    </li>
                    <li>
                      Building scalable, cloud-native applications using modern technologies
                    </li>
                    <li>Fostering innovation through AI integration across all technology stacks</li>
                    <li>
                      Creating robust architectures that ensure long-term maintainability and
                      scalability
                    </li>
                    <li>
                      Maintaining technical excellence while accelerating delivery through strategic
                      platform choices
                    </li>
                  </ul>

                  <p>
                    With a proven track record across various technologies and industries, and a
                    passion for pushing the boundaries of what's possible with modern development
                    approaches, Fawaz leads PowerTech Digital in delivering innovative solutions that
                    combine the best of traditional development with the speed and efficiency of modern
                    platforms.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
