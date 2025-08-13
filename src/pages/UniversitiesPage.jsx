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
} from "lucide-react"

// Static university data
const universitiesData = [
  {
    id: "lums",
    name: "Lahore University of Management Sciences (LUMS)",
    location: "Lahore",
    type: "Private",
    ranking: "1",
    campus: ["Main Campus"],
    "faculty-student-ratio": "1:15",
    program_offered: ["Business Administration", "Computer Science", "Economics", "Law"],
    website: "https://lums.edu.pk"
  },
  {
    id: "nust",
    name: "National University of Sciences and Technology (NUST)",
    location: "Islamabad",
    type: "Public",
    ranking: "2",
    campus: ["Main Campus", "Karachi Campus", "Lahore Campus"],
    "faculty-student-ratio": "1:18",
    program_offered: ["Engineering", "Medicine", "Business", "Computer Science"],
    website: "https://nust.edu.pk"
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-2 sm:mb-4">Universities</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top universities in Pakistan and find the perfect fit for your academic journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search universities or programs..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {filteredUniversities.length} of {universitiesData.length} universities
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredUniversities.map((university) => {
            const name = university.name;
            const location = university.location;
            const type = university.type;
            const ranking = university.ranking;
            const campus = university.campus;
            const facultyStudentRatio = university["faculty-student-ratio"];
            const programOffered = university.program_offered;
            const website = university.website;
            
            return (
              <Card key={university.id} className="flex flex-col items-stretch border border-gray-200 shadow-md rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200 relative">
                {/* Grey placeholder instead of image */}
                <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center">
                  <Building className="w-12 h-12 text-gray-500" />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  {/* Name, location, badges */}
                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-bold text-gray-900 truncate">{name}</h2>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">{type}</Badge>
                      {ranking && (
                        <Badge variant="secondary" className="text-xs">Rank #{ranking}</Badge>
                      )}
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="flex justify-between text-xs text-gray-600 bg-gray-50 rounded-lg px-3 py-2 mt-2">
                    {campus && campus.length > 0 && (
                      <div className="flex flex-col items-center">
                        <Building className="w-4 h-4 mb-1" />
                        <span className="font-medium">{campus.length}</span>
                        <span>Campus</span>
                      </div>
                    )}
                    {facultyStudentRatio && (
                      <div className="flex flex-col items-center">
                        <Users className="w-4 h-4 mb-1" />
                        <span className="font-medium">{facultyStudentRatio}</span>
                        <span>Faculty-Student</span>
                      </div>
                    )}
                    {programOffered && programOffered.length > 0 && (
                      <div className="flex flex-col items-center">
                        <BookOpen className="w-4 h-4 mb-1" />
                        <span className="font-medium">{programOffered.length}</span>
                        <span>Programs</span>
                      </div>
                    )}
                  </div>
                  {/* Programs */}
                  {programOffered && programOffered.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {programOffered.slice(0, 3).map((program, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                      {programOffered.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{programOffered.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                  {/* Action buttons */}
                  <div className="flex gap-2 mt-4">
                    <Link to={`/universities/${university.id}`} className="flex-1">
                      <Button className="w-full">View Details</Button>
                    </Link>
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full">Visit Website</Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-8 sm:mt-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">More Universities Coming Soon</h2>
            <p className="text-gray-600">We're working on adding more universities to our platform</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "IBA Karachi",
              "FAST University",
              "GIKI",
              "Habib University",
              "NED University",
              "COMSATS"
            ].map((university, index) => (
              <Card key={index} className="border-dashed border-2 border-gray-300 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="font-semibold text-gray-700 mb-2">{university}</h3>
                  <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredUniversities.length === 0 && (
          <Card className="text-center py-8">
            <CardContent>
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No universities found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
