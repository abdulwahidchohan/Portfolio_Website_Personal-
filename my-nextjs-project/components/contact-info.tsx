"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Calendar, Clock, Github, Linkedin, Globe, Code, Cpu } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "aw4532350@gmail.com",
    href: "mailto:aw4532350@gmail.com",
    description: "Best for project inquiries",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "abdul-wahid-chohan",
    href: "https://linkedin.com/in/abdul-wahid-chohan",
    description: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "AbdulWahidChohan",
    href: "https://github.com/AbdulWahidChohan",
    description: "Check out my code",
  },
]

const availability = [
  {
    icon: Code,
    title: "Web Development",
    description: "Next.js, TypeScript, Tailwind CSS projects",
    status: "Open",
  },
  {
    icon: Cpu,
    title: "AI & Robotics",
    description: "Intelligent automation solutions",
    status: "Limited",
  },
  {
    icon: Globe,
    title: "Web 3 Projects",
    description: "Decentralized applications and solutions",
    status: "Open",
  },
]

const expertise = [
  "Next.js Development",
  "TypeScript",
  "Tailwind CSS",
  "Web 3",
  "AI Integration",
  "Robotics",
  "UI/UX Design",
  "Data Visualization",
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Get In Touch
          </CardTitle>
          <CardDescription>Multiple ways to reach me for your project needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group"
            >
              <Link
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <method.icon className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium group-hover:text-primary transition-colors">{method.value}</div>
                  <div className="text-sm text-muted-foreground">{method.description}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Current Availability
          </CardTitle>
          <CardDescription>Project types I'm currently accepting</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {availability.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="flex items-start gap-3"
            >
              <item.icon className="h-5 w-5 text-primary mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{item.title}</span>
                  <Badge variant={item.status === "Open" ? "default" : "secondary"} className="text-xs">
                    {item.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Expertise */}
      <Card>
        <CardHeader>
          <CardTitle>Areas of Expertise</CardTitle>
          <CardDescription>Technical skills and services I offer</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Response Time */}
      <Card>
        <CardHeader>
          <CardTitle>Response Time</CardTitle>
          <CardDescription>When you can expect to hear back from me</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>Project Inquiries: Within 24 hours</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>Quick Questions: Within 12 hours</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>Urgent Matters: Same day response</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
