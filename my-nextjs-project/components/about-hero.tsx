"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, MapPin, GraduationCap, Calendar, Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                <Award className="h-4 w-4 mr-2" />
                Student of the Session - Javed Miandad Award
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Abdul Wahid Chohan</h1>
              <p className="text-xl text-muted-foreground">Graphic Designer | AI Enthusiast | Robotics Engineer</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>Bachelors in Robotics & Intelligent Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Expected Graduation: 2028</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <Link href="tel:+923022666205" className="hover:text-primary transition-colors">
                  +92 302 2666205
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <Link href="mailto:aw4532350@gmail.com" className="hover:text-primary transition-colors">
                  aw4532350@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <Link
                  href="https://www.linkedin.com/in/abdul-wahid-chohan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/abdul-wahid-chohan
                </Link>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm an aspiring Graphic Designer with a strong foundation in generative AI, data science, and JavaScript
              programming. Experienced in utilizing advanced design tools and techniques to create innovative visual
              content. I blend technology and creativity to deliver impactful designs while pursuing my education in
              Robotics and Intelligent Systems at Bahria University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/projects">View My Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Let's Collaborate</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-xl"
              />
              <div className="relative bg-background rounded-2xl p-8 border shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Abdul Wahid Chohan - Graphic Designer & AI Enthusiast"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-lg">Abdul Wahid Chohan</h3>
                  <p className="text-muted-foreground">Graphic Designer & AI Enthusiast</p>
                  <div className="flex justify-center gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">
                      Robotics Engineer
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      AI Innovator
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
