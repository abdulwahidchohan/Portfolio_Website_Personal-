import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") || "Abdul Wahid Chohan - Robotics & AI Engineer"
  const description =
    searchParams.get("description") || "Expert in Arduino Robotics, Next.js Development & Generative AI"

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        backgroundImage: "linear-gradient(45deg, #000 0%, #1a1a1a 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            marginBottom: "30px",
            maxWidth: "800px",
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "18px",
            color: "#71717a",
          }}
        >
          <span>🤖 Robotics Engineer</span>
          <span>🧠 AI Developer</span>
          <span>📍 Karachi, Pakistan</span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
