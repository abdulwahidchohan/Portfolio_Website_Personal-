"use client"

import EnhancedContactForm from "@/components/enhanced-contact-form"
import ContactInfo from "@/components/contact-info"
import { motion } from "framer-motion"

export default function ContactPageClient() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            Let's Build Something Amazing Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Ready to bring your web development vision to life or need AI and automation solutions? I'm available for
            freelance projects, collaborations, and consulting opportunities.
            <span className="text-primary font-semibold"> AI-powered project assistance included!</span>
          </motion.p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <EnhancedContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}
