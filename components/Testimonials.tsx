'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      name: 'Ana María González',
      role: 'Gerente - La Casa del Sabor',
      avatar: 'AG',
      rating: 5,
      text: 'Implementamos Zentrax hace 3 meses y nuestra eficiencia aumentó un 40%. Los reportes en tiempo real nos permiten tomar decisiones inmediatas.',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Dueño - Pizzería Napoli',
      avatar: 'CR',
      rating: 5,
      text: 'La integración con apps de delivery fue clave para nosotros. Ahora gestionamos todos los pedidos desde un solo lugar y no perdemos ninguna orden.',
    },
    {
      name: 'Martina Fernández',
      role: 'Directora - Restaurant El Patio',
      avatar: 'MF',
      rating: 5,
      text: 'El menú QR y la toma de pedidos móviles revolucionaron el servicio. Los clientes están más felices y nuestro equipo es más eficiente.',
    },
    {
      name: 'Pedro Sánchez',
      role: 'Chef - Burger House',
      avatar: 'PS',
      rating: 5,
      text: 'Sincronización perfecta entre sala y cocina. Ya no hay confusiones ni pedidos retrasados. Zentrax es indispensable para nosotros.',
    },
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-6 bg-zentrax-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: '#0D1B41', color: '#FFFFFF', fontFamily: 'var(--font-inter)' }}
          >
            Lo que dicen nuestros clientes
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
            Testimonios reales
          </h2>
          <p className="text-xl" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
            Restaurantes que ya transformaron su gestión con Zentrax
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 hover:border-zentrax-green transition-all duration-300 hover:shadow-lg"
            style={{ borderColor: '#E2E8F0' }}
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#0D1B41' }} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 hover:border-zentrax-green transition-all duration-300 hover:shadow-lg"
            style={{ borderColor: '#E2E8F0' }}
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#0D1B41' }} />
          </button>

          {/* Cards */}
          <div
            className="relative h-[450px] md:h-[400px] overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            {testimonials.map((testimonial, index) => {
              const position = (index - currentIndex + testimonials.length) % testimonials.length
              const active = position === 0
              const prev = position === testimonials.length - 1
              const next = position === 1

              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: active ? 1 : 0.8,
                    opacity: active || prev || next ? 1 : 0,
                    x: prev ? '-80%' : next ? '80%' : '0%',
                    zIndex: active ? 10 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                  }}
                >
                  <TestimonialCard testimonial={testimonial} active={active} />
                </motion.div>
              )
            })}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8' : 'w-2'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#1AB56A' : '#E2E8F0',
                }}
                aria-label={`Testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p
            className="text-lg mb-6"
            style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
          >
            Únete a +500 restaurantes que ya mejoraron su gestión
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zentrax-green text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Solicitar demo gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  active,
}: {
  testimonial: {
    name: string
    role: string
    avatar: string
    rating: number
    text: string
  }
  active: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: active ? -8 : -4 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 cursor-pointer"
      style={{
        borderColor: active ? '#1AB56A' : '#E2E8F0',
      }}
    >
      {/* Quote icon */}
      <Quote className="w-12 h-12 mb-6 opacity-20" style={{ color: '#0D1B41' }} />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Text */}
      <p
        className="text-lg mb-6 leading-relaxed"
        style={{
          fontFamily: 'var(--font-inter)',
          color: '#8A91A8',
          fontStyle: 'italic',
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg"
          style={{
            fontFamily: 'var(--font-poppins)',
            backgroundColor: '#0D1B41',
            color: '#FFFFFF',
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p
            className="font-semibold text-base"
            style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-sm"
            style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}