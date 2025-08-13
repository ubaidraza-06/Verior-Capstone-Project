import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  Search,
  MapPin,
  BookOpen,
  Users,
  Building,
  Clock,
  Star,
  TrendingUp,
  Award,
} from "lucide-react"

// Static university data
const universitiesData = [
  {
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
    students: "5000+"
  },
  {
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
    students: "8000+"
  }
]

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUniversities = universitiesData.filter(university => {
    return (
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.program_offered.some(program => program.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-6 py-2 rounded-full mb-4 shadow-glow">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Lorem Ipsum Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-4">Explore Lorem Ipsum</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover top Lorem Ipsum institutions and find the perfect fit for your academic journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
              <input
                type="text"
                placeholder="Search Lorem Ipsum or programs..."
                className="w-full pl-12 pr-4 py-4 border-2 border-primary/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80 backdrop-blur-sm shadow-soft"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-primary">{filteredUniversities.length}</span> of <span className="font-semibold text-primary">{universitiesData.length}</span> institutions
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredUniversities.map((university) => {
            const name = university.name;
            const location = university.location;
            const type = university.type;
            const ranking = university.ranking;
            const campus = university.campus;
            const facultyStudentRatio = university["faculty-student-ratio"];
            const programOffered = university.program_offered;
            const website = university.website;
            const rating = university.rating;
            const students = university.students;
            
            return (
              <Card key={university.id} className="card-modern group overflow-hidden">
                {/* Header with gradient background */}
                <div className="bg-gradient-primary p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <Building className="w-8 h-8" />
                      </div>
                      <div className="text-right">
                        <Badge className="bg-white/20 text-white border-0 mb-2">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          {rating}
                        </Badge>
                        <div className="text-sm opacity-90">Rank #{ranking}</div>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <div className="flex items-center text-white/90">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gradient-light rounded-xl">
                      <div className="text-2xl font-bold text-gradient-primary">{campus.length}</div>
                      <div className="text-xs text-gray-600">Campus</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-light rounded-xl">
                      <div className="text-2xl font-bold text-gradient-primary">{facultyStudentRatio}</div>
                      <div className="text-xs text-gray-600">Ratio</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-light rounded-xl">
                      <div className="text-2xl font-bold text-gradient-primary">{programOffered.length}</div>
                      <div className="text-xs text-gray-600">Programs</div>
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-primary" />
                      Programs Offered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {programOffered.slice(0, 3).map((program, index) => (
                        <Badge key={index} variant="outline" className="border-primary/30 text-primary bg-primary/5">
                          {program}
                        </Badge>
                      ))}
                      {programOffered.length > 3 && (
                        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
                          +{programOffered.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between mb-6 p-3 bg-gradient-light rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        {students}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {type}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Link to={`/universities/${university.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white rounded-xl shadow-glow hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105">
                        <Award className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-xl transition-all duration-300">
                          <Building className="w-4 h-4 mr-2" />
                          Website
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-4">More Lorem Ipsum Coming Soon</h2>
            <p className="text-gray-600 text-lg">We're working on adding more Lorem Ipsum to our platform</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Lorem Ipsum Institute",
              "Dolor Sit University",
              "Amet Consectetur College",
              "Adipiscing Elit Academy",
              "Sed Do Eiusmod School",
              "Tempor Incididunt University"
            ].map((university, index) => (
              <Card key={index} className="card-modern border-dashed border-2 border-primary/30 bg-gradient-light/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary/10 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2 text-lg">{university}</h3>
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
                    Coming Soon
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredUniversities.length === 0 && (
          <Card className="card-modern text-center py-12 max-w-md mx-auto">
            <CardContent>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary/10 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Lorem Ipsum found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-xl"
                onClick={() => {
                  setSearchQuery("")
                }}
              >
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
