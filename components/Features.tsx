'use client'

import { motion } from 'framer-motion'
import { Package, Receipt, Database, LayoutDashboard } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Package,
      title: 'Gestión de productos',
      description: 'Crear, editar productos, precios y categorías',
      color: '#2563EB'
    },
    {
      icon: Receipt,
      title: 'Ventas y tickets',
      description: 'Selección rápida de productos y cálculo automático del total',
      color: '#22D3EE'
    },
    {
      icon: Database,
      title: 'Inventario automático',
      description: 'Cada venta descuenta el stock automáticamente',
      color: '#2563EB'
    },
    {
      icon: LayoutDashboard,
      title: 'Panel de control',
      description: 'Ver ventas, productos y rendimiento del negocio',
      color: '#22D3EE'
    }
  ]

  return (
    <section id="features" className="py-20 px-6 bg-zentrax-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0F172A' }}>
            Todo lo que necesitas
          </h2>
          <p className="text-xl" style={{ color: '#64748B' }}>
            Sistema completo para gestionar tu restaurante
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${feature.color}15` }}>
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#0F172A' }}>
                {feature.title}
              </h3>
              <p className="text-base" style={{ color: '#64748B' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}