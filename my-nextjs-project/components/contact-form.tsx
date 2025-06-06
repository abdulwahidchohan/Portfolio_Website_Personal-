"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Send, Loader2, CheckCircle, Mail, Copy, Settings, AlertCircle } from "lucide-react"

const projectTypes = [
  { value: "web-development", label: "Web Development" },
  { value: "web3", label: "Web 3 Project" },
  { value: "ai-integration", label: "AI Integration" },
  { value: "agentic-ai", label: "Agentic AI" },
  { value: "prompt-engineering", label: "Prompt Engineering" },
  { value: "robotics", label: "Robotics" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "other", label: "Other" },
]

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: "service_d6qhzel",
  templateId: "template_6kg4ikm",
  publicKey: "que2cm9r563u8BZtm",
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [emailJSReady, setEmailJSReady] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    // Initialize EmailJS when component mounts
    const initializeEmailJS = async () => {
      try {
        // Dynamically import EmailJS to avoid SSR issues
        const emailjs = await import("@emailjs/browser")
        emailjs.default.init(EMAILJS_CONFIG.publicKey)
        setEmailJSReady(true)
        console.log("✅ EmailJS initialized successfully")
      } catch (error) {
        console.error("❌ EmailJS initialization failed:", error)
        setEmailJSReady(false)
      }
    }

    initializeEmailJS()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: value,
    }))
  }

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("aw4532350@gmail.com")
      toast({
        title: "Email copied! 📋",
        description: "aw4532350@gmail.com has been copied to your clipboard.",
      })
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please manually copy: aw4532350@gmail.com",
        variant: "destructive",
      })
    }
  }

  const sendDirectEmail = () => {
    const subject = `${formData.projectType || "Project"} Inquiry from ${formData.name}`
    const body = `Hi Abdul,

I'm interested in discussing a ${formData.projectType || "project"} with you.

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Company: ${formData.company || "Not provided"}

Project Details:
${formData.message}

Looking forward to hearing from you!

Best regards,
${formData.name}`

    const mailtoLink = `mailto:aw4532350@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, "_blank")
  }

  const testEmailJS = async () => {
    if (!emailJSReady) {
      toast({
        title: "EmailJS not ready",
        description: "EmailJS is still initializing. Please wait a moment.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const emailjs = await import("@emailjs/browser")

      const templateParams = {
        from_name: "Test User",
        from_email: "test@example.com",
        phone: "+92 300 1234567",
        company: "Test Company",
        project_type: "Web Development",
        message: "This is a test message to verify EmailJS configuration is working correctly.",
        to_email: "aw4532350@gmail.com",
        reply_to: "test@example.com",
        subject: "EmailJS Test - Configuration Check",
        timestamp: new Date().toLocaleString(),
      }

      const response = await emailjs.default.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )

      if (response.status === 200) {
        toast({
          title: "Test email sent! ✅",
          description: "Check your inbox at aw4532350@gmail.com for the test message.",
        })
      }
    } catch (error) {
      console.error("EmailJS test failed:", error)
      toast({
        title: "Test failed ❌",
        description: "Please check your EmailJS configuration and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      if (!emailJSReady) {
        throw new Error("EmailJS not initialized")
      }

      const emailjs = await import("@emailjs/browser")

      // Prepare comprehensive template parameters
      const templateParams = {
        // Required fields for the email template
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        project_type: formData.projectType,
        message: formData.message,

        // Additional fields for email routing
        to_email: "aw4532350@gmail.com",
        reply_to: formData.email,
        subject: `New Contact Form: ${formData.projectType} Project from ${formData.name}`,
        timestamp: new Date().toLocaleString(),
      }

      console.log("📧 Sending email with fields:", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        projectType: formData.projectType,
        message: formData.message,
      })

      console.log("📧 Sending email with params:", templateParams)

      const response = await emailjs.default.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )

      if (response.status === 200) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          message: "",
        })

        toast({
          title: "Message sent successfully! 🚀",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        })
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`)
      }
    } catch (error) {
      console.error("❌ Email sending failed:", error)
      toast({
        title: "Email sending failed",
        description: "Please try the alternative contact methods below.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-green-800">Message Sent Successfully! 🎉</h3>
        <p className="text-green-700 mb-6">
          Thank you for reaching out! I've received your complete project details and will review them carefully. Expect
          a detailed response within 24 hours.
        </p>
        <div className="space-y-3">
          <p className="text-sm text-green-600">
            📧 Complete form data sent to aw4532350@gmail.com
            <br />⏰ Response time: Within 24 hours
            <br />🤝 Let's build something amazing together!
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-green-300 text-green-700">
            Send Another Message
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          Start Your Project
          {emailJSReady ? (
            <span className="text-green-500 text-sm">✅ Ready</span>
          ) : (
            <span className="text-yellow-500 text-sm">⏳ Loading...</span>
          )}
        </CardTitle>
        <CardDescription>
          Fill out the form below and I'll get back to you within 24 hours with a detailed project proposal.
          {emailJSReady && (
            <div className="flex items-center gap-2 mt-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Email service is ready to send your complete message.</span>
            </div>
          )}
          {!emailJSReady && (
            <div className="flex items-center gap-2 mt-2 text-yellow-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">Email service is initializing...</span>
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+92 300 1234567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType">Project Type *</Label>
            <Select onValueChange={handleSelectChange} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your project type" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please describe your project requirements, goals, timeline, budget, and any specific technical details..."
              rows={6}
              required
            />
          </div>

          <div className="space-y-4">
            <Button type="submit" className="w-full" disabled={isSubmitting || !emailJSReady} size="lg">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Complete Form Data...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Complete Project Details
                </>
              )}
            </Button>

            {emailJSReady && (
              <Button
                type="button"
                onClick={testEmailJS}
                variant="outline"
                className="w-full"
                size="sm"
                disabled={isSubmitting}
              >
                <Settings className="mr-2 h-4 w-4" />
                Test EmailJS Configuration
              </Button>
            )}

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Alternative contact methods:</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button
                  type="button"
                  onClick={sendDirectEmail}
                  variant="outline"
                  size="sm"
                  disabled={!formData.name || !formData.email || !formData.projectType || !formData.message}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Open Email Client
                </Button>
                <Button type="button" onClick={copyEmailToClipboard} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Email Address
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
