'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-3xl font-bold transition-colors" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
              Zentrax
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#features" className="nav-link" style={{ fontFamily: 'var(--font-inter)' }}>
              Funcionalidades
            </a>
            <a href="#how-it-works" className="nav-link" style={{ fontFamily: 'var(--font-inter)' }}>
              Cómo funciona
            </a>
            <a href="#benefits" className="nav-link" style={{ fontFamily: 'var(--font-inter)' }}>
              Beneficios
            </a>
            <a href="#integrations" className="nav-link" style={{ fontFamily: 'var(--font-inter)' }}>
              Integraciones
            </a>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo"
              className="bg-zentrax-green text-white px-6 py-2.5 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Demo gratis
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
            style={{ color: '#0D1B41' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-6 pt-4 border-t"
            style={{ borderColor: '#E2E8F0', backgroundColor: '#FFFFFF' }}
          >
            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="#features"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium py-2"
                style={{ fontFamily: 'var(--font-inter)', color: '#0D1B41' }}
              >
                Funcionalidades
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#how-it-works"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium py-2"
                style={{ fontFamily: 'var(--font-inter)', color: '#0D1B41' }}
              >
                Cómo funciona
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#benefits"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium py-2"
                style={{ fontFamily: 'var(--font-inter)', color: '#0D1B41' }}
              >
                Beneficios
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="#integrations"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium py-2"
                style={{ fontFamily: 'var(--font-inter)', color: '#0D1B41' }}
              >
                Integraciones
              </motion.a>

              {/* Mobile CTA */}
              <motion.div className="pt-6">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#demo"
                  onClick={() => setIsOpen(false)}
                  className="bg-zentrax-green text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Demo gratis
                  <ArrowRight size={18} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          color: #8A91A8;
          font-family: var(--font-inter);
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #1AB56A;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #0D1B41;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  )
}