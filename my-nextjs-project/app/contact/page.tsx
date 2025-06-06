import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact - Hire Abdul Wahid Chohan for Robotics & AI Projects",
  description:
    "Get in touch with Abdul Wahid Chohan for robotics consulting, Arduino development, Next.js applications, and AI solutions. Available for freelance projects and collaborations in Karachi, Pakistan.",
  keywords: [
    "hire robotics engineer Karachi",
    "Arduino developer for hire",
    "Next.js freelancer Pakistan",
    "AI consultant Karachi",
    "robotics project collaboration",
    "automation solutions consultant",
    "agentic AI development",
  ],
  openGraph: {
    title: "Contact Abdul Wahid Chohan - Robotics & AI Engineer",
    description: "Ready to collaborate on innovative robotics and AI projects? Contact Abdul Wahid Chohan today.",
    url: "https://portfolio-website-personal-abdul-wahid-chohan.vercel.app/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
