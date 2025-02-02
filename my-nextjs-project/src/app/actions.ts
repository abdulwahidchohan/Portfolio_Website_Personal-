"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(data)

  if (!validatedFields.success) {
    return { success: false, message: "Validation failed. Please check your inputs." }
  }

  const { name, email, message } = validatedFields.data

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Send email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: "aw4532350@gmail.com", // Your email address
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return {
      success: true,
      message: "Thanks for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}

