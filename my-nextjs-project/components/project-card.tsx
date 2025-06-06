import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  achievements: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  achievements,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex gap-2">
          {githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
