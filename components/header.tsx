"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Facebook } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "OUR COURSES", path: "/courses" },
    { name: "OUR HIGH SCHOOL", path: "/high-school" },
    { name: "CONTACT", path: "/contact" },
  ]

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleNavClick}>
            <div className="flex items-center">
              <Image
                src="/images/y2k-images/y2k-logo.png"
                alt="Y2K College Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              /><h2>Y2K COLLEGE</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "nav-link font-medium hover:text-accent transition-colors",
                  pathname === item.path ? "text-accent active" : "text-primary",
                )}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-primary hover:text-accent transition-colors" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex justify-center pb-4 border-b border-gray-200">
                <Image
                  src="/images/y2k-images/y2k-logo.png"
                  alt="Y2K College Logo"
                  width={150}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "font-medium py-2 hover:text-accent transition-colors",
                    pathname === item.path ? "text-accent" : "text-primary",
                  )}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-2">
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook" onClick={closeMenu}>
                  <Facebook className="h-5 w-5 text-primary hover:text-accent transition-colors" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
