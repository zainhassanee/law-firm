import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Phone, Mail, MapPin, Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Sample blog posts data
const blogPosts = {
  "understanding-personal-injury-rights": {
    title: "Understanding Your Rights in Personal Injury Cases",
    excerpt:
      "Learn about the key factors that determine compensation in personal injury lawsuits and how to protect your interests throughout the legal process.",
    category: "Legal Tips",
    date: "March 15, 2024",
    author: "Jennifer Rodriguez",
    image: "/legal-documents-gavel-justice.jpg",
    readTime: "5 min read",
    content: `
      <p>Personal injury cases can be complex and overwhelming, especially when you're dealing with physical pain, emotional trauma, and financial stress. Understanding your rights is crucial to ensuring you receive fair compensation for your injuries and losses.</p>

      <h2>What Constitutes a Personal Injury Case?</h2>
      <p>A personal injury case arises when someone suffers harm from an accident or injury, and someone else might be legally responsible for that harm. Common types include:</p>
      <ul>
        <li>Motor vehicle accidents</li>
        <li>Slip and fall incidents</li>
        <li>Medical malpractice</li>
        <li>Product liability cases</li>
        <li>Workplace injuries</li>
      </ul>

      <h2>Key Factors That Determine Compensation</h2>
      <p>Several factors influence the amount of compensation you may receive:</p>
      
      <h3>1. Medical Expenses</h3>
      <p>This includes all medical costs related to your injury, both current and future. Keep detailed records of all medical treatments, prescriptions, and rehabilitation costs.</p>

      <h3>2. Lost Wages and Earning Capacity</h3>
      <p>If your injury prevents you from working, you may be entitled to compensation for lost wages and reduced earning capacity.</p>

      <h3>3. Pain and Suffering</h3>
      <p>Non-economic damages for physical pain, emotional distress, and reduced quality of life are often significant components of personal injury settlements.</p>

      <h2>Steps to Protect Your Rights</h2>
      <p>Taking the right steps immediately after an injury can significantly impact your case:</p>
      
      <ol>
        <li><strong>Seek immediate medical attention</strong> - Your health is the priority, and medical records serve as crucial evidence.</li>
        <li><strong>Document everything</strong> - Take photos, gather witness information, and keep detailed records.</li>
        <li><strong>Don't admit fault</strong> - Avoid making statements that could be interpreted as admitting responsibility.</li>
        <li><strong>Contact an attorney</strong> - Early legal representation can protect your rights and maximize your compensation.</li>
      </ol>

      <h2>The Importance of Legal Representation</h2>
      <p>Insurance companies have teams of lawyers working to minimize payouts. Having experienced legal representation levels the playing field and ensures your rights are protected throughout the process.</p>

      <p>At Sterling & Associates, we work on a contingency fee basis for personal injury cases, meaning you pay nothing unless we win your case. Contact us today for a free consultation to discuss your rights and options.</p>
    `,
  },
  "new-business-formation-laws-2024": {
    title: "New Business Formation Laws: What Entrepreneurs Need to Know",
    excerpt:
      "Recent changes in corporate law affect how new businesses should structure their operations and compliance requirements for 2024.",
    category: "Law Updates",
    date: "March 10, 2024",
    author: "Robert Sterling",
    image: "/business-meeting-handshake-contract.jpg",
    readTime: "7 min read",
    content: `
      <p>The business landscape continues to evolve, and 2024 has brought significant changes to business formation laws that entrepreneurs and business owners need to understand. These updates affect everything from entity selection to compliance requirements.</p>

      <h2>Key Changes in Business Formation Laws</h2>
      
      <h3>1. Enhanced Beneficial Ownership Reporting</h3>
      <p>New federal requirements mandate that most corporations and LLCs report information about their beneficial owners to the Financial Crimes Enforcement Network (FinCEN). This affects:</p>
      <ul>
        <li>Corporations formed after January 1, 2024</li>
        <li>LLCs created after the effective date</li>
        <li>Existing entities must comply by January 1, 2025</li>
      </ul>

      <h3>2. Updated LLC Operating Agreement Requirements</h3>
      <p>Several states have modified their LLC statutes to require more detailed operating agreements, particularly regarding:</p>
      <ul>
        <li>Member voting rights and procedures</li>
        <li>Profit and loss distribution methods</li>
        <li>Management structure and decision-making authority</li>
      </ul>

      <h2>Choosing the Right Business Structure</h2>
      <p>With these new requirements, selecting the appropriate business entity is more critical than ever:</p>

      <h3>Limited Liability Company (LLC)</h3>
      <p>Remains popular for its flexibility and tax advantages, but now requires more comprehensive documentation and reporting.</p>

      <h3>Corporation (C-Corp or S-Corp)</h3>
      <p>May be preferable for businesses seeking investment or planning for significant growth, despite additional compliance requirements.</p>

      <h3>Partnership Structures</h3>
      <p>Limited partnerships and limited liability partnerships have seen updates to their formation and operational requirements.</p>

      <h2>Compliance Considerations for 2024</h2>
      
      <h3>State-Level Changes</h3>
      <p>Many states have updated their business formation statutes, affecting:</p>
      <ul>
        <li>Filing fees and annual report requirements</li>
        <li>Registered agent obligations</li>
        <li>Publication requirements for certain entity types</li>
      </ul>

      <h3>Federal Tax Implications</h3>
      <p>Recent tax law changes impact business entity selection, particularly regarding:</p>
      <ul>
        <li>Pass-through entity tax elections</li>
        <li>Qualified business income deductions</li>
        <li>International reporting requirements for foreign-owned entities</li>
      </ul>

      <h2>Best Practices for New Business Formation</h2>
      
      <ol>
        <li><strong>Conduct thorough entity analysis</strong> - Consider tax implications, liability protection, and operational flexibility.</li>
        <li><strong>Prepare comprehensive governing documents</strong> - Operating agreements and bylaws should address new legal requirements.</li>
        <li><strong>Establish compliance systems</strong> - Create processes for ongoing reporting and regulatory compliance.</li>
        <li><strong>Consider future growth plans</strong> - Choose a structure that can accommodate expansion and investment.</li>
      </ol>

      <h2>Getting Professional Help</h2>
      <p>Given the complexity of new business formation laws, working with experienced business attorneys is more important than ever. At Sterling & Associates, we help entrepreneurs navigate these changes and establish businesses positioned for success.</p>

      <p>Contact us today to discuss your business formation needs and ensure compliance with all current legal requirements.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found | Qazi Nafees ur Rehman Law Associates",
    }
  }

  return {
    title: `${post.title} | Qazi Nafees ur Rehman Law Associates`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, legal advice, law firm blog, ${post.title.toLowerCase()}`,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <SiteHeader currentPage="blog" />

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-4xl">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">{post.title}</h1>

            <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center justify-between border-y py-4">
              <div className="flex items-center space-x-4">
                <img src="/placeholder.svg?height=40&width=40" alt={post.author} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm text-muted-foreground">Partner at Sterling & Associates</div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Need Legal Assistance?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have questions about this topic or need legal representation, our experienced attorneys are here
                to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">Schedule  Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

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
