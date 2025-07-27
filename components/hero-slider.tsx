"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    backgroundImage: "/images/y2k-images/trade1.jpg",
    subtitle: "International Trade and Transport",
    title: "QUALITY TRAINING",
    description: "For everyone",
    primaryButton: {
      text: "Register Today!",
      href: "/register",
    },
    secondaryButton: {
      text: "Register For  2026",
      href: "/high-school",
    },
  },
  {
    id: 2,
    backgroundImage: "/images/y2k-images/aviation.jpg",
    subtitle: "Aviation | Cargo | Tourism | Travel",
    title: "IATA COURSES",
    description: "Welcome to the Airline Industry",
    primaryButton: {
      text: "Start Learning Now!",
      href: "/courses",
    },
    secondaryButton: {
      text: "Register For 2025/2026",
      href: "/register",
    },
  },
  {
    id: 3,
    backgroundImage: "/images/y2k-images/graduation ceremony.png",
    subtitle: "Youths are leaders of tomorrow",
    title: "Y2K HIGH SCHOOL",
    description: "We are here to learn and learn we shall",
    primaryButton: {
      text: "Learn More!",
      href: "/register",
    },
    secondaryButton: {
      text: "Register For Grade 8, 2026",
      href: "/register",
    },
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section
      className="relative h-[600px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-gray-200"
            style={{
              backgroundImage: `url('${slides[currentSlide].backgroundImage}')`,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/75 to-white/85"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center max-w-5xl mx-auto px-4">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl mb-4 text-blue-600 font-medium tracking-wide"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 text-blue-900 tracking-tight leading-none"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: "900",
                  letterSpacing: "0.02em",
                }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-700 font-medium"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-none shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: "700",
                    fontSize: "18px",
                    minWidth: "200px",
                  }}
                >
                  <Link href={slides[currentSlide].primaryButton.href}>{slides[currentSlide].primaryButton.text}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-none shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: "700",
                    fontSize: "18px",
                    minWidth: "200px",
                  }}
                >
                  <Link href={slides[currentSlide].secondaryButton.href}>
                    {slides[currentSlide].secondaryButton.text}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-200 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-blue-900" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-200 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-blue-900" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-yellow-400 shadow-lg" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 z-20">
        <motion.div
          className="h-full bg-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  )
}
