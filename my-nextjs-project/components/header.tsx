"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Github, Linkedin, Mail } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          <span className="text-primary">Abdul</span> Wahid Chohan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
              }}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Links & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/AbdulWahidChohan" target="_blank">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/abdul-wahid-chohan" target="_blank">
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#contact")
            }}
          >
            <a href="#contact">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-6 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault()
                    }
                    handleNavClick(item.href)
                  }}
                  className={`text-lg font-medium transition-colors ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-6">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/AbdulWahidChohan" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://linkedin.com/in/abdul-wahid-chohan" target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
