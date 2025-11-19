import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://powertech.digital'),
  title: {
    default: "PowerTech Digital - Custom Software Solutions & Power Platform Experts",
    template: "%s | PowerTech Digital"
  },
  description: "UK-based software consultancy specializing in AI-driven custom development, Microsoft Power Platform solutions, and innovative SaaS products. Transform your business with PowerTech Digital.",
  keywords: ["Power Platform", "Custom Software Development", "AI Solutions", "Microsoft Power Apps", "Power Automate", "Power BI", "Low-code Development", "SaaS Products", "UK Software Consultancy", "Digital Transformation"],
  authors: [{ name: "PowerTech Digital" }],
  creator: "PowerTech Digital",
  publisher: "PowerTech Digital",
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://powertech.digital',
    siteName: 'PowerTech Digital',
    title: 'PowerTech Digital - Custom Software Solutions & Power Platform Experts',
    description: 'Empowering businesses through innovative software solutions, AI-driven technologies, and Microsoft Power Platform expertise.',
    images: [{
      url: '/logo.png',
      width: 1024,
      height: 1024,
      alt: 'PowerTech Digital Logo'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PowerTech Digital - Custom Software Solutions',
    description: 'Empowering businesses through innovative software solutions and Power Platform expertise.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://powertech.digital',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PowerTech Digital",
    "url": "https://powertech.digital",
    "logo": "https://powertech.digital/logo.png",
    "description": "UK-based software consultancy specializing in AI-driven custom development, Microsoft Power Platform solutions, and innovative SaaS products.",
    "sameAs": [
      "https://www.linkedin.com/company/powertech-digital"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "fawaz@powertech.digital",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
