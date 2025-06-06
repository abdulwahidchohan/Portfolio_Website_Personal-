import type { Metadata } from "next"
import EnhancedAboutHero from "@/components/enhanced-about-hero"
import TechnicalStackSection from "@/components/technical-stack-section"
import ProjectHighlightsSection from "@/components/project-highlights-section"
import AchievementsTimelineSection from "@/components/achievements-timeline-section"
import VisionMissionSection from "@/components/vision-mission-section"
import AboutEducation from "@/components/about-education"
import LearningJourneySection from "@/components/learning-journey-section"

export const metadata: Metadata = {
  title: "About - Abdul Wahid Chohan | Robotics Engineer & Technology Innovator",
  description:
    "Meet Abdul Wahid Chohan - a Robotics Engineering student at Bahria University, Karachi. Specializing in automation, AI integration, and R programming for data analysis in robotics applications.",
  keywords: [
    "Abdul Wahid Chohan biography",
    "Robotics Engineer Karachi",
    "Bahria University Robotics",
    "R programming specialist",
    "Robotics and Intelligent Systems",
    "AI robotics integration",
    "Technology innovator Pakistan",
  ],
  openGraph: {
    title: "About Abdul Wahid Chohan - Robotics Engineer & Technology Innovator",
    description:
      "Discover the journey of a rising robotics engineer specializing in intelligent systems and R programming for data analysis.",
    url: "https://portfolio-website-personal-abdul-wahid-chohan.vercel.app/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <EnhancedAboutHero />
      <TechnicalStackSection />
      <LearningJourneySection />
      <ProjectHighlightsSection />
      <AchievementsTimelineSection />
      <AboutEducation />
      <VisionMissionSection />
    </main>
  )
}
