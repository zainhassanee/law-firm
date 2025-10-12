interface LawFirmSchemaProps {
  page?: "home" | "about" | "services" | "contact" | "blog"
  blogPost?: {
    title: string
    description: string
    author: string
    datePublished: string
    dateModified?: string
  }
}

export function LawFirmSchema({ page = "home", blogPost }: LawFirmSchemaProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Qazi Nafees ur Rehman Law Associates",
    description:
      "Professional legal services including family law, corporate law, criminal defense, personal injury, real estate law, and estate planning.",
    url: "https://qazinafeeslaw.com",
    logo: "https://qazinafeeslaw.com/logo.png",
    telephone: "+92 323 5235271",
    email: "qazi.nafees.ur.rehman@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Legal Plaza, Suite 500",
      addressLocality: "Downtown",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
  }

  if (page === "blog" && blogPost) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blogPost.title,
      description: blogPost.description,
      author: {
        "@type": "Person",
        name: blogPost.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Qazi Nafees ur Rehman Law Associates",
        logo: {
          "@type": "ImageObject",
          url: "https://qazinafeeslaw.com/logo.png",
        },
      },
      datePublished: blogPost.datePublished,
      dateModified: blogPost.dateModified || blogPost.datePublished,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://qazinafeeslaw.com/blog",
      },
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    )
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseSchema),
      }}
    />
  )
}
