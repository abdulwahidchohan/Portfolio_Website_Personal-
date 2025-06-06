"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  Search,
  Filter,
  ExternalLink,
  Github,
  Award,
  Zap,
  Target,
  Brain,
  Code,
  Cpu,
  Eye,
  Heart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AI-Powered Design Assistant",
    description:
      "Revolutionary graphic design tool using generative AI to create stunning visuals with natural language prompts.",
    longDescription:
      "Developed an innovative AI-powered design assistant that transforms text descriptions into professional graphics using advanced machine learning models and prompt engineering techniques.",
    icon: <Brain className="h-6 w-6" />,
    metrics: "95% user satisfaction",
    technologies: ["Generative AI", "Python", "Photoshop API", "Machine Learning"],
    category: "AI",
    status: "Featured",
    year: "2024",
    achievements: ["AI Innovation Award", "95% User Satisfaction", "10x Faster Design Process"],
    githubUrl: "https://github.com/AbdulWahidChohan/ai-design-assistant",
    liveUrl: "https://ai-design-demo.vercel.app",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    likes: 127,
    views: 1543,
  },
  {
    id: 2,
    title: "Smart Robotics Control System",
    description: "Advanced robotics control interface with real-time monitoring and AI-driven automation capabilities.",
    longDescription:
      "Built a comprehensive robotics control system featuring real-time sensor data visualization, autonomous navigation algorithms, and intelligent decision-making capabilities.",
    icon: <Cpu className="h-6 w-6" />,
    metrics: "90% accuracy rate",
    technologies: ["Robotics", "C++", "Arduino", "IoT", "Machine Learning"],
    category: "Robotics",
    status: "Completed",
    year: "2024",
    achievements: ["Competition Winner", "90% Accuracy Rate", "Real-time Processing"],
    githubUrl: "https://github.com/AbdulWahidChohan/robotics-control",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    likes: 89,
    views: 892,
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive business intelligence dashboard with advanced analytics and real-time data processing.",
    longDescription:
      "Created a comprehensive data visualization platform using Power BI and custom analytics to provide actionable business insights with beautiful, interactive charts.",
    icon: <Target className="h-6 w-6" />,
    metrics: "40% faster insights",
    technologies: ["Power BI", "Tableau", "Python", "SQL", "Data Science"],
    category: "Data Science",
    status: "Completed",
    year: "2024",
    achievements: ["40% Faster Insights", "Real-time Analytics", "Interactive Visualizations"],
    githubUrl: "https://github.com/AbdulWahidChohan/data-dashboard",
    liveUrl: "https://data-dashboard-demo.vercel.app",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    likes: 156,
    views: 2341,
  },
  {
    id: 4,
    title: "Brand Identity Design Suite",
    description: "Complete brand identity package with logo design, color schemes, and marketing materials.",
    longDescription:
      "Designed comprehensive brand identities for multiple clients using advanced design principles, color theory, and modern typography to create memorable visual experiences.",
    icon: <Code className="h-6 w-6" />,
    metrics: "15+ brands created",
    technologies: ["Photoshop", "Illustrator", "Canva", "Brand Strategy"],
    category: "Design",
    status: "Ongoing",
    year: "2024",
    achievements: ["15+ Successful Brands", "Client Satisfaction 98%", "Award-winning Designs"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    likes: 203,
    views: 3127,
  },
]

const categories = ["All", "AI", "Robotics", "Data Science", "Design"]
const statuses = ["All", "Featured", "Completed", "Ongoing"]

function ProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  const [isLiked, setIsLiked] = useState(false)
  const [localLikes, setLocalLikes] = useState(project.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLocalLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Card
        className={`h-full transition-all duration-500 hover:shadow-2xl overflow-hidden ${
          project.featured ? "ring-2 ring-primary/20 bg-gradient-to-br from-background to-primary/5" : ""
        }`}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-blue-500/10">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isLiked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            </motion.button>
            <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {project.views}
            </div>
          </div>

          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-primary to-blue-600">Featured</Badge>
            </div>
          )}
        </div>

        <CardHeader className="relative">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className={`p-3 rounded-full ${project.featured ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}
            >
              {project.icon}
            </motion.div>
            <div className="flex flex-wrap gap-2">
              <Badge variant={project.status === "Featured" ? "default" : "secondary"}>{project.status}</Badge>
              <Badge variant="outline">{project.category}</Badge>
            </div>
          </div>

          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </CardTitle>
          <CardDescription className="leading-relaxed line-clamp-3">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <div className="mb-4">
            <div className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              {project.metrics}
            </div>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.technologies.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              Achievements:
            </h4>
            <ul className="space-y-1">
              {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                  {localLikes}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {project.views}
                </span>
              </div>
              <span>{project.year}</span>
            </div>

            <div className="flex gap-2">
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
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function EnhancedProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const otherProjects = filteredProjects.filter((p) => !p.featured)

  return (
    <section ref={ref} id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
              <Award className="h-4 w-4 mr-2" />
              Featured Work
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Creative Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Innovative solutions spanning AI, robotics, data science, and graphic design. Each project represents a
            unique blend of creativity and technical expertise.
          </p>
        </motion.header>

        {/* Enhanced Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 backdrop-blur-sm border-primary/20"
              />
            </div>

            <div className="flex gap-4 items-center">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-background/50 backdrop-blur-sm"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: 20 }}
                    className="flex gap-4"
                  >
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40 bg-background/50 backdrop-blur-sm">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-40 bg-background/50 backdrop-blur-sm">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
              <Award className="h-6 w-6 text-primary" />
              Featured Projects
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold mb-8"
            >
              More Projects
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-muted-foreground text-lg mb-4">No projects found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setSelectedStatus("All")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
