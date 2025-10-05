import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Scale, Shield, Users, Phone, Mail, MapPin,Lightbulb,Briefcase,Calculator,Banknote,FileText } from "lucide-react"
import Link from "next/link"
import { AccessibilitySkipLink } from "@/components/accessibility-skip-link"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AccessibilitySkipLink />

      {/* Navigation Header */}
      <SiteHeader currentPage="home" />

      <main id="main-content">
        {/* Hero Section */}
        <section
          className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5"
          aria-labelledby="hero-heading"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/professional-law-office-courtroom-interior.jpg')",
            }}
            role="img"
            aria-label="Professional law office interior"
          />
          <div className="relative z-10 container max-w-4xl text-center space-y-6 px-4">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-balance">
              Your Trusted Legal Partner
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Experienced attorneys committed to protecting your rights and delivering exceptional legal representation
              across all practice areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-muted/50" aria-labelledby="intro-heading">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 id="intro-heading" className="text-3xl md:text-4xl font-bold text-balance">
                  Excellence in Legal Representation 
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Qazi Nafees ur Rehman Law Associates, we combine years of legal expertise with a personalized approach to every
                  case. Our team of experienced attorneys is dedicated to achieving the best possible outcomes for our
                  clients while providing compassionate, professional service.
                </p>
                <div className="flex items-center space-x-4" role="list" aria-label="Firm statistics">
                  {/* <div className="text-center" role="listitem">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Cases Won</div>
                  </div> */}
                  {/* <div className="text-center" role="listitem">
                    // {/* <div className="text-2xl font-bold text-primary">25+</div> 
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>  */}
                  {/* <div className="text-center" role="listitem">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div> */}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/professional-lawyers-team-office-meeting.jpg"
                  alt="Qazi Nafees ur Rehman Law Associates legal team in professional office meeting"
                  className="rounded-lg shadow-lg w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Practice Areas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Comprehensive legal services across multiple practice areas with specialized expertise and proven
                results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
  title: "Civil Litigation",
  description:
    "Property disputes, contracts, damages, and civil claims resolved with strategic advocacy.",
  icon: FileText,
},
{
  title: "Criminal Defense",
  description:
    "Strong defense in bail, trials, fraud, narcotics, and serious criminal offences.",
  icon: Shield,
},
{
  title: "Family Law",
  description:
    "Court Marriage , Divorce, custody, guardianship, and family matters handled with compassion and strength.",
  icon: Users,
},
{
  title: "Banking & Finance Law",
  description:
    "Loan disputes, recoveries, and compliance with banking and financial regulations.",
  icon: Banknote, // or Currency if you prefer
},
{
  title: "Intellectual Property (IPR)",
  description:
    "Protection of trademarks, copyrights, patents, and trade secrets for your business.",
  icon: Lightbulb,
},
{
  title: "Corporate & Commercial Law",
  description:
    "Company registration, contracts, compliance, and business dispute resolution.",
  icon: Briefcase,
},
{
  title: "Tax Law",
  description:
    "Tax advisory, compliance, and representation before tribunals and courts.",
  icon: Calculator,
},

              ].map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <area.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
                    <Button variant="outline" className="mt-4 bg-transparent" asChild>
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/50">
          <div className="container max-w-6xl">
            <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Don't just take our word for it. Here's what our satisfied clients have to say about our legal services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Yousaf",
                  role: "Business Owner",
                  content:
                    "Qazi Nafees ur Rehman Law Associates helped me navigate a complex business dispute with professionalism and expertise. Their strategic approach saved my company and I couldn't be more grateful.",
                  rating: 5,
                },
                {
                  name: "Mahnoor Ali",
                  role: "Family Law Client",
                  content:
                    "During my divorce proceedings, the team provided compassionate support while fighting hard for my rights. They made a difficult time much more manageable.",
                  rating: 5,
                },
                {
                  name: " Ahmed Khan",
                  role: "Personal Injury Client",
                  content:
                    "After my accident, Qazi Nafees ur Rehman Law Associates secured a settlement that exceeded my expectations. Their dedication to my case was evident from day one.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Latest Legal Insights</h2>
                <p className="text-lg text-muted-foreground mt-2">
                  Stay informed with our latest legal articles and updates.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Understanding Your Rights in Personal Injury Cases",
                  excerpt:
                    "Learn about the key factors that determine compensation in personal injury lawsuits and how to protect your interests.",
                  category: "Personal Injury",
                  date: "March 15, 2024",
                  image: "/legal-documents-gavel-justice.jpg",
                },
                {
                  title: "New Business Formation Laws: What Entrepreneurs Need to Know",
                  excerpt:
                    "Recent changes in corporate law affect how new businesses should structure their operations and compliance requirements.",
                  category: "Corporate Law",
                  date: "March 10, 2024",
                  image: "/business-meeting-handshake-contract.jpg",
                },
                {
                  title: "Estate Planning Essentials for Young Families",
                  excerpt:
                    "Why estate planning isn't just for the wealthy and how young families can protect their children's future.",
                  category: "Estate Planning",
                  date: "March 5, 2024",
                  image: "/family-planning-documents-will.jpg",
                },
              ].map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">{post.excerpt}</CardDescription>
                    <Button variant="outline" asChild>
                      <Link href="/blog">Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container max-w-6xl">
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
