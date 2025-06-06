"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Layers, Palette, BarChart3, Cpu, Database, Wrench } from "lucide-react"

const technicalStacks = [
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 90, description: "AI/ML, Data Science, Automation" },
      { name: "JavaScript", level: 88, description: "Full-stack web development" },
      { name: "TypeScript", level: 85, description: "Type-safe applications" },
      { name: "R", level: 78, description: "Statistical analysis and data visualization", featured: true },
      { name: "C++", level: 82, description: "Robotics and system programming" },
      { name: "HTML/CSS", level: 95, description: "Modern web standards" },
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: <Layers className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "React", level: 90, description: "Component-based UI development" },
      { name: "Next.js", level: 88, description: "Full-stack React framework" },
      { name: "Tailwind CSS", level: 92, description: "Utility-first CSS framework" },
      { name: "PostgreSQL", level: 80, description: "Relational database management" },
      { name: "Arduino", level: 85, description: "Embedded systems programming" },
      { name: "Git", level: 88, description: "Version control and collaboration" },
    ],
  },
  {
    category: "Design & CAD",
    icon: <Palette className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Photoshop", level: 95, description: "Advanced photo editing and design" },
      { name: "Illustrator", level: 90, description: "Vector graphics and logos" },
      { name: "Canva", level: 98, description: "Quick design and prototyping" },
      { name: "SolidWorks", level: 78, description: "3D modeling and CAD design" },
      { name: "AutoCAD", level: 75, description: "Technical drawings" },
      { name: "Figma", level: 82, description: "UI/UX design and prototyping" },
    ],
  },
  {
    category: "Data Science Tools",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Power BI", level: 92, description: "Business intelligence dashboards" },
      { name: "Tableau", level: 88, description: "Data visualization and analytics" },
      { name: "Excel", level: 95, description: "Advanced formulas and analysis" },
      { name: "Pandas", level: 85, description: "Data manipulation in Python" },
      { name: "RStudio", level: 80, description: "Statistical computing with R", featured: true },
      { name: "SQL", level: 88, description: "Database querying and management" },
    ],
  },
  {
    category: "Robotics Systems",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "Sensor Integration", level: 90, description: "IR, ultrasonic, gyroscopic sensors" },
      { name: "PID Control", level: 85, description: "Precision movement algorithms" },
      { name: "Arduino Programming", level: 92, description: "Microcontroller development" },
      { name: "Robot Navigation", level: 88, description: "Autonomous movement systems" },
      { name: "Real-time Systems", level: 80, description: "Time-critical applications" },
      { name: "IoT Integration", level: 82, description: "Connected device ecosystems" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: <Database className="h-6 w-6" />,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Agentic AI Systems", level: 75, description: "Currently learning autonomous AI agents", featured: true },
      { name: "Large Language Models", level: 88, description: "GPT, Claude, and custom models" },
      { name: "Prompt Engineering", level: 95, description: "Optimizing AI interactions" },
      { name: "Generative AI", level: 90, description: "Content creation and automation" },
      { name: "Machine Learning", level: 82, description: "Supervised and unsupervised learning" },
      { name: "Future Robotics AI", level: 78, description: "AI integration in next-gen robotics", featured: true },
    ],
  },
]

function SkillCard({ stack, index, isInView }: { stack: any; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="h-full bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-3 rounded-full bg-gradient-to-r ${stack.color} text-white`}>{stack.icon}</div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">{stack.category}</CardTitle>
              <CardDescription>{stack.skills.length} technologies mastered</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {stack.skills.map((skill: any, skillIndex: number) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                className={skill.featured ? "bg-primary/5 p-3 rounded-lg border border-primary/20" : ""}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{skill.name}</span>
                      {skill.featured && (
                        <Badge variant="outline" className="text-xs bg-primary/10">
                          Featured
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 + 0.5 }}
                >
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function TechnicalStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Badge variant="secondary" className="px-4 py-2">
              <Wrench className="h-4 w-4 mr-2" />
              Technical Arsenal
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Technical Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning multiple domains - from low-level robotics programming to high-level AI
            applications. Each technology represents years of hands-on experience and continuous learning.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalStacks.map((stack, index) => (
            <SkillCard key={index} stack={stack} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Core Domains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Avg Proficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
