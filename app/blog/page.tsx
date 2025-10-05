import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Phone, Mail, MapPin, Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Legal Blog | Qazi Nafees ur Rehman Law Associates",
  description:
    "Stay informed with our latest legal insights, tips, and updates. Expert analysis on current legal trends and important case developments.",
  keywords: "legal blog, legal tips, law updates, recent cases, legal insights, legal news",
}

export default function BlogPage() {
  const categories = [
    { name: "All Posts", count: 12, active: true },
    { name: "Legal Tips", count: 4 },
    { name: "Recent Cases", count: 3 },
    { name: "Law Updates", count: 3 },
    { name: "Client Stories", count: 2 },
  ]

  const blogPosts = [
    {
      title: "Understanding Your Rights in Personal Injury Cases",
      excerpt:
        "Learn about the key factors that determine compensation in personal injury lawsuits and how to protect your interests throughout the legal process.",
      category: "Legal Tips",
      date: "March 15, 2024",
      author: "Jennifer Rodriguez",
      image: "/legal-documents-gavel-justice.jpg",
      slug: "understanding-personal-injury-rights",
      readTime: "5 min read",
    },
    {
      title: "New Business Formation Laws: What Entrepreneurs Need to Know",
      excerpt:
        "Recent changes in corporate law affect how new businesses should structure their operations and compliance requirements for 2024.",
      category: "Law Updates",
      date: "March 10, 2024",
      author: "Robert Sterling",
      image: "/business-meeting-handshake-contract.jpg",
      slug: "new-business-formation-laws-2024",
      readTime: "7 min read",
    },
    {
      title: "Estate Planning Essentials for Young Families",
      excerpt:
        "Why estate planning isn't just for the wealthy and how young families can protect their children's future with proper legal planning.",
      category: "Legal Tips",
      date: "March 5, 2024",
      author: "Lisa Park",
      image: "/family-planning-documents-will.jpg",
      slug: "estate-planning-young-families",
      readTime: "6 min read",
    },
    {
      title: "Landmark Supreme Court Decision Affects Criminal Defense",
      excerpt:
        "Analysis of the recent Supreme Court ruling and its implications for criminal defense strategies and defendant rights.",
      category: "Recent Cases",
      date: "February 28, 2024",
      author: "Michael Chen",
      image: "/professional-law-office-courtroom-interior.jpg",
      slug: "supreme-court-criminal-defense-ruling",
      readTime: "8 min read",
    },
    {
      title: "Navigating Divorce Mediation: A Collaborative Approach",
      excerpt:
        "How mediation can provide a less adversarial and more cost-effective path to divorce resolution while protecting your interests.",
      category: "Legal Tips",
      date: "February 20, 2024",
      author: "Sarah Mitchell",
      image: "/professional-lawyers-team-office-meeting.jpg",
      slug: "divorce-mediation-collaborative-approach",
      readTime: "6 min read",
    },
    {
      title: "Real Estate Market Changes and Legal Implications",
      excerpt:
        "Understanding how recent market shifts affect property transactions and what buyers and sellers need to know about new regulations.",
      category: "Law Updates",
      date: "February 15, 2024",
      author: "David Thompson",
      image: "/business-meeting-handshake-contract.jpg",
      slug: "real-estate-market-legal-implications",
      readTime: "5 min read",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <SiteHeader currentPage="blog" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">Legal Insights & Updates</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Stay informed with expert legal analysis, practical tips, and the latest developments in law.
          </p>
        </div>
      {/* </section>

      Blog Content
      <section className="py-16"> */}
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                        category.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge variant={category.active ? "secondary" : "outline"} className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for the latest legal insights and updates.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-input rounded-md text-sm"
                    />
                    <Button size="sm" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="grid gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="aspect-video md:aspect-square relative overflow-hidden rounded-l-lg">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                          <Button variant="outline" asChild>
                            <Link href={`/blog/${post.slug}`} className="flex items-center">
                              Read More
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center space-x-2">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button size="sm">1</Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
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
