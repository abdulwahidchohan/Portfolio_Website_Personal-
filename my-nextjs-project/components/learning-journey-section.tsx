"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Brain, Cpu, Zap, Target, TrendingUp, Lightbulb, Rocket } from "lucide-react"

const learningAreas = [
  {
    title: "Agentic AI Systems",
    description: "Building autonomous AI agents that can reason, plan, and execute complex tasks",
    icon: <Brain className="h-6 w-6" />,
    color: "from-purple-500 to-violet-500",
    progress: 75,
    topics: ["Multi-agent systems", "Reasoning frameworks", "Tool integration", "Decision making algorithms"],
    timeline: "Currently Learning - 2024",
  },
  {
    title: "Future Robotics",
    description: "Next-generation robotics with advanced AI integration and autonomous capabilities",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    progress: 80,
    topics: ["Autonomous navigation", "Human-robot interaction", "Swarm robotics", "Adaptive learning systems"],
    timeline: "Ongoing Research - 2024-2025",
  },
  {
    title: "Advanced Automation",
    description: "Creating intelligent automation systems for real-world applications",
    icon: <Zap className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    progress: 78,
    topics: ["Process automation", "Smart manufacturing", "IoT integration", "Predictive maintenance"],
    timeline: "Applied Learning - 2024",
  },
]

const learningGoals = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Master Agentic AI",
    description: "Become proficient in building autonomous AI systems",
    status: "In Progress",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Pioneer Future Robotics",
    description: "Lead innovation in next-generation robotic systems",
    status: "Planning",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Integrate AI & Robotics",
    description: "Create seamless AI-robotics solutions",
    status: "Researching",
  },
]

export default function LearningJourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background to-muted/20">
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
            <Badge variant="secondary" className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5">
              <BookOpen className="h-4 w-4 mr-2" />
              Current Learning Journey
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Mastering Tomorrow's Tech
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Currently diving deep into <span className="font-semibold text-primary">Agentic AI</span> and
            <span className="font-semibold text-primary"> Future Robotics</span> - the technologies that will shape our
            automated future. Here's what I'm learning and building.
          </p>
        </motion.header>

        {/* Learning Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {learningAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${area.color} text-white`}>{area.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{area.title}</CardTitle>
                      <CardDescription className="text-sm">{area.timeline}</CardDescription>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Learning Progress</span>
                        <Badge variant="secondary" className="text-xs">
                          {area.progress}%
                        </Badge>
                      </div>
                      <Progress value={area.progress} className="h-2" />
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Learning Goals & Milestones</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learningGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">{goal.icon}</div>
                  </div>
                  <h4 className="font-semibold mb-2">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{goal.description}</p>
                  <Badge variant={goal.status === "In Progress" ? "default" : "secondary"} className="text-xs">
                    {goal.status}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision for the Future</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By mastering <span className="font-semibold text-primary">Agentic AI</span> and
                <span className="font-semibold text-primary"> Future Robotics</span>, I aim to create intelligent
                systems that can autonomously solve complex real-world problems, bridging the gap between human
                creativity and machine precision.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
