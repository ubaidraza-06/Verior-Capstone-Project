import React from 'react'
import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src="/logo.png" alt="Guide Grad" className="h-8 w-auto" />
      <span className="text-xl font-bold text-primary">Guide Grad</span>
    </Link>
  )
}
