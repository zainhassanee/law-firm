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
    name: "Sterling & Associates Law Firm",
    description:
      "Professional legal services including family law, corporate law, criminal defense, personal injury, real estate law, and estate planning.",
    url: "https://sterlinglaw.com",
    logo: "https://sterlinglaw.com/logo.png",
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
        name: "Sterling & Associates Law Firm",
        logo: {
          "@type": "ImageObject",
          url: "https://sterlinglaw.com/logo.png",
        },
      },
      datePublished: blogPost.datePublished,
      dateModified: blogPost.dateModified || blogPost.datePublished,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://sterlinglaw.com/blog",
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
