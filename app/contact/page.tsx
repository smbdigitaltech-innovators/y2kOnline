"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData)

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">Contact Us</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Have questions about our programs? Want to visit our campus? Get in touch with us and our team will be happy to
        assist you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="border-2 border-blue-100">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-blue-900" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                <p>1a Ravenscraig Rd</p>
                <p>Cape Town, 7925</p>
                <p>South Africa</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-100">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-blue-900" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                <p>Main: +27 21 461 3795</p>
                <p>Admissions: +27 21 422 2261</p>
                <p>Fax: +27 21 461 3796</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-100">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-blue-900" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Email Addresses</h3>
                <p>General: info@y2k-online.co.za</p>
                <p>Admissions: admissions@y2k-online.co.za</p>
                <p>Support: support@y2k-online.co.za</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={formData.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="admissions">Admissions</SelectItem>
                    <SelectItem value="courses">Course Information</SelectItem>
                    <SelectItem value="highschool">High School</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Visit Our Campus</h2>
          <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
            {/* Embedded Bing Map for Y2K College */}
            <iframe
              src="https://www.bing.com/maps/embed?h=400&w=800&cp=-33.927868~18.417436&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8&q=y2k%20college"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Y2K College Map"
            ></iframe>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Operating Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-900 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-900 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p>9:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-900 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Sunday & Public Holidays</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Schedule a Visit</h3>
            <p className="mb-4">
              We encourage prospective students and parents to visit our campus to experience our facilities and meet
              our staff. Please contact us to schedule a campus tour.
            </p>
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <a href="tel:+27214613795">Call to Schedule a Visit</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "What are your admission requirements?",
              answer:
                "Admission requirements vary by program. For our college courses, a high school diploma or equivalent is typically required. For our high school, previous academic records and an entrance assessment may be required.",
            },
            {
              question: "Do you offer scholarships or financial aid?",
              answer:
                "Yes, we offer various scholarships and financial aid options based on academic merit and financial need. Contact our admissions office for more information.",
            },
            {
              question: "Can I visit the campus before applying?",
              answer:
                "We encourage prospective students to visit our campus. You can schedule a tour by contacting our admissions office.",
            },
            {
              question: "What makes Y2K College different from other institutions?",
              answer:
                "Y2K College stands out for its focus on quality IT education, small class sizes, experienced instructors, and strong industry connections that help our graduates secure employment.",
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
