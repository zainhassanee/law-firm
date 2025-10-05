import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button size="lg" className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow p-0" asChild>
        <Link href="https://wa.me/+923235235271" target="_blank" rel="noopener noreferrer">
          <Image src="/whatsaap icon.png" alt="WhatsApp" width={28} height={28} className="h-7 w-7" />
          <span className="sr-only">Contact us on WhatsApp for consultation</span>
        </Link>
      </Button>
    </div>
  )
}
