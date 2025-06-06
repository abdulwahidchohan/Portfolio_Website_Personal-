"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Code, Lightbulb, Presentation } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Student of the Session",
    organization: "Javed Miandad Award",
    year: "2024",
    description: "Recognized for outstanding academic performance and leadership",
    category: "Academic",
  },
  {
    icon: Code,
    title: "Computer Expert",
    organization: "Bahria College Karsaz",
    year: "2023",
    description: "Recognized for technical expertise and innovation in computing",
    category: "Technical",
  },
  {
    icon: Users,
    title: "Prefect of College",
    organization: "Bahria College Karsaz",
    year: "2023-2024",
    description: "Selected for leadership role overseeing student activities",
    category: "Leadership",
  },
  {
    icon: Presentation,
    title: "Public Speaking",
    organization: "School Events",
    year: "2023",
    description: "Spoke at Kashmir Freedom and School Problems events",
    category: "Communication",
  },
]

const coreCompetencies = [
  {
    title: "Communication & Presentation",
    description: "Professional communication, networking, and public speaking skills",
    skills: [
      "Professional Communication",
      "Networking",
      "Public Speaking",
      "Presentation Skills",
      "Interview Communication",
    ],
  },
  {
    title: "Leadership & Management",
    description: "Experience in leadership roles and organizational management",
    skills: ["Team Leadership", "Decision-making", "Responsibility", "Organizational Skills", "Management Skills"],
  },
  {
    title: "Critical Thinking",
    description: "Problem-solving and analytical thinking capabilities",
    skills: ["Critical Thinking", "Problem Solving", "Analytical Abilities", "Creative Thinking", "Time Management"],
  },
]

export default function AboutExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Core Competencies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for academic excellence, technical expertise, and leadership, alongside core professional
            competencies.
          </p>
        </motion.header>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
                  >
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <Badge variant="outline" className="mb-2 w-fit mx-auto">
                    {achievement.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {achievement.organization} • {achievement.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50 }
                }
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {index === 0 ? (
                        <Presentation className="h-5 w-5 text-primary" />
                      ) : index === 1 ? (
                        <Users className="h-5 w-5 text-primary" />
                      ) : (
                        <Lightbulb className="h-5 w-5 text-primary" />
                      )}
                      <Badge variant="secondary">{competency.title}</Badge>
                    </div>
                    <CardDescription>{competency.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {competency.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
