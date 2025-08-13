import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import {
  MapPin,
  BookOpen,
  Users,
  Building,
  Phone,
  Mail,
  Globe,
  Award,
  Calendar,
  DollarSign,
} from "lucide-react"

// Static university data
const universitiesData = {
  lums: {
    id: "lums",
    name: "Lahore University of Management Sciences (LUMS)",
    location: "Lahore",
    type: "Private",
    ranking: "1",
    campus: ["Main Campus"],
    "faculty-student-ratio": "1:15",
    program_offered: ["Business Administration", "Computer Science", "Economics", "Law"],
    program_detail: [
      {
        name: "Business Administration",
        duration: "4 years",
        fee: "PKR 1,200,000/year",
        seats: "200"
      },
      {
        name: "Computer Science",
        duration: "4 years",
        fee: "PKR 1,100,000/year",
        seats: "150"
      },
      {
        name: "Economics",
        duration: "4 years",
        fee: "PKR 1,000,000/year",
        seats: "100"
      },
      {
        name: "Law",
        duration: "5 years",
        fee: "PKR 1,300,000/year",
        seats: "80"
      }
    ],
    website: "https://lums.edu.pk",
    email: "admissions@lums.edu.pk",
    phone: "+92-42-35608000",
    description: "LUMS is Pakistan's leading private university, known for its rigorous academic programs and excellent faculty. The university offers world-class education in business, computer science, economics, and law.",
    scholarship: ["Merit-based scholarships", "Need-based financial aid", "Sports scholarships"],
    eligibility: "Minimum 60% in intermediate or equivalent"
  },
  nust: {
    id: "nust",
    name: "National University of Sciences and Technology (NUST)",
    location: "Islamabad",
    type: "Public",
    ranking: "2",
    campus: ["Main Campus", "Karachi Campus", "Lahore Campus"],
    "faculty-student-ratio": "1:18",
    program_offered: ["Engineering", "Medicine", "Business", "Computer Science"],
    program_detail: [
      {
        name: "Engineering",
        duration: "4 years",
        fee: "PKR 50,000/year",
        seats: "500"
      },
      {
        name: "Medicine",
        duration: "5 years",
        fee: "PKR 80,000/year",
        seats: "200"
      },
      {
        name: "Business",
        duration: "4 years",
        fee: "PKR 60,000/year",
        seats: "300"
      },
      {
        name: "Computer Science",
        duration: "4 years",
        fee: "PKR 55,000/year",
        seats: "250"
      }
    ],
    website: "https://nust.edu.pk",
    email: "admissions@nust.edu.pk",
    phone: "+92-51-90851000",
    description: "NUST is Pakistan's premier engineering and technology university, offering cutting-edge programs in various disciplines. The university is known for its research excellence and industry connections.",
    scholarship: ["Merit scholarships", "HEC scholarships", "Industry-sponsored scholarships"],
    eligibility: "Minimum 70% in intermediate or equivalent"
  }
}

export default function UniversityDetailPage() {
  const { id } = useParams()
  const university = universitiesData[id]

  if (!university) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="text-center p-8">
          <CardContent>
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">University Not Found</h2>
            <p className="text-gray-600">The university you're looking for doesn't exist.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Hero Section */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48 sm:h-64">
              {/* Grey placeholder instead of image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <Building className="w-16 h-16 text-gray-500" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-2">{university.name}</h1>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{university.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{university.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Rank #{university.ranking}</Badge>
                    <div className="text-sm text-gray-600">National Ranking</div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">{university.type}</Badge>
                    <div className="text-sm text-gray-600">University Type</div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">{university["faculty-student-ratio"]}</Badge>
                    <div className="text-sm text-gray-600">Faculty-Student Ratio</div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">{university.campus.length}</Badge>
                    <div className="text-sm text-gray-600">Campuses</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Programs */}
            <Card>
              <CardHeader>
                <CardTitle>Programs Offered</CardTitle>
                <CardDescription>Detailed information about academic programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {university.program_detail.map((program, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{program.name}</h3>
                        <Badge variant="outline">{program.duration}</Badge>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>Fee: {program.fee}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>Seats: {program.seats}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Scholarships */}
            <Card>
              <CardHeader>
                <CardTitle>Scholarships & Financial Aid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {university.scholarship.map((scholarship, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-gray-700">{scholarship}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">{university.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">{university.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    Visit Website
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle>Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{university.eligibility}</p>
              </CardContent>
            </Card>

            {/* Campuses */}
            <Card>
              <CardHeader>
                <CardTitle>Campuses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {university.campus.map((campus, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="text-sm">{campus}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <Button className="w-full">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
