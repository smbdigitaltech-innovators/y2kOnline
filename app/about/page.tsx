import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">About Y2K College</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h2>
          <p className="mb-4">
            At Y2K College, our mission is to provide quality, learner-centered education that empowers students from Grade 8 to 12 to achieve academic excellence and personal growth. We are dedicated to supporting both full-time high school learners and part-time students through a range of flexible learning options. In addition to high school education, Y2K College offers various career-focused courses designed to equip students with practical skills for success in further studies and the workplace. </p>
          
        </div>
        <div className="relative h-[300px] md:h-full">
          <Image
            src="/images/y2k-images/about-y2k-college.jpg"
            alt="Y2K College - Learn We Shall - Educational Excellence Since 2000"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Excellence",
              description:
                "We strive for excellence in all aspects of our educational offerings, from curriculum development to student support.",
            },
            {
              title: "Innovation",
              description:
                "We embrace innovation and continuously update our courses to reflect the latest industry trends and technologies.",
            },
            {
              title: "Inclusivity",
              description:
                "We believe in creating an inclusive learning environment where all students feel welcome and supported.",
            },
          ].map((value, index) => (
            <Card key={index} className="border-2 border-blue-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">{value.title}</h3>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Our History</h2>
        <p className="mb-4">
         Founded in 2000, Y2K College has been one of the leading educational school in South Africa for over two decades. What began as a small training center has evolved into a respected college known for its commitment to quality education and the success of its graduates.
        </p>
        <p className="mb-4">
          Over the years, we have expanded our course offerings to include a wide range of IT specializations, such as PC Support, Database Design, and Office Administration. In addition, we introduced our High School program, offering quality education from Grade 8 to 12, aimed at equipping younger students with the knowledge and skills needed for future academic and career success.</p>
        <p>
          Throughout our history, we have stayed true to our core values and mission, continuously adapting to the evolving educational landscape while keeping student success at the heart of everything we do.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Why Choose Y2K College?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Industry-relevant curriculum designed by experts",
            "Experienced instructors with practical industry knowledge",
            "Small class sizes for personalized attention",
            "Modern facilities and up-to-date technology",
            "Career support and job placement assistance",
            "Flexible learning options to accommodate different schedules",
          ].map((reason, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
