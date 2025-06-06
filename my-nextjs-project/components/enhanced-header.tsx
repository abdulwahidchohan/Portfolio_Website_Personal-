"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, Github, Linkedin, Mail, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
]

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ["skills", "projects", "education", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/about") return pathname === "/about"
    if (href === "/projects") return pathname === "/projects"
    if (href.startsWith("#")) return activeSection === href.slice(1)
    return pathname === href
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
          <Link href="/" className="font-bold text-xl flex items-center gap-2">
            <span className="text-primary">Abdul</span>
            <span className="text-foreground">Wahid Chohan</span>
            <Badge variant="secondary" className="text-xs hidden sm:inline-flex">
              Designer
            </Badge>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 ${
                  isActive(item.href) ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social Links & CTA */}
        <div className="hidden md:flex items-center space-x-2">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/AbdulWahidChohan" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://linkedin.com/in/abdul-wahid-chohan" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="sm"
              asChild
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
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
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-6 mt-8"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault()
                      }
                      handleNavClick(item.href)
                    }}
                    className={`block text-lg font-medium transition-colors p-3 rounded-lg ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex space-x-4 pt-6 border-t"
              >
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com/AbdulWahidChohan" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://linkedin.com/in/abdul-wahid-chohan" target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <a href="#contact" onClick={() => handleNavClick("#contact")}>
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
