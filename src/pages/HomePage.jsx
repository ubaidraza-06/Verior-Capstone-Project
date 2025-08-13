import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { BookOpen, Users, Award, ArrowRight, Star, CheckCircle, Rocket, Target, Globe, Zap } from "lucide-react"
import { FooterLogo } from "../components/FooterLogo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-primary text-white border-0 px-6 py-2 rounded-full text-sm font-medium shadow-glow">
            🚀 Lorem Ipsum Dolor
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Lorem Ipsum
            <span className="text-gradient-primary block mt-2">Dolor Sit Amet</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/universities" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white text-lg px-8 py-4 rounded-full shadow-glow hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105">
                <Rocket className="mr-2 w-5 h-5" />
                Lorem Ipsum
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/ambassadors" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Users className="mr-2 w-5 h-5" />
                Dolor Sit
              </Button>
            </Link>
          </div>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "Lorem", icon: "🎓" },
              { number: "100+", label: "Ipsum", icon: "👥" },
              { number: "20+", label: "Dolor", icon: "🌟" },
              { number: "85%", label: "Sit Amet", icon: "📈" }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gradient-primary">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-4">Lorem Ipsum Dolor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                features: ["Dolor sit amet", "Consectetur adipiscing", "Sed do eiusmod"]
              },
              {
                icon: Users,
                title: "Dolor Sit",
                description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                features: ["Quis nostrud", "Exercitation ullamco", "Laboris nisi"]
              },
              {
                icon: Award,
                title: "Amet Consectetur",
                description: "Duis aute irure dolor in reprehenderit in voluptate",
                features: ["Velit esse", "Cillum dolore", "Eu fugiat"]
              }
            ].map((feature, index) => (
              <Card key={index} className="card-modern group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gradient-primary">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-primary relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Lorem Ipsum", icon: "🎓" },
              { number: "100+", label: "Dolor Sit", icon: "👥" },
              { number: "20+", label: "Amet Consectetur", icon: "🌟" },
              { number: "85%", label: "Adipiscing Elit", icon: "📈" }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-4">Lorem Ipsum Dolor</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Lorem Ipsum",
                university: "Dolor Sit",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
                rating: 5
              },
              {
                name: "Dolor Sit",
                university: "Amet Consectetur",
                text: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                rating: 5
              },
              {
                name: "Amet Consectetur",
                university: "Adipiscing Elit",
                text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
                rating: 5
              },
            ].map((testimonial, index) => (
              <Card key={index} className="card-modern">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gradient-primary">{testimonial.university}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-secondary relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Lorem Ipsum Dolor Sit?</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/universities" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <Rocket className="mr-2 w-5 h-5" />
                Lorem Ipsum
              </Button>
            </Link>
            <Link to="/ambassadors" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <Users className="mr-2 w-5 h-5" />
                Dolor Sit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="card-modern">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-4">Lorem Ipsum Dolor</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
                <Link to="/about" className="inline-block">
                  <Button className="bg-gradient-primary hover:bg-gradient-secondary text-white px-8 py-3 rounded-full shadow-glow hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105">
                    <Globe className="mr-2 w-4 h-4" />
                    Lorem Ipsum
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-dark text-white py-16 px-4 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-gradient-primary" />
                <FooterLogo />
              </div>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Lorem Ipsum</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/universities" className="hover:text-white transition-colors duration-300">
                    🎓 Lorem
                  </Link>
                </li>
                <li>
                  <Link to="/ambassadors" className="hover:text-white transition-colors duration-300">
                    🌟 Ipsum
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors duration-300">
                    ℹ️ Dolor
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Sit Amet</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors duration-300">
                    📖 Lorem Ipsum
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Consectetur</h3>
              <div className="space-y-3 text-gray-300">
                <p>📧 lorem@ipsum.com</p>
                <p>📞 +1-234-567-8900</p>
                <p>📍 Lorem Ipsum, Dolor</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Campus Expert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
