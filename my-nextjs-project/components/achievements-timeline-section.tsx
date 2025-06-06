"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, GraduationCap, Users, Presentation, Star, Calendar, MapPin } from "lucide-react"

const achievements = [
  {
    year: "2024",
    title: "Rising Star Award",
    organization: "Governor's AI Initiative",
    description: "Recognized for outstanding innovation and leadership in AI and technology development",
    icon: <Star className="h-5 w-5" />,
    color: "from-yellow-500 to-orange-500",
    category: "Award",
    location: "Karachi, Pakistan",
  },
  {
    year: "2024",
    title: "Javed Miandad Award for Academic Excellence",
    organization: "Bahria College Karsaz",
    description: "Student of the Session award for exceptional academic performance and leadership",
    icon: <Trophy className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
    category: "Academic",
    location: "Karachi, Pakistan",
  },
  {
    year: "2024",
    title: "Dual Degree Enrollment",
    organization: "Bahria University & University of the People",
    description: "Pursuing simultaneous degrees in Robotics & Intelligent Systems and Computer Science",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
    category: "Education",
    location: "Karachi & Online",
  },
  {
    year: "2023-2024",
    title: "Prefect of College",
    organization: "Bahria College Karsaz",
    description: "Selected for leadership role overseeing student activities and representing student body",
    icon: <Users className="h-5 w-5" />,
    color: "from-purple-500 to-violet-500",
    category: "Leadership",
    location: "Karachi, Pakistan",
  },
  {
    year: "2023",
    title: "Computer Expert Recognition",
    organization: "Bahria College Karsaz",
    description: "Acknowledged for technical expertise and innovation in computing and technology",
    icon: <Award className="h-5 w-5" />,
    color: "from-indigo-500 to-blue-500",
    category: "Technical",
    location: "Karachi, Pakistan",
  },
  {
    year: "2023",
    title: "Public Speaking Excellence",
    organization: "School Events",
    description: "Delivered impactful speeches at Kashmir Freedom and School Problems events",
    icon: <Presentation className="h-5 w-5" />,
    color: "from-pink-500 to-rose-500",
    category: "Communication",
    location: "Karachi, Pakistan",
  },
]

const certificationMilestones = [
  {
    year: "2024",
    count: "15+",
    category: "AI & Generative AI Certifications",
    description: "Coursera specializations in LLMs, Generative AI, and Responsible AI",
  },
  {
    year: "2023-2024",
    count: "10+",
    category: "Data Science Certifications",
    description: "Power BI, Tableau, Python, R, and advanced analytics",
  },
  {
    year: "2023",
    count: "8+",
    category: "Professional Skills",
    description: "Google Soft Skills, TypeScript, Freelancing, and Technical Skills",
  },
]

function TimelineItem({ achievement, index, isInView }: { achievement: any; index: number; isInView: boolean }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content Card */}
      <div className="flex-1">
        <motion.div whileHover={{ scale: 1.02 }} className="group">
          <Card className="bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{achievement.year}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-2">{achievement.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{achievement.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {achievement.location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} border-4 border-background shadow-lg`}
        />
        {index < achievements.length - 1 && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1" />
    </motion.div>
  )
}

export default function AchievementsTimelineSection() {
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
              <Calendar className="h-4 w-4 mr-2" />
              Achievement Timeline
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Milestones & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A journey of continuous growth, recognition, and impact. Each milestone represents dedication to excellence
            and commitment to pushing the boundaries of technology and innovation.
          </p>
        </motion.header>

        {/* Main Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <TimelineItem key={index} achievement={achievement} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Certification Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Certification Milestones</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificationMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.count}</div>
                    <h4 className="font-semibold mb-2">{milestone.category}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    <Badge variant="outline" className="mt-3 text-xs">
                      {milestone.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Major Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Degrees Pursuing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Commitment</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
