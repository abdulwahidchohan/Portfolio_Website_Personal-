import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Download, Instagram, Github, Menu } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedHeader from "./components/animated-header"
import { Reveal } from "./components/reveal"
import FuturisticBackground from "./components/futuristic-background"
import Education from "./components/education"
import Certifications from "./components/certifications"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative">
      <FuturisticBackground />
      <div className="relative z-10">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <Link className="flex items-center space-x-2" href="/">
                <span className="font-bold text-sm sm:text-base">Abdul Wahid Chohan</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#education" className="text-sm font-medium transition-colors hover:text-foreground/80">
                Education
              </Link>
              <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-foreground/80">
                Certifications
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" asChild className="hidden sm:inline-flex">
                <a href="/Abdul Wahid.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4">
                    <Link href="#about" className="text-sm font-medium transition-colors hover:text-foreground/80">
                      About
                    </Link>
                    <Link href="#skills" className="text-sm font-medium transition-colors hover:text-foreground/80">
                      Skills
                    </Link>
                    <Link href="#education" className="text-sm font-medium transition-colors hover:text-foreground/80">
                      Education
                    </Link>
                    <Link
                      href="#certifications"
                      className="text-sm font-medium transition-colors hover:text-foreground/80"
                    >
                      Certifications
                    </Link>
                    <Link href="#contact" className="text-sm font-medium transition-colors hover:text-foreground/80">
                      Contact
                    </Link>
                    <Button variant="outline" asChild className="w-full">
                      <a href="/Abdul_Wahid_Chohan_Resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" /> Resume
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section id="about" className="py-12 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Reveal>
                  <AnimatedHeader />
                </Reveal>
                <Reveal>
                  <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[700px]">
                  Hi, I’m Abdul Wahid Chohan – a passionate Web 3 developer, AI enthusiast, and robotics innovator. With expertise in Next.js, TypeScript, and Tailwind CSS, I build scalable, future-ready digital solutions. Whether it's decentralization, intelligent automation, or cutting-edge web experiences, I thrive on turning ideas into reality. Let’s push the boundaries of technology together!
                  </p>
                </Reveal>
                <Reveal>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Link href="https://www.linkedin.com/in/abdul-wahid-chohan" target="_blank">
                      <Button variant="outline" size="icon" className="animate-bounce">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="https://www.instagram.com/abdulwahidchohan138/" target="_blank">
                      <Button variant="outline" size="icon" className="animate-bounce delay-100">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                    <Link href="https://github.com/abdulwahidchohan" target="_blank">
                      <Button variant="outline" size="icon" className="animate-bounce delay-200">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="mailto:aw4532350@gmail.com">
                      <Button variant="outline" size="icon" className="animate-bounce delay-300">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section id="skills" className="py-12 md:py-24 lg:py-32">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">Skills</h2>
              </Reveal>
              <Reveal>
                <TechStack />
              </Reveal>
            </div>
          </section>

          <section id="education" className="py-12 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">
                  Education
                </h2>
              </Reveal>
              <Reveal>
                <Education />
              </Reveal>
            </div>
          </section>

          <section id="certifications" className="py-12 md:py-24 lg:py-32">
            <div className="max-w-6xl mx-auto">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">
                  Certifications
                </h2>
              </Reveal>
              <Reveal>
                <Certifications />
              </Reveal>
            </div>
          </section>

          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="max-w-2xl mx-auto">
              <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">
                  Get in Touch
                </h2>
              </Reveal>
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="border-t mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
                © 2024 Abdul Wahid Chohan. All rights reserved.
              </p>
              <nav className="flex gap-4">
                <Link className="text-xs hover:underline underline-offset-4" href="#about">
                  About
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#skills">
                  Skills
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#education">
                  Education
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

