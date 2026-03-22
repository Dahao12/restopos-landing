'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CheckCircle, Circle, Send, Loader2, ArrowRight } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  restaurant: string
  businessType: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  restaurant?: string
  businessType?: string
}

export default function DemoForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    restaurant: '',
    businessType: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (field: keyof FormData, value: string) => {
    let error = ''

    switch (field) {
      case 'name':
        if (!value.trim()) error = 'El nombre es obligatorio'
        else if (value.length < 2) error = 'El nombre debe tener al menos 2 caracteres'
        break
      case 'email':
        if (!value.trim()) error = 'El email es obligatorio'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email inválido'
        break
      case 'phone':
        if (!value.trim()) error = 'El teléfono es obligatorio'
        else if (!/^\+?[\d\s-]{10,}$/.test(value)) error = 'Teléfono inválido'
        break
      case 'restaurant':
        if (!value.trim()) error = 'El nombre del restaurante es obligatorio'
        break
      case 'businessType':
        if (!value) error = 'Selecciona un tipo de negocio'
        break
    }

    setErrors((prev) => ({ ...prev, [field]: error }))
    return !error
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      validateField(field, value)
    }
  }

  const handleBlur = (field: keyof FormData, value: string) => {
    validateField(field, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar todos los campos
    let isValid = true
    Object.entries(formData).forEach(([key, value]) => {
      if (!validateField(key as keyof FormData, value)) {
        isValid = false
      }
    })

    if (!isValid) return

    setIsSubmitting(true)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const businessTypes = [
    'Restaurante',
    'Pizzería',
    'Cafetería',
    'Bar',
    'Food truck',
    'Delivery',
    'Otro',
  ]

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-12 text-center max-w-lg mx-auto shadow-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: '#DCFCE7' }}
        >
          <CheckCircle className="w-10 h-10" style={{ color: '#166534' }} />
        </motion.div>

        <h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
        >
          ¡Gracias por tu interés!
        </h2>

        <p
          className="text-lg mb-6"
          style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
        >
          Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas para agendar tu demo personalizada.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              email: '',
              phone: '',
              restaurant: '',
              businessType: '',
            })
            setErrors({})
          }}
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{
            fontFamily: 'var(--font-poppins)',
            backgroundColor: '#0D1B41',
            color: '#FFFFFF',
          }}
        >
          Volver al inicio
        </motion.button>
      </motion.div>
    )
  }

  return (
    <section ref={ref} className="py-20 px-6 bg-zentrax-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: '#DCFCE7', color: '#166534', fontFamily: 'var(--font-inter)' }}
            >
              Sin compromiso. Gratis.
            </motion.span>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
            >
              Solicita tu demo gratis ahora
            </h2>

            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
            >
              Descubre cómo Zentrax puede transformar tu restaurante. Una demo personalizada de 30 minutos sin compromiso.
            </p>

            <div className="space-y-4">
              <BenefitItem text="✅ Demo personalizada de 30 minutos" />
              <BenefitItem text="✅ No necesitas tarjeta de crédito" />
              <BenefitItem text="✅ Acceso a todas las funcionalidades" />
              <BenefitItem text="✅ Soporte de implementación incluido" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-white rounded-xl border-2"
              style={{ borderColor: '#1AB56A' }}
            >
              <p className="font-semibold mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                ¿Dudas?
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
              >
                Habla con nuestro equipo: info@zentrax.com
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
              >
                Completa el formulario
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={(e) => handleBlur('name', e.target.value)}
                    placeholder="Juan Pérez"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-200 focus:border-zentrax-green'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={(e) => handleBlur('email', e.target.value)}
                    placeholder="juan@restaurante.com"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-200 focus:border-zentrax-green'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={(e) => handleBlur('phone', e.target.value)}
                    placeholder="+54 11 1234 5678"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-zentrax-green'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>

                {/* Restaurant */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                    Nombre del restaurante *
                  </label>
                  <input
                    type="text"
                    value={formData.restaurant}
                    onChange={(e) => handleChange('restaurant', e.target.value)}
                    onBlur={(e) => handleBlur('restaurant', e.target.value)}
                    placeholder="La Casa del Sabor"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.restaurant ? 'border-red-500' : 'border-gray-200 focus:border-zentrax-green'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                  {errors.restaurant && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.restaurant}
                    </motion.p>
                  )}
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                    Tipo de negocio *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleChange('businessType', e.target.value)}
                    onBlur={(e) => handleBlur('businessType', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.businessType ? 'border-red-500' : 'border-gray-200 focus:border-zentrax-green'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <option value="">Selecciona una opción</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.businessType}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-zentrax-green text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Solicitar demo gratis
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </div>

              <p className="text-xs text-center mt-6" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
                Al enviar este formulario, aceptas nuestra política de privacidad.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3"
    >
      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#1AB56A' }} />
      <span className="text-base" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
        {text}
      </span>
    </motion.div>
  )
}