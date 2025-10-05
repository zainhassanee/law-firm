import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Phone, Mail, MapPin, Award, Target, Heart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "About Us | Qazi Nafees ur Rehman Law Associates",
  description:
    "Learn about our experienced legal team, firm history, mission, and values. Meet our attorneys who are dedicated to providing exceptional legal representation.",
  keywords: "about law firm, legal team, experienced attorneys, law firm history, legal expertise",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <SiteHeader currentPage="about" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">About Qazi Nafees ur Rehman Law Associates</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A legacy of legal excellence built on trust, integrity, and unwavering commitment to our clients 
          </p>
        </div>
      </section>

      {/* Firm Introduction */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded  by Qazi Nafees ur Rehman, Qazi Nafees ur Rehman Law Associates has grown from a small practice into one of
                the region's most respected law firms. Our journey began with a simple mission: to provide exceptional
                legal representation while treating every client with dignity and respect.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over nearly three decades, we've built our reputation on successful outcomes, ethical practice, and
                genuine care for our clients' well-being. Today, our team of experienced attorneys continues to uphold
                the highest standards of legal excellence across multiple practice areas.
              </p>
            
            </div> 
            <div className="relative">
              <img
                src="/professional-law-office-courtroom-interior.jpg"
                alt="Qazi Nafees ur Rehman Law Associates law office interior"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              The principles that guide our practice and define our commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide exceptional legal representation while building lasting relationships based on trust,
                  integrity, and results. We are committed to protecting our clients' rights and achieving the best
                  possible outcomes in every case.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the most trusted and respected law firm in our community, known for our unwavering commitment to
                  justice, ethical practice, and client advocacy. We strive to set the standard for legal excellence.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Integrity, compassion, and excellence guide everything we do. We believe in transparent communication,
                  ethical practice, and treating every client with the respect and attention they deserve.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Meet Our Legal Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Experienced attorneys dedicated to providing exceptional legal representation across all practice areas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Qazi Nafees ur Rehman",
                title: "Founding Partner",
                specialization: "Corporate Law & Litigation",
                image: "/professional-male-lawyer.png",
                bio: "With over 30 years of experience, Qazi Nafees ur Rehman founded Qazi Nafees ur Rehman Law Associates with a vision of providing exceptional legal services. He specializes in complex corporate litigation and has successfully represented Fortune 500 companies and small businesses alike.",
                education: "Harvard Law School, J.D. | Yale University, B.A.",
                barAdmissions: ["State Bar", "Federal Court", "Supreme Court"],
              },
              {
                name: "Sarah Mitchell",
                title: "Senior Partner",
                specialization: "Family Law & Mediation",
                image: "/female-lawyer-business-attire.png",
                bio: "Sarah brings 20 years of experience in family law, with a focus on collaborative divorce and child custody matters. Her compassionate approach and skilled negotiation have helped hundreds of families navigate difficult transitions.",
                education: "Stanford Law School, J.D. | UC Berkeley, B.A.",
                barAdmissions: ["State Bar", "Family Court", "Mediation Certified"],
              },
              {
                name: "Michael Chen",
                title: "Partner",
                specialization: "Criminal Defense & Appeals",
                image: "/professional-asian-male-lawyer-confident-pose.jpg",
                bio: "Michael is a former prosecutor with 15 years of criminal law experience. His deep understanding of both sides of the courtroom gives him a unique advantage in defending clients facing serious criminal charges.",
                education: "Columbia Law School, J.D. | Princeton University, B.A.",
                barAdmissions: ["State Bar", "Federal Court", "Appeals Court"],
              },
              {
                name: "Jennifer Rodriguez",
                title: "Associate Partner",
                specialization: "Personal Injury & Medical Malpractice",
                image: "/professional-latina-female-lawyer-confident-smile.jpg",
                bio: "Jennifer has secured millions in settlements for personal injury clients over her 12-year career. Her meticulous preparation and aggressive advocacy have earned her recognition as a rising star in personal injury law.",
                education: "Georgetown Law, J.D. | University of Texas, B.A.",
                barAdmissions: ["State Bar", "Federal Court", "Medical Malpractice Certified"],
              },
              {
                name: "David Thompson",
                title: "Senior Associate",
                specialization: "Real Estate & Business Transactions",
                image: "/professional-male-lawyer-business-casual-friendly.jpg",
                bio: "David handles complex real estate transactions and business formations. With 10 years of experience, he has facilitated over $500 million in real estate deals and helped launch hundreds of successful businesses.",
                education: "NYU Law School, J.D. | Northwestern University, B.A.",
                barAdmissions: ["State Bar", "Real Estate Law Certified"],
              },
              {
                name: "Lisa Park",
                title: "Associate",
                specialization: "Estate Planning & Probate",
                image: "/professional-asian-female-lawyer-warm-smile.jpg",
                bio: "Lisa focuses on estate planning and probate matters, helping families protect their assets and plan for the future. Her attention to detail and caring approach make complex legal processes understandable for clients.",
                education: "UCLA Law School, J.D. | USC, B.A.",
                barAdmissions: ["State Bar", "Probate Court", "Estate Planning Certified"],
              },
            ].map((lawyer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={lawyer.image || "/placeholder.svg"}
                    alt={lawyer.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{lawyer.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {lawyer.title}
                  </Badge>
                  <CardDescription className="text-primary font-medium">{lawyer.specialization}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{lawyer.bio}</p>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-semibold text-sm">Education</h4>
                      <p className="text-sm text-muted-foreground">{lawyer.education}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Bar Admissions</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {lawyer.barAdmissions.map((admission, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {admission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Our commitment to excellence has been recognized by peers and legal organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Best Law Firm 2023",
                organization: "Legal Excellence Awards",
                year: "2023",
              },
              {
                title: "Top 40 Under 40",
                organization: "State Bar Association",
                year: "2022",
              },
              {
                title: "Client Choice Award",
                organization: "Legal Review Board",
                year: "2023",
              },
              {
                title: "Community Service Award",
                organization: "City Chamber of Commerce",
                year: "2022",
              },
            ].map((award, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                  <p className="text-sm font-semibold text-primary">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Work with Our Team?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Contact us today for a  consultation and discover how our experienced attorneys can help with your legal
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule  Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
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
