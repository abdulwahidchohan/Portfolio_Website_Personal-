"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Code,
  GraduationCap,
  Briefcase,
  MessageSquare,
  Globe,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cpu,
  Palette,
  BarChart3,
  Brain,
  Layers,
  Wrench,
  Users,
  ArrowRight,
  Lightbulb,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

export default function AboutMeContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg dark:prose-invert max-w-4xl mx-auto"
        >
          {/* Introduction */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            >
              💼 About Me — Abdul Wahid Chohan
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              Greetings! I'm <span className="font-semibold text-foreground">Abdul Wahid Chohan</span>, a Karachi-based
              technology innovator, currently pursuing{" "}
              <span className="font-semibold text-foreground">dual degrees</span> in{" "}
              <span className="font-semibold text-foreground">Robotics and Intelligent Systems</span> at{" "}
              <em>Bahria University Karachi Campus</em> and{" "}
              <span className="font-semibold text-foreground">Computer Science</span> at{" "}
              <em>University of the People (Online)</em>. Currently diving deep into{" "}
              <span className="font-semibold text-foreground">Agentic AI</span> and{" "}
              <span className="font-semibold text-foreground">Future Robotics</span> - the technologies that will shape
              our automated future.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I thrive in high-performance environments where creativity meets code. Whether I'm wiring up sensors on a{" "}
              <span className="font-semibold text-foreground">Soccer Robot</span>, deploying a{" "}
              <span className="font-semibold text-foreground">Next.js web app</span>, or training a{" "}
              <span className="font-semibold text-foreground">Generative AI model</span>, I bring precision, vision, and
              a spark of innovation to every challenge I take on.
            </motion.p>
          </div>

          {/* Core Identity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Core Identity
            </h2>

            <ul className="space-y-4 list-none pl-0">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-semibold">Robotics Engineer in the Making</span> – Specializing in Arduino-based
                  systems, PID control, and real-time sensor integration.
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-start gap-3"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-semibold">Full-Stack Developer</span> – Crafting performant web applications
                  using <strong>React, Next.js, TypeScript, and PostgreSQL</strong>.
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-start gap-3"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-semibold">AI Enthusiast</span> – Skilled in <strong>LLMs</strong>,{" "}
                  <strong>prompt engineering</strong>, and <strong>Responsible AI</strong>.
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-start gap-3"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Palette className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-semibold">Graphic Designer</span> – Creative wizard with tools like Photoshop,
                  Illustrator, Canva, and SolidWorks.
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="flex items-start gap-3"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-semibold">Data Analyst</span> – Fluent in <strong>Power BI</strong>,{" "}
                  <strong>Tableau</strong>, and Excel to extract insights that matter.
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Technical Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              Technical Stack
            </h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Programming Languages:
                </h3>
                <p className="text-muted-foreground">Python, C++, JavaScript, TypeScript, HTML/CSS, R</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Frameworks & Tools:
                </h3>
                <p className="text-muted-foreground">
                  React, Next.js, Tailwind CSS, PostgreSQL, Arduino, Git, VS Code, FastAPI
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Design & CAD:
                </h3>
                <p className="text-muted-foreground">Photoshop, Illustrator, Canva, SolidWorks, AutoCAD</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Data Science Tools:
                </h3>
                <p className="text-muted-foreground">Power BI, Tableau, Excel, Pandas, RStudio</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  Robotics Systems:
                </h3>
                <p className="text-muted-foreground">
                  Sensor-based robotics (IR, ultrasonic), PID algorithms, Line-following and Sumo bots
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h2>

            <ul className="space-y-6 list-none pl-0">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="relative pl-8 border-l-2 border-primary/30 pb-6"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">B.Sc. Robotics and Intelligent Systems</h3>
                <p className="text-primary font-medium">
                  Bahria University Karachi — <em>Expected 2027</em>
                </p>
                <p className="text-muted-foreground text-sm">Class Representative, Project Leader</p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="relative pl-8 border-l-2 border-primary/30 pb-6"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">B.S. Computer Science</h3>
                <p className="text-primary font-medium">
                  University of the People (Online) — <em>Expected 2028</em>
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="relative pl-8 border-l-2 border-primary/30 pb-6"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">Diploma in Agentic AI Engineering</h3>
                <p className="text-primary font-medium">
                  Governor's Initiative — <em>2023–Present</em>
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">Diploma in AI, Web 3.0, and Metaverse</h3>
                <p className="text-primary font-medium">
                  Governor's Initiative — <em>2024–Present</em>
                </p>
              </motion.li>
            </ul>
          </motion.div>

          {/* Key Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Key Projects
            </h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="border-l-2 border-primary/30 pl-6 relative"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <Cpu className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">Soccer/Sumo Robots (Arduino, C++)</h3>
                <ul className="list-none pl-0 space-y-1 mt-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">→</span>
                    Achieved 90% competition accuracy using IR and ultrasonic sensors.
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">→</span>
                    Enhanced robot design using 3D modeling in SolidWorks.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="border-l-2 border-primary/30 pl-6 relative"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <Globe className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">E-Commerce Web App (Next.js, React)</h3>
                <ul className="list-none pl-0 space-y-1 mt-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">→</span>
                    Reduced load times by 30% via frontend performance optimization.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="border-l-2 border-primary/30 pl-6 relative"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <Cpu className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">Line-Following Robot (PID Control)</h3>
                <ul className="list-none pl-0 space-y-1 mt-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">→</span>
                    Achieved 85% reduction in navigation errors; showcased at Procom 2025.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="border-l-2 border-primary/30 pl-6 relative"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <Brain className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">AI Chatbot, Secure Vault CLI Tool, GitHub Activity Visualizer</h3>
                <ul className="list-none pl-0 space-y-1 mt-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">→</span>
                    Personal GitHub-based tools built for the community and learning.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="mt-4"
              >
                <Link
                  href="https://github.com/AbdulWahidChohan"
                  target="_blank"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  Explore all projects <ExternalLink className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications & Achievements
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white">Award</Badge>
                    <span className="font-medium">Rising Star Award, Governor's AI Initiative (2024)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">Award</Badge>
                    <span className="font-medium">Javed Miandad Award for Academic Excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">Cert</Badge>
                    <span className="font-medium">Data Analytics & BI – DigiSkills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">Cert</Badge>
                    <span className="font-medium">Generative AI & LLMs – Coursera</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">Award</Badge>
                    <span className="font-medium">Python-Based Calculator – Innovation Award</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">Cert</Badge>
                    <span className="font-medium">Graphic Design – LLCF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">Cert</Badge>
                    <span className="font-medium">20+ AI/tech micro-certifications</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Roles & Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Roles & Responsibilities
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="flex items-start gap-2"
              >
                <div className="bg-primary/10 p-1 rounded-full text-primary">
                  <Award className="h-4 w-4" />
                </div>
                <span>Computer Expert, Bahria College Karsaz</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="flex items-start gap-2"
              >
                <div className="bg-primary/10 p-1 rounded-full text-primary">
                  <Users className="h-4 w-4" />
                </div>
                <span>NUST Robotics & AI Ambassador</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="flex items-start gap-2"
              >
                <div className="bg-primary/10 p-1 rounded-full text-primary">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span>Prefect & Public Speaker</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                className="flex items-start gap-2"
              >
                <div className="bg-primary/10 p-1 rounded-full text-primary">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <span>Mentor & Peer Trainer</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Soft Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: <MessageSquare className="h-4 w-4" />, text: "Public Speaking" },
                { icon: <Briefcase className="h-4 w-4" />, text: "Project Management" },
                { icon: <Lightbulb className="h-4 w-4" />, text: "Problem Solving" },
                { icon: <Users className="h-4 w-4" />, text: "Team Collaboration" },
                { icon: <Award className="h-4 w-4" />, text: "Leadership" },
                { icon: <Brain className="h-4 w-4" />, text: "Critical Thinking" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="px-3 py-1 text-sm flex items-center gap-1 bg-primary/5 hover:bg-primary/10"
                  >
                    {skill.icon} {skill.text}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Learning Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Current Learning Focus
            </h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="border-l-2 border-primary/30 pl-6 relative"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <Brain className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">Agentic AI Systems</h3>
                <p className="text-muted-foreground mt-2">
                  Mastering autonomous AI agents that can reason, plan, and execute complex tasks independently.
                  Learning multi-agent systems, reasoning frameworks, and tool integration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="border-l-2 border-primary/30 pl-6 relative"
              >
                <div className="absolute -left-3 top-0 bg-primary text-white p-1 rounded-full">
                  <Cpu className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold">Future Robotics</h3>
                <p className="text-muted-foreground mt-2">
                  Exploring next-generation robotics with advanced AI integration, autonomous navigation, human-robot
                  interaction, and adaptive learning systems for real-world applications.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Vision & Mission
            </h2>

            <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20 mb-8">
              <CardContent className="p-6">
                <blockquote className="text-xl md:text-2xl font-semibold italic text-center mb-4">
                  "Technology is the poetry of logic, and innovation is how I express it."
                </blockquote>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I believe in using technology to <span className="font-semibold text-foreground">uplift communities</span>
              , <span className="font-semibold text-foreground">solve real-world problems</span>, and{" "}
              <span className="font-semibold text-foreground">pioneer new frontiers</span>. My mission is to become a{" "}
              <span className="font-semibold text-foreground">thought leader in intelligent systems</span>, blending
              robotics, data science, and AI into future-ready solutions for Pakistan—and the world.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am driven by a vision where youth lead innovation, where education is open-source, and where code is the
              most powerful tool for change.
            </p>
          </motion.div>

          {/* Connect with Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              Connect with Me
            </h2>

            <ul className="list-none pl-0 space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                className="flex items-center gap-3"
              >
                <Github className="h-5 w-5 text-primary" />
                <Link
                  href="https://github.com/AbdulWahidChohan"
                  target="_blank"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  AbdulWahidChohan
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <Link
                  href="https://linkedin.com/in/abdul-wahid-chohan"
                  target="_blank"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/abdul-wahid-chohan
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                className="flex items-center gap-3"
              >
                <div className="h-5 w-5 text-primary">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <Link
                  href="mailto:aw4532350@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  aw4532350@gmail.com
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center"
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-blue-600">
              <Link href="/#contact">
                Let's Collaborate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
