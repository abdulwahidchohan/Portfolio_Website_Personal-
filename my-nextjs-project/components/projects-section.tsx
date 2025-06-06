"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, ExternalLink, Award, Zap, Target } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Soccer/Sumo Robots",
    description: "Competition-winning autonomous robots with advanced sensor integration and PID control systems.",
    icon: <Target className="h-6 w-6" />,
    metrics: "90% accuracy rate",
    technologies: ["Arduino", "C++", "SolidWorks"],
    category: "Robotics",
    githubUrl: "https://github.com/AbdulWahidChohan/soccer-robot",
    achievements: ["Competition Winner", "15% Performance Improvement", "Advanced Sensor Integration"],
  },
  {
    title: "High-Performance E-Commerce App",
    description: "Full-stack Next.js application optimized for speed with 30% improved load times.",
    icon: <Zap className="h-6 w-6" />,
    metrics: "30% faster loading",
    technologies: ["Next.js", "PostgreSQL", "TypeScript"],
    category: "Web Development",
    githubUrl: "https://github.com/AbdulWahidChohan/ecommerce-app",
    liveUrl: "https://ecommerce-demo.vercel.app",
    achievements: ["30% Performance Boost", "SEO Optimized", "Mobile-First Design"],
  },
  {
    title: "Line-Following Robot",
    description: "Precision navigation system showcased at Procom 2025 with 85% error reduction.",
    icon: <Award className="h-6 w-6" />,
    metrics: "85% error reduction",
    technologies: ["Arduino", "PID Control", "Sensors"],
    category: "Robotics",
    githubUrl: "https://github.com/AbdulWahidChohan/line-following-robot",
    achievements: ["Procom 2025 Showcase", "85% Error Reduction", "Autonomous Navigation"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Award-winning robotics solutions and high-performance web applications showcasing innovation in automation
            and software engineering.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{project.icon}</div>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-primary mb-2">Key Metric: {project.metrics}</div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild className="flex-1">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="#contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
