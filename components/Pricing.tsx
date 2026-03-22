'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 17000,
      period: 'mes',
      description: 'Para restaurantes pequeños que empiezan',
      features: [
        'Inventário completo',
        'CMV básico',
        'Alertas de stock bajo',
        'Importación Excel/CSV',
        'Hasta 1000 productos',
        'Soporte por email',
      ],
      recommended: false
    },
    {
      name: 'Pro',
      price: 34000,
      period: 'mes',
      description: 'Para restaurantes en crecimiento',
      features: [
        'Todo de Starter',
        'CMV avanzado detallado',
        'Sugestões de compra inteligentes',
        'Predicción manual de ventas',
        'Hasta 5000 productos',
        'Soporte prioritario',
      ],
      recommended: true
    },
    {
      name: 'Premium',
      price: 58000,
      period: 'mes',
      description: 'Para restaurantes con múltiples ubicaciones',
      features: [
        'Todo de Pro',
        'Integraciones con ERPs',
        'Predicción histórica (ML)',
        'Multi-restaurante',
        'Productos ilimitados',
        'Soporte dedicado 24/7',
      ],
      recommended: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Precios transparentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            14 días de prueba GRATIS. Sin tarjetas de crédito.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">5-15% más barato que FUDO</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                plan.recommended
                  ? 'bg-primary-600 text-white shadow-2xl scale-105'
                  : 'bg-white shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold text-sm">
                    Recomendado
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`${plan.recommended ? 'text-primary-100' : 'text-gray-600'} mb-4`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price.toLocaleString()}</span>
                <span className={`ml-2 ${plan.recommended ? 'text-primary-100' : 'text-gray-600'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-white' : 'text-primary-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.recommended
                    ? 'bg-white text-primary-600 hover:bg-gray-100'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Prueba gratis
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}