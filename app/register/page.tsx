"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { EnrollmentForms } from "@/components/enrollment-forms"

export default function RegisterPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idNumber: "",
    address: "",
    city: "",
    postalCode: "",
    courseType: "",
    courseSelection: "",
    highSchoolGrade: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.agreeTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      })
      return
    }

    console.log("Form submitted:", formData)

    toast({
      title: "Registration Submitted",
      description: "Thank you for registering! We'll contact you shortly.",
    })

    // Reset form or redirect
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">Register at Y2K College</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
  <a
    href="https://y2-k-college-registration-system.vercel.app/"
    className="text-blue-600 underline hover:text-blue-800"
    target="_blank"
    rel="noopener noreferrer"
  >
    Click here to fill out the online registration form 
  </a>{" "}
  Next step: Download the forms below and complete them to register for our courses or high school program. You can either email the completed forms to us or bring them directly to the school.</p>

      <Tabs defaultValue="college" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="college">Register</TabsTrigger>
          <TabsTrigger value="highschool">Now</TabsTrigger>
        </TabsList>

        <TabsContent value="college">
        
        </TabsContent>
      </Tabs>

      {/* Enrollment Forms Section */}
      <EnrollmentForms />

      <div className="max-w-4xl mx-auto mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Registration Process</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Complete and submit the registration form above.</li>
          <li>Our admissions team will review your application and contact you within 2-3 business days.</li>
          <li>You may be invited for an interview or assessment, depending on the program.</li>
          <li>Upon acceptance, you will receive an offer letter with payment details.</li>
          <li>Secure your place by paying the registration fee.</li>
          <li>Attend orientation and begin your journey at Y2K College!</li>
        </ol>
      </div>
    </div>
  )
}
