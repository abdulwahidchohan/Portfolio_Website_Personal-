"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

const EMAILJS_CONFIG = {
  serviceId: "service_your_service_id", // Replace with your actual service ID
  templateId: "template_your_template_id", // Replace with your actual template ID
  publicKey: "your_public_key", // Replace with your actual public key
}

export default function EmailJSTest() {
  const [isTesting, setIsTesting] = useState(false)
  const { toast } = useToast()

  const testEmailJS = async () => {
    setIsTesting(true)

    try {
      emailjs.init(EMAILJS_CONFIG.publicKey)

      const templateParams = {
        from_name: "Test User",
        from_email: "test@example.com",
        phone: "+92 300 1234567",
        company: "Test Company",
        project_type: "Web Development",
        message: "This is a test message from the EmailJS configuration.",
        to_email: "aw4532350@gmail.com",
        reply_to: "test@example.com",
      }

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      )

      if (response.status === 200) {
        toast({
          title: "EmailJS Test Successful! ✅",
          description: "Test email sent successfully. Check your inbox.",
        })
      } else {
        throw new Error("EmailJS response not successful")
      }
    } catch (error) {
      console.error("EmailJS test failed:", error)
      toast({
        title: "EmailJS Test Failed ❌",
        description: "Please check your EmailJS configuration and try again.",
        variant: "destructive",
      })
    } finally {
      setIsTesting(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>EmailJS Configuration Test</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={testEmailJS} disabled={isTesting} className="w-full">
          {isTesting ? "Testing..." : "Test EmailJS Setup"}
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          This will send a test email to verify your EmailJS configuration.
        </p>
      </CardContent>
    </Card>
  )
}
