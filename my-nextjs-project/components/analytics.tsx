"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    const trackPageView = async () => {
      try {
        await fetch("/api/analytics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event: "page_view",
            path: pathname,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
          }),
        })
      } catch (error) {
        console.error("Analytics tracking error:", error)
      }
    }

    trackPageView()
  }, [pathname])

  return null
}
