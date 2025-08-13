import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, Menu, X, Sparkles } from "lucide-react"
import { Button } from "./ui/button"

export function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/universities", label: "Universities", icon: "🎓" },
    { href: "/ambassadors", label: "Ambassadors", icon: "🌟" },
    { href: "/about", label: "About", icon: "ℹ️" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Back button */}
            <div className="flex items-center space-x-4">
              {!isHomePage && (
                <Button
                  className="flex items-center space-x-2 bg-gradient-primary hover:bg-gradient-secondary text-white rounded-full px-4 py-2 transition-all duration-300 shadow-glow"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Back</span>
                </Button>
              )}
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-gradient-primary animate-pulse-slow" />
                <span className="text-xl font-bold text-black">Campus Expert</span>
              </div>
            </div>

            {/* Center - Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  <span className="flex items-center space-x-2 text-black font-medium">
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))}
            </nav>

            {/* Right side - Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-black" />
                ) : (
                  <Menu className="w-6 h-6 text-black" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="glass rounded-2xl p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-black hover:bg-white/10 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
