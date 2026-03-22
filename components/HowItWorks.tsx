'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Settings, ShoppingCart, Truck, BarChart3, ArrowRight, Check } from 'lucide-react'

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: Settings,
      title: 'Configuración del salón',
      description: 'Personaliza mesas, áreas y roles en minutos. Intuitivo y flexible.',
      color: '#0D1B41',
    },
    {
      icon: ShoppingCart,
      title: 'Toma de pedidos',
      description: 'Pedidos rápidos con sincronización instantánea a cocina y caja.',
      color: '#1AB56A',
    },
    {
      icon: Truck,
      title: 'Integración delivery',
      description: 'Conectaapps como PedidosYa, Rappi y Glovo en un solo lugar.',
      color: '#0D1B41',
    },
    {
      icon: BarChart3,
      title: 'Métricas en tiempo real',
      description: 'Analiza ventas, stock y rendimiento con dashboards actualizados.',
      color: '#1AB56A',
    },
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-zentrax-light">
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
            Simple y rápido
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
            Cómo funciona Zentrax
          </h2>
          <p className="text-xl" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
            En solo 4 pasos, tu restaurante está listo para operar
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-16">
          <div className="hidden md:flex justify-between items-center mb-8 px-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    index <= activeStep ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    backgroundColor: index <= activeStep ? step.color : '#FFFFFF',
                    border: index <= activeStep ? `2px solid ${step.color}` : '2px solid #0D1B41',
                  }}
                >
                  {index <= activeStep ? (
                    <Check className="w-8 h-8 text-white" />
                  ) : (
                    <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                      {index + 1}
                    </span>
                  )}
                </div>
                <p
                  className="text-sm font-medium text-center max-w-[120px]"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    color: index <= activeStep ? '#0D1B41' : '#8A91A8',
                  }}
                >
                  {step.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="hidden md:block mb-12 px-12">
            <div className="h-2 rounded-full" style={{ backgroundColor: '#E2E8F0' }}>
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-full transition-all duration-300"
                style={{ backgroundColor: '#1AB56A' }}
              />
            </div>
          </div>
        </div>

        {/* Step Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border hover:border-zentrax-green"
              style={{ borderColor: index === activeStep ? '#1AB56A' : '#E2E8F0' }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: `${step.color}15`,
                  border: index === activeStep ? `2px solid ${step.color}` : 'none',
                }}
              >
                <step.icon className="w-7 h-7" style={{ color: step.color }} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base mb-6" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
                {step.description}
              </p>

              {/* Arrow indicator */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ fontFamily: 'var(--font-inter)', color: step.color }}
              >
                {index < steps.length - 1 ? 'Siguiente paso' : '¡Listo!'} <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile indicator */}
        <div className="md:hidden mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 mb-6 last:mb-0"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: step.color }}
              >
                {index <= activeStep ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-poppins)', color: '#FFFFFF' }}>
                    {index + 1}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                  {step.title}
                </h4>
                <p className="text-sm" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}