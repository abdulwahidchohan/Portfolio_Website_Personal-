"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Graphic Designer & AI Enthusiast
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abdul Wahid Chohan
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground mb-8">
              <h2 className="font-semibold">Robotics Student & Creative Designer</h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Hi, I'm Abdul Wahid Chohan — an aspiring{" "}
            <span className="text-primary font-semibold">Graphic Designer</span> and{" "}
            <span className="text-primary font-semibold">AI Enthusiast</span> with a passion for{" "}
            <span className="text-primary font-semibold">robotics</span>. Currently pursuing my Bachelor's in Robotics
            and Intelligent Systems at Bahria University, I blend creativity with technical expertise to deliver
            innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              "Graphic Design",
              "AI & Machine Learning",
              "Robotics",
              "Data Science",
              "Web Development",
              "UI/UX Design",
            ].map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-3 py-1 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-blue-600">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/AbdulWahidChohan", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/abdul-wahid-chohan", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aw4532350@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <Button key={label} variant="ghost" size="icon" asChild>
                <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              </Button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
