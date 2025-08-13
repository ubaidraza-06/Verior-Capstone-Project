import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog"
import {
  Users,
  MessageCircle,
  Award,
  Rocket,
} from "lucide-react"

// Static ambassador data
const ambassadorsData = [
  {
    id: "1",
    name: "Ayesha Khan",
    university: "LUMS",
    program: "Business Administration",
    bio: "Passionate about helping students navigate the complex world of business education. Currently in my final year at LUMS.",
    specialties: ["Business", "Admissions", "Career Guidance"]
  },
  {
    id: "2",
    name: "Ahmed Ali",
    university: "IBA Karachi",
    program: "Computer Science",
    bio: "Tech enthusiast and coding mentor. Love sharing my experience about the tech industry and university life.",
    specialties: ["Computer Science", "Programming", "Tech Industry"]
  },
  {
    id: "3",
    name: "Fatima Sheikh",
    university: "NUST",
    program: "Engineering",
    bio: "Engineering student with a passion for innovation. Happy to guide students through the engineering admission process.",
    specialties: ["Engineering", "Innovation", "Research"]
  },
  {
    id: "4",
    name: "Hassan Raza",
    university: "FAST",
    program: "Software Engineering",
    bio: "Software engineer and startup enthusiast. Experienced in both academic and industry perspectives.",
    specialties: ["Software Engineering", "Startups", "Industry Experience"]
  },
  {
    id: "5",
    name: "Sara Ahmed",
    university: "GIKI",
    program: "Electrical Engineering",
    bio: "Electrical engineering student with a focus on renewable energy. Passionate about sustainable technology.",
    specialties: ["Electrical Engineering", "Renewable Energy", "Sustainability"]
  },
  {
    id: "6",
    name: "Omar Khan",
    university: "Habib University",
    program: "Liberal Arts",
    bio: "Liberal arts student with a love for humanities and social sciences. Advocate for interdisciplinary education.",
    specialties: ["Liberal Arts", "Humanities", "Interdisciplinary Studies"]
  }
]

export default function AmbassadorsPage() {
  const [isMessageInfoModalOpen, setIsMessageInfoModalOpen] = useState(false)
  const [isApplyInfoModalOpen, setIsApplyInfoModalOpen] = useState(false)

  const openMessageDialog = () => {
    setIsMessageInfoModalOpen(true)
  }

  const handleApplyClick = () => {
    setIsApplyInfoModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Dialog open={isMessageInfoModalOpen} onOpenChange={setIsMessageInfoModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Coming Soon!</DialogTitle>
            <DialogDescription>
              The messaging feature is currently under development. Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsMessageInfoModalOpen(false)}>
            Got it
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isApplyInfoModalOpen} onOpenChange={setIsApplyInfoModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Applications Coming Soon!</DialogTitle>
            <DialogDescription>
              We're currently not accepting new applications in our ambassador program. Please check back later!
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsApplyInfoModalOpen(false)}>
            Got it
          </Button>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-2 sm:mb-4">Student Ambassadors</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with current students and alumni from your target universities. Get firsthand insights
            and guidance for your academic journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{ambassadorsData.length}+</div>
              <div className="text-xs sm:text-sm text-gray-600">Active Ambassadors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900">6+</div>
              <div className="text-xs sm:text-sm text-gray-600">Universities Covered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 text-center">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900">100+</div>
              <div className="text-xs sm:text-sm text-gray-600">Students Helped</div>
            </CardContent>
          </Card>
        </div>

        {/* Ambassador Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {ambassadorsData.map((ambassador) => (
            <Card key={ambassador.id} className="border-primary-light flex flex-col">
              <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                {/* Grey placeholder instead of image */}
                <div className="aspect-square w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                  <Users className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-primary mb-1 text-center">{ambassador.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 text-center">{ambassador.university} • {ambassador.program}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3">{ambassador.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {ambassador.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2 mt-auto">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary-dark text-sm"
                    onClick={openMessageDialog}
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-8 sm:mt-12 bg-primary text-white">
          <CardContent className="p-6 sm:p-8 text-center">
            <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Become an Ambassador</h3>
            <p className="text-sm sm:text-base text-primary-light mb-4 sm:mb-6">
              Share your university experience and help guide future students
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
              onClick={handleApplyClick}
            >
              Apply Now
              <Rocket className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
