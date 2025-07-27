"use client"

import { CardFooter } from "@/components/ui/card"

import { FileText, Download, BookOpen, GraduationCap, Briefcase, Calculator, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function EnrollmentForms() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async (formType: string, fileName: string) => {
    setIsGenerating(true)

    try {
      // Dynamic import to avoid SSR issues
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      // Set up the PDF based on form type
      switch (formType) {
        case "high-school-enrollment":
          generateHighSchoolEnrollmentPDF(doc)
          break
        case "part-time-enrollment":
          generatePartTimeEnrollmentPDF(doc)
          break
        case "requirements-checklist":
          generateRequirementsChecklistPDF(doc)
          break
        case "learner-information":
          generateLearnerInformationPDF(doc)
          break
        case "fee-structure":
          generateFeeStructurePDF(doc)
          break
        default:
          generateGenericFormPDF(doc, formType)
      }

      // Save the PDF
      doc.save(fileName)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const generateHighSchoolEnrollmentPDF = (doc: any) => {
    // Header
    doc.setFontSize(20)
    doc.setFont(undefined, "bold")
    doc.text("Y2K COLLEGE HIGH SCHOOL", 105, 20, { align: "center" })
    doc.text("ENROLLMENT FORM 2025", 105, 30, { align: "center" })

    // Contact info
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")
    doc.text("1A Ravenscraig Street, Woodstock | Tel: 021 461 3795 | Email: admissions@y2k-online.co.za", 105, 40, {
      align: "center",
    })

    // Student Information Section
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.text("STUDENT INFORMATION", 20, 60)

    doc.setFontSize(10)
    doc.setFont(undefined, "normal")
    let yPos = 75

    const studentFields = [
      "Full Name: ________________________________",
      "ID Number: ________________________________",
      "Date of Birth: ____________________________",
      "Gender: ___________________________________",
      "Home Address: _____________________________",
      "_________________________________________",
      "Phone Number: _____________________________",
      "Email Address: ____________________________",
      "Previous School: ___________________________",
      "Grade Applying For: _______________________",
    ]

    studentFields.forEach((field) => {
      doc.text(field, 20, yPos)
      yPos += 10
    })

    // Parent/Guardian Information
    yPos += 10
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.text("PARENT/GUARDIAN INFORMATION", 20, yPos)

    yPos += 15
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")

    const parentFields = [
      "Parent/Guardian Name: ______________________",
      "Relationship: ______________________________",
      "Phone Number: _____________________________",
      "Email Address: ____________________________",
      "Occupation: _______________________________",
      "Employer: _________________________________",
    ]

    parentFields.forEach((field) => {
      doc.text(field, 20, yPos)
      yPos += 10
    })

    // Subject Selection
    yPos += 10
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.text("SUBJECT SELECTION", 20, yPos)

    yPos += 15
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")

    const subjects = [
      "☐ Mathematics",
      "☐ English Home Language",
      "☐ Life Orientation",
      "☐ Physical Sciences",
      "☐ Life Sciences",
      "☐ Business Studies",
      "☐ Accounting",
      "☐ Geography",
      "☐ History",
      "☐ Computer Applications Technology",
      "☐ Information Technology",
    ]

    subjects.forEach((subject, index) => {
      if (index < 6) {
        doc.text(subject, 20, yPos + index * 8)
      } else {
        doc.text(subject, 120, yPos + (index - 6) * 8)
      }
    })

    // Add new page for terms and conditions
    doc.addPage()

    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.text("TERMS AND CONDITIONS", 20, 30)

    doc.setFontSize(10)
    doc.setFont(undefined, "normal")
    yPos = 45

    const terms = [
      "1. All fees must be paid according to the agreed payment schedule.",
      "2. Students must maintain a minimum attendance rate of 80%.",
      "3. All assignments and assessments must be completed on time.",
      "4. Students must adhere to the school code of conduct.",
      "5. The school reserves the right to dismiss students for misconduct.",
      "",
      "DECLARATION:",
      "I hereby declare that the information provided is true and correct.",
      "I agree to abide by the terms and conditions of Y2K College.",
      "",
      "Student Signature: _________________________ Date: __________",
      "",
      "Parent/Guardian Signature: _________________ Date: __________",
    ]

    terms.forEach((term) => {
      doc.text(term, 20, yPos)
      yPos += 8
    })
  }

  const generatePartTimeEnrollmentPDF = (doc: any) => {
    doc.setFontSize(20)
    doc.setFont(undefined, "bold")
    doc.text("Y2K COLLEGE", 105, 20, { align: "center" })
    doc.text("PART-TIME ENROLLMENT FORM 2025", 105, 30, { align: "center" })

    doc.setFontSize(10)
    doc.text("1A Ravenscraig Street, Woodstock | Tel: 021 461 3795", 105, 40, { align: "center" })

    let yPos = 60
    doc.setFontSize(12)
    doc.setFont(undefined, "bold")
    doc.text("STUDENT INFORMATION", 20, yPos)

    yPos += 15
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")

    const fields = [
      "Full Name: ________________________________",
      "ID Number: ________________________________",
      "Phone: ____________________________________",
      "Email: ____________________________________",
      "Current Employment Status: _________________",
      "",
      "SUBJECT SELECTION (Select subjects you wish to take):",
      "☐ Mathematics",
      "☐ English Home Language",
      "☐ Physical Sciences",
      "☐ Life Sciences",
      "☐ Business Studies",
      "☐ Accounting",
      "",
      "SCHEDULE PREFERENCE:",
      "☐ Evening Classes (6:00 PM - 9:00 PM)",
      "☐ Weekend Classes (Saturdays)",
      "☐ Online Learning",
      "",
      "Signature: _________________________ Date: __________",
    ]

    fields.forEach((field) => {
      doc.text(field, 20, yPos)
      yPos += 8
    })
  }

  const generateRequirementsChecklistPDF = (doc: any) => {
    doc.setFontSize(18)
    doc.setFont(undefined, "bold")
    doc.text("Y2K COLLEGE", 105, 20, { align: "center" })
    doc.text("FULL-TIME ENROLLMENT REQUIREMENTS CHECKLIST 2025", 105, 30, { align: "center" })

    let yPos = 50
    doc.setFontSize(12)
    doc.text("Please ensure you have the following documents before submitting your application:", 20, yPos)

    yPos += 20
    doc.setFontSize(10)

    const requirements = [
      "REQUIRED DOCUMENTS:",
      "☐ Completed Y2K College Full-Time Enrollment Form 2025",
      "☐ Certified copy of ID document or birth certificate",
      "☐ Certified copy of parent/guardian ID document",
      "☐ Previous school reports (last 2 years minimum)",
      "☐ Transfer letter from previous school (if applicable)",
      "☐ Proof of residence (utility bill not older than 3 months)",
      "☐ Recent passport-size photographs (4 copies)",
      "☐ Medical certificate (if required)",
      "☐ Proof of payment for registration fee",
      "",
      "ADDITIONAL REQUIREMENTS FOR FULL-TIME STUDENTS:",
      "☐ Academic transcript from previous institution",
      "☐ Character reference letter (if transferring)",
      "☐ Completed subject choice form",
      "☐ Parent/guardian consent forms",
      "",
      "FINANCIAL REQUIREMENTS:",
      "☐ Proof of income (parent/guardian)",
      "☐ Bank statements (last 3 months)",
      "☐ Completed fee agreement form",
      "☐ Registration fee payment confirmation",
      "",
      "ADDITIONAL REQUIREMENTS FOR INTERNATIONAL STUDENTS:",
      "☐ Valid study permit",
      "☐ Passport copy (all pages)",
      "☐ Translated and certified academic records",
      "☐ Proof of English proficiency (if applicable)",
      "",
      "SUBMISSION METHODS:",
      "• In person: 1A Ravenscraig Street, Woodstock",
      "• Email: admissions@y2k-online.co.za",
      "• Phone: 021 461 3795",
      "",
      "Office Hours: Monday - Friday, 8:00 AM - 4:00 PM",
      "",
      "IMPORTANT NOTES:",
      "• All documents must be certified copies",
      "• Incomplete applications will not be processed",
      "• Registration fee is non-refundable",
      "• Applications are processed in order of receipt",
    ]

    requirements.forEach((req) => {
      if (req.includes("REQUIREMENTS") || req.includes("METHODS") || req.includes("NOTES")) {
        doc.setFont(undefined, "bold")
        doc.text(req, 20, yPos)
        doc.setFont(undefined, "normal")
      } else {
        doc.text(req, 20, yPos)
      }
      yPos += 8
    })
  }

  const generateLearnerInformationPDF = (doc: any) => {
    doc.setFontSize(18)
    doc.setFont(undefined, "bold")
    doc.text("Y2K COLLEGE", 105, 20, { align: "center" })
    doc.text("LEARNER INFORMATION FORM", 105, 30, { align: "center" })

    let yPos = 50
    doc.setFontSize(10)

    const fields = [
      "PERSONAL INFORMATION",
      "Full Name: ________________________________",
      "ID Number: ________________________________",
      "Date of Birth: ____________________________",
      "Gender: ___________________________________",
      "Nationality: ______________________________",
      "Home Language: ____________________________",
      "",
      "CONTACT INFORMATION",
      "Physical Address: __________________________",
      "_________________________________________",
      "Postal Address: ___________________________",
      "_________________________________________",
      "Phone Number: _____________________________",
      "Email Address: ____________________________",
      "",
      "EDUCATIONAL BACKGROUND",
      "Highest Qualification: ____________________",
      "Institution: ______________________________",
      "Year Completed: ___________________________",
      "",
      "EMPLOYMENT STATUS",
      "☐ Employed ☐ Unemployed ☐ Self-employed ☐ Student",
      "Employer: _________________________________",
      "Position: _________________________________",
      "",
      "COURSE SELECTION",
      "Preferred Course: __________________________",
      "Study Mode: ☐ Full-time ☐ Part-time ☐ Online",
      "",
      "Signature: _________________________ Date: __________",
    ]

    fields.forEach((field) => {
      if (
        field.includes("INFORMATION") ||
        field.includes("BACKGROUND") ||
        field.includes("STATUS") ||
        field.includes("SELECTION")
      ) {
        doc.setFont(undefined, "bold")
        doc.text(field, 20, yPos)
        doc.setFont(undefined, "normal")
      } else {
        doc.text(field, 20, yPos)
      }
      yPos += 8
    })
  }

  const generateFeeStructurePDF = (doc: any) => {
    doc.setFontSize(18)
    doc.setFont(undefined, "bold")
    doc.text("Y2K COLLEGE", 105, 20, { align: "center" })
    doc.text("FEE STRUCTURE 2025", 105, 30, { align: "center" })

    let yPos = 50
    doc.setFontSize(12)
    doc.setFont(undefined, "bold")
    doc.text("HIGH SCHOOL FEES (Grades 8-12)", 20, yPos)

    yPos += 15
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")

    const fees = [
      "Registration Fee: R 500.00 (once-off)",
      "Monthly School Fee: R 1,500.00",
      "Textbooks & Materials: R 1,200.00 (per year)",
      "Uniform: R 800.00 (optional)",
      "",
      "PART-TIME STUDENTS",
      "Registration Fee: R 350.00",
      "Per Subject Fee: R 450.00 per month",
      "Maximum 4 subjects allowed",
      "",
      "COLLEGE COURSES",
      "Customs & International Trade: R 3,200.00 per month",
      "IT & Administration: R 2,800.00 per month",
      "Supply Chain Management: R 3,000.00 per month",
      "",
      "PAYMENT OPTIONS",
      "• Monthly payments (due by 7th of each month)",
      "• Quarterly payments (5% discount)",
      "• Annual payment (10% discount)",
      "",
      "PAYMENT METHODS",
      "• Bank transfer (preferred)",
      "• Cash payments at office",
      "• Debit orders available",
      "",
      "Banking Details:",
      "Bank: Standard Bank",
      "Account Name: Y2K College",
      "Account Number: 123456789",
      "Branch Code: 051001",
      "",
      "For payment arrangements, contact: 021 461 3795",
    ]

    fees.forEach((fee) => {
      if (fee.includes("STUDENTS") || fee.includes("COURSES") || fee.includes("OPTIONS") || fee.includes("METHODS")) {
        doc.setFont(undefined, "bold")
        doc.text(fee, 20, yPos)
        doc.setFont(undefined, "normal")
      } else {
        doc.text(fee, 20, yPos)
      }
      yPos += 8
    })
  }

  const generateGenericFormPDF = (doc: any, formType: string) => {
    doc.setFontSize(18)
    doc.setFont(undefined, "bold")
    doc.text("Y2K COLLEGE", 105, 20, { align: "center" })
    doc.text(formType.toUpperCase().replace(/-/g, " "), 105, 30, { align: "center" })

    doc.setFontSize(10)
    doc.text("1A Ravenscraig Street, Woodstock | Tel: 021 461 3795 | Email: admissions@y2k-online.co.za", 105, 40, {
      align: "center",
    })

    let yPos = 60
    doc.text("This form is currently being updated. Please contact our office for the latest version.", 20, yPos)
    yPos += 20
    doc.text("Contact Information:", 20, yPos)
    yPos += 10
    doc.text("Phone: 021 461 3795", 20, yPos)
    yPos += 10
    doc.text("Email: admissions@y2k-online.co.za", 20, yPos)
    yPos += 10
    doc.text("Address: 1A Ravenscraig Street, Woodstock", 20, yPos)
  }

  const previewForm = (formType: string) => {
    // This would open a preview dialog - for now just generate the PDF
    generatePDF(formType, `${formType}-preview.pdf`)
  }

  const openEnrollmentForm = () => {
    window.open("https://drive.google.com/file/d/1w4caqS3kG56mDOw87OvnwuqpE01K_FMd/view?usp=sharing", "_blank")
  }

  const openPartTimeEnrollmentForm = () => {
    window.open("https://drive.google.com/file/d/1uWNIw0EHw4KE7gPZquYM15nLz6yJgjkr/view", "_blank")
  }

  const openCustomsEnrollmentForm = () => {
    window.open("https://drive.google.com/file/d/12J9VF0Ydk7APJxZlWgDlP7AX5rVJl-Qx/view", "_blank")
  }

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center mb-2 text-blue-900">Enrollment Documents</h2>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Download the required enrollment forms below. Please complete all fields and submit according to the
        instructions on the form.
      </p>

      <Tabs defaultValue="high-school" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="high-school">High School</TabsTrigger>
          <TabsTrigger value="part-time">Part-Time</TabsTrigger>
          <TabsTrigger value="college">College Courses</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        <TabsContent value="high-school">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-blue-700" />
                High School Enrollment Documents
              </CardTitle>
              <CardDescription>Forms required for enrolling in Y2K High School programs (Grades 8-12)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Y2K College Full-Time Enrollment Form 2025
                    </CardTitle>
                    <CardDescription>Official enrollment application for full-time students</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="text-sm space-y-1">
                      <li>• Complete student & parent information</li>
                      <li>• Subject choices for all grades (8-12)</li>
                      <li>• Detailed fee structure and payment options</li>
                      <li>• Terms and conditions agreement</li>
                      <li>• Code of conduct acknowledgment</li>
                      <li>• Financial commitment forms</li>
                    </ul>
                    <Badge variant="outline" className="mt-2">
                      PDF • 6 pages
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={openEnrollmentForm}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Form
                    </Button>
                    <Button className="flex-1" onClick={openEnrollmentForm} disabled={isGenerating}>
                      <Download className="mr-2 h-4 w-4" />
                      Access Form
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Full-Time Enrollment Requirements Checklist
                    </CardTitle>
                    <CardDescription>Complete document checklist for full-time enrollment</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="text-sm space-y-1">
                      <li>• Required documents and certifications</li>
                      <li>• Academic transcripts and records</li>
                      <li>• Financial documentation requirements</li>
                      <li>• Parent/guardian consent forms</li>
                      <li>• International student requirements</li>
                      <li>• Submission guidelines and deadlines</li>
                    </ul>
                    <Badge variant="outline" className="mt-2">
                      PDF • 1 page
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={() => previewForm("requirements-checklist")}>
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => generatePDF("requirements-checklist", "Y2K_Full_Time_Requirements_Checklist.pdf")}
                      disabled={isGenerating}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Download"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="part-time">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-blue-700" />
                Part-Time Student Documents
              </CardTitle>
              <CardDescription>Forms for part-time students taking specific subjects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Y2K College Part-Time Enrollment Form 2025
                    </CardTitle>
                    <CardDescription>Official part-time enrollment application with SBA options</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="text-sm space-y-1">
                      <li>• Complete student information form</li>
                      <li>• Subject selection with SBA/No SBA options</li>
                      <li>• Person responsible for fees details</li>
                      <li>• Requirements checklist included</li>
                      <li>• Maximum of 4 subjects allowed</li>
                    </ul>
                    <Badge variant="outline" className="mt-2">
                      PDF • 2 pages
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={openPartTimeEnrollmentForm}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Form
                    </Button>
                    <Button className="flex-1" onClick={openPartTimeEnrollmentForm} disabled={isGenerating}>
                      <Download className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Download"}
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Part-Time Student Agreement
                    </CardTitle>
                    <CardDescription>Code of conduct for part-time students</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="text-sm space-y-1">
                      <li>• SBA completion requirements</li>
                      <li>• Subject-specific attendance policy</li>
                      <li>• Fee responsibility agreement</li>
                      <li>• Exam registration procedures</li>
                      <li>• Document submission requirements</li>
                    </ul>
                    <Badge variant="outline" className="mt-2">
                      PDF • 1 page
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={() => previewForm("part-time-agreement")}>
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => generatePDF("part-time-agreement", "Y2K_Part_Time_Student_Agreement.pdf")}
                      disabled={isGenerating}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Download"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="college">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-blue-700" />
                College Course Documents
              </CardTitle>
              <CardDescription>Forms for college-level vocational and professional courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Learner Information Form
                    </CardTitle>
                    <CardDescription>For college course registration</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="text-sm space-y-1">
                      <li>• Personal information</li>
                      <li>• Employment status</li>
                      <li>• Educational background</li>
                      <li>• Course selection</li>
                    </ul>
                    <Badge variant="outline" className="mt-2">
                      PDF • 1 page
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={() => previewForm("learner-information")}>
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => generatePDF("learner-information", "Y2K_Learner_Information_Form.pdf")}
                      disabled={isGenerating}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Download"}
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Y2K Customs Enrollment Form 2025
                    </CardTitle>
                    <CardDescription>For Customs Clearing & International Trade courses</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="text-sm space-y-1">
                      <li>• Customs compliance requirements</li>
                      <li>• International trade specialization options</li>
                      <li>• Industry certification pathways</li>
                      <li>• Work placement opportunities</li>
                      <li>• SARS and customs authority requirements</li>
                    </ul>
                    <Badge variant="outline" className="mt-2">
                      PDF • 2 pages
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={openCustomsEnrollmentForm}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Form
                    </Button>
                    <Button className="flex-1" onClick={openCustomsEnrollmentForm} disabled={isGenerating}>
                      <Download className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Download"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-blue-700" />
                Financial Information
              </CardTitle>
              <CardDescription>Fee structures and payment information for all programs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Fee Structure 2025
                    </CardTitle>
                    <CardDescription>Comprehensive fee structure for all courses</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="text-sm space-y-1">
                      <li>• High School fees (Grades 8-12)</li>
                      <li>• Part-time student fees</li>
                      <li>• College course fees</li>
                      <li>• Payment options and methods</li>
                    </ul>
                    <Badge variant="outline" className="mt-2">
                      PDF • 1 page
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={() => previewForm("fee-structure")}>
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => generatePDF("fee-structure", "Y2K_Fee_Structure_2025.pdf")}
                      disabled={isGenerating}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Download"}
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border border-blue-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Payment Agreement Form
                    </CardTitle>
                    <CardDescription>Payment terms and conditions</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="text-sm space-y-1">
                      <li>• Payment schedule options</li>
                      <li>• Banking details</li>
                      <li>• Late payment policies</li>
                      <li>• Refund conditions</li>
                    </ul>
                    <Badge variant="outline" className="mt-2">
                      PDF • 1 page
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1" variant="outline" onClick={() => previewForm("payment-agreement")}>
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => generatePDF("payment-agreement", "Y2K_Payment_Agreement.pdf")}
                      disabled={isGenerating}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Download"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">📋 How to Submit Your Forms</h3>
        <ul className="text-sm space-y-1 text-blue-800">
          <li>1. Download and complete the required forms</li>
          <li>2. Gather all supporting documents as listed in the checklist</li>
          <li>
            3. Submit completed forms to: <strong>1A Ravenscraig Street, Woodstock</strong>
          </li>
          <li>
            4. Or email to: <strong>admissions@y2k-online.co.za</strong>
          </li>
          <li>
            5. For questions, call: <strong>021 461 3795</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}
