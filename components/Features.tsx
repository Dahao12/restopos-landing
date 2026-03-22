'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, TrendingUp, AlertCircle, Zap, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: CheckCircle2,
      title: 'Importación Excel/CSV',
      description: 'Importa tu inventario existente en segundos. Compatible con cualquier ERP.',
      highlight: true
    },
    {
      icon: TrendingUp,
      title: 'CMV Automático',
      description: 'Calcula el costo de materiales vendidos en tiempo real. Identifica fugas de dinero.',
      highlight: true
    },
    {
      icon: AlertCircle,
      title: 'Sugestões de Compra',
      description: 'Alertas automáticas cuando el stock es bajo. Compra justo a tiempo.',
      highlight: true
    },
    {
      icon: Zap,
      title: 'Predicción de Ventas',
      description: 'Predicciones manuales o basadas en histórico. Planea con anticipación.',
      highlight: true
    },
    {
      icon: Shield,
      title: 'Alertas de Stock',
      description: 'Recibe alertas cuando el inventário necesita atención. Nunca te quedes sin stock.',
      highlight: false
    },
  ]

  const comparison = [
    { feature: 'Importación Excel/CSV', restopos: true, fudo: false, maxirest: false },
    { feature: 'Sugestões de Compra (CMV)', restopos: true, fudo: false, maxirest: false },
    { feature: 'Predicción Manual', restopos: true, fudo: false, maxirest: false },
    { feature: 'Precio 5-15% más barato', restopos: true, fudo: false, maxirest: false },
    { feature: 'Interfaz Moderna', restopos: true, fudo: true, maxirest: false },
    { feature: 'Soporte en Español', restopos: true, fudo: true, maxirest: false },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por qué elegir Restopos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que nadie más te ofrece, en un precio que te permite crecer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl ${feature.highlight ? 'bg-primary-50 border-2 border-primary-200' : 'bg-gray-50'}`}
            >
              <feature.icon className={`w-12 h-12 mb-4 ${feature.highlight ? 'text-primary-600' : 'text-gray-700'}`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Diferenciadores vs Competidores
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Funcionalidad</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary-600">Restopos</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">FUDO</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Maxirest</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">{item.feature}</td>
                    <td className="py-4 px-4">
                      {item.restopos ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {item.fudo ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {item.maxirest ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}