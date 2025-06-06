"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Heart, Globe, Users, Lightbulb, Rocket, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"

const visionPoints = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Youth-Led Innovation",
    description: "Empowering the next generation to lead technological advancement and social change",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Open-Source Education",
    description: "Making quality education accessible to everyone through technology and collaboration",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Code for Change",
    description: "Using programming as the most powerful tool for solving real-world problems",
    color: "from-purple-500 to-violet-500",
  },
]

const missionAreas = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Intelligent Systems Leadership",
    description: "Becoming a thought leader in robotics, AI, and automation technologies",
    impact: "Future-ready solutions for Pakistan and the world",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Community Upliftment",
    description: "Using technology to solve real-world problems and improve lives",
    impact: "Bridging the digital divide through innovation",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Pioneer New Frontiers",
    description: "Exploring uncharted territories in AI, robotics, and data science",
    impact: "Setting new standards for technological excellence",
  },
]

export default function VisionMissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
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
              <Target className="h-4 w-4 mr-2" />
              Vision & Mission
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Driving the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Technology is not just about code and circuits - it's about creating a better tomorrow. Here's how I
            envision the future and my role in shaping it.
          </p>
        </motion.header>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-primary/20">
              <Quote className="h-12 w-12" />
            </div>
            <CardContent className="p-8 text-center relative">
              <blockquote className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  "Technology is the poetry of logic, and innovation is how I express it."
                </span>
              </blockquote>
              <p className="text-muted-foreground">— Abdul Wahid Chohan, Technology Innovator</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">My Vision</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="h-full text-center bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${point.color} text-white mb-4`}>
                      {point.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{point.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">My Mission</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {missionAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white flex-shrink-0">
                        {area.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {area.title}
                        </h4>
                        <p className="text-muted-foreground mb-3 leading-relaxed">{area.description}</p>
                        <div className="text-sm text-primary font-medium">Impact: {area.impact}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join the Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ready to be part of the technological revolution? Let's collaborate on projects that matter, build
                solutions that scale, and create innovations that inspire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-blue-600">
                  <Link href="#contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://github.com/AbdulWahidChohan" target="_blank">
                    Explore My Work
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
