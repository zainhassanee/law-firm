import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Phone, Mail, MapPin, Users, Shield, Briefcase, Home, Heart, FileText, Banknote, Lightbulb, Calculator } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Legal Services | Qazi Nafees ur Rehman Law Associates",
  description:
    "Comprehensive legal services including family law, corporate law, criminal defense, personal injury, real estate, and estate planning. Experienced attorneys ready to help.",
  keywords:
    "legal services, family law, corporate law, criminal defense, personal injury, real estate law, estate planning",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Civil Litigation",
      icon: FileText,
      description:
        "Strategic and diligent representation in all civil disputes including property, contracts, and damages.",
      features: [
        "Property Disputes",
        "Recovery Suits",
        "Contractual Matters",
        "Damages & Compensation Claims",
        "Injunctions",
        "Tenancy, Eviction & Rent Disputes",
      ],
      approach:
        "We handle civil disputes with diligence and strategy. Our team ensures timely and effective resolutions while protecting your rights in property, contractual, and tenancy-related matters.",
    },
    {
      title: "Criminal Defense",
      icon: Shield,
      description:
        "Strong and fearless defense in all criminal matters, protecting your liberty and rights at every stage.",
      features: [
        "Bail Applications (Pre-Arrest, Post-Arrest, Protective)",
        "Trial Defense",
        "Fraud & White-Collar Crimes",
        "Narcotics Cases",
        "Heinous Offences (Murder, Kidnapping, Terrorism)",
        "Representation before Anti-Terrorism Courts (ATC)",
      ],
      approach:
        "We provide fearless representation in criminal cases, ensuring your rights are safeguarded. With extensive trial experience, we fight for your freedom and justice in high-stakes matters.",
    },
    {
      title: "Family Law",
      icon: Users,
      description:
        "Compassionate legal support for family-related matters including divorce, custody, guardianship, and maintenance.",
      features: [
        "Court  Marriage",
        "Divorce & Khula",
        "Child Custody & Guardianship",
        "Maintenance & Support",
        "Adoption Matters",
        "Domestic Disputes",
      ],
      approach:
        "We understand family issues are deeply personal and emotionally challenging. Our attorneys provide empathetic yet strong representation to protect your family’s rights and future.",
    },
    {
      title: "Banking & Finance Law",
      icon: Banknote,
      description:
        "Specialized services in banking disputes, loan recoveries, and regulatory compliance with financial laws.",
      features: [
        "Loan Disputes",
        "Recovery Matters",
        "Banking Compliance Issues",
        "Regulatory Guidance",
      ],
      approach:
        "We combine financial knowledge with legal strategy to protect your financial interests. Our team ensures compliance and resolves banking disputes efficiently.",
    },
    {
      title: "Intellectual Property (IPR)",
      icon: Lightbulb,
      description:
        "Safeguarding your creative and business assets through comprehensive intellectual property protection.",
      features: [
        "Trademark Registration & Protection",
        "Copyrights",
        "Patents",
        "Trade Secrets",
        "IP Litigation",
        "Plant Breeders Rights",
        "Geographical Indications",
        "Passing Off Cases",
        "Circuit Layout Designs",
        "Confidental information",
      ],
      approach:
        "We protect innovation and creativity with complete IP services. Our firm secures your intellectual property and helps you maintain a competitive edge in the market.",
    },
    {
      title: "Corporate & Commercial Law",
      icon: Briefcase,
      description:
        "End-to-end legal support for businesses, from company formation to contracts, compliance, and dispute resolution.",
      features: [
        "Company Registration & Structuring",
        "Contract Drafting & Review",
        "Regulatory Compliance",
        "Business Dispute Resolution",
      ],
      approach:
        "We provide practical legal solutions for businesses of all sizes. From startups to established companies, our services ensure smooth operations and minimized risks.",
    },
    {
      title: "Tax Law",
      icon: Calculator,
      description:
        "Complete tax advisory and representation services for individuals and corporations.",
      features: [
        "Income Tax Returns",
        "Sales Tax Compliance",
        "Corporate Taxation",
        "Appeals before Tax Tribunals & Courts",
      ],
      approach:
        "Our tax division helps clients stay compliant while optimizing tax planning. We provide strong representation in disputes and ensure efficient handling of all tax matters.",
    },
    
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <SiteHeader currentPage="services" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">Legal Services</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive legal representation across multiple practice areas with proven results and personalized
            attention.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Practice Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Expert legal counsel across diverse practice areas, tailored to meet your specific needs and objectives.
            </p>
          </div>
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <service.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <Button asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Our Approach:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.approach}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Choose Qazi Nafees ur Rehman Law Associates?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              The advantages that set us apart in providing exceptional legal representation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Experienced Team",
                description: "Extensive combined legal experience across all practice areas.",
              },
              {
                title: "Proven Results",
                description: "500+ successful cases with a 98% client satisfaction rate.",
              },
              {
                title: "Personal Attention",
                description: "Direct access to your attorney with personalized legal strategies.",
              },
              {
                title: "No Hidden Fees",
                description: "Transparent pricing with clear fee structures and no surprises.",
              },
            ].map((advantage, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Contact us today for  consultation and discover how we can help with your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule  Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Meet Our Team</Link>
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
