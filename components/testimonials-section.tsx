"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Star,
  MessageSquare,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Trash2,
  RefreshCw,
  AlertTriangle,
  Shield,
  ExternalLink,
  PlusCircle,
  Sparkles,
} from "lucide-react"
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import { db, isFirebaseEnabled } from "@/lib/firebase"
// Ensure reinitializeFirebase is imported as a named function
import { reinitializeFirebase } from "@/lib/firebase"
import ReviewForm from "./review-form"
import { useToast } from "@/hooks/use-toast"

interface Review {
  id: string
  name: string
  position: string
  course: string
  review: string
  rating: number
  createdAt: any
  isNew?: boolean
}

export default function TestimonialsSection() {
  const [userReviews, setUserReviews] = useState<Review[]>([])
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [deletingReview, setDeletingReview] = useState<string | null>(null)
  const [firebaseStatus, setFirebaseStatus] = useState<{
    isEnabled: boolean
    error: { message: string } | null
    projectId?: string
  }>({
    isEnabled: true,
    error: null,
  })
  const [retrying, setRetrying] = useState(false)
  const [permissionError, setPermissionError] = useState(false)
  const [newlyAddedReviewId, setNewlyAddedReviewId] = useState<string | null>(null)
  const reviewsGridRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Retry Firebase connection
  const handleRetryConnection = async () => {
    setRetrying(true)
    setPermissionError(false)
    try {
      console.log("🔄 Retrying Firebase connection...")
      let success = false
      if (typeof reinitializeFirebase === "function") {
        success = await reinitializeFirebase()
      } else {
        // If reinitializeFirebase is not a function, assume success if db is defined
        success = !!db
      }
      if (success) {
        setFirebaseStatus({
          isEnabled: true,
          error: null,
        })
        toast({
          title: "Connection Restored",
          description: "Firebase database connection has been restored!",
        })
        loadReviews()
      } else {
        toast({
          title: "Connection Failed",
          description: "Unable to restore database connection. Please check Firebase rules.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("❌ Retry failed:", error)
      toast({
        title: "Retry Failed",
        description: "Failed to reconnect to database.",
        variant: "destructive",
      })
    } finally {
      setRetrying(false)
    }
  }

  // Load reviews from Firebase
  const loadReviews = () => {
    if (!isFirebaseEnabled || !db) {
      console.log("⚠️ Firebase not available, showing no reviews")
      setLoading(false)
      return
    }

    try {
      console.log("🔄 Setting up Firebase listener for reviews...")
      const reviewsQuery = collection(db, "reviews")

      const unsubscribe = onSnapshot(
        reviewsQuery,
        (snapshot) => {
          console.log(`📥 Received ${snapshot.docs.length} reviews from Firebase`)

          const reviews = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Review[]

          // Sort reviews client-side by createdAt (newest first)
          const sortedReviews = reviews.sort((a, b) => {
            if (a.createdAt && b.createdAt) {
              const aTime = a.createdAt.toMillis ? a.createdAt.toMillis() : new Date(a.createdAt).getTime()
              const bTime = b.createdAt.toMillis ? b.createdAt.toMillis() : new Date(b.createdAt).getTime()
              return bTime - aTime
            }
            return 0
          })

          // Check for new reviews
          const previousReviewIds = userReviews.map((r) => r.id)
          const newReviews = sortedReviews.filter((review) => !previousReviewIds.includes(review.id))

          if (newReviews.length > 0 && userReviews.length > 0) {
            // Mark new reviews and show notification
            const reviewsWithNewFlag = sortedReviews.map((review) => ({
              ...review,
              isNew: newReviews.some((newReview) => newReview.id === review.id),
            }))
            setUserReviews(reviewsWithNewFlag)

            // Set the newly added review ID for highlighting
            if (newReviews.length === 1) {
              setNewlyAddedReviewId(newReviews[0].id)
              // Remove the highlight after 3 seconds
              setTimeout(() => {
                setNewlyAddedReviewId(null)
                setUserReviews((prev) => prev.map((review) => ({ ...review, isNew: false })))
              }, 3000)
            }

            // Show success toast for new reviews
            toast({
              title: "New Review Added! ✨",
              description: `${newReviews[0].name}'s review is now live!`,
            })
          } else {
            setUserReviews(sortedReviews)
          }

          setLoading(false)
          setPermissionError(false)
          console.log(`✅ Successfully loaded ${sortedReviews.length} reviews`)
        },
        (error) => {
          console.error("❌ Error in Firebase listener:", error)
          setLoading(false)

          if (error.code === "permission-denied" || error.message.includes("permission")) {
            setPermissionError(true)
            console.error("🔒 Permission denied - Firebase rules need to be updated")
          }

          toast({
            title: "Database Error",
            description:
              error.code === "permission-denied"
                ? "Permission denied. Please update Firebase security rules."
                : "Unable to load reviews. Please try refreshing the page.",
            variant: "destructive",
          })
        },
      )

      return unsubscribe
    } catch (error) {
      console.error("❌ Error setting up Firebase listener:", error)
      setLoading(false)
      return null
    }
  }

  useEffect(() => {
    setFirebaseStatus({
      isEnabled: true,
      error: null,
    })
    const unsubscribe = loadReviews()

    return () => {
      if (unsubscribe) {
        console.log("🔌 Cleaning up Firebase listener")
        unsubscribe()
      }
    }
  }, [])

  const handleDeleteReview = async (reviewId: string, reviewerName: string) => {
    if (!db || !isFirebaseEnabled) {
      toast({
        title: "Error",
        description: "Database connection not available",
        variant: "destructive",
      })
      return
    }

    const confirmDelete = window.confirm(`Are you sure you want to delete the review by ${reviewerName}?`)
    if (!confirmDelete) return

    setDeletingReview(reviewId)

    try {
      await deleteDoc(doc(db, "reviews", reviewId))
      toast({
        title: "Review Deleted",
        description: `Review by ${reviewerName} has been deleted successfully.`,
      })
      console.log(`✅ Deleted review: ${reviewId}`)
    } catch (error) {
      console.error("❌ Error deleting review:", error)

      if (typeof error === "object" && error !== null && "code" in error && (error as any).code === "permission-denied") {
        toast({
          title: "Permission Denied",
          description: "You don't have permission to delete this review. Please update Firebase rules.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Delete Failed",
          description: "Failed to delete the review. Please try again.",
          variant: "destructive",
        })
      }
    } finally {
      setDeletingReview(null)
    }
  }

  const allReviews = userReviews
  const totalReviews = allReviews.length
  const averageRating = totalReviews > 0 ? allReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews : 0

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const newItemVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  }

  const handleReviewSubmitted = (newReviewData?: { name: string }) => {
    setShowReviewForm(false)

    // Scroll to reviews grid to show the new review
    setTimeout(() => {
      if (reviewsGridRef.current) {
        reviewsGridRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 500)

    toast({
      title: "Review Submitted! 🎉",
      description: "Your review is being added and will appear shortly...",
    })
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading text-blue-900 mb-4 flex items-center justify-center">
            <MessageSquare className="mr-2 h-8 w-8" /> WHAT OUR STUDENTS SAY
          </h2>
          <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
            Hear from our graduates and current students about their experiences at Y2K College.
          </p>

          {/* Permission Error Alert */}
          {permissionError && (
            <Alert className="mb-6 max-w-4xl mx-auto border-red-200 bg-red-50">
              <Shield className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <div className="space-y-3">
                  <div>
                    <strong>Firebase Permission Error:</strong> The database security rules need to be updated to allow
                    public access to reviews.
                  </div>
                  <div className="text-sm">
                    <strong>To fix this:</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Go to your Firebase Console</li>
                      <li>Navigate to Firestore Database → Rules</li>
                      <li>Replace the existing rules with the rules provided below</li>
                      <li>Click "Publish" to apply the changes</li>
                    </ol>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(
                          `https://console.firebase.google.com/project/${firebaseStatus.projectId}/firestore/rules`,
                          "_blank",
                        )
                      }
                      className="border-red-600 text-red-600 hover:bg-red-100"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Open Firebase Rules
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRetryConnection}
                      disabled={retrying}
                      className="border-red-600 text-red-600 hover:bg-red-100"
                    >
                      {retrying ? (
                        <>
                          <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                          Retrying...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Retry
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Firebase Status Alerts */}
          {!firebaseStatus.isEnabled && !permissionError && (
            <Alert className="mb-6 max-w-4xl mx-auto border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <div className="flex items-center justify-between">
                  <div>
                    <strong>Database Connection Failed:</strong> Unable to connect to Firebase database.
                    {firebaseStatus.error && <div className="mt-2 text-sm">Error: {firebaseStatus.error.message}</div>}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRetryConnection}
                    disabled={retrying}
                    className="ml-4 border-red-600 text-red-600 hover:bg-red-100"
                  >
                    {retrying ? (
                      <>
                        <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                        Retrying...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-3 w-3 mr-1" />
                        Retry
                      </>
                    )}
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {firebaseStatus.isEnabled && !permissionError && (
            <Alert className="mb-6 max-w-2xl mx-auto border-green-200 bg-green-50">
              <MessageSquare className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                <strong>Database Connected:</strong> Reviews are live and appear instantly when submitted!
              </AlertDescription>
            </Alert>
          )}

          {/* Statistics - Only show if there are reviews */}
          {totalReviews > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center space-x-8 mb-8"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-2xl font-bold text-blue-900">{averageRating.toFixed(1)}</span>
                </div>
                <p className="text-sm text-blue-600">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-600 mr-1" />
                  <span className="text-2xl font-bold text-blue-900">{totalReviews}</span>
                </div>
                <p className="text-sm text-blue-600">Total Reviews</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-1" />
                  <span className="text-2xl font-bold text-blue-900">
                    {Math.round((userReviews.filter((r) => r.rating >= 4).length / totalReviews) * 100)}%
                  </span>
                </div>
                <p className="text-sm text-blue-600">Satisfaction Rate</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Reviews Grid */}
        <div ref={reviewsGridRef}>
          {totalReviews > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <AnimatePresence mode="popLayout">
                {allReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    variants={review.isNew ? newItemVariant : item}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    layout
                    className="card-hover"
                  >
                    <Card
                      className={`h-full bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        newlyAddedReviewId === review.id
                          ? "ring-2 ring-green-400 shadow-green-100 bg-gradient-to-br from-green-50 to-white"
                          : ""
                      }`}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="flex items-center">
                              <CardTitle className="text-lg text-blue-900">{review.name}</CardTitle>
                              {newlyAddedReviewId === review.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="ml-2 text-green-600"
                                >
                                  <Sparkles className="h-4 w-4" />
                                </motion.div>
                              )}
                            </div>
                            <p className="text-blue-600 text-sm">{review.position}</p>
                            {review.course && (
                              <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-800">
                                {review.course}
                              </Badge>
                            )}
                          </div>
                          
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 italic">"{review.review}"</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            !loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12 bg-white rounded-lg shadow-md max-w-2xl mx-auto"
              >
                <div className="mb-4 text-blue-600">
                  <MessageSquare className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">No Reviews Yet</h3>
                <p className="text-gray-600 mb-6">Be the first to share your experience at Y2K College!</p>
                {firebaseStatus.isEnabled && !permissionError && (
                  <Button onClick={() => setShowReviewForm(true)} className="bg-blue-600 hover:bg-blue-700">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Your Review
                  </Button>
                )}
              </motion.div>
            )
          )}
        </div>

        {/* Review Form Toggle */}
        {firebaseStatus.isEnabled && !permissionError && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowReviewForm(!showReviewForm)} className="mb-6 bg-blue-600 hover:bg-blue-700">
              {showReviewForm ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  Hide Review Form
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  {totalReviews > 0 ? "Add Your Review" : "Be the First to Review"}
                </>
              )}
            </Button>

            <AnimatePresence>
              {showReviewForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {loading && firebaseStatus.isEnabled && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-blue-600 mt-2">Loading reviews from Firebase database...</p>
          </div>
        )}
      </div>
    </section>
  )
}
