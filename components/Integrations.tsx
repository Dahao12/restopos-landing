'use client'

import { motion } from 'framer-motion'
import { Smartphone, CreditCard, QrCode, Zap, ArrowUpRight, CheckCircle } from 'lucide-react'

export default function Integrations() {
  const deliveryApps = [
    { name: 'PedidosYa', status: 'active' },
    { name: 'Rappi', status: 'active' },
    { name: 'Glovo', status: 'active' },
    { name: 'Uber Eats', status: 'coming' },
  ]

  const paymentSystems = [
    { name: 'Mercado Pago', status: 'active' },
    { name: 'Visa', status: 'active' },
    { name: 'Mastercard', status: 'active' },
    { name: 'American Express', status: 'active' },
  ]

  const features = [
    {
      icon: Smartphone,
      title: 'Delivery apps',
      description: 'Integración con las principales apps de mercado',
      color: '#1AB56A',
    },
    {
      icon: CreditCard,
      title: 'Pagos digitales',
      description: 'Todas las formas de pago en un solo lugar',
      color: '#0D1B41',
    },
    {
      icon: QrCode,
      title: 'Menú QR',
      description: 'Menús digitales con código QR personalizado',
      color: '#1AB56A',
    },
    {
      icon: Zap,
      title: 'API abierta',
      description: 'Conecta tus herramientas favoritas fácilmente',
      color: '#0D1B41',
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
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
            Integraciones
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
            Conecta con lo que ya usas
          </h2>
          <p className="text-xl" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
            Zentrax se integra con las mejores herramientas del mercado
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-zentrax-light rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-zentrax-green"
              style={{ borderColor: 'transparent' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: feature.color,
                }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
              >
                {feature.title}
              </h3>

              <p
                className="text-base"
                style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Integration Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delivery Apps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
            >
              <Smartphone />
              Apps de Delivery
            </h3>
            <div className="space-y-4">
              {deliveryApps.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border-2 hover:border-zentrax-green transition-all duration-300"
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      className="w-6 h-6"
                      style={{ color: app.status === 'active' ? '#1AB56A' : '#8A91A8' }}
                    />
                    <span
                      className="font-medium"
                      style={{ fontFamily: 'var(--font-poppins)', color: app.status === 'active' ? '#0D1B41' : '#8A91A8' }}
                    >
                      {app.name}
                    </span>
                  </div>
                  {app.status === 'coming' && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#F4F5F9', color: '#8A91A8', fontFamily: 'var(--font-inter)' }}
                    >
                      Próximamente
                    </span>
                  )}
                  {app.status === 'active' && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#DCFCE7', color: '#166534', fontFamily: 'var(--font-inter)' }}
                    >
                      Activo
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Payment Systems */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
            >
              <CreditCard />
              Sistemas de Pago
            </h3>
            <div className="space-y-4">
              {paymentSystems.map((system, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: -5 }}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border-2 hover:border-zentrax-green transition-all duration-300"
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      className="w-6 h-6"
                      style={{ color: system.status === 'active' ? '#1AB56A' : '#8A91A8' }}
                    />
                    <span
                      className="font-medium"
                      style={{ fontFamily: 'var(--font-poppins)', color: system.status === 'active' ? '#0D1B41' : '#8A91A8' }}
                    >
                      {system.name}
                    </span>
                  </div>
                  {system.status === 'active' && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-5 h-5" style={{ color: '#1AB56A' }} />
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: '#DCFCE7', color: '#166534', fontFamily: 'var(--font-inter)' }}
                      >
                        Integrado
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p
            className="text-lg mb-6"
            style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
          >
            ¿Necesitas otra integración? Contáctanos
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              fontFamily: 'var(--font-poppins)',
              backgroundColor: '#0D1B41',
              color: '#FFFFFF',
            }}
          >
            Solicitar integración
            <ArrowUpRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}