import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Ensure this route runs on the Node.js runtime (required for Resend SDK)
export const runtime = "nodejs"
// Disable caching for API responses
export const dynamic = "force-dynamic"

const resend = new Resend(process.env.RESEND_API_KEY || "re_123")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, legalMatter, message, consent } = body

    if (!firstName || !lastName || !email || !phone || !message || !consent) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.log("Contact form submission (no email sent - RESEND_API_KEY not set):", body)
      return NextResponse.json(
        { message: "Message received! (Email service not configured - check console for details)" },
        { status: 200 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["zainhassann44@gmail.com"],
      subject: `New Legal Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Legal Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Legal Matter:</strong> ${legalMatter || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>This message was sent from your law firm's website contact form.</em></p>
        <p><strong>Reply to:</strong> ${email}</p>
      `,
      replyTo: email,
    })

    if (error) {
      console.error("Resend email error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json(
      { message: "Message sent successfully! We'll get back to you soon.", emailId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
