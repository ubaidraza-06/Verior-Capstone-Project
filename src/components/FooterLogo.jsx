import React from 'react'
import { Link } from 'react-router-dom'

export function FooterLogo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src="/footer-logo.png" alt="Guide Grad" className="h-8 w-auto" />
      <span className="text-xl font-bold text-white">Guide Grad</span>
    </Link>
  )
}
