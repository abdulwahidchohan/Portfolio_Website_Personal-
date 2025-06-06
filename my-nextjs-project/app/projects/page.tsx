import type { Metadata } from "next"
import ProjectCard from "@/components/project-card"

export const metadata: Metadata = {
  title: "Robotics Projects - Arduino & AI Innovations",
  description:
    "Explore Abdul Wahid Chohan's award-winning robotics projects including soccer robots, line-following systems, and Arduino-based automation solutions.",
  keywords: [
    "Arduino robotics projects",
    "Soccer robot development",
    "Line following robot",
    "PID control systems",
    "Robotics competition projects",
    "Automation solutions Karachi",
  ],
  openGraph: {
    title: "Robotics Projects by Abdul Wahid Chohan",
    description:
      "Award-winning robotics projects featuring Arduino development, sensor integration, and advanced control systems.",
  },
}

const projects = [
  {
    title: "Soccer/Sumo Robots",
    description: "Achieved 90% competition accuracy using IR/ultrasonic sensors with advanced PID control systems.",
    technologies: ["Arduino", "C++", "SolidWorks", "IR Sensors"],
    achievements: ["90% accuracy rate", "15% performance improvement", "Competition winner"],
    category: "robotics",
  },
  {
    title: "E-Commerce Web Application",
    description: "Full-stack Next.js application with 30% improved page load times through optimization.",
    technologies: ["Next.js", "React", "PostgreSQL", "TypeScript"],
    achievements: ["30% faster load times", "Optimized caching", "Responsive design"],
    category: "web-development",
  },
  {
    title: "Line-Following Robot",
    description: "Precision navigation system with 85% error reduction using advanced PID control algorithms.",
    technologies: ["Arduino", "PID Control", "Sensors", "C++"],
    achievements: ["85% error reduction", "Procom 2025 showcase", "Autonomous navigation"],
    category: "robotics",
  },
]

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <article>
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4" id="projects-heading">
            Robotics & AI Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover innovative robotics solutions and AI-powered applications developed by Abdul Wahid Chohan. Each
            project showcases expertise in Arduino programming, sensor integration, and cutting-edge automation systems.
          </p>
        </header>

        <section aria-labelledby="robotics-projects">
          <h2 id="robotics-projects" className="text-2xl font-semibold mb-6">
            Robotics Engineering Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects
              .filter((p) => p.category === "robotics")
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </section>

        <section aria-labelledby="web-projects">
          <h2 id="web-projects" className="text-2xl font-semibold mb-6">
            Web Development Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.category === "web-development")
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </section>
      </article>
    </main>
  )
}
