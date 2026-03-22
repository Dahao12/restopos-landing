'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, LayoutDashboard, TrendingUp, Smartphone, Zap } from 'lucide-react'

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const benefits = [
    {
      icon: LayoutDashboard,
      title: 'Gestión integral',
      description: 'Controla todo desde un solo panel: pedidos, stock, mesas, delivery y métricas en tiempo real.',
      features: ['Panel centralizado', 'Acceso desde cualquier lugar', 'Múltiples roles y permisos'],
      color: '#0D1B41',
    },
    {
      icon: TrendingUp,
      title: 'Reportes en tiempo real',
      description: 'Toma decisiones basadas en datos con reportes detallados y dashboards personalizables.',
      features: ['Métricas al instante', 'Comparativas por período', 'Exportación a Excel/PDF'],
      color: '#1AB56A',
    },
    {
      icon: Smartphone,
      title: 'Integración delivery',
      description: 'Recibe y gestiona pedidos de diferentes apps delivery desde una sola interfaz.',
      features: ['PedidosYa, Rappi, Glovo', 'Menú sincronizado', 'Notificaciones instantáneas'],
      color: '#0D1B41',
    },
    {
      icon: Zap,
      title: 'Menú QR interactivo',
      description: 'Crea menús QR con fotos, descripciones y modificadoros de productos.',
      features: ['Fotos de alta calidad', 'Modificadores y variantes', 'Actualización automática'],
      color: '#1AB56A',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  return (
    <section ref={ref} className="py-20 px-6 bg-white overflow-hidden">
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
            style={{ backgroundColor: '#F4F5F9', color: '#0D1B41', fontFamily: 'var(--font-inter)' }}
          >
            Beneficios destacados
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
            Por qué elegir Zentrax
          </h2>
          <p className="text-xl" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
            Todo lo que necesitas para optimizar tu restaurante
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 hover:border-zentrax-green transition-all duration-300 hover:shadow-lg hidden md:flex"
            style={{ borderColor: '#E2E8F0' }}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#0D1B41' }} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 hover:border-zentrax-green transition-all duration-300 hover:shadow-lg hidden md:flex"
            style={{ borderColor: '#E2E8F0' }}
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#0D1B41' }} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {benefits.map((benefit, index) => {
              const isCurrent = index === currentIndex
              const isPrev = index === (currentIndex - 1 + benefits.length) % benefits.length
              const isNext = index === (currentIndex + 1) % benefits.length

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer border-2 ${
                    isCurrent ? 'border-zentrax-green shadow-xl' : 'border-transparent hover:border-gray-200'
                  }`}
                  style={{
                    backgroundColor: isCurrent ? '#F4F5F9' : '#FFFFFF',
                    transform: isCurrent ? 'scale(1.05)' : isPrev || isNext ? 'scale(1.02)' : 'scale(0.95)',
                    opacity: isCurrent || isPrev || isNext ? 1 : 0.5,
                  }}
                  onMouseEnter={() => setCurrentIndex(index)}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{
                      backgroundColor: `${benefit.color}20`,
                      border: `2px solid ${benefit.color}`,
                    }}
                  >
                    <benefit.icon className="w-8 h-8" style={{ color: benefit.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base mb-4" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
                    {benefit.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm"
                        style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: benefit.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Highlight indicator */}
                  {isCurrent && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 pt-4 border-t"
                      style={{ borderColor: '#E2E8F0' }}
                    >
                      <p className="text-xs font-medium" style={{ fontFamily: 'var(--font-poppins)', color: '#1AB56A' }}>
                        ← Desliza para más beneficios
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8' : 'w-2'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#1AB56A' : '#E2E8F0',
                }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <Stat number="+500" label="Restaurantes" />
          <Stat number="2M+" label="Pedidos/mes" />
          <Stat number="99.9%" label="Uptime" />
          <Stat number="24/7" label="Soporte" />
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-2"
        style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
      >
        {number}
      </motion.p>
      <p className="text-base" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
        {label}
      </p>
    </div>
  )
}