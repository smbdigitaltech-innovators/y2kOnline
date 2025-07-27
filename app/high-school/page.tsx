"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calculator, CreditCard, Banknote, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HighSchoolPage() {
  return (
    <div className="container py-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">High School Online - Grades 8 to 12</h1>
        <p className="text-gray-600 mb-8">Empowering the next generation through innovative online education.</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-800 text-white">
          <a href="/register">Register For Grades 8-12 & Part-Time, 2025</a>
        </Button>
      </section>

      {/* School News & Announcements Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">📢 Latest School News & Announcements</h2>
          <p className="text-blue-100 mb-6">
            Stay updated with the latest news, announcements, and important information from Y2K College
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
            onClick={() =>
              window.open("https://drive.google.com/file/d/15KRq5T8p4bn0aAD9CT5u3oKdZUyM7eXH/view", "_blank")
            }
          >
            📄 View Latest News & Updates
          </Button>
          <div className="mt-4 text-sm text-blue-200">
            <p>Click above to access our latest newsletter and important announcements</p>
          </div>
        </div>
      </section>

      {/* Financial Information Section */}
      <section className="mb-16">
        
        {/* Payment Options */}
        <div className="mt-8">
          <Card className="border-2 border-gray-100">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Payment Options & Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900">Payment Schedule Options</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Monthly payments (due by 7th of each month)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Quarterly payments (5% discount)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Annual payment (10% discount)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900">Payment Methods</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Bank transfer (preferred method)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Cash payments at office</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Debit orders available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-900">Banking Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>
                      <strong>Bank:</strong> Standard Bank
                    </p>
                    <p>
                      <strong>Account Name:</strong> Y2K College
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Account Number:</strong> 123456789
                    </p>
                    <p>
                      <strong>Branch Code:</strong> 051001
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  For payment arrangements and queries, contact: <strong>021 461 3795</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Why Choose Our Online High School?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-blue-900">Flexible Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">Learn at your own pace, anytime, anywhere.</CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-blue-900">Expert Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Experienced educators dedicated to your success.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-blue-900">Comprehensive Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                A wide range of subjects to prepare you for the future.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Explore Our Curriculum</h2>
      </section>

      {/* Grades and Subjects */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Grades and Subjects</h2>
        <Tabs defaultValue="grade8" className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 max-w-4xl mx-auto gap-2">
            <TabsTrigger value="grade8" className="text-xs sm:text-sm px-2 py-1">Grade 8</TabsTrigger>
            <TabsTrigger value="grade9" className="text-xs sm:text-sm px-2 py-1">Grade 9</TabsTrigger>
            <TabsTrigger value="grade10" className="text-xs sm:text-sm px-2 py-1">Grade 10</TabsTrigger>
            <TabsTrigger value="grade11" className="text-xs sm:text-sm px-2 py-1">Grade 11</TabsTrigger>
            <TabsTrigger value="grade12" className="text-xs sm:text-sm px-2 py-1">Grade 12</TabsTrigger>
            <TabsTrigger value="parttime" className="text-xs sm:text-sm px-2 py-1">Part Time</TabsTrigger>
          </TabsList>

          <TabsContent value="grade8" className="mt-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Grade 8 - Foundation Year</CardTitle>
                <p className="text-gray-600">
                  Our Grade 8 curriculum focuses on building a strong foundation in core subjects.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Core Subjects</h4>
                    <ul className="space-y-2">
                      {[
                        "Mathematics",
                        "English Home Language",
                        "English First Additional Language",
                        "Natural Sciences",
                        "Social Sciences (History & Geography)",
                        "Life Orientation",
                        "Technology",
                        "Economic and Management Sciences",
                        "Arts and Culture",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Personal Development </h4>
                    <ul className="space-y-2">
                      {[
                        "Self-awareness & personal identity",
                        "Developing empathy & respect for diversity",
                        "Personal goal setting",
                        "Exploring interests and basic career categories",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grade9" className="mt-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Grade 9 - Development Year</CardTitle>
                <p className="text-gray-600">
                  {" "}
                  Grade 9 curriculum expands on the foundations built in Grade 8, introducing more complex concepts.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Core Subjects</h4>
                    <ul className="space-y-2">
                      {[
                        "Mathematics",
                        "English Home Language",
                        "English First Additional Language",
                        "Natural Sciences",
                        "Social Sciences",
                        "Life Orientation",
                        "Technology",
                        "Economic and Management Sciences",
                        "Creative Arts",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Personal Development & Career Explorationt</h4>
                    <ul className="space-y-2">
                      {[
                        "Advanced study techniques & concentration",
                        "Leadership & collaboration skills",
                        "Setting academic and personal goals",
                        "Identifying personal strengths, talents & values",
                        "Subject choice guidance and career alignment",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grade10" className="mt-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Grade 10 - FET Phase Entry</CardTitle>
                <p className="text-gray-600">
                  Grade 10 marks the beginning of the FET phase, with a focus on specialized subjects.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Compulsory Subjects</h4>
                    <ul className="space-y-2">
                      {["Mathematics", "English Home Language", "Life Orientation"].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-3 mt-4 text-blue-900">Elective Subjects (Choose 4)</h4>
                    <ul className="space-y-2">
                      {[
                        "Physical Sciences",
                        "Life Sciences",
                        "Accounting",
                        "Business Studies",
                        "Geography",
                        "History",
                        "Computer Applications Technology",
                        "Information Technology",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Career Planning & Life Skills</h4>
                    <ul className="space-y-2">
                      {[
                        "Career research: education levels, degrees, trades",
                        "Setting long-term goals (education, work, life)",
                        "Self-discipline and accountability",
                        "Time and priority management",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grade11" className="mt-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Grade 11 - Specialization Year</CardTitle>
                <p className="text-gray-600">
                  Grade 11 builds on the Grade 10 curriculum, preparing students for their final year.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Core Subjects</h4>
                    <ul className="space-y-2">
                      {[
                        "Mathematics",
                        "English Home Language",
                        "Life Orientation",
                        "Physical Sciences",
                        "Life Sciences",
                        "Computer Applications Technology",
                        "Information Technology",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Career Readiness & Real-World Skills</h4>
                    <ul className="space-y-2">
                      {[
                        "Personal Development & Career Explorationt",
                        "Goal review: refining career and academic goals",
                        "Applying for University",
                        "Applying for bursaries/scholarships",
                        "Identifying personal strengths, talents & values",
                        "Self-discipline and accountability",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grade12" className="mt-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Grade 12 - Matric Year</CardTitle>
                <p className="text-gray-600">
                  Grade 12 is the final year of high school, with a focus on exam preparation and university
                  applications.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Matric Subjects</h4>
                    <ul className="space-y-2">
                      {[
                        "Mathematics",
                        "English Home Language",
                        "Life Orientation",
                        "Physical Sciences",
                        "Life Sciences",
                        "Computer Applications Technology",
                        "Information Technology",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm font-medium text-yellow-800">Matric Preparation</p>
                      <p className="text-sm text-yellow-700">Intensive exam preparation and career guidance</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Future Planning & Independence</h4>
                    <ul className="space-y-2">
                      {[
                        "University, college & vocational application process",
                        "Bursary and funding application guidance",
                        "After school Study",
                        "Study Camp",
                        "Matric Farewell",
                        "Life after school: adult responsibilities & expectations",
                      ].map((subject, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">University Preparation</p>
                      <p className="text-sm text-blue-700">Guidance for tertiary education applications</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="parttime" className="mt-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Part-Time Studies</CardTitle>
                <p className="text-gray-600">
                  Our flexible learning programs are designed for adult learners, and anyone looking to improve their
                  academic results.{" "}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Available Programs</h4>
                    <ul className="space-y-2">
                      {["Matric Rewrite"].map((program, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{program}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-3 mt-4 text-blue-900">Schedule Options</h4>
                    <ul className="space-y-2">
                      {[
                        "Evening Classes (08:00 AM - 15:00 PM)",
                        "Weekend Classes (Saturdays)",
                        "Online Learning Support",
                      ].map((schedule, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{schedule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Future Planning & Independence</h4>
                    <ul className="space-y-2">
                      {[
                        "Matric Upgrade",
                        "Study Guide",
                        "Time and priority management",
                        "University, college & vocational application process",
                        "Bursary and funding application guidance",
                      ].map((course, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{course}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-2">Flexible Payment Plans</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Monthly payment options</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Matric Results Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Class of Matric Since 2023</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 2023 Results */}
          <Card className="border-2 border-green-100">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">Class of Matric 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">88.6%</div>
                  <p className="text-sm text-gray-600">Overall Pass Rate</p>
                </div>
                <p className="text-gray-700">
                  The 2023 matric results were very encouraging, the hard work of both teachers and learners paid off.
                  There was a slight increase in the pass rate. In 2023 the pass rate stood at 88.6% and then in 2024 it
                  went up to 89.5%, this clearly demonstrates our efforts to continue improving despite many challenges
                  we face. There is a combination of factors that we can attribute to the constant increase in our pass
                  rate.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 2024 Results */}
          <Card className="border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Class of Matric 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">89.5%</div>
                  <p className="text-sm text-gray-600">Overall Pass Rate</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-900">Subject Pass Rates</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    {[
                      { subject: "Business Studies", rate: "100%" },
                      { subject: "English FAL", rate: "100%" },
                      { subject: "English HL", rate: "100%" },
                      { subject: "Life Orientation", rate: "100%" },
                      { subject: "Mathematics", rate: "100%" },
                      { subject: "Tourism", rate: "100%" },
                      { subject: "IsiXhosa Home Language", rate: "96.3%" },
                      { subject: "History", rate: "89.5%" },
                      { subject: "Mathematical Literacy", rate: "87.5%" },
                      { subject: "Afrikaans", rate: "85.7%" },
                      { subject: "Economics", rate: "80%" },
                      { subject: "Physical Sciences", rate: "75%" },
                      { subject: "Life Sciences", rate: "36.8%" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="text-gray-700">{item.subject}</span>
                        <span
                          className={`font-semibold ${
                            Number.parseFloat(item.rate) === 100
                              ? "text-green-600"
                              : Number.parseFloat(item.rate) >= 80
                                ? "text-blue-600"
                                : Number.parseFloat(item.rate) >= 60
                                  ? "text-yellow-600"
                                  : "text-red-600"
                          }`}
                        >
                          {item.rate}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Continuous Improvement</h3>
            <p className="text-gray-700">
              Our consistent improvement in matric results reflects our commitment to academic excellence and the
              dedication of our teaching staff and students.
            </p>
          </div>
        </div>
      </section>

      {/* School Gallery Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">School Gallery</h2>
        <div className="mb-8">
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Take a virtual tour of our facilities and see our students engaged in various academic and extracurricular
            activities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/y2k-images/graduation ceremony.png"
                  alt="Y2K College graduation ceremony with students in caps and gowns"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-blue-900">Graduation Ceremony</h3>
                <p className="text-sm text-gray-600">
                  Celebrating the achievements of our graduates as they receive their certificates and diplomas.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/y2k-images/graduation.png"
                  alt="Y2K College graduation celebration with balloons and graduates"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-blue-900">Graduation Celebration</h3>
                <p className="text-sm text-gray-600">
                  Intimate celebration moments with graduates, staff, and families marking academic achievements.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/y2k-images/y2k college hiking.png"
                  alt="Y2K College students on outdoor hiking educational trip"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-blue-900">Outdoor Education</h3>
                <p className="text-sm text-gray-600">
                  Students participating in outdoor education activities, building teamwork and life skills.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/y2k-images/lessons.png"
                  alt="Y2K students in classroom session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-blue-900">Interactive Learning Sessions</h3>
                <p className="text-sm text-gray-600">
                  Our students engaged in collaborative learning with dedicated study materials and resources.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/y2k-images/students-group-1.jpg"
                  alt="Y2K Matric 2023 students on educational trip"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-blue-900">Educational Excursions</h3>
                <p className="text-sm text-gray-600">
                  Our Matric 2023 students on an educational trip, expanding their learning beyond the classroom.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64">
                <Image
                  src="/images/y2k-images/studycamp.png"
                  alt="Y2K students group photo during school visit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-blue-900">Study Camp</h3>
                <p className="text-sm text-gray-600">
                  Building friendships and lasting memories while preparing for academic success at the Grade 12 Study Camp at Y2K College.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
