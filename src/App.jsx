import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UniversitiesPage from './pages/UniversitiesPage'
import AmbassadorsPage from './pages/AmbassadorsPage'
import UniversityDetailPage from './pages/UniversityDetailPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/universities" element={<UniversitiesPage />} />
        <Route path="/universities/:id" element={<UniversityDetailPage />} />
        <Route path="/ambassadors" element={<AmbassadorsPage />} />
      </Routes>
    </div>
  )
}

export default App
