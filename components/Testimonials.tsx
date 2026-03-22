'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      restaurant: 'La Cocina de María',
      city: 'Barcelona',
      stars: 5,
      text: 'La importación de Excel me ahorró días de trabajo. En 15 minutos tenía todo mi inventário configurado. Increíble!'
    },
    {
      name: 'Carlos Ruiz',
      restaurant: 'El Rincón del Sabor',
      city: 'Madrid',
      stars: 5,
      text: 'El CMV automático me mostraba dónde perdía dinero. Reduje mis pérdidas en un 30% el primer mes.'
    },
    {
      name: 'Ana Martínez',
      restaurant: 'Casa Ana',
      city: 'Valencia',
      stars: 5,
      text: 'Las predicciones de ventas son exactas. Ya nunca me quedo sin ingredientes clave en el pico de la noche.'
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 50 restaurants ya transformaron su gestión con Restopos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md"
            >
              <Quote className="w-10 h-10 text-primary-300 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.restaurant}, {testimonial.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}