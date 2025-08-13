import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import {
  MapPin,
  Building,
  Users,
  BookOpen,
  DollarSign,
  Users2,
  Award,
  Phone,
  Mail,
  Globe,
  Download,
  Star
} from "lucide-react"

// Static university data
const universitiesData = {
  lorem1: {
    id: "lorem1",
    name: "Lorem Ipsum University",
    location: "Dolor Sit",
    type: "Private",
    ranking: "1",
    campus: ["Main Campus"],
    "faculty-student-ratio": "1:15",
    program_offered: ["Lorem Ipsum", "Dolor Sit", "Amet Consectetur", "Adipiscing Elit"],
    website: "https://lorem-ipsum.edu",
    rating: 4.8,
    students: "5000+",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    programs: [
      {
        name: "Lorem Ipsum",
        duration: "4 years",
        fee: "$10,000/year",
        seats: "100",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        name: "Dolor Sit",
        duration: "3 years",
        fee: "$8,000/year",
        seats: "80",
        description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      },
      {
        name: "Amet Consectetur",
        duration: "4 years",
        fee: "$12,000/year",
        seats: "60",
        description: "Duis aute irure dolor in reprehenderit in voluptate"
      }
    ],
    scholarships: [
      "Lorem Ipsum Scholarship - 50% tuition waiver",
      "Dolor Sit Merit Award - 25% tuition waiver",
      "Amet Consectetur Need-based Grant - Up to 75%"
    ],
    contact: {
      phone: "+1-234-567-8900",
      email: "admissions@lorem-ipsum.edu",
      address: "123 Lorem Ipsum Street, Dolor Sit, Amet Consectetur"
    },
    facilities: [
      "Lorem Ipsum Library",
      "Dolor Sit Sports Complex",
      "Amet Consectetur Research Center",
      "Adipiscing Elit Student Center"
    ]
  },
  lorem2: {
    id: "lorem2",
    name: "Dolor Sit Institute",
    location: "Amet Consectetur",
    type: "Public",
    ranking: "2",
    campus: ["Main Campus", "Secondary Campus", "Tertiary Campus"],
    "faculty-student-ratio": "1:18",
    program_offered: ["Lorem Ipsum", "Dolor Sit", "Amet Consectetur", "Adipiscing Elit"],
    website: "https://dolor-sit.edu",
    rating: 4.6,
    students: "8000+",
    description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programs: [
      {
        name: "Adipiscing Elit",
        duration: "4 years",
        fee: "$9,000/year",
        seats: "120",
        description: "Excepteur sint occaecat cupidatat non proident"
      },
      {
        name: "Sed Do Eiusmod",
        duration: "3 years",
        fee: "$7,500/year",
        seats: "90",
        description: "Sunt in culpa qui officia deserunt mollit anim id"
      }
    ],
    scholarships: [
      "Adipiscing Elit Excellence Award - 60% tuition waiver",
      "Sed Do Eiusmod Merit Scholarship - 30% tuition waiver",
      "Tempor Incididunt Grant - Up to 80%"
    ],
    contact: {
      phone: "+1-234-567-8901",
      email: "info@dolor-sit.edu",
      address: "456 Dolor Sit Avenue, Amet Consectetur, Adipiscing Elit"
    },
    facilities: [
      "Adipiscing Elit Library",
      "Sed Do Eiusmod Gymnasium",
      "Tempor Incididunt Laboratory",
      "Ut Labore Conference Hall"
    ]
  }
}

export default function UniversityDetailPage() {
  const { id } = useParams()
  const university = universitiesData[id]

  if (!university) {
    return (
      <div className="min-h-screen bg-gradient-light pt-20">
        <div className="container mx-auto px-4 py-8">
          <Card className="card-modern text-center py-12 max-w-md mx-auto">
            <CardContent>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary/10 flex items-center justify-center">
                <Building className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lorem Ipsum Not Found</h3>
              <p className="text-gray-600 mb-6">The Lorem Ipsum you're looking for doesn't exist.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-light pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <Card className="bg-white rounded-lg shadow-lg overflow-hidden border-primary/20 mb-8">
          <div className="relative h-64 bg-gradient-primary">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Building className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary/80 to-primary-dark/80 p-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{university.name}</h1>
              <div className="flex items-center text-white/90">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{university.location}</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="bg-white border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{university.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gradient-light rounded-xl">
                    <div className="text-2xl font-bold text-gradient-primary">{university.ranking}</div>
                    <div className="text-xs text-gray-600">Ranking</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-light rounded-xl">
                    <div className="text-2xl font-bold text-gradient-primary">{university.students}</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-light rounded-xl">
                    <div className="text-2xl font-bold text-gradient-primary">{university["faculty-student-ratio"]}</div>
                    <div className="text-xs text-gray-600">Ratio</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-light rounded-xl">
                    <div className="text-2xl font-bold text-gradient-primary">{university.type}</div>
                    <div className="text-xs text-gray-600">Type</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Programs */}
            <Card className="bg-white border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {university.programs.map((program, index) => (
                    <div key={index} className="border border-primary/20 rounded-lg p-4 bg-gradient-light/30">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-primary">{program.name}</h3>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {program.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1 text-primary" />
                          {program.fee}
                        </div>
                        <div className="flex items-center">
                          <Users2 className="w-4 h-4 mr-1 text-primary" />
                          {program.seats} seats
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Scholarships */}
            <Card className="bg-white border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {university.scholarships.map((scholarship, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-light rounded-lg">
                      <Award className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{scholarship}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">{university.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">{university.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">{university.contact.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-primary mr-3" />
                    <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Visit Website
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campus Facilities */}
            <Card className="bg-white border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Campus Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {university.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-light rounded-lg">
                      <Building className="w-5 h-5 text-primary mr-3" />
                      <span className="text-sm text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Now */}
            <Card className="bg-white border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-primary mb-4">Ready to Apply?</h3>
                <Button className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white shadow-glow hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105">
                  <Award className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            {/* Download Brochure */}
            <Card className="bg-white border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-primary mb-4">Get More Information</h3>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-primary mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{university.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Campus</span>
                    <span className="font-semibold">{university.campus.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Programs</span>
                    <span className="font-semibold">{university.program_offered.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
