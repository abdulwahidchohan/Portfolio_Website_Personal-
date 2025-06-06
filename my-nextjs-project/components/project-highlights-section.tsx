"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Trophy, Zap, Target, Brain, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

const keyProjects = [
  {
    id: 1,
    title: "Soccer/Sumo Robots",
    subtitle: "Arduino & C++ Mastery",
    description:
      "Competition-winning autonomous robots achieving 90% accuracy using advanced sensor integration and PID control algorithms.",
    technologies: ["Arduino", "C++", "SolidWorks", "PID Control", "IR Sensors"],
    achievements: [
      "90% competition accuracy rate",
      "Enhanced robot design using 3D modeling",
      "Real-time sensor data processing",
      "Autonomous navigation algorithms",
    ],
    metrics: {
      accuracy: "90%",
      improvement: "15%",
      sensors: "5+",
    },
    icon: <Target className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/AbdulWahidChohan/soccer-robot",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Web Application",
    subtitle: "Next.js & Performance Optimization",
    description:
      "High-performance full-stack web application with 30% improved load times through advanced optimization techniques.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    achievements: [
      "30% reduction in load times",
      "Frontend performance optimization",
      "Responsive design implementation",
      "Database optimization",
    ],
    metrics: {
      performance: "30%",
      loadTime: "< 2s",
      users: "1000+",
    },
    icon: <Zap className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    githubUrl: "https://github.com/AbdulWahidChohan/ecommerce-app",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Line-Following Robot",
    subtitle: "PID Control & Navigation",
    description:
      "Precision navigation system showcased at Procom 2025 with 85% error reduction using advanced control algorithms.",
    technologies: ["Arduino", "PID Control", "Computer Vision", "Sensors", "C++"],
    achievements: [
      "85% reduction in navigation errors",
      "Showcased at Procom 2025",
      "Autonomous path following",
      "Real-time course correction",
    ],
    metrics: {
      accuracy: "85%",
      errorReduction: "85%",
      speed: "2m/s",
    },
    icon: <Trophy className="h-6 w-6" />,
    color: "from-purple-500 to-violet-500",
    githubUrl: "https://github.com/AbdulWahidChohan/line-following-robot",
    featured: true,
  },
  {
    id: 4,
    title: "AI Chatbot & Tools Suite",
    subtitle: "LLM Integration & Automation",
    description:
      "Intelligent conversational AI and automation tools built for community engagement and learning enhancement.",
    technologies: ["Python", "OpenAI API", "Natural Language Processing", "Machine Learning"],
    achievements: [
      "Community-focused AI tools",
      "GitHub activity visualization",
      "Secure vault CLI implementation",
      "Educational resource automation",
    ],
    metrics: {
      users: "500+",
      accuracy: "95%",
      tools: "3",
    },
    icon: <Brain className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
    githubUrl: "https://github.com/AbdulWahidChohan",
    featured: false,
  },
]

function ProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group h-full"
    >
      <Card
        className={`h-full transition-all duration-500 hover:shadow-2xl ${
          project.featured ? "ring-2 ring-primary/20 bg-gradient-to-br from-background to-primary/5" : ""
        }`}
      >
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}>{project.icon}</div>
              <div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="font-medium">{project.subtitle}</CardDescription>
              </div>
            </div>
            {project.featured && <Badge className="bg-gradient-to-r from-primary to-blue-600">Featured</Badge>}
          </div>

          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, techIndex: number) => (
                <Badge key={techIndex} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Key Metrics:</h4>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg font-bold text-primary">{value as string}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Key Achievements:</h4>
            <ul className="space-y-2">
              {project.achievements.slice(0, 3).map((achievement: string, achIndex: number) => (
                <li key={achIndex} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild className="flex-1 group/btn">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Code
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild className="flex-1 group/btn">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                  Demo
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ProjectHighlightsSection() {
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
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Badge variant="secondary" className="px-4 py-2">
              <Trophy className="h-4 w-4 mr-2" />
              Project Highlights
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Key Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From competition-winning robots to high-performance web applications - each project represents a unique
            challenge solved with innovation, precision, and cutting-edge technology.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {keyProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Explore All Projects</h3>
              <p className="text-muted-foreground mb-6">
                Discover the complete portfolio on GitHub with detailed documentation, code samples, and live demos.
              </p>
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-blue-600">
                <Link href="https://github.com/AbdulWahidChohan" target="_blank">
                  View GitHub Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
