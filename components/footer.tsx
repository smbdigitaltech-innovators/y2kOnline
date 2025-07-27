import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, BookOpen, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* School Banner */}
      <div className="bg-accent text-accent-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GraduationCap className="h-8 w-8 mr-3" />
              <h3 className="font-heading text-2xl">ENROLL TODAY!</h3>
            </div>
            <Button asChild variant="secondary" size="lg" className="font-heading">
              <Link href="/register">REGISTER NOW</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              ABOUT Y2K COLLEGE
            </h3>
            <div className="flex items-center mb-4">
              <BookOpen className="h-10 w-10 mr-2" />
              <div>
                <h1 className="font-heading text-2xl tracking-wider">Y2K COLLEGE</h1>
                <p className="text-xs text-primary-foreground/70">QUALITY EDUCATION</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Y2K College provides quality IT training and education, preparing students for successful careers in the
              technology industry.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Courses", path: "/courses" },
                { name: "High School", path: "/high-school" },
                { name: "Contact Us", path: "/contact" },
                { name: "Register", path: "/register" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm hover:text-accent transition-colors flex items-center">
                    <span className="mr-2">📝</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-heading mb-4">OUR COURSES</h3>
            <ul className="space-y-2">
              {[
                
                { name: "High School Program", path: "/high-school" },
                { name: "View All Courses", path: "/courses" },
              ].map((course) => (
                <li key={course.path}>
                  <Link href={course.path} className="text-sm hover:text-accent transition-colors flex items-center">
                    <span className="mr-2">📚</span> {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">1a Ravenscraig Rd, Cape Town, 7925, South Africa</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+27214613795" className="text-sm hover:text-accent transition-colors">
                  +27 21 461 3795
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+27214222261" className="text-sm hover:text-accent transition-colors">
                  +27 21 422 2261
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@y2k-online.co.za" className="text-sm hover:text-accent transition-colors">
                  info@y2k-online.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">&copy; {currentYear} Y2K College. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-sm hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
