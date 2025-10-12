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
                name: " Qazi Nafees ur Rehman Law Associates",
                title: "Founder & CEO",
                specialization: "",
                image: "/professional-lawyers-team-office-meeting.jpg",
                bio: "Founded by Qazi Nafees ur Rehman, our law firm brings together a dedicated team of experienced attorneys specializing in Corporate Law, Civil Litigation, Family Law, Criminal Defense, Property Law, Constitutional Matters, and Legal Advisory. Under his leadership, the firm has earned a reputation for excellence, integrity, and success in representing individuals, families, and corporations in complex legal matters.",
                education: "",
                barAdmissions: ["State Bar","High Court", "Federal Court", "Supreme Court"],
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
                      <h4 className="font-semibold text-sm"></h4>
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
