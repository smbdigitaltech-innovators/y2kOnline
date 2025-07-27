"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Clock, BookOpen, Laptop, Database, FileText, GraduationCap, Bell } from "lucide-react";
import CourseHighlights from "@/components/course-highlights"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUs from "@/components/why-choose-us"
import AnnouncementBanner from "@/components/announcement-banner"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  const [bellAnimation, setBellAnimation] = useState(false)

  const handleBellClick = () => {
    setBellAnimation(true)
    setTimeout(() => setBellAnimation(false), 1000)
  }

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

  const staffMembers = [
    {
      name: "Y2K College Director",
      position: "Executive Director",
      image: "/images/y2k-images/staff/y2k director.png",
      description: "Providing strategic leadership and vision for Y2K College's growth and development.",
    },
    {
      name: 'Ms. N Ncube',
      position: "Principal",
      image: "/images/y2k-images/staff/principal-nocky-ncube.png",
      description: "Leading Y2K College with vision and dedication to educational excellence.",
    },
    {
      name: "Mr. M Dliwako",
      position: "Academic Director",
      image: "/images/y2k-images/staff/Mr M. Dliwako.png",
      description: "Overseeing academic programs and ensuring educational quality standards.",
    },
    {
      name: "Mr. M Zonke",
      position: "Deputy Principal",
      image: "/images/y2k-images/staff/deputy-principal-m-zonke.png",
      description: "Supporting academic leadership and student development initiatives.",
    },
    {
      name: "Mrs. Vindvogel",
      position: "Finance Manager",
      image: "/images/y2k-images/staff/mrs-vindvogel.png",
      description: "Managing financial operations and student fee structures.",
    },
    {
      name: "Mr. DG September",
      position: "Teacher",
      image: "/images/y2k-images/staff/mr-dg-september.png",
      description: "Experienced educator specializing in IT and technical subjects.",
    },
    {
      name: "Mr. V Mundia",
      position: "Teacher",
      image: "/images/y2k-images/staff/mr-v-mundia.png",
      description: "Expert in computer systems and technical training programs.",
    },
    {
      name: 'Ms. N "Zoe" Guma',
      position: "Teacher",
      image: "/images/y2k-images/staff/ms-zoe-guma.png",
      description: "Coordinating academic programs and student support services.",
    },
    {
      name: "Mrs. F Matsika",
      position: "Teacher",
      image: "/images/y2k-images/staff/mrs-f-matsika.png",
      description: "Supporting student welfare and extracurricular activities.",
    },
    {
      name: 'Ms. N "Noma" Ncube',
      position: "Teacher",
      image: "/images/y2k-images/staff/ms-noma-ncube.png",
      description: "Providing essential administrative support and student services.",
    },
    {
      name: 'Mr. T "TP" Chindedza',
      position: "Teacher",
      image: "/images/y2k-images/staff/mr-tp-chindedza.png",
      description: "Teaching practical IT skills and hands-on technical training.",
    },
    {
      name: "Mr. B Sandhlana",
      position: "Teacher",
      image: "/images/y2k-images/staff/mr-b-sandhlana.png",
      description: "Delivering quality education in business and office administration.",
    },
    {
      name: "Mrs. S Mabuza",
      position: "Teacher",
      image: "/images/y2k-images/staff/mrs-s-mabuza.png",
      description: "Teaching life skills and personal development programs.",
    },
    {
      name: "Ms. A Stali",
      position: "Teacher",
      image: "/images/y2k-images/staff/ms-a-stali.png",
      description: "Specializing in mathematics and mathematical literacy instruction.",
    },
    {
      name: "Ms. N Pondo",
      position: "Teacher",
      image: "/images/y2k-images/staff/ms-n-pondo.png",
      description: "Teaching business studies and entrepreneurship skills.",
    },
    {
      name: "Mr. P Kabulo",
      position: "Teacher",
      image: "/images/y2k-images/staff/mr-p-kabulo.png",
      description: "Expert in teaching English.",
    },
    {
      name: "Ms. T Mpandagwara",
      position: "Teacher",
      image: "/images/y2k-images/staff/ms-t-mpandagwara.png",
      description: "Hello.",
    },
    {
      name: "Mr. J Bolombelo",
      position: "Teacher",
      image: "/images/y2k-images/staff/mr-j-bolombelo.png",
      description: "Teaching  literacy programs.",
    },
    {
      name: "Ms. L Mjikeliso",
      position: "Teacherr",
      image: "/images/y2k-images/staff/ms-l-mjikeliso.png",
      description: "student management.",
    },
    {
      name: "Mr. Ngqonga",
      position: "Security ",
      image: "/images/y2k-images/staff/mr-ngqonga.png",
      description: "Ensuring campus facilities are well-maintained and functional.",
    },
    {
      name: "Ms. Mnyapa",
      position: "Teacher",
      image: "/images/y2k-images/staff/ms-mnyapa.png",
      description: "Teaching.",
    },
    {
      name: "Ms. Bono",
      position: "Teacher",
      image: "/images/y2k-images/staff/ms-bono.png",
      description: "Providing  academic support to students.",
    },
  ]

  // Animation controls for sliding
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")
  const controls = useAnimation()

  // Slide handler
  const handleSlide = (direction: "left" | "right") => {
    setSlideDirection(direction)
    controls.start({
      x: direction === "left" ? "-100%" : "100%",
      transition: { duration: 0.5 },
    }).then(() => {
      controls.set({ x: direction === "left" ? "100%" : "-100%" })
      controls.start({ x: 0, transition: { duration: 0.5 } })
    })
  }

  // Carousel logic for staff
  const cardsPerView = 4; // You can make this responsive if you wish
  const [startIndex, setStartIndex] = useState(0);

  const canSlideLeft = startIndex > 0;
  const canSlideRight = startIndex + cardsPerView < staffMembers.length;

  const visibleStaff = staffMembers.slice(startIndex, startIndex + cardsPerView);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Upcoming Events Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading text-primary flex items-center">
              <Calendar className="mr-2 h-8 w-8" /> UPCOMING EVENTS
            </h2>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center text-primary hover:text-accent"
              onClick={handleBellClick}
            >
              <Bell className={`mr-2 h-5 w-5 ${bellAnimation ? "animate-bell" : ""}`} />
              Notifications
            </Button>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Open Day",
                date: "August 1, 2025",
                time: "10:00 AM - 2:00 PM",
                description: "Join us for our campus open day to explore our facilities and meet our instructors.",
                type: "event",
              },
              {
                title: "Registration Deadline",
                date: "Open All Year",
                description: "Register today, to start shaping your Future. Don't miss out!",
                type: "Register",
              },
              
            ].map((event, index) => (
              <motion.div key={index} variants={item} className="card-hover">
                <Card className="school-card h-full">
                  <CardHeader className="school-card-header">
                    <div className="flex justify-between items-start">
                      <CardTitle>{event.title}</CardTitle>
                      <Badge variant={event.type === "deadline" ? "destructive" : "secondary"}>
                        {event.type === "deadline" ? "Deadline" : "Event"}
                      </Badge>
                    </div>
                    <CardDescription className="text-primary-foreground/80 flex items-center mt-2">
                      <Calendar className="mr-2 h-4 w-4" /> {event.date}
                    </CardDescription>
                    <CardDescription className="text-primary-foreground/80 flex items-center mt-1">
                      <Clock className="mr-2 h-4 w-4" /> {event.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="school-card-content">
                    <p>{event.description}</p>
                  </CardContent>
                  <CardFooter className="school-card-footer">
                    <Button variant="secondary" size="sm">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading text-primary mb-8 flex items-center">
            <BookOpen className="mr-2 h-8 w-8" /> FEATURED COURSES
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "CompTIA IT Fundamentals",
                icon: Laptop,
                description: "Get started with IT concepts, terminology, and basic troubleshooting.",
                features: ["CompTIA ITF+ Certification", "Hands-on Labs", "Foundational IT Skills"],
                 },
              {
                title: "Clearing and Forwarding Agent",
                icon: FileText,
                description: "Learn the essentials of customs clearing and forwarding operations.",
                features: ["Customs Regulations", "Logistics Management", "Documentation Procedures"],
              },
               
              {
                title: "Supply Chain Manager",
                icon: FileText,
                description: "Learn the essentials of supply chain management and logistics.",
                features: ["Supply Chain Fundamentals", "Logistics Management", "Inventory Control"],
                   },
            ].map((course, index) => (
              <motion.div key={index} variants={item} className="card-hover">
                <Card className="school-card h-full">
                  <CardHeader className="school-card-header">
                    <div className="flex items-center">
                      <course.icon className="h-6 w-6 mr-2" />
                      <CardTitle>{course.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="school-card-content">
                    <p className="mb-4">{course.description}</p>
                    <ul className="space-y-2">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-accent mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="school-card-footer">
                    <Button asChild>
                      <Link href={`/courses#${course.title.toLowerCase().replace(" ", "-")}`}>Explore Course</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Y2K Staff Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading text-primary mb-8 flex items-center justify-center">
            <Users className="mr-2 h-8 w-8" /> Y2K STAFF
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet our dedicated team of educators and administrators who are committed to providing quality education and
            supporting student success across all our programs.
          </p>

          <div className="flex justify-between mb-6">
            <Button variant="outline" onClick={() => setStartIndex(startIndex - cardsPerView)} disabled={!canSlideLeft}>
              &#8592; Slide Left
            </Button>
            <Button variant="outline" onClick={() => setStartIndex(startIndex + cardsPerView)} disabled={!canSlideRight}>
              Slide Right &#8594;
            </Button>
          </div>

          <div className="overflow-x-hidden">
            <motion.div
              className="flex gap-6"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
            >
              {visibleStaff.map((staff, index) => (
                <Card
                  key={startIndex + index}
                  className="w-72 flex-shrink-0 text-center bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="w-28 h-28 mb-4 overflow-hidden rounded-lg border-4 border-white shadow mx-auto flex items-center justify-center bg-gray-100">
                    <Image
                      src={staff.image || "/placeholder.svg"}
                      alt={`${staff.name} - ${staff.position}`}
                      width={112}
                      height={112}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <CardHeader className="p-0 mb-2 text-center">
                    <CardTitle className="text-lg font-semibold">{staff.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto mt-1">{staff.position}</Badge>
                  </CardHeader>
                  <CardContent className="p-0 text-center">
                    <p className="text-sm text-muted-foreground">{staff.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials with Firebase Integration */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center mix-blend-overlay opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading text-white mb-6 flex items-center justify-center">
              <GraduationCap className="mr-2 h-8 w-8" /> READY TO START YOUR IT CAREER?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Join Y2K College today and gain the skills you need for a successful career in the IT industry.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
