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
           Y2K College partners with students, families, and the community to deliver quality education that meets national standards while nurturing each learner's potential for success in academics, character, and future endeavors.  </p>
          
        </div>
       
        <div className="relative h-[300px] md:h-full">
          <Image
            src="/images/y2k-images/about-y2k-college.jpg"
            alt="Y2K College - Learn We Shall - Educational Excellence Since 2000"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
         <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-900"> Vision Statement</h2>
          <p className="mb-4">
            Empowering every learner to achieve academic excellence and personal growth in a supportive, innovative learning environment.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Core Values</h2>
        <p>Our actions and decisions are guided by five fundamental values:</p>
        <p>EXCEL - Each letter represents a core principle:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "E–Excellence",
              description:
                "We strive for high standards in teaching, learning, and service.",
            },
            {
              title: "X–Xcellence in Character",
              description:
                "We develop integrity, responsibility, and ethical leadership.",
            },
            {
              title: "C–Community",
              description:
                "We build strong partnerships with families and stakeholders.",
            },
            {
              title: "E–Equity",
              description:
                "We provide equal opportunities for all learners without discrimination.",
            },
            {
              title: "L–Lifelong Learning",
              description:
                "We foster curiosity, knowledge, and continuous growth.",
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
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Quality Commitment</h2>
        <p className="mb-4">
         Y2K College is committed to compliance excellence by meeting and exceeding all WCED, UMALUSI, SAQA, and National Education Department requirements. We uphold the highest educational standards, delivering a curriculum that equips students for academic success and future opportunities. </p>
        <p className="mb-4">
         Through continuous improvement, we regularly evaluate and enhance our teaching methods, facilities, and student support services. We prioritize stakeholder satisfaction by maintaining open communication with students, parents, staff, and the broader community. Furthermore, we invest in professional development to empower our educators, ensuring they provide world-class instruction.</p>
        
        {/* Implementation Guidelines */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Implementation Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-blue-700 mb-2">For Leadership:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Model the EXCEL values in all interactions</li>
                <li>Make decisions that align with our quality commitments</li>
                <li>Communicate the vision clearly and consistently</li>
              </ul>
              <h4 className="font-bold text-blue-700 mb-2">For Educators:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Integrate values-based learning into daily instruction</li>
                <li>Maintain high academic standards while supporting individual student needs</li>
                <li>Participate actively in professional development opportunities</li>
              </ul>
              <h4 className="font-bold text-blue-700 mb-2">For Students:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Understand how the EXCEL values apply to their daily choices</li>
                <li>Take ownership of their learning journey</li>
                <li>Contribute positively to the school community</li>
              </ul>
              <h4 className="font-bold text-blue-700 mb-2">For Parents/Guardians:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Support the college's mission through active engagement</li>
                <li>Reinforce values-based behavior at home</li>
                <li>Participate in school community activities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-2">Measurement and Accountability:</h4>
              <ul className="list-disc list-inside">
                <li>Regular assessment of academic outcomes against national benchmarks</li>
                <li>Annual stakeholder satisfaction surveys</li>
                <li>Quarterly review of values implementation across all departments</li>
                <li>Continuous monitoring of regulatory compliance</li>
              </ul>
            </div>
          </div>
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
