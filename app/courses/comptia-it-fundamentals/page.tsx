import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Clock, GraduationCap, Users, CheckCircle } from "lucide-react"

export default function CompTIAITFundamentalsPage() {
  const course = {
    id: "comptia-it-fundamentals",
    title: "CompTIA IT Fundamentals",
    description:
      "Foundation course for students considering a career in IT, covering essential IT concepts, infrastructure, applications, and security fundamentals.",
    duration: "6 months Full Time / 1 year Part Time",
    level: "Beginner",
    price: "R3,500",
    examCode: "FC0-U51",
    modules: [
      "IT Concepts and Technology",
      "Infrastructure",
      "Applications and Software",
      "Software Development",
      "Database Fundamentals",
      "Security",
    ],
    careers: ["Computer Technician", "Network Administrator"],
    requirements: ["Basic computer literacy", "Interest in IT career", "English proficiency"],
    targetAudience: [
      "Students considering a career in IT",
      "Individuals new to the technology field",
      "Career changers looking to enter IT",
      "Students preparing for advanced IT certifications",
    ],
    registration: "Registration open throughout the year. Please contact us for exact dates",
  }

  const comptiaCourses = [
    {
      course: "CompTIA IT Fundamentals",
      duration: "6 months",
      level: "Certificate",
      courseFee: "R3,500",
      deposit: "R1,399",
      installment: "R350 x 6 months",
      jobRoles: [
        "Computer Technician",
        "Network Administrator",
        "IT Support Specialist",
        "Help Desk Technician",
        "System Support Technician",
        "IT Consultant",
      ],
    },
    {
      course: "CompTIA A+",
      duration: "6 months",
      level: "Certificate",
      courseFee: "R4,499",
      deposit: "R1,899",
      installment: "R433 x 6 months",
      jobRoles: [
        "PC Support Technician",
        "Help Desk Specialist",
        "Network Support Technician",
        "IT Support Specialist",
        "System Administrator",
        "IT Technician",
      ],
    },
    {
      course: "CompTIA Network+",
      duration: "6 months",
      level: "Certificate",
      courseFee: "R4,999",
      deposit: "R2,099",
      installment: "R483 x 6 months",
      jobRoles: [
        "Network Administrator",
        "Network Engineer",
        "Network Support Specialist",
        "System Administrator",
        "IT Consultant",
        "Network Technician",
      ],
    },
    {
      course: "CompTIA Security+",
      duration: "6 months",
      level: "Certificate",
      courseFee: "R5,499",
      deposit: "R2,299",
      installment: "R533 x 6 months",
      jobRoles: [
        "Security Specialist",
        "Security Administrator",
        "Network Security Specialist",
        "IT Security Analyst",
        "Security Consultant",
        "Cybersecurity Technician",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/courses" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
        </Button>
      </div>

      {/* Course Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-blue-50">
            <Clock className="h-3 w-3 mr-1" />
            {course.duration}
          </Badge>
          <Badge variant="outline" className="bg-green-50">
            <GraduationCap className="h-3 w-3 mr-1" />
            {course.level}
          </Badge>
          <Badge variant="secondary" className="bg-yellow-50 text-yellow-700">
            {course.price}
          </Badge>
          <Badge variant="outline" className="bg-purple-50 text-purple-700">
            {course.examCode}
          </Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{course.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{course.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Course Outline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Course Outline</CardTitle>
              <CardDescription>CompTIA IT Fundamentals (FC0-U51) Exam Objectives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.modules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Career Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Career Opportunities</CardTitle>
              <CardDescription>Potential career paths after completing this course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.careers.map((career, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CompTIA Courses Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">CompTIA Certification Courses</CardTitle>
              <CardDescription>Complete range of CompTIA certification programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Course</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Level</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Course Fee</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Deposit</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Installment</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Job Roles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comptiaCourses.map((courseItem, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium text-blue-900">
                          {courseItem.course}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">{courseItem.duration}</td>
                        <td className="border border-gray-300 px-4 py-3">{courseItem.level}</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">{courseItem.courseFee}</td>
                        <td className="border border-gray-300 px-4 py-3">{courseItem.deposit}</td>
                        <td className="border border-gray-300 px-4 py-3">{courseItem.installment}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <ul className="text-sm space-y-1">
                            {courseItem.jobRoles.map((role, roleIndex) => (
                              <li key={roleIndex}>• {role}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      <strong>Registration:</strong> R850.00 + Single Module
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                      <strong>Each Module:</strong> R850.00 Facilitation
                    </p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">Registration open throughout the year.</p>
                    <p>Please contact us for exact dates.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Target Audience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Who Should Apply?</CardTitle>
              <CardDescription>This course is ideal for</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{audience}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Course Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Duration</h4>
                <p>{course.duration}</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Level</h4>
                <p>{course.level}</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Price</h4>
                <p>{course.price}</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Exam Code</h4>
                <p>{course.examCode}</p>
              </div>
            </CardContent>
          </Card>

          {/* Entry Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Entry Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {course.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Apply Now */}
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Ready to Apply?</CardTitle>
              <CardDescription>Start your journey with Y2K College today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
                <Link href="/register">Apply Now</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
