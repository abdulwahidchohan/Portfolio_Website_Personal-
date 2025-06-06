"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Robotics Professor",
    company: "Bahria University",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Abdul Wahid's innovative approach to robotics engineering is exceptional. His Arduino-based soccer robot achieved remarkable precision and won multiple competitions. A true rising star in the field.",
    rating: 5,
    expertise: "Academic Excellence",
  },
  {
    name: "Muhammad Hassan",
    role: "Senior Developer",
    company: "Tech Solutions Karachi",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Working with Abdul on our Next.js project was outstanding. He optimized our application performance by 30% and delivered clean, maintainable code. His technical expertise is impressive.",
    rating: 5,
    expertise: "Web Development",
  },
  {
    name: "Fatima Khan",
    role: "AI Research Lead",
    company: "Governor's Initiative",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Abdul's understanding of Generative AI and prompt engineering is remarkable for someone his age. His contributions to our AI projects have been invaluable. Highly recommended!",
    rating: 5,
    expertise: "AI Innovation",
  },
  {
    name: "Ahmed Ali",
    role: "Competition Judge",
    company: "Procom 2025",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Abdul's line-following robot demonstrated exceptional precision with 85% error reduction. His technical presentation and problem-solving skills stood out among all participants.",
    rating: 5,
    expertise: "Robotics Competition",
  },
  {
    name: "Zara Malik",
    role: "Project Manager",
    company: "Innovation Hub",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Abdul delivered our e-commerce platform ahead of schedule with outstanding performance optimizations. His attention to detail and technical leadership made the project a huge success.",
    rating: 5,
    expertise: "Project Delivery",
  },
  {
    name: "Dr. Imran Sheikh",
    role: "Industry Mentor",
    company: "Tech Incubator",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Abdul's combination of robotics expertise and web development skills is rare. His ability to bridge hardware and software makes him an invaluable asset to any tech team.",
    rating: 5,
    expertise: "Technical Leadership",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonials from professors, industry professionals, and collaborators who have witnessed Abdul Wahid's
            technical excellence and innovative problem-solving approach.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <motion.div className="absolute top-4 right-4 text-primary/20" whileHover={{ scale: 1.1, rotate: 10 }}>
                  <Quote className="h-8 w-8" />
                </motion.div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 + 0.5 }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                      <Avatar>
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                    className="mt-4"
                  >
                    <Badge variant="outline" className="text-xs">
                      {testimonial.expertise}
                    </Badge>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
