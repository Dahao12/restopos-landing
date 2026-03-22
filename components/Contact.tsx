'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitLead } from '@/lib/supabase'
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    restaurant: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitLead(formData)
      setIsSuccess(true)
      setFormData({ name: '', restaurant: '', email: '', phone: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empieza tu prueba gratuita
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            14 días GRATIS. Sin tarjeta de crédito. Sin compromiso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSuccess ? (
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¡Gracias por tu interés!
                </h3>
                <p className="text-gray-600 mb-2">
                  Hemos recibido tu información
                </p>
                <p className="text-gray-600">
                  Te contactaremos pronto para activar tu prueba gratuita
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Carlos Ruiz"
                    />
                  </div>

                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre del restaurante *
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      required
                      value={formData.restaurant}
                      onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Mi Restaurante"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="carlos@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar prueba gratuita'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <Phone className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">¿Necesitas ayuda?</h4>
                <p className="text-gray-600 text-sm">
                  Nuestro equipo está disponible para responder tus dudas y ayudarte a configurar tu cuenta.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <Mail className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Respuesta rápida</h4>
                <p className="text-gray-600 text-sm">
                  Te contactaremos en menos de 24 horas para activar tu prueba gratuita.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <MapPin className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Sin compromiso</h4>
                <p className="text-gray-600 text-sm">
                  Prueba durante 14 días. Si no te gusta, cancela fácilmente. Sin costos ocultos.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-6 rounded-xl text-white">
              <h4 className="font-bold text-lg mb-2">¿No estás seguro?</h4>
              <p className="text-primary-100 mb-4">
                Agenda una demostración gratuita de 30 minutos con nuestro equipo.
              </p>
              <a
                href="mailto:info@restopos.com"
                className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}