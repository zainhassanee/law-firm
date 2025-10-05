import { Button } from "@/components/ui/button"
import { Scale, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found | Qazi Nafees ur Rehman Law Associates",
  description:
    "The page you're looking for doesn't exist. Return to Qazi Nafees ur Rehman Law Associates homepage or contact us for assistance.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container text-center space-y-8">
        <div className="flex justify-center">
          <Scale className="h-16 w-16 text-primary" />
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/" className="flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact" className="flex items-center">
              Contact Us
            </Link>
          </Button>
        </div>
        <div className="pt-8">
          <Button variant="ghost" asChild>
            <Link href="javascript:history.back()" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
