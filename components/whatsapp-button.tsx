import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button size="lg" className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow" asChild>
        <Link href="https://wa.me/+923235235271" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Contact us on WhatsApp for consultation</span>
        </Link>
      </Button>
    </div>
  )
}
