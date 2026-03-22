'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold" style={{ color: '#0F172A' }}>Zentrax</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium style={{ color: '#0F172A' }} hover:text-zentrax-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#demo" className="bg-zentrax-primary text-white px-5 py-2.5 rounded-lg hover:bg-zentrax-primary/90 transition-colors text-sm font-medium">
              Probar demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zentrax-dark hover:text-zentrax-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#features" className="block py-2 text-sm font-medium text-zentrax-dark hover:text-zentrax-primary">
              Funcionalidades
            </a>
            <a href="#demo" className="block mt-2 bg-zentrax-primary text-white px-5 py-2.5 rounded-lg text-center text-sm font-medium">
              Probar demo
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}