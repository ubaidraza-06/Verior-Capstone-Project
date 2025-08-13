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
    name: "Lorem Ipsum",
    university: "Dolor Sit",
    program: "Amet Consectetur",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    specialties: ["Lorem Ipsum", "Dolor Sit", "Amet Consectetur"]
  },
  {
    id: "2",
    name: "Dolor Sit",
    university: "Amet Consectetur",
    program: "Adipiscing Elit",
    bio: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    specialties: ["Adipiscing Elit", "Sed Do Eiusmod", "Tempor Incididunt"]
  },
  {
    id: "3",
    name: "Amet Consectetur",
    university: "Adipiscing Elit",
    program: "Sed Do Eiusmod",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    specialties: ["Sed Do Eiusmod", "Tempor Incididunt", "Ut Labore"]
  },
  {
    id: "4",
    name: "Adipiscing Elit",
    university: "Sed Do Eiusmod",
    program: "Tempor Incididunt",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    specialties: ["Tempor Incididunt", "Ut Labore", "Dolore Magna"]
  },
  {
    id: "5",
    name: "Sed Do Eiusmod",
    university: "Tempor Incididunt",
    program: "Ut Labore",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    specialties: ["Ut Labore", "Dolore Magna", "Aliqua Ut"]
  },
  {
    id: "6",
    name: "Tempor Incididunt",
    university: "Ut Labore",
    program: "Dolore Magna",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    specialties: ["Dolore Magna", "Aliqua Ut", "Enim Ad"]
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
    <div className="min-h-screen bg-gradient-light pt-20">
      <Dialog open={isMessageInfoModalOpen} onOpenChange={setIsMessageInfoModalOpen}>
        <DialogContent className="border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-primary">Coming Soon!</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsMessageInfoModalOpen(false)} className="bg-gradient-primary hover:bg-gradient-secondary text-white">
            Got it
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isApplyInfoModalOpen} onOpenChange={setIsApplyInfoModalOpen}>
        <DialogContent className="border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-primary">Applications Coming Soon!</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsApplyInfoModalOpen(false)} className="bg-gradient-primary hover:bg-gradient-secondary text-white">
            Got it
          </Button>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-4">Lorem Ipsum Ambassadors</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white border-primary/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{ambassadorsData.length}+</div>
              <div className="text-sm text-gray-600">Active Ambassadors</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-primary/20">
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">6+</div>
              <div className="text-sm text-gray-600">Lorem Ipsum Covered</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-primary/20">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">Lorem Ipsum Helped</div>
            </CardContent>
          </Card>
        </div>

        {/* Ambassador Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {ambassadorsData.map((ambassador) => (
            <Card key={ambassador.id} className="card-modern group">
              <CardContent className="p-6 flex flex-col flex-1">
                {/* Avatar placeholder */}
                <div className="aspect-square w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Users className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1 text-center">{ambassador.name}</h3>
                <p className="text-sm text-gray-600 mb-2 text-center">{ambassador.university} • {ambassador.program}</p>
                <p className="text-xs text-gray-500 mb-3">{ambassador.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {ambassador.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-primary-light text-primary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2 mt-auto">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:bg-gradient-secondary text-white text-sm shadow-glow"
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
        <Card className="bg-gradient-primary text-white border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Become an Ambassador</h3>
            <p className="text-primary-light mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 shadow-lg"
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
