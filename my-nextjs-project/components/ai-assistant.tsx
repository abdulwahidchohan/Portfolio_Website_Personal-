"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, X, Minimize2, Maximize2, User } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const quickQuestions = ["What are your skills?", "Tell me about your education", "How can I contact you?"]

// Predefined responses for demo purposes
const predefinedResponses: Record<string, string> = {
  "What are your skills?":
    "I specialize in Next.js, TypeScript, Tailwind CSS, and Web 3 development. I also have expertise in AI integration, robotics, and UI/UX design. My technical skills include modern JavaScript frameworks, responsive design, and performance optimization.",
  "Tell me about your education":
    "I'm pursuing a B.S. in Computer Science from University of the People. I've also completed certifications in Web Development, AI Fundamentals, Data Analytics, and Graphic Design. Additionally, I'm part of the Governor's Initiative programs for Agentic AI Engineering and Web 3.0.",
  "How can I contact you?":
    "You can reach me via email at aw4532350@gmail.com or by phone at +92 302 2666205. I'm also available on LinkedIn and GitHub. Feel free to use the contact form on this website to discuss your project needs!",
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "👋 Hi! I'm Abdul's AI assistant. I can help you learn about his web development skills, AI expertise, and robotics innovations. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // For demo purposes, we'll use predefined responses
      // instead of making an actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      let responseContent =
        "I'm not sure how to respond to that. Could you ask me about Abdul's skills, education, or contact information?"

      // Check for predefined responses
      for (const [key, value] of Object.entries(predefinedResponses)) {
        if (userMessage.content.toLowerCase().includes(key.toLowerCase())) {
          responseContent = value
          break
        }
      }

      // Check for common greetings
      if (/^(hi|hello|hey|greetings)/i.test(userMessage.content)) {
        responseContent =
          "Hello! I'm Abdul's AI assistant. How can I help you today? Feel free to ask about his skills, projects, or how to get in touch."
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: responseContent,
        },
      ])
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I'm having trouble responding right now. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
    setTimeout(() => {
      const form = document.querySelector("form")
      if (form) {
        form.dispatchEvent(new Event("submit", { bubbles: true }))
      }
    }, 100)
  }

  if (!isOpen) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg bg-gradient-to-r from-primary to-primary/80"
        >
          <Bot className="h-6 w-6" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Card
        className={`w-80 md:w-96 shadow-2xl border-2 ${isMinimized ? "h-16" : "h-[500px]"} transition-all duration-300`}
      >
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-sm">AI Assistant</CardTitle>
              <p className="text-xs text-muted-foreground">Ask me about Abdul's work</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)} className="h-8 w-8 p-0">
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col"
            >
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-[350px] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {message.role === "assistant" && <Bot className="h-4 w-4 mt-0.5 text-primary" />}
                            {message.role === "user" && <User className="h-4 w-4 mt-0.5" />}
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Bot className="h-4 w-4 text-primary" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                              <div
                                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              />
                              <div
                                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </ScrollArea>

                {/* Quick Questions */}
                <div className="p-4 border-t">
                  <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-1">
                    {quickQuestions.map((question, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Input Form */}
                <div className="p-4 border-t">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything about Abdul..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button type="submit" size="sm" disabled={isLoading || !input.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}
