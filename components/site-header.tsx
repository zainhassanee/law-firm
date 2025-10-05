import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MobileNavigation } from "./mobile-navigation"

interface SiteHeaderProps {
  currentPage?: string
}

export function SiteHeader({ currentPage }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Firm logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold">Qazi Nafees ur Rehman Law Associates</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              currentPage === "home" ? "text-primary" : "hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              currentPage === "about" ? "text-primary" : "hover:text-primary"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors ${
              currentPage === "services" ? "text-primary" : "hover:text-primary"
            }`}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              currentPage === "blog" ? "text-primary" : "hover:text-primary"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              currentPage === "contact" ? "text-primary" : "hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
