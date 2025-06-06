import type { Metadata } from "next"
import Script from "next/script"

interface SEOEnhancerProps {
  metadata?: Metadata
  structuredData?: Record<string, any>
  breadcrumbs?: Array<{
    name: string
    item: string
  }>
}

export default function SEOEnhancer({ structuredData, breadcrumbs }: SEOEnhancerProps) {
  // Default person structured data
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Wahid Chohan",
    jobTitle: "Robotics Engineer & Technology Innovator",
    description:
      "Robotics Engineering student at Bahria University specializing in automation, AI integration, and R programming.",
    url: "https://portfolio-website-personal-abdul-wahid-chohan.vercel.app",
    sameAs: ["https://github.com/AbdulWahidChohan", "https://linkedin.com/in/abdul-wahid-chohan"],
    knowsAbout: [
      "Robotics Engineering",
      "Artificial Intelligence",
      "R Programming",
      "Data Science",
      "Full-Stack Development",
      "Automation",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bahria University",
      sameAs: "https://www.bahria.edu.pk/",
    },
  }

  // Breadcrumb structured data
  const breadcrumbData = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      }
    : null

  // Combine all structured data
  const allStructuredData = [personData, breadcrumbData, structuredData].filter(Boolean)

  return (
    <>
      {allStructuredData.map((data, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  )
}
