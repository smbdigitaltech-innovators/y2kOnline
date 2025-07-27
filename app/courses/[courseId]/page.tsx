import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Clock, GraduationCap, Award, Users, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"

const courses = [
  
  {
    id: "english-language",
    title: "English Language",
    description:
      "Comprehensive English language course designed to improve communication skills, grammar, vocabulary, and fluency for academic and professional purposes.",
    duration: "1 year",
    level: "Beginner to Advanced",
    studyMode: "Full-time",
    registrationFee: "R2,000",
    monthlyFee: "R1,500",
    modules: [
      "English Grammar Fundamentals",
      "Vocabulary Development and Building",
      "Reading Comprehension Strategies",
      "Writing Skills and Composition",
      "Listening and Speaking Skills",
      "Business English Communication",
      "Academic English for Further Studies",
      "Pronunciation and Phonetics",
      "English Literature and Culture",
      "Practical Communication in Real-world Contexts",
      "Presentation and Public Speaking Skills",
      "Digital Communication and Email Writing",
    ],
    careers: [
      "English Language Tutor",
      "Administrative Assistant",
      "Customer Service Representative",
      "Translator/Interpreter",
      "Content Writer",
      "Communications Assistant",
      "Reception and Front Desk Officer",
      "Sales Representative",
    ],
    requirements: [
      "Basic literacy skills in any language",
      "Motivation and commitment to learn English",
      "Regular attendance and participation",
      "Willingness to practice speaking",
    ],
    targetAudience: [
      "Non-native English speakers seeking to improve proficiency",
      "Students preparing for further education or university",
      "Professionals needing English for career advancement",
      "Individuals seeking better communication skills for daily life",
      "Job seekers requiring English proficiency for employment",
    ],
  },
  {
    id: "freight-handling",
    title: "Freight Handling",
    description:
      "Develop essential skills needed for effective freight and logistics operations, covering freight handling procedures and logistics coordination.",
    duration: "1 year",
    level: "NQF Level 3",
    nqfLevel: "3",
    accreditation: "QCTO",
    modules: [
      "Introduction to Freight and Logistics",
      "Freight Handling Procedures and Techniques",
      "Warehouse Operations and Safety Standards",
      "Transportation and Distribution Methods",
      "Documentation and Record Keeping Systems",
      "Customer Service in Logistics Operations",
      "Basic Supply Chain Management Concepts",
      "Health and Safety in Freight Operations",
      "Equipment Operation and Maintenance",
      "Quality Control in Freight Handling",
    ],
    careers: [
      "Freight Handler",
      "Warehouse Operator",
      "Logistics Coordinator",
      "Distribution Assistant",
      "Freight Clerk",
      "Shipping and Receiving Clerk",
      "Cargo Specialist",
      "Logistics Support Officer",
    ],
    requirements: [
      "Grade 9 or equivalent",
      "Basic literacy and numeracy skills",
      "Physical fitness for handling freight",
      "Willingness to work in warehouse environments",
    ],
    targetAudience: [
      "Individuals seeking careers in freight and logistics",
      "School leavers who want to enter the logistics industry",
      "Workers in related fields looking to formalize their skills with recognized qualification",
      "Anyone interested in developing competencies in freight handling and logistics",
    ],
  },
  {
    id: "clearing-forwarding",
    title: "Clearing and Forwarding Agent",
    description:
      "Equip yourself with critical skills in international trade, logistics, and customs operations for freight forwarding and customs compliance.",
    duration: "1 year",
    level: "NQF Level 5",
    nqfLevel: "5",
    accreditation: "QCTO",
    modules: [
      "Introduction to Clearing and Forwarding",
      "Customs Documentation and Procedures",
      "Freight Logistics Management",
      "Tariff Classification and Valuation",
      "Risk and Compliance Management",
      "Technology in Logistics",
      "Workplace Project",
    ],
    careers: [
      "Clearing and Forwarding Agent",
      "Customs Compliance Specialist",
      "Freight Coordinator",
      "Import/Export Manager",
    ],
    requirements: [
      "National Senior Certificate or equivalent (NQF Level 4)",
      "Proficiency in English",
      "RPL available for applicants aged 23+",
    ],
    targetAudience: [
      "Aspiring professionals in clearing and forwarding",
      "Logistics experts aiming to specialize in customs operations",
      "Individuals seeking a career in international trade",
    ],
  },
  {
    id: "supply-chain-manager",
    title: "Supply Chain Manager",
    description:
      "Level 6 Diploma equipping first-line managers with essential knowledge in procurement, logistics, warehousing, and inventory management.",
    duration: "18 months",
    level: "NQF Level 6",
    nqfLevel: "6",
    accreditation: "QCTO",
    modules: [
      "Supply Chain Fundamentals",
      "Procurement and Inventory Management",
      "Logistics and Distribution",
      "Operations Management",
      "Risk and Compliance",
      "Technology in Supply Chains",
      "Workplace Implementation Project",
    ],
    careers: ["Supply Chain Manager", "Procurement Manager", "Logistics Manager", "Inventory or Demand Planner"],
    requirements: ["National Senior Certificate or equivalent", "Proficiency in English"],
    targetAudience: [
      "Aspiring supply chain professionals",
      "Logistics or procurement specialists",
      "Managers seeking career advancement",
    ],
  },
  {
    id: "customs-compliance-manager",
    title: "Customs Compliance Manager",
    description:
      "Advanced course designed to equip professionals with knowledge and skills to manage customs operations effectively in senior roles.",
    duration: "2 years",
    level: "NQF Level 7",
    nqfLevel: "7",
    accreditation: "QCTO",
    modules: [
      "Customs Compliance Management Principles and Legislations",
      "International Customs Environment Theory and Legislation",
      "Customs Integrated Supply Chain Management",
      "Strategic Management Principles",
      "Develop customs compliance organisational strategy",
      "Manage customs compliance operational resources",
      "Risk assessment and management processes",
    ],
    careers: [
      "Customs Manager",
      "Trade Compliance Specialist",
      "Logistics and Supply Chain Manager",
      "Customs Consultant",
      "Government Official",
    ],
    requirements: ["Successful completion of Customs Agent Level 5 qualification"],
    targetAudience: [
      "Customs agents seeking career advancement",
      "Professionals in trade compliance and logistics",
      "Individuals aspiring to leadership roles in customs operations",
    ],
  },
  {
    id: "financial-accounting",
    title: "Financial Accounting Programme",
    description:
      "Comprehensive accounting programme from foundation to advanced level, covering bookkeeping, financial management, and accounting controls.",
    duration: "12-30 months",
    level: "NQF Level 3-6",
    nqfLevel: "3-6",
    accreditation: "SAQA/ICB",
    modules: [
      "Foundation: Bookkeeping to Trial Balance, Payroll, Computerized Bookkeeping",
      "Intermediate: Senior Bookkeeper, Cost and Management Accounting",
      "Upper Intermediate: Accounting, Business Law and Admin Practice",
      "Advanced: Corporate Strategy, Management Accounting Control Systems, Financial Reporting",
    ],
    careers: ["Bookkeeper", "Senior Bookkeeper", "Accounting Technician", "Financial Accountant"],
    requirements: [
      "Foundation: Grade 10 or equivalent, minimum 16 years old",
      "Intermediate: Foundation completion",
      "Advanced: Previous level completion",
    ],
  },
  {
    id: "business-management",
    title: "Business Management Programme",
    description:
      "Progressive business management programme developing skills from administration to advanced business strategy and financial management.",
    duration: "9-36 months",
    level: "NQF Level 4-6",
    nqfLevel: "4-6",
    accreditation: "SAQA/ICB",
    modules: [
      "Foundation: Business Management 1, Bookkeeping, Business Literacy",
      "Intermediate: Operations Practice, Business Management 2",
      "Advanced: Business Management 3, Financial Management and Control, Research Theory",
    ],
    careers: ["Business Administrator", "Senior Business Administrator", "Business Manager", "Operations Manager"],
    requirements: [
      "Foundation: Grade 11 or NQF Level 3",
      "Intermediate: Foundation completion",
      "Advanced: Intermediate completion",
    ],
  },
  {
    id: "office-administration",
    title: "Office Administration Programme",
    description:
      "Comprehensive office administration programme from foundation to management level, covering all aspects of modern office operations.",
    duration: "18-36 months",
    level: "NQF Level 5-6",
    nqfLevel: "5-6",
    accreditation: "SAQA/ICB",
    modules: [
      "Foundation: Business and Office Admin, Bookkeeping, Marketing Management",
      "Intermediate: Human Resources Management, Financial Systems",
      "Advanced: Office Management, Strategic Planning, Management Principles",
    ],
    careers: ["Office Administrator", "Senior Office Administrator", "Office Manager", "Administrative Manager"],
    requirements: [
      "Foundation: Grade 12 or NQF Level 3",
      "Intermediate: Foundation completion",
      "Advanced: Intermediate completion",
    ],
  },
]

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const course = courses.find((c) => c.id === params.courseId)

  if (!course) {
    notFound()
  }

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
          {course.nqfLevel && (
            <Badge variant="secondary" className="bg-purple-50 text-purple-700">
              <Award className="h-3 w-3 mr-1" />
              NQF Level {course.nqfLevel}
            </Badge>
          )}
          {course.accreditation && (
            <Badge variant="secondary" className="bg-orange-50 text-orange-700">
              {course.accreditation} Accredited
            </Badge>
          )}
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
              <CardDescription>Comprehensive modules designed to build your expertise</CardDescription>
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
                {course.careers?.map((career, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Target Audience (if available) */}
          {course.targetAudience && (
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
          )}
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
              {course.accreditation && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Accreditation</h4>
                    <p>{course.accreditation}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Entry Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Entry Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {course.requirements?.map((requirement, index) => (
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
