"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Scale, Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

// export const metadata: Metadata = {
//   title: "Contact Us | Qazi Nafees ur Rehman Law Associates",
//   description:
//     "Contact Qazi Nafees ur Rehman Law Associates for a free legal consultation. Call (555) 123-4567 or visit our office at 123 Legal Plaza. Experienced attorneys ready to help.",
//   keywords: "contact law firm, free consultation, legal help, attorney contact, law office location",
// }

export default function ContactPage() {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: "",
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validation
      if (
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.message.trim() ||
        !formData.consent
      ) {
        throw new Error("Please fill in all required fields and give consent")
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      // API call
      const response = await fetch("/contact/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => ({ ok: true }))

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. We'll get back to you soon.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          legalMatter: "",
          message: "",
          consent: false,
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <SiteHeader currentPage="contact" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">Contact Us</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Ready to discuss your legal needs? Contact us today for a free consultation with our experienced attorneys.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-2xl font-bold text-primary">+92 323 5235271</p>
                <p className="text-muted-foreground">Available 24/7 </p>
                <Button variant="outline" asChild>
                  <Link href="tel:+92 323 5235271">Call Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-lg font-semibold">qazi.nafees.ur.rehman@gmail.com</p>
                <p className="text-muted-foreground">We respond within 24 hours</p>
                <Button variant="outline" asChild>
                  <Link href="mailto:qazi.nafees.ur.rehman@gmail.com">Send Email</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">Office # 203, 204, 2nd floor Shehbaz Plaza</p>
                <p className="text-muted-foreground">Bank Road Saddar Rawalpindi</p>
                <Button variant="outline" asChild>
                  <Link
                    href="https://maps.app.goo.gl/jbUmbMqKJaAkT6rX8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours to discuss your legal needs.
                  </p>
                </CardHeader>
                <CardContent>
  <form className="space-y-6" onSubmit={handleSubmit}>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name *</Label>
        <Input
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name *</Label>
        <Input
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">Email Address *</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="phone">Phone Number *</Label>
      <Input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="legalMatter">Type of Legal Matter</Label>
      <select
        id="legalMatter"
        name="legalMatter"
        value={formData.legalMatter}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-input rounded-md bg-background"
      >
        <option value="">Select a practice area</option>
        <option value="family-law">Family Law</option>
        <option value="corporate-law">Corporate Law</option>
        <option value="criminal-defense">Criminal Defense</option>
        <option value="personal-injury">Personal Injury</option>
        <option value="real-estate">Real Estate Law</option>
        <option value="estate-planning">Estate Planning</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="space-y-2">
      <Label htmlFor="message">Message *</Label>
      <Textarea
        id="message"
        name="message"
        placeholder="Please describe your legal matter and how we can help you..."
        rows={6}
        value={formData.message}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="space-y-4">
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, consent: e.target.checked }))
          }
          className="mt-1"
          required
        />
        <Label htmlFor="consent" className="text-sm leading-relaxed">
          I consent to Qazi Nafees ur Rehman Law Associates contacting me about my
          legal matter. I understand that contacting the firm does not create an
          attorney-client relationship.*
        </Label>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        <Send className="h-4 w-4 mr-2" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </div>
  </form>
 </CardContent>

              </Card>
            </div>

            {/* Office Information and Map */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 inline mr-1 text-primary" />
                      Emergency consultations available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <p className="text-muted-foreground">
                    Conveniently located in Bank Road Saddar Rawalpindi with easy access to parking and public transportation.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.2629373208456!2d73.04700942464058!3d33.59848159155576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9484f674d44d%3A0x3053042f8f89e803!2sShahbaz%20Plaza%20Building%2C%20Bank%20Rd%2C%20Saddar%2C%20Rawalpindi%2C%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1758808915833!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Qazi Nafees ur Rehman Law Associates Office Location"
                    ></iframe>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Office # 203, 204, Second floor, Shehbaz Plaza,</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Free parking available in the building garage. Entrance on Main Street.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Ways to Reach Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Quick questions and consultations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Emergency Hotline</p>
                      <p className="text-sm text-muted-foreground">+92 323 5235271-HELP - Available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold"> Client Inquiries</p>
                      <p className="text-sm text-muted-foreground">qazi.nafees.ur.rehman@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Common questions about contacting our law firm and scheduling consultations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can I schedule an appointment?",
                answer:
                  "We typically can schedule consultations within 24-48 hours. For urgent matters, we offer same-day appointments and emergency consultations.",
              },
              {
                question: "What should I bring to my consultation?",
                answer:
                  "Bring any relevant documents related to your case, a list of questions, and any correspondence you've received. We'll provide a checklist when you schedule.",
              },
              {
                question: "Do you handle cases outside your local area?",
                answer:
                  "Yes, we handle cases throughout the state and can work with clients remotely when necessary. We're licensed to practice in multiple jurisdictions.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scale className="h-8 w-8" />
                <span className="text-xl font-bold">Qazi Nafees ur Rehman Law Associates</span>
              </div>
              <p className="text-background/80 leading-relaxed">
                Your trusted legal partner providing exceptional representation and personalized service .
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="block text-background/80 hover:text-background transition-colors">
                  Our Services
                </Link>
                <Link href="/blog" className="block text-background/80 hover:text-background transition-colors">
                  Legal Blog
                </Link>
                <Link href="/contact" className="block text-background/80 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Practice Areas</h3>
              <div className="space-y-2">
                <div className="text-background/80">Family Law</div>
                <div className="text-background/80">Corporate Law</div>
                <div className="text-background/80">Criminal Defense</div>
                <div className="text-background/80">Personal Injury</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-background/80">+92 323 5235271</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="text-background/80">qazi.nafees.ur.rehman@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6" />
                  <span className="text-background/80">
                    Office # 203 2nd floor, Shehbaz Plaza
                    <br />
                     Bank Road Saddar Rawalpindi
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © 2024 Qazi Nafees ur Rehman Law Associates. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
