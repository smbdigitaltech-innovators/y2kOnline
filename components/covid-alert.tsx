"use client"

import { useState } from "react"
import { AlertCircle, X } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function CovidAlert() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert variant="destructive" className="rounded-none border-x-0 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <AlertCircle className="h-4 w-4 mr-2" />
          <AlertTitle>COVID-19 Update</AlertTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="ml-auto text-destructive-foreground hover:text-destructive-foreground/80"
            aria-label="Close COVID alert"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <AlertDescription className="ml-6">
          We are following all COVID-19 protocols to ensure the safety of our students and staff.
          <a href="/covid-19" className="underline ml-1 font-medium">
            Learn more
          </a>
        </AlertDescription>
      </div>
    </Alert>
  )
}
