import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    institution: "Bahria University Karachi Campus",
    degree: "Bachelors Robotics And Intelligent Systems (BS(RIS))",
    duration: "Jul 2024 - Present",
  },
  {
    institution: "Bahria College Karsaz",
    degree: "HSSC (Intermediate)",
    duration: "Aug 2022 - Jul 2024",
  },
  {
    institution: "Usman Public School System",
    degree: "SSC (Matriculation)",
    duration: "April 2022 - Aug 2022",
  },
]

export default function Education() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {educationData.map((edu, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle>{edu.institution}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{edu.degree}</p>
            <p className="text-sm text-muted-foreground">{edu.duration}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

