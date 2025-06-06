"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, MapPin, Phone, Award } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
  ],
  expertise: [
    { name: "Robotics Engineering", href: "/about" },
    { name: "Full-Stack Development", href: "/about" },
    { name: "AI & Machine Learning", href: "/about" },
    { name: "Graphic Design", href: "/about" },
    { name: "Data Analysis", href: "/about" },
    { name: "Arduino & PID Control", href: "/about" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-bold text-lg mb-4">Abdul Wahid Chohan</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Technology innovator specializing in robotics, AI, and full-stack development. Pursuing dual degrees in
              Robotics and Computer Science, building intelligent systems and automation solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Technology Innovator</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Karachi, Pakistan</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2">
              {footerLinks.expertise.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <Link href="mailto:aw4532350@gmail.com" className="text-muted-foreground hover:text-primary">
                  aw4532350@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <Link href="tel:+923022666205" className="text-muted-foreground hover:text-primary">
                  +92 302 2666205
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/AbdulWahidChohan" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/abdul-wahid-chohan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:aw4532350@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Abdul Wahid Chohan. All rights reserved. Built with Next.js & deployed on
            Vercel.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            Technology Innovator • Robotics Engineer • Full-Stack Developer
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
