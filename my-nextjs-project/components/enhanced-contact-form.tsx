"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle, Sparkles } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  newsletter: z.boolean().default(false),
  aiAssistance: z.boolean().default(false),
})

type ContactFormData = z.infer<typeof contactSchema>

const projectTypes = [
  { value: "web-development", label: "💻 Web Development" },
  { value: "web3", label: "🌐 Web 3 Project" },
  { value: "ai-integration", label: "🧠 AI Integration" },
  { value: "robotics", label: "🤖 Robotics" },
  { value: "ui-ux", label: "🎨 UI/UX Design" },
  { value: "data-visualization", label: "📊 Data Visualization" },
  { value: "other", label: "📋 Other" },
]

const budgetRanges = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000 - $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-plus", label: "$25,000+" },
  { value: "discuss", label: "Let's Discuss" },
]

const timelines = [
  { value: "asap", label: "ASAP (Rush Project)" },
  { value: "1-month", label: "Within 1 Month" },
  { value: "2-3-months", label: "2-3 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "flexible", label: "Flexible Timeline" },
]

export default function EnhancedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [aiSuggestion, setAiSuggestion] = useState("")
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const watchedProjectType = watch("projectType")
  const watchedMessage = watch("message")

  // AI-powered form assistance
  const generateAISuggestion = async () => {
    if (!watchedProjectType || !watchedMessage || watchedMessage.length < 20) return

    try {
      const response = await fetch("/api/form-assistance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType: watchedProjectType,
          message: watchedMessage,
        }),
      })

      if (response.ok) {
        const { suggestion } = await response.json()
        setAiSuggestion(suggestion)
      }
    } catch (error) {
      console.error("AI suggestion error:", error)
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          aiSuggestion: aiSuggestion || null,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
      reset()
      toast({
        title: "Message sent successfully! 🚀",
        description: "Thank you for reaching out. I'll get back to you within 24 hours with a detailed response.",
      })

      // Track form submission
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "contact_form_submission",
          path: "/contact",
          projectType: data.projectType,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email at aw4532350@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="text-center p-4 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-green-800">Message Sent Successfully! 🎉</h3>
          <p className="text-green-700 mb-6">
            Thank you for reaching out! I've received your project details and will review them carefully. Expect a
            detailed response within 24 hours.
          </p>
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-green-600">
              📧 Confirmation sent to your email
              <br />⏰ Response time: Within 24 hours
              <br />🤝 Let's build something amazing together!
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-green-300 text-green-700">
              Send Another Message
            </Button>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      <Card className="bg-gradient-to-br from-background to-muted/20 border-primary/20">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
            <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            Start Your Project
          </CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you within 24 hours with a detailed project proposal and
            timeline.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            {/* Form fields go here */}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
