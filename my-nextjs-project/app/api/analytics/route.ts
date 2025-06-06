import { type NextRequest, NextResponse } from "next/server"
import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

export async function POST(request: NextRequest) {
  try {
    const { event, path, timestamp, userAgent } = await request.json()

    // Store page view data
    const key = `analytics:${event}:${Date.now()}`
    await redis.setex(
      key,
      86400 * 30,
      JSON.stringify({
        // 30 days TTL
        event,
        path,
        timestamp,
        userAgent,
        ip: request.ip || "unknown",
      }),
    )

    // Increment page view counter
    const pageKey = `page_views:${path}`
    await redis.incr(pageKey)

    // Increment daily counter
    const today = new Date().toISOString().split("T")[0]
    const dailyKey = `daily_views:${today}`
    await redis.incr(dailyKey)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Analytics error:", error)
    return NextResponse.json({ error: "Failed to track analytics" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") || "overview"

    if (type === "overview") {
      // Get total page views
      const keys = await redis.keys("page_views:*")
      const pageViews: Record<string, number> = {}

      for (const key of keys) {
        const path = key.replace("page_views:", "")
        const views = (await redis.get(key)) as number
        pageViews[path] = views || 0
      }

      // Get daily views for last 7 days
      const dailyViews: Record<string, number> = {}
      for (let i = 0; i < 7; i++) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        const dateStr = date.toISOString().split("T")[0]
        const views = (await redis.get(`daily_views:${dateStr}`)) as number
        dailyViews[dateStr] = views || 0
      }

      return NextResponse.json({
        pageViews,
        dailyViews,
        totalViews: Object.values(pageViews).reduce((sum, views) => sum + views, 0),
      })
    }

    return NextResponse.json({ error: "Invalid type" }, { status: 400 })
  } catch (error) {
    console.error("Analytics fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
  }
}
