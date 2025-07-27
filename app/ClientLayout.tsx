"use client"

import type React from "react"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import ThemeSwitcher from "@/components/theme-switcher"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Font definitions
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebas.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen bg-notebook-paper">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ThemeSwitcher />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
