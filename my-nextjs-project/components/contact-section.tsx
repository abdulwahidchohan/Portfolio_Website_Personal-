"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import ContactForm from "./contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on web development, AI solutions, or robotics projects? Let's discuss how we can bring
            your ideas to life.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Available for freelance projects, collaborations, and full-time opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Link href="mailto:aw4532350@gmail.com" className="hover:text-primary transition-colors">
                    aw4532350@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Link href="tel:+923022666205" className="hover:text-primary transition-colors">
                    +92 302 2666205
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Available for new projects</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Profiles</CardTitle>
                <CardDescription>Connect with me on professional platforms and explore my work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="https://linkedin.com/in/abdul-wahid-chohan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">LinkedIn Profile</div>
                    <div className="text-sm text-muted-foreground">Professional networking</div>
                  </div>
                </Link>
                <Link
                  href="https://github.com/AbdulWahidChohan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">GitHub Repository</div>
                    <div className="text-sm text-muted-foreground">Code and projects</div>
                  </div>
                </Link>

                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Web Development</Badge>
                    <Badge variant="secondary">Next.js Applications</Badge>
                    <Badge variant="secondary">AI Integration</Badge>
                    <Badge variant="secondary">Robotics</Badge>
                    <Badge variant="secondary">UI/UX Design</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
