import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  "Artificial Intelligence, Web3.0 & Metaverse (Agentic AI) - Governor Initiative (Currently Studying)",
  "Google Soft Skills Program - Google",
  "TypeScript Variables and Data Types - Coursera",
  "AI Fundamentals - DataCamp",
  "Duet AI in Gmail - Coursera",
  "Introduction to Generative AI Studio - Coursera",
  "Introduction to Duet AI in Google Workspace - Coursera",
  "Encoder-Decoder Architecture - Coursera",
  "Introduction to Responsible AI - Coursera",
  "Introduction to Image Generation - Coursera",
  "Introduction to Large Language Models - Coursera",
  "Introduction to Generative AI - Coursera",
  "How to Optimize Your Instagram Account - Coursera",
  "Use AI Builder and Power Apps to Process Invoice Data - Coursera",
  "The Data Scientist's Toolbox - Coursera",
  "Prepare, Clean, Transform, and Load Data using Power BI - Coursera",
  "Application of Data Analysis in Business with R Programming - Coursera",
  "What is Data Science - Coursera",
  "Mining Quality Prediction Using Machine and Deep Learning - Coursera",
  "Get started with Rstudio - Coursera",
  "Mastering Data Analysis with Pandas - Coursera",
  "FREELANCING - DigiSkills",
  "DATA ANALYTICS AND BUSINESS INTELLIGENCE - DigiSkills",
  "Graphic Design - LLCF",
  "Mobile Repairing - LLCF",
  "HVAC - LLCF",
  "English Language level 2 - LLCF",
]

export default function Certifications() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur">
          <CardContent className="p-4">
            <p className="text-sm">{cert}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

