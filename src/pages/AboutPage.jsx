import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Users, Award, BookOpen, Heart, Target, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-2 sm:mb-4">About Guide Grad</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Pakistani students to achieve their higher education dreams through comprehensive guidance and support
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-8 sm:mb-12">
          <Card className="bg-primary text-white">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center">
                <Target className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg sm:text-xl text-primary-light max-w-3xl mx-auto">
                  To bridge the gap between Pakistani students and their dream universities by providing comprehensive, 
                  personalized guidance and connecting them with experienced ambassadors who have walked the same path.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vision Section */}
        <section className="mb-8 sm:mb-12">
          <Card className="bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center">
                <Globe className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-primary" />
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  To become the leading platform for Pakistani students seeking higher education guidance, 
                  fostering a community where every student has access to the resources and support they need to succeed.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-primary-light hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Empathy</CardTitle>
                <CardDescription>
                  We understand the challenges students face and provide compassionate, personalized support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary-light hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Excellence</CardTitle>
                <CardDescription>
                  We strive for excellence in everything we do, from the quality of our guidance to our platform
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary-light hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Community</CardTitle>
                <CardDescription>
                  We believe in the power of community and peer support in achieving educational goals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary-light hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Knowledge</CardTitle>
                <CardDescription>
                  We are committed to providing accurate, up-to-date information and expert guidance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary-light hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Accessibility</CardTitle>
                <CardDescription>
                  We make quality education guidance accessible to all Pakistani students, regardless of background
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary-light hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">Innovation</CardTitle>
                <CardDescription>
                  We continuously innovate to provide the best possible experience for our students
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals behind Guide Grad
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Ubaid Raza",
                role: "Founder & CEO",
                image: "/team/ubaid-raza.png",
                description: "Passionate about education and technology"
              },
              {
                name: "Faraz Hussain",
                role: "Head of Operations",
                image: "/team/faraz-hussain.png",
                description: "Expert in educational consulting"
              },
              {
                name: "Aqsa Anwar",
                role: "Content Director",
                image: "/team/aqsa-anwar.png",
                description: "Specialist in university admissions"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector('.placeholder')) {
                          const placeholder = document.createElement('div');
                          placeholder.className = 'placeholder w-full h-full bg-gray-200 flex items-center justify-center';
                          placeholder.innerHTML = `<Users className="w-8 h-8 text-gray-400" />`;
                          parent.appendChild(placeholder);
                        }
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                  <Badge className="mb-2">{member.role}</Badge>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-8 sm:mb-12">
          <Card className="bg-primary text-white">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Impact</h2>
                <p className="text-primary-light">
                  Numbers that reflect our commitment to student success
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">20+</div>
                  <div className="text-primary-light text-sm sm:text-base">Universities Listed</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">100+</div>
                  <div className="text-primary-light text-sm sm:text-base">Students Helped</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">20+</div>
                  <div className="text-primary-light text-sm sm:text-base">Student Ambassadors</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">85%</div>
                  <div className="text-primary-light text-sm sm:text-base">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-white">
            <CardContent className="p-6 sm:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Have questions or want to learn more about how we can help you achieve your educational goals? 
                We'd love to hear from you.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>📧 guidegrad1@gmail.com</p>
                <p>📞 +92-333-7013724</p>
                <p>📍 Hyderabad, Pakistan</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
