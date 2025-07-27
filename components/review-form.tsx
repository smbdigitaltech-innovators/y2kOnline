"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Send, AlertCircle, CheckCircle, Loader2, Sparkles } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import isFirebaseEnabled from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"

interface ReviewFormProps {
  onReviewSubmitted: (reviewData?: { name: string }) => void
}

export default function ReviewForm({ onReviewSubmitted }: ReviewFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    course: "",
    review: "",
    rating: 0,
  })
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")
  const { toast } = useToast()

  const courses = [
    "PC Support",
    "Database Design",
    "Office Admin",
    "High School Program",
    "Part-Time Studies",
    "Customs & International Trade",
    "IT & Administration",
    "Supply Chain Management",
    "Other",
  ]

  if (!isFirebaseEnabled) {
    return (
      <Card className="border-2 border-red-200">
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Database Connection Failed:</strong> Unable to submit reviews at this time.
              <br />
              Please contact us directly at{" "}
              <a href="mailto:info@y2kcollege.co.za" className="text-blue-600 underline">
                info@y2kcollege.co.za
              </a>{" "}
              to share your feedback.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    )
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submissionStatus !== "idle") {
      setSubmissionStatus("idle")
    }
  }

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }))
    if (submissionStatus !== "idle") {
      setSubmissionStatus("idle")
    }
  }

  const validateForm = () => {
    const errors = []

    if (!formData.name.trim()) {
      errors.push("Name is required")
    }

    if (!formData.review.trim()) {
      errors.push("Review text is required")
    }

    if (formData.rating === 0) {
      errors.push("Rating is required")
    }

    if (formData.review.trim().length < 10) {
      errors.push("Review must be at least 10 characters long")
    }

    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (validationErrors.length > 0) {
      toast({
        title: "Validation Error",
        description: validationErrors.join(", "),
        variant: "destructive",
      })
      return
    }

    if (!db || !isFirebaseEnabled) {
      toast({
        title: "Service Unavailable",
        description: "Database connection is not available. Please try again later.",
        variant: "destructive",
      })
      setSubmissionStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmissionStatus("idle")

    try {
      // console.log("🧪 Testing Firebase connection before submission...")
      // await testFirebaseConnection()
      // console.log("✅ Connection test passed")

      const reviewData = {
        name: formData.name.trim(),
        position: formData.position.trim() || "Student",
        course: formData.course || "General",
        review: formData.review.trim(),
        rating: formData.rating,
        createdAt: serverTimestamp(),
        submittedAt: new Date().toISOString(),
      }

      console.log("🚀 Submitting review to Firebase:", reviewData)

      const docRef = await addDoc(collection(db, "reviews"), reviewData)

      console.log("✅ Review submitted successfully with ID:", docRef.id)

      setSubmissionStatus("success")
      toast({
        title: "Review Added Successfully! ✨",
        description: "Your review is now live and visible to everyone!",
      })

      // Reset form
      setFormData({
        name: "",
        position: "",
        course: "",
        review: "",
        rating: 0,
      })

      // Notify parent with review data
      setTimeout(() => {
        onReviewSubmitted({ name: reviewData.name })
      }, 1000)
    } catch (error) {
      console.error("❌ Error submitting review:", error)
      setSubmissionStatus("error")

      let errorMessage = "There was an error submitting your review. Please try again."

      if (error instanceof Error) {
        if (error.message.includes("permission-denied")) {
          errorMessage = "Permission denied. Please check Firestore security rules."
        } else if (error.message.includes("unavailable")) {
          errorMessage = "Firestore service is temporarily unavailable."
        } else if (error.message.includes("network")) {
          errorMessage = "Network error. Please check your internet connection."
        }
      }

      toast({
        title: "Submission Failed ❌",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-2 border-blue-100 shadow-lg">
      <CardHeader>
        <CardTitle className="text-blue-900 flex items-center">
          <Send className="mr-2 h-5 w-5" />
          Add Your Review
        </CardTitle>
        <p className="text-sm text-blue-600">Your review will appear instantly after submission!</p>
      </CardHeader>
      <CardContent>
        {submissionStatus === "success" && (
          <Alert className="mb-4 border-green-200 bg-green-50">
            <Sparkles className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Review Added Successfully!</strong> Your review is now live and visible to everyone!
            </AlertDescription>
          </Alert>
        )}

        {submissionStatus === "error" && (
          <Alert className="mb-4 border-red-200 bg-red-50" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Failed to submit review. Please check your connection and try again.</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                required
                disabled={isSubmitting}
                className={`transition-all ${submissionStatus === "success" ? "border-green-300" : ""}`}
              />
            </div>
            <div>
              <Label htmlFor="position">Current Position</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => handleInputChange("position", e.target.value)}
                placeholder="e.g., IT Support Specialist, Student"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="course">Course/Program</Label>
            <Select
              value={formData.course}
              onValueChange={(value) => handleInputChange("course", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your course (optional)" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Rating *</Label>
            <div className="flex items-center space-x-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 cursor-pointer transition-all duration-200 ${
                    isSubmitting ? "cursor-not-allowed opacity-50" : ""
                  } ${
                    star <= (hoveredRating || formData.rating)
                      ? "fill-yellow-400 text-yellow-400 scale-110"
                      : "text-gray-300 hover:text-yellow-300 hover:scale-105"
                  }`}
                  onClick={() => !isSubmitting && handleRatingClick(star)}
                  onMouseEnter={() => !isSubmitting && setHoveredRating(star)}
                  onMouseLeave={() => !isSubmitting && setHoveredRating(0)}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {formData.rating > 0 ? `${formData.rating}/5` : "Click to rate"}
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="review">Your Review *</Label>
            <Textarea
              id="review"
              value={formData.review}
              onChange={(e) => handleInputChange("review", e.target.value)}
              placeholder="Share your experience with Y2K College... (minimum 10 characters)"
              rows={4}
              required
              disabled={isSubmitting}
              className={`transition-all ${submissionStatus === "success" ? "border-green-300" : ""}`}
            />
            <p className="text-xs text-gray-500 mt-1">{formData.review.length}/500 characters</p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || submissionStatus === "success"}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding Review to Firebase...
              </>
            ) : submissionStatus === "success" ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Review Added Successfully!
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Add Review
              </>
            )}
          </Button>

          {isSubmitting && (
            <div className="text-center text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
              <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <p>Connecting to Firebase and saving your review...</p>
              </div>
              <p className="text-xs mt-1">Your review will appear instantly once saved!</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
