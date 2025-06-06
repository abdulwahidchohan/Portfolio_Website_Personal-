"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

export default function ResponsiveChecker() {
  const [isVisible, setIsVisible] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    type: "Unknown",
  })

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== "development") return

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      let type = "Unknown"
      if (width < 640) type = "Mobile"
      else if (width < 768) type = "Small Tablet"
      else if (width < 1024) type = "Tablet"
      else if (width < 1280) type = "Laptop"
      else if (width < 1536) type = "Desktop"
      else type = "Large Desktop"

      setScreenSize({ width, height, type })
    }

    // Initial call
    handleResize()
    setIsVisible(true)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg">
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="bg-primary/10">
              Responsive Checker
            </Badge>
            <button onClick={() => setIsVisible(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="text-xs space-y-1">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Width:</span>
              <span>{screenSize.width}px</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Height:</span>
              <span>{screenSize.height}px</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Device:</span>
              <span className="font-medium text-primary">{screenSize.type}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
