"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Cpu, Globe } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

const FloatingIcon = ({ icon: Icon, delay = 0, duration = 20 }: { icon: any; delay?: number; duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute text-primary/20"
  >
    <motion.div
      animate={{
        y: [-20, 20, -20],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <Icon size={24} />
    </motion.div>
  </motion.div>
)

const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/10 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <ParticleField />

      {/* Gradient Orbs */}
      <motion.div
        style={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded-full blur-3xl"
      />

      {/* Floating Tech Icons */}
      <div className="absolute top-20 left-20">
        <FloatingIcon icon={Code} delay={0.5} duration={25} />
      </div>
      <div className="absolute top-40 right-32">
        <FloatingIcon icon={Cpu} delay={1.5} duration={30} />
      </div>
      <div className="absolute bottom-32 left-40">
        <FloatingIcon icon={Globe} delay={2.5} duration={22} />
      </div>
    </div>
  )
}

export default function EnhancedHeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <InteractiveBackground />

      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-20 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Badge
                variant="secondary"
                className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Graphic Designer & AI Enthusiast
              </Badge>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abdul Wahid
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-primary to-blue-600 bg-clip-text text-transparent">
                Chohan
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-2xl md:text-3xl text-muted-foreground mb-8 h-20">
              <TypeAnimation
                sequence={[
                  "Robotics Engineer",
                  3000,
                  "Agentic AI Learner",
                  3000,
                  "Future Tech Pioneer",
                  3000,
                  "Automation Expert",
                  3000,
                  "Creative Innovator",
                  3000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
              />
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Hi, I'm Abdul Wahid Chohan — an aspiring{" "}
            <span className="text-primary font-semibold">Graphic Designer</span> and{" "}
            <span className="text-primary font-semibold">AI Enthusiast</span> with a passion for{" "}
            <span className="text-primary font-semibold">robotics</span>. I blend creativity with technical expertise to
            deliver innovative solutions that bridge art and technology.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Robotics Engineering",
              "Agentic AI",
              "Future Automation",
              "Machine Learning",
              "Web Development",
              "UI/UX Design",
              "Data Science",
              "R Programming",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group px-8 py-4 text-lg bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-8">
            {[
              {
                icon: Github,
                href: "https://github.com/AbdulWahidChohan",
                label: "GitHub",
                color: "hover:text-gray-900 dark:hover:text-gray-100",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/abdul-wahid-chohan",
                label: "LinkedIn",
                color: "hover:text-blue-600",
              },
              { icon: Mail, href: "mailto:aw4532350@gmail.com", label: "Email", color: "hover:text-green-600" },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.div key={label} whileHover={{ scale: 1.3, y: -5 }} whileTap={{ scale: 0.9 }} className="group">
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className={`p-4 ${color} transition-all duration-300 hover:bg-primary/10`}
                >
                  <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => {
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
