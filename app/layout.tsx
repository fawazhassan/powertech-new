import type { Metadata } from "next"
import { Schibsted_Grotesk, IBM_Plex_Mono, Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"

const schibsted = Schibsted_Grotesk({ subsets: ["latin"] })
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-label",
})
// Chironis wordmark face
const manrope = Manrope({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-logo",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://powertech.digital'),
  title: {
    default: "PowerTech Digital - Chironis AI & Automation Platform and Custom Software",
    template: "%s | PowerTech Digital"
  },
  description: "UK-based software consultancy and maker of Chironis, the platform behind our AI & Automation Roadmap Assessment. We find where AI pays, build it with earned autonomy and prove what it gave back.",
  keywords: ["AI Automation Assessment", "AI Roadmap", "Chironis", "Process Mapping", "AI Agents", "Benefit Tracking", "Custom Software Development", "AI Solutions", "SaaS Products", "UK Software Consultancy"],
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
    title: 'PowerTech Digital - Chironis AI & Automation Platform and Custom Software',
    description: 'AI automation analysts at scale. PowerTech Digital builds Chironis, the platform for finding where AI pays and proving what it gave back.',
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
    description: 'AI automation analysts at scale. AI & automation assessments run on Chironis.',
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
    "description": "UK-based software consultancy and maker of Chironis, the platform behind our AI & Automation Roadmap Assessment.",
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
      <body className={`${schibsted.className} ${plexMono.variable} ${manrope.variable}`}>
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
