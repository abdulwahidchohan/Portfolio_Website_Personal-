import type { Metadata } from "next"
import EnhancedHeroSection from "@/components/enhanced-hero-section"
import SkillsSection from "@/components/skills-section"
import EnhancedProjectsSection from "@/components/enhanced-projects-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Abdul Wahid Chohan - Premier Graphic Designer & AI Enthusiast",
  description:
    "Experience the future of robotics with Abdul Wahid Chohan - currently mastering Agentic AI and Future Robotics at Bahria University. Specializing in autonomous systems, intelligent automation, and next-generation robotic solutions.",
  keywords: [
    "Agentic AI Specialist",
    "Future Robotics Engineer",
    "Autonomous Systems",
    "Intelligent Automation",
    "Abdul Wahid Chohan",
    "Bahria University Robotics",
    "AI Agent Development",
    "Next-Gen Technology",
  ],
  openGraph: {
    title: "Abdul Wahid Chohan - Premier Graphic Designer & AI Enthusiast",
    description: "Discover innovative design solutions that blend creativity with cutting-edge AI technology.",
    url: "https://portfolio-website-personal-abdul-wahid-chohan.vercel.app",
  },
}

export default function HomePage() {
  return (
    <>
      <EnhancedHeroSection />
      <StatsSection />
      <SkillsSection />
      <EnhancedProjectsSection />
      <TestimonialsSection />
      <EducationSection />
      <ContactSection />
    </>
  )
}
