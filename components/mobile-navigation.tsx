"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Scale } from "lucide-react"
import Link from "next/link"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-4">
          <div className="flex items-center space-x-2 pb-4 border-b">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Qazi Nafees ur Rehman Law Associates</span>
          </div>
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="pt-4 border-t">
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
              Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
