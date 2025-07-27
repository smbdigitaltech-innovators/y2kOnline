import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Briefcase, Clock, HeartHandshake } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Quality Education",
      description: "Our courses are designed by industry experts to provide relevant, up-to-date knowledge and skills.",
      icon: <Award className="h-8 w-8 text-blue-900" />,
    },
    {
      title: "Experienced Instructors",
      description: "Learn from professionals with extensive industry experience and a passion for teaching.",
      icon: <Users className="h-8 w-8 text-blue-900" />,
    },
    {
      title: "Practical Training",
      description: "Hands-on learning experiences that prepare you for real-world challenges in the workplace.",
      icon: <BookOpen className="h-8 w-8 text-blue-900" />,
    },
    {
      title: "Career Support",
      description: "Comprehensive career services including job placement assistance and interview preparation.",
      icon: <Briefcase className="h-8 w-8 text-blue-900" />,
    },
    {
      title: "Flexible Learning",
      description: "Choose from full-time, part-time, and evening classes to fit your schedule and commitments.",
      icon: <Clock className="h-8 w-8 text-blue-900" />,
    },
    {
      title: "Supportive Environment",
      description: "A welcoming community where students receive personalized attention and support.",
      icon: <HeartHandshake className="h-8 w-8 text-blue-900" />,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Why Choose Y2K College</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          We are committed to providing quality education and training that prepares our students for successful careers
          in the IT industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-2 border-blue-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{reason.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-900">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
