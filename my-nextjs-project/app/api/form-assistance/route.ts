import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { projectType, message } = await request.json()

    const prompt = `As Abdul Wahid Chohan's AI assistant, provide a helpful suggestion to improve this project inquiry:

Project Type: ${projectType}
Current Message: ${message}

Provide a brief, actionable suggestion (max 100 words) to help the user:
1. Include more specific technical requirements
2. Mention relevant technologies or constraints
3. Clarify project scope or deliverables
4. Add timeline or budget considerations

Be encouraging and professional. Focus on what would help Abdul provide a better project proposal.`

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      prompt,
      maxTokens: 150,
      temperature: 0.7,
    })

    const suggestion = await result.text

    return NextResponse.json({ suggestion })
  } catch (error) {
    console.error("Form assistance error:", error)
    return NextResponse.json({ error: "Failed to generate suggestion" }, { status: 500 })
  }
}
