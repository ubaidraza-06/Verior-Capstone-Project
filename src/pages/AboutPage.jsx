import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Users, Award, BookOpen, Heart, Target, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-light pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-4">About Campus Expert</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12">
          <Card className="bg-gradient-primary text-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <Target className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg sm:text-xl text-primary-light max-w-3xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <Card className="bg-white border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <Globe className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              },
              {
                icon: Award,
                title: "Dolor Sit",
                description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              },
              {
                icon: Users,
                title: "Amet Consectetur",
                description: "Duis aute irure dolor in reprehenderit in voluptate"
              },
              {
                icon: BookOpen,
                title: "Adipiscing Elit",
                description: "Excepteur sint occaecat cupidatat non proident"
              },
              {
                icon: Target,
                title: "Sed Do Eiusmod",
                description: "Sunt in culpa qui officia deserunt mollit anim id"
              },
              {
                icon: Globe,
                title: "Tempor Incididunt",
                description: "Est laborum et dolorum fuga harum quidem rerum"
              }
            ].map((value, index) => (
              <Card key={index} className="card-modern group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gradient-primary">{value.title}</CardTitle>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lorem Ipsum",
                role: "Founder & CEO",
                description: "Lorem ipsum dolor sit amet"
              },
              {
                name: "Dolor Sit",
                role: "Head of Operations",
                description: "Consectetur adipiscing elit"
              },
              {
                name: "Amet Consectetur",
                role: "Content Director",
                description: "Sed do eiusmod tempor incididunt"
              }
            ].map((member, index) => (
              <Card key={index} className="card-modern text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-semibold text-xl">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-1">{member.name}</h3>
                  <Badge className="mb-2 bg-primary-light text-primary">{member.role}</Badge>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12">
          <Card className="bg-gradient-primary text-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Impact</h2>
                <p className="text-primary-light text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                {[
                  { number: "20+", label: "Lorem Ipsum" },
                  { number: "100+", label: "Dolor Sit" },
                  { number: "20+", label: "Amet Consectetur" },
                  { number: "85%", label: "Adipiscing Elit" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-primary-light text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-white border-primary/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>📧 lorem@ipsum.com</p>
                <p>📞 +1-234-567-8900</p>
                <p>📍 Lorem Ipsum, Dolor</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
