import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, projectType, message, timestamp } = body

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // For demo purposes, we'll store the message and simulate email sending
    // In a real environment, you would configure nodemailer with proper credentials

    console.log("📧 New Contact Form Submission:", {
      name,
      email,
      phone,
      company,
      projectType,
      message,
      timestamp,
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would:
    // 1. Set up EMAIL_USER and EMAIL_PASS environment variables
    // 2. Use nodemailer to send the actual email
    // 3. Or use a service like SendGrid, Resend, or EmailJS

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        note: "Message logged to console - email service not configured in demo",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
