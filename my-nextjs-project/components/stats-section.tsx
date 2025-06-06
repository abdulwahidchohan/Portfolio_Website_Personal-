"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Code, Award, GitBranch, Star } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    value: 5,
    label: "Award-Winning Projects",
    suffix: "+",
    description: "Competition victories and recognitions",
    color: "text-yellow-600",
  },
  {
    icon: Code,
    value: 15,
    label: "Technologies Mastered",
    suffix: "+",
    description: "From Arduino to Next.js",
    color: "text-blue-600",
  },
  {
    icon: Users,
    value: 30,
    label: "Students Mentored",
    suffix: "+",
    description: "As class representative",
    color: "text-green-600",
  },
  {
    icon: GitBranch,
    value: 25,
    label: "Open Source Contributions",
    suffix: "+",
    description: "GitHub repositories and contributions",
    color: "text-purple-600",
  },
  {
    icon: Award,
    value: 2,
    label: "Major Awards",
    suffix: "",
    description: "Rising Star & Academic Excellence",
    color: "text-orange-600",
  },
  {
    icon: Star,
    value: 95,
    label: "Arduino Proficiency",
    suffix: "%",
    description: "Expert-level programming skills",
    color: "text-red-600",
  },
]

function CountUpAnimation({
  value,
  suffix = "",
  duration = 2000,
}: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        setCount(Math.floor(progress * value))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable results and recognition in robotics engineering, academic excellence, and community leadership.
          </p>
        </motion.header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="h-full text-center group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`mx-auto mb-4 p-3 rounded-full bg-muted/50 w-fit ${stat.color}`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </motion.div>

                  <div className="mb-2">
                    <CountUpAnimation value={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            These numbers represent my commitment to excellence in robotics engineering and continuous learning.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
