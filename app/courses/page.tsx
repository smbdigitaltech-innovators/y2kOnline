import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CoursesPage() {
  const courses = [
   
    {
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
    },
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
        "Vocabulary Development",
        "Reading Comprehension",
        "Writing Skills and Composition",
        "Listening and Speaking Skills",
        "Business English Communication",
        "Academic English",
        "Pronunciation and Phonetics",
        "English Literature Basics",
        "Practical Communication Skills",
      ],
      careers: [
        "English Language Tutor",
        "Administrative Assistant",
        "Customer Service Representative",
        "Translator/Interpreter",
        "Content Writer",
        "Communications Assistant",
      ],
      requirements: ["Basic literacy skills", "Motivation to learn English", "Regular attendance commitment"],
      targetAudience: [
        "Non-native English speakers seeking to improve proficiency",
        "Students preparing for further education",
        "Professionals needing English for career advancement",
        "Individuals seeking better communication skills",
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
        "Freight Handling Procedures",
        "Warehouse Operations and Safety",
        "Transportation and Distribution",
        "Documentation and Record Keeping",
        "Customer Service in Logistics",
        "Basic Supply Chain Concepts",
        "Health and Safety in Freight Operations",
      ],
      careers: [
        "Freight Handler",
        "Warehouse Operator",
        "Logistics Coordinator",
        "Distribution Assistant",
        "Freight Clerk",
        "Shipping and Receiving Clerk",
      ],
      requirements: [
        "Grade 9 or equivalent",
        "Basic literacy and numeracy skills",
        "Physical fitness for handling freight",
      ],
      targetAudience: [
        "Individuals seeking careers in freight and logistics",
        "School leavers who want to enter the logistics industry",
        "Workers in related fields looking to formalize their skills",
        "Anyone interested in developing competencies in freight handling",
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

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">Our Courses</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Y2K College offers comprehensive IT training programs designed to prepare you for a successful career in the
        technology industry.
      </p>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 max-w-4xl mx-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="it">IT Courses</TabsTrigger>
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="accounting">Accounting</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="admin">Administration</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        {courses.map((course) => (
          <TabsContent key={course.id} value={course.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <CourseCard course={course} detailed />
            </div>
          </TabsContent>
        ))}

        <TabsContent value="it" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses
              .filter((course) =>
                [
                  "pc-support",
                  "database-design",
                  "office-admin",
                  "comptia-it-fundamentals",
                  "english-language",
                ].includes(course.id),
              )
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="logistics" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses
              .filter((course) =>
                [
                  "freight-handling",
                  "clearing-forwarding",
                  "supply-chain-manager",
                  "customs-compliance-manager",
                ].includes(course.id),
              )
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="accounting" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {courses
              .filter((course) => course.id === "financial-accounting")
              .map((course) => (
                <CourseCard key={course.id} course={course} detailed />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="business" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {courses
              .filter((course) => course.id === "business-management")
              .map((course) => (
                <CourseCard key={course.id} course={course} detailed />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="admin" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {courses
              .filter((course) => course.id === "office-administration")
              .map((course) => (
                <CourseCard key={course.id} course={course} detailed />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-blue-50 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Enrollment Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Requirements</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>High school diploma or equivalent</li>
              <li>Basic computer literacy</li>
              <li>English proficiency</li>
              <li>Completed application form</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">How to Apply</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Complete the online application form</li>
              <li>Submit required documents</li>
              <li>Pay application fee</li>
              <li>Schedule an interview (if required)</li>
            </ol>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/register">Register Today!</Link>
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "Are the courses accredited?",
              answer:
                "Yes, all our courses are fully accredited by relevant industry bodies and educational authorities.",
            },
            {
              question: "Do you offer payment plans?",
              answer:
                "Yes, we offer flexible payment plans to make our courses more accessible. Contact our finance department for more information.",
            },
            {
              question: "Can I study part-time?",
              answer:
                "Yes, most of our courses are available in both full-time and part-time formats to accommodate different schedules.",
            },
            {
              question: "Do you provide job placement assistance?",
              answer:
                "Yes, we have a dedicated career services team that helps students with job placement, resume building, and interview preparation.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CourseCard({ course, detailed = false }) {
  return (
    <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-blue-900">{course.title}</CardTitle>
          <div className="flex flex-col gap-1">
            <Badge variant="outline" className="bg-blue-50">
              {course.duration}
            </Badge>
            {course.nqfLevel && (
              <Badge variant="secondary" className="bg-green-50 text-green-700">
                NQF {course.nqfLevel}
              </Badge>
            )}
            {course.price && (
              <Badge variant="secondary" className="bg-yellow-50 text-yellow-700">
                {course.price}
              </Badge>
            )}
            {course.examCode && (
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                {course.examCode}
              </Badge>
            )}
          </div>
        </div>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm font-medium mb-1">Level:</p>
          <p>{course.level}</p>
        </div>

        {course.accreditation && (
          <div className="mb-4">
            <p className="text-sm font-medium mb-1">Accreditation:</p>
            <p>{course.accreditation}</p>
          </div>
        )}

        {course.requirements && (
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Requirements:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {course.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {detailed && (
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Modules:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {course.modules.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ul>
          </div>
        )}

        {course.careers && detailed && (
          <div>
            <p className="text-sm font-medium mb-2">Career Opportunities:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {course.careers.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
          <Link href={`/courses/${course.id}`}>{detailed ? "Apply Now" : "Learn More"}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
