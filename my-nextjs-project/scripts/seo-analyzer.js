// SEO Analysis Script for Abdul Wahid Chohan's Portfolio
console.log("🔍 Starting SEO Analysis for Robotics & AI Portfolio...\n")

// Keyword Analysis
const targetKeywords = {
  primary: ["Robotics Engineer Portfolio", "AI Engineer Karachi", "Next.js Developer Pakistan"],
  secondary: ["Arduino Projects", "LLM Developer", "Web Performance Optimization"],
  longTail: [
    "Robotics Engineer in Karachi with Arduino and Generative AI Expertise",
    "Best Robotics Portfolio Pakistan",
    "Arduino Soccer Robot Developer",
  ],
}

// Keyword Density Calculator
function calculateKeywordDensity(content, keyword) {
  const words = content.toLowerCase().split(/\s+/)
  const keywordWords = keyword.toLowerCase().split(/\s+/)
  let count = 0

  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    const phrase = words.slice(i, i + keywordWords.length).join(" ")
    if (phrase === keyword.toLowerCase()) {
      count++
    }
  }

  return ((count / words.length) * 100).toFixed(2)
}

// Meta Tags Analysis
const metaTagsChecklist = {
  title: "Abdul Wahid Chohan - Robotics & AI Engineer | Arduino Expert Karachi",
  description:
    "Abdul Wahid Chohan - Expert Robotics & AI Engineer from Karachi, Pakistan. Specializing in Arduino robotics, Next.js development, and Generative AI solutions. 5+ award-winning projects.",
  keywords: targetKeywords.primary.concat(targetKeywords.secondary),
  ogTitle: "Abdul Wahid Chohan - Leading Robotics & AI Engineer in Karachi",
  ogDescription:
    "Discover innovative robotics projects and AI solutions by Abdul Wahid Chohan. Expert in Arduino development, Next.js applications, and cutting-edge automation systems.",
}

// SEO Score Calculator
function calculateSEOScore() {
  let score = 0
  const maxScore = 100

  // Title optimization (20 points)
  if (metaTagsChecklist.title.length >= 50 && metaTagsChecklist.title.length <= 60) {
    score += 20
    console.log("✅ Title length optimized (50-60 chars)")
  } else {
    console.log("⚠️  Title length needs optimization")
  }

  // Description optimization (20 points)
  if (metaTagsChecklist.description.length >= 150 && metaTagsChecklist.description.length <= 160) {
    score += 20
    console.log("✅ Meta description length optimized (150-160 chars)")
  } else {
    console.log("⚠️  Meta description length needs optimization")
  }

  // Keyword presence (30 points)
  const titleHasKeyword = targetKeywords.primary.some((keyword) =>
    metaTagsChecklist.title.toLowerCase().includes(keyword.toLowerCase()),
  )
  if (titleHasKeyword) {
    score += 15
    console.log("✅ Primary keyword found in title")
  }

  const descHasKeyword = targetKeywords.primary.some((keyword) =>
    metaTagsChecklist.description.toLowerCase().includes(keyword.toLowerCase()),
  )
  if (descHasKeyword) {
    score += 15
    console.log("✅ Primary keyword found in description")
  }

  // Open Graph optimization (15 points)
  if (metaTagsChecklist.ogTitle && metaTagsChecklist.ogDescription) {
    score += 15
    console.log("✅ Open Graph tags implemented")
  }

  // Local SEO (15 points)
  const hasLocation = metaTagsChecklist.title.includes("Karachi") || metaTagsChecklist.description.includes("Karachi")
  if (hasLocation) {
    score += 15
    console.log("✅ Location targeting implemented")
  }

  return score
}

// Performance Recommendations
const performanceRecommendations = [
  "🚀 Implement next/image for optimized image loading",
  "⚡ Use dynamic imports for code splitting",
  "🎯 Implement service worker for caching",
  "📱 Ensure mobile-first responsive design",
  "🔗 Add internal linking strategy",
  "📊 Implement structured data for rich snippets",
  "🌐 Add multilingual support for broader reach",
  "🔍 Create topic clusters around robotics expertise",
]

// Content Strategy
const contentStrategy = {
  "Robotics Projects": [
    "Arduino-based automation systems",
    "PID control implementations",
    "Sensor integration tutorials",
    "Competition robot designs",
  ],
  "AI Development": [
    "Generative AI applications",
    "LLM integration guides",
    "Prompt engineering techniques",
    "Responsible AI practices",
  ],
  "Web Development": [
    "Next.js performance optimization",
    "TypeScript best practices",
    "Database integration patterns",
    "SEO implementation guides",
  ],
}

// Run Analysis
console.log("📊 SEO ANALYSIS RESULTS\n")
console.log("=".repeat(50))

const seoScore = calculateSEOScore()
console.log(`\n🎯 Overall SEO Score: ${seoScore}/100`)

if (seoScore >= 80) {
  console.log("🏆 Excellent SEO optimization!")
} else if (seoScore >= 60) {
  console.log("👍 Good SEO, room for improvement")
} else {
  console.log("⚠️  SEO needs significant improvement")
}

console.log("\n📈 PERFORMANCE RECOMMENDATIONS:")
performanceRecommendations.forEach((rec, index) => {
  console.log(`${index + 1}. ${rec}`)
})

console.log("\n📝 CONTENT STRATEGY:")
Object.entries(contentStrategy).forEach(([category, topics]) => {
  console.log(`\n${category}:`)
  topics.forEach((topic) => console.log(`  • ${topic}`))
})

console.log("\n🎯 KEYWORD TARGETS:")
console.log("Primary:", targetKeywords.primary.join(", "))
console.log("Secondary:", targetKeywords.secondary.join(", "))
console.log("Long-tail:", targetKeywords.longTail.join(", "))

console.log("\n✅ SEO Analysis Complete!")
