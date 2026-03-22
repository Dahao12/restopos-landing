'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Restopos</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Funcionalidades
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Precios
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">
              Testimonios
            </a>
            <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Prueba Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#features" className="block py-2 text-gray-700 hover:text-primary-600">
              Funcionalidades
            </a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-primary-600">
              Precios
            </a>
            <a href="#testimonials" className="block py-2 text-gray-700 hover:text-primary-600">
              Testimonios
            </a>
            <a href="#contact" className="block mt-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-center">
              Prueba Gratis
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}