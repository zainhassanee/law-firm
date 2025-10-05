import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Qazi Nafees ur Rehman Law Associates | Your Trusted Legal Partner",
  description:
    "Professional legal services including family law, corporate law, criminal defense, and more. Experienced attorneys committed to protecting your rights and interests.",
  keywords:
    "law firm, legal services, attorney, lawyer, family law, corporate law, criminal defense, personal injury, real estate law, estate planning",
  generator: "v0.app",
  metadataBase: new URL("https://sterlinglaw.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Qazi Nafees ur Rehman Law Associates | Your Trusted Legal Partner",
    description:
      "Professional legal services including family law, corporate law, criminal defense, personal injury, real estate law, and estate planning.",
    url: "https://sterlinglaw.com",
    siteName: "Qazi Nafees ur Rehman Law Associates",
    images: [
      {
        url: "/professional-law-office-courtroom-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Qazi Nafees ur Rehman Law Associates Office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qazi Nafees ur Rehman Law Associates | Your Trusted Legal Partner",
    description:
      "Professional legal services including family law, corporate law, criminal defense, personal injury, real estate law, and estate planning.",
    images: ["/professional-law-office-courtroom-interior.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Schema.org structured data for Law Firm */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Qazi Nafees ur Rehman Law Associates",
              description:
                "Professional legal services including family law, corporate law, criminal defense, personal injury, real estate law, and estate planning.",
              url: "https://sterlinglaw.com",
              logo: "https://sterlinglaw.com/logo.png",
              image: "https://sterlinglaw.com/professional-law-office-courtroom-interior.jpg",
              telephone: "+1-555-123-4567",
              email: "info@sterlinglaw.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Legal Plaza, Suite 500",
                addressLocality: "Downtown",
                addressRegion: "ST",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7127753",
                longitude: "-74.0059413",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
              priceRange: "$$",
              areaServed: {
                "@type": "State",
                name: "State",
              },
              serviceType: [
                "Family Law",
                "Corporate Law",
                "Criminal Defense",
                "Personal Injury",
                "Real Estate Law",
                "Estate Planning",
              ],
              founder: {
                "@type": "Person",
                name: "Qazi Nafees ur Rehman",
              },
              foundingDate: "1995",
              sameAs: [
                "https://www.facebook.com/sterlinglaw",
                "https://www.linkedin.com/company/sterling-associates",
                "https://twitter.com/sterlinglaw",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
