"use client"

import { useState } from "react"
import { X, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [bellAnimation, setBellAnimation] = useState(false)

  const handleBellClick = () => {
    setBellAnimation(true)
    setTimeout(() => setBellAnimation(false), 1000)
  }

  if (!isVisible) return null

  return (
    <div className="bg-accent text-accent-foreground relative">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 text-accent-foreground hover:text-accent-foreground/80"
              onClick={handleBellClick}
            >
              <Bell className={cn("h-5 w-5", bellAnimation && "animate-bell")} />
            </Button>
            <p className="text-sm font-medium">
              <span className="font-bold">ANNOUNCEMENT:</span> Registration for the 2026 academic year is now open!
              <a href="/register" className="underline ml-1 font-bold hover:text-primary transition-colors">
                Register now
              </a>
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-accent-foreground hover:text-accent-foreground/80"
            aria-label="Close announcement"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
