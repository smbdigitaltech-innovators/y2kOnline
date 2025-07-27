import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, Database, FileText } from "lucide-react"

export default function CourseHighlights() {
  const courses = [
    {
      title: "PC Support",
      description: "Learn hardware troubleshooting, software installation, network setup, and customer support skills.",
      icon: <Monitor className="h-10 w-10 text-blue-900" />,
      link: "/courses#pc-support",
    },
    {
      title: "Database Design",
      description: "Master database concepts, SQL programming, data modeling, and database administration.",
      icon: <Database className="h-10 w-10 text-blue-900" />,
      link: "/courses#database-design",
    },
    {
      title: "Office Admin",
      description: "Develop skills in Microsoft Office, business communication, and office organization.",
      icon: <FileText className="h-10 w-10 text-blue-900" />,
      link: "/courses#office-admin",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border-2 border-blue-100 hover:border-blue-300 transition-all">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4">{course.icon}</div>
                <CardTitle className="text-xl text-blue-900">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600 min-h-[80px]">{course.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  <Link href={course.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
