import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import EnhancedHeader from "@/components/enhanced-header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import AIAssistant from "@/components/ai-assistant"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-website-personal-abdul-wahid-chohan.vercel.app"),
  title: {
    default: "Abdul Wahid Chohan - Robotics Engineer & Technology Innovator",
    template: "%s | Abdul Wahid Chohan",
  },
  description:
    "Abdul Wahid Chohan - Robotics Engineer and Technology Innovator from Bahria University, Karachi. Specializing in AI, automation, data science, and full-stack development with expertise in R programming.",
  keywords: [
    "Robotics Engineer",
    "Technology Innovator",
    "AI Specialist",
    "R Programming",
    "Data Science Expert",
    "Abdul Wahid Chohan",
    "Bahria University",
    "Full-Stack Developer",
    "Automation Expert",
    "Robotics and Intelligent Systems",
  ],
  authors: [{ name: "Abdul Wahid Chohan" }],
  creator: "Abdul Wahid Chohan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-website-personal-abdul-wahid-chohan.vercel.app",
    siteName: "Abdul Wahid Chohan - Robotics Engineer Portfolio",
    title: "Abdul Wahid Chohan - Robotics Engineer & Technology Innovator",
    description:
      "Discover innovative robotics solutions and technology innovations by Abdul Wahid Chohan, a Robotics Engineering student at Bahria University with expertise in AI, automation, and R programming.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Abdul Wahid Chohan - Robotics Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Wahid Chohan - Robotics Engineer & Technology Innovator",
    description: "Experience the future of robotics and technology innovation with Abdul Wahid Chohan.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://portfolio-website-personal-abdul-wahid-chohan.vercel.app",
    languages: {
      "en-US": "https://portfolio-website-personal-abdul-wahid-chohan.vercel.app/en-US",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.vercel.com" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            <EnhancedHeader />
            <main className="relative z-10">{children}</main>
            <Footer />
            <AIAssistant />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
