"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  MapPin,
  GraduationCap,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
  Zap,
  Brain,
  Code,
  Palette,
  BarChart3,
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const coreIdentities = [
  {
    icon: <Code className="h-5 w-5" />,
    title: "Robotics Engineer in the Making",
    description: "Specializing in Arduino-based systems, PID control, and real-time sensor integration",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Full-Stack Developer",
    description: "Crafting performant web applications using React, Next.js, TypeScript, and PostgreSQL",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "AI Enthusiast",
    description: "Skilled in LLMs, prompt engineering, and Responsible AI",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Graphic Designer",
    description: "Creative wizard with Photoshop, Illustrator, Canva, and SolidWorks",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Data Analyst",
    description: "Fluent in R, Power BI, Tableau, and Excel to extract insights that matter",
    color: "from-orange-500 to-amber-500",
  },
]

export default function EnhancedAboutHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5">
                  <Award className="h-4 w-4 mr-2" />
                  Bahria University Robotics Student
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Robotics
                </span>
                <br />
                <span className="text-foreground">Engineer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                At the intersection of <span className="text-primary font-semibold">imagination and engineering</span>,
                I build intelligent systems, design automation solutions, and develop scalable full-stack applications
                powered by AI and R programming.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>B.Sc. Robotics and Intelligent Systems</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Expected Graduation: 2027-2028</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>AI & Robotics Specialist</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-blue-600">
                <Link href="#projects">View My Projects</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/AbdulWahidChohan", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/abdul-wahid-chohan", label: "LinkedIn" },
                { icon: Mail, href: "mailto:aw4532350@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+923022666205", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.div key={label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined}>
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Profile Card */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative">
                <Card className="overflow-hidden bg-gradient-to-br from-background to-muted/20 border-primary/20 shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-xl"
                      />
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                        <Image
                          src="/placeholder.svg?height=128&width=128"
                          alt="Abdul Wahid Chohan"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">Abdul Wahid Chohan</h3>
                    <p className="text-muted-foreground mb-4">Robotics Engineer</p>

                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Robotics
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        AI
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        R Programming
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Full-Stack
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Floating Achievement Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4"
              >
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                  🏆 Rising Star
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4"
              >
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                  🎓 Bahria University
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Core Identity Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Identity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I thrive in high-performance environments where creativity meets code. Here's what defines my technical
              DNA:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c
