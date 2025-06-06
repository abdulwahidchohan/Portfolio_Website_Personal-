"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = [
  {
    title: "Graphic Design",
    description: "Visual content creation and digital design",
    icon: "🎨",
    skills: [
      { name: "Photoshop", level: 90 },
      { name: "Illustrator", level: 85 },
      { name: "Canva", level: 95 },
      { name: "Lightroom", level: 80 },
      { name: "UI/UX Design", level: 75 },
    ],
  },
  {
    title: "Programming",
    description: "Software development and coding",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "R", level: 78 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Analytical Tools",
    description: "Data analysis and business intelligence",
    icon: "📊",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 82 },
      { name: "Advanced Excel", level: 90 },
      { name: "Data Visualization", level: 85 },
      { name: "RStudio", level: 78 },
      { name: "MS Access", level: 75 },
    ],
  },
  {
    title: "AI & Robotics",
    description: "Artificial intelligence and automation",
    icon: "🤖",
    skills: [
      { name: "Agentic AI", level: 75, featured: true },
      { name: "Future Robotics", level: 80, featured: true },
      { name: "Generative AI", level: 85 },
      { name: "Machine Learning", level: 75 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Automation Systems", level: 82 },
    ],
  },
  {
    title: "Soft Skills",
    description: "Professional and interpersonal abilities",
    icon: "🗣️",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Teamwork", level: 92 },
      { name: "Problem Solving", level: 88 },
      { name: "Time Management", level: 85 },
    ],
  },
  {
    title: "Areas of Interest",
    description: "Fields of professional focus",
    icon: "🎯",
    skills: [
      { name: "Automation & Robotics", level: 85 },
      { name: "IT Infrastructure", level: 75 },
      { name: "AI & Machine Learning", level: 90 },
      { name: "Project Management", level: 80 },
      { name: "Graphic Design", level: 95 },
    ],
  },
  {
    title: "Current Learning",
    description: "Technologies I'm actively mastering",
    icon: "📚",
    skills: [
      { name: "Agentic AI Systems", level: 75 },
      { name: "Advanced Robotics", level: 80 },
      { name: "AI Agent Development", level: 70 },
      { name: "Future Tech Integration", level: 78 },
      { name: "Autonomous Systems", level: 72 },
    ],
  },
]

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setProgress(value)
          }, delay)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, delay])

  return (
    <div ref={ref}>
      <Progress value={progress} className="h-3 transition-all duration-1000 ease-out" />
    </div>
  )
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter(
          (category) =>
            category.title.toLowerCase() === activeTab.toLowerCase() ||
            category.skills.some((skill) => skill.name.toLowerCase().includes(activeTab.toLowerCase())),
        )

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning graphic design, programming, data analysis, and AI with proven project
            success and continuous learning.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="programming" onClick={() => setActiveTab("programming")}>
                Programming
              </TabsTrigger>
              <TabsTrigger value="design" onClick={() => setActiveTab("Graphic Design")}>
                Design
              </TabsTrigger>
              <TabsTrigger value="ai" onClick={() => setActiveTab("AI")}>
                AI
              </TabsTrigger>
              <TabsTrigger value="data" onClick={() => setActiveTab("data")}>
                Data
              </TabsTrigger>
              <TabsTrigger value="r" onClick={() => setActiveTab("r")}>
                R Language
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">{category.icon}</div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={
                          activeTab !== "all" && activeTab === "r" && skill.name.toLowerCase() === "r"
                            ? "ring-2 ring-primary p-3 rounded-lg"
                            : ""
                        }
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <AnimatedProgress value={skill.level} delay={index * 200 + skillIndex * 100 + 500} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
