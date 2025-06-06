"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap } from "lucide-react"

const education = [
  {
    institution: "Bahria University Karachi Campus",
    degree: "B.Sc. Robotics and Intelligent Systems",
    period: "July 2024 - Present",
    status: "In Progress",
    description:
      "Comprehensive robotics engineering program focusing on automation, control systems, intelligent machines, and advanced programming. Curriculum includes robotics design, AI integration, sensor technology, and control theory.",
    highlights: [
      "Focus on automation and AI integration",
      "Specialized in robotics programming",
      "Exploring advanced control systems",
      "Research in intelligent autonomous systems",
      "Practical applications of machine learning in robotics",
    ],
    progress: 5,
  },
  {
    institution: "Bahria College Karsaz",
    degree: "HSSC (Intermediate)",
    period: "August 2022 - July 2024",
    status: "Completed",
    description: "Higher Secondary School Certificate with focus on pre-engineering subjects.",
    highlights: ["Prefect of College", "Computer Expert recognition", "Student of the Session - Javed Miandad Award"],
    progress: 100,
  },
  {
    institution: "Usman Public School System",
    degree: "SSC (Matriculation)",
    period: "April 2022 - August 2022",
    status: "Completed",
    description: "Secondary School Certificate with strong academic performance.",
    highlights: [
      "Completed core curriculum",
      "Developed foundation in sciences",
      "Participated in extracurricular activities",
    ],
    progress: 100,
  },
]

const certifications = [
  {
    title: "AI, Web3.0 & Metaverse",
    provider: "Governor Initiative",
    year: "2024",
    icon: "🌐",
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

const aiCertifications = [
  {
    title: "Introduction to Generative AI",
    provider: "Coursera",
    year: "2024",
  },
  {
    title: "Introduction to Large Language Models",
    provider: "Coursera",
    year: "2024",
  },
  {
    title: "Introduction to Image Generation",
    provider: "Coursera",
    year: "2024",
  },
  {
    title: "Introduction to Responsible AI",
    provider: "Coursera",
    year: "2024",
  },
  {
    title: "Encoder-Decoder Architecture",
    provider: "Coursera",
    year: "2024",
  },
  {
    title: "Introduction to Duet AI in Google Workspace",
    provider: "Coursera",
    year: "2024",
  },
  {
    title: "Introduction to Generative AI Studio",
    provider: "Coursera",
    year: "2024",
  },
  {
    title: "Duet AI in Gmail",
    provider: "Coursera",
    year: "2024",
  },
]

const dataScienceCertifications = [
  {
    title: "The Data Scientist's Toolbox",
    provider: "Coursera",
    year: "2023",
  },
  {
    title: "Use AI Builder and Power Apps to Process Invoice Data",
    provider: "Coursera",
    year: "2023",
  },
  {
    title: "What is Data Science",
    provider: "Coursera",
    year: "2023",
  },
  {
    title: "Mining Quality Prediction Using Machine and Deep Learning",
    provider: "Coursera",
    year: "2023",
  },
  {
    title: "Get started with RStudio",
    provider: "Coursera",
    year: "2023",
  },
  {
    title: "Mastering Data Analysis with Pandas",
    provider: "Coursera",
    year: "2023",
  },
  {
    title: "Prepare, Clean, Transform, and Load Data using Power BI",
    provider: "Coursera",
    year: "2023",
  },
  {
    title: "Application of Data Analysis in Business with R Programming",
    provider: "Coursera",
    year: "2023",
  },
]

const otherCertifications = [
  {
    title: "Google Soft Skills Program",
    provider: "Google",
    year: "2024",
  },
  {
    title: "TypeScript Variables and Data Types",
    provider: "Coursera",
    year: "2024",
  },
  {
    title: "How to Optimize Your Instagram Account",
    provider: "Coursera",
    year: "2023",
  },
  {
    title: "Freelancing",
    provider: "DigiSkills",
    year: "2023",
  },
  {
    title: "Mobile Repairing",
    provider: "LLCF",
    year: "2023",
  },
  {
    title: "HVAC",
    provider: "LLCF",
    year: "2023",
  },
  {
    title: "English Language level 2",
    provider: "LLCF",
    year: "2023",
  },
]

export default function AboutEducation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pursuing a specialized degree in robotics while continuously expanding knowledge through certifications in
            AI, data science, and design.
          </p>
        </motion.header>

        {/* Formal Education */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`h-full ${index === 0 ? "border-primary/30 shadow-lg" : ""}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className={`h-6 w-6 ${index === 0 ? "text-primary" : "text-muted-foreground"}`} />
                    <Badge variant={edu.status === "In Progress" ? "secondary" : "default"}>{edu.status}</Badge>
                    {index === 0 && (
                      <Badge variant="outline" className="bg-primary/10">
                        Featured
                      </Badge>
                    )}
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

        {/* Main Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Key Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
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

        {/* AI Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">AI & Generative AI Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {aiCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm mb-1">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.provider} • {cert.year}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Science Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Data Science Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {dataScienceCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm mb-1">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.provider} • {cert.year}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {otherCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm mb-1">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.provider} • {cert.year}
                    </p>
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
