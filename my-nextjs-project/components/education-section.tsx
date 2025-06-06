"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, Globe } from "lucide-react"

const education = [
  {
    institution: "University of the People",
    degree: "B.S. Computer Science",
    period: "2022 - Present",
    status: "Online",
    description: "Accredited online computer science program with focus on software engineering and AI.",
    highlights: [
      "Flexible online learning format",
      "Strong foundation in programming and algorithms",
      "Global peer collaboration experience",
    ],
    progress: 65,
  },
]

const certifications = [
  {
    title: "Web Development Specialization",
    provider: "Coursera",
    year: "2023",
    icon: "💻",
  },
  {
    title: "AI Fundamentals",
    provider: "DataCamp",
    year: "2024",
    icon: "🧠",
  },
  {
    title: "Data Analytics & Business Intelligence",
    provider: "DigiSkills",
    year: "2023",
    icon: "📊",
  },
  {
    title: "Graphic Design",
    provider: "LLCF",
    year: "2023",
    icon: "🎨",
  },
]

const governorInitiative = [
  {
    program: "Agentic AI Engineering",
    period: "2023 - Present",
    description: "Advanced AI engineering program focusing on autonomous systems and intelligent agents",
  },
  {
    program: "AI, Metaverse, & Web 3.0",
    period: "2024 - Present",
    description: "Cutting-edge program exploring emerging technologies and their applications",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pursuing education while continuously expanding knowledge through specialized certifications and government
            initiatives in emerging technologies.
          </p>
        </motion.header>

        {/* Formal Education */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <Badge variant={edu.status === "Online" ? "secondary" : "default"}>{edu.status}</Badge>
                  </div>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="font-medium">
                    {edu.institution} • {edu.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{edu.progress}%</span>
                    </div>
                    <Progress value={edu.progress} className="h-2" />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Governor's Initiative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Governor's Initiative, Pakistan</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {governorInitiative.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{program.period}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {program.program}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="text-3xl mb-2">{cert.icon}</div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>
                      {cert.provider} • {cert.year}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
