"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const technologies = [
  {
    category: "Graphic Tools",
    skills: ["Photoshop", "Illustrator", "Canva", "Lightroom"],
  },
  {
    category: "Analytical Tools",
    skills: ["Power BI", "Tableau", "Advanced Excel"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "TypeScript","TailwindCSS", "R", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Database",
    skills: ["MS Access"],
  },
  {
    category: "Core Competencies",
    skills: [
      "Communication",
      "Teamwork",
      "Responsibility",
      "Leadership",
      "Decision-making",
      "Creative Thinking",
      "Analytical Abilities",
      "Digital Literacy",
      "Organizational Skills",
      "Management Skills",
    ],
  },
  {
    category: "Presentation Skills",
    skills: ["spoke at Islamic Finance","Spoke at Kashmir Freedom", "Spoke at School Problems"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Professional Communication & Networking",
      "Personal Branding & Interview Communication",
      "Critical Thinking & Problem Solving",
      "Time Management",
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 bg-card/50 backdrop-blur">
            <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

