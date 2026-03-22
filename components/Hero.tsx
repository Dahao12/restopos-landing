'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Check } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-zentrax-light px-5 py-2.5 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-zentrax-green rounded-full animate-pulse" />
            <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
              +500 restaurantes ya confían en nosotros
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-poppins)',
              color: '#0D1B41',
              lineHeight: 1.1,
            }}
          >
            El software de gestión gastronómica que{' '}
            <span style={{ color: '#1AB56A' }}>transforma</span> tu negocio
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 leading-relaxed"
            style={{
              fontFamily: 'var(--font-inter)',
              color: '#8A91A8',
            }}
          >
            Gestiona pedidos, controla stock, integra delivery y optimiza tus métricas.
            Todo en una sola plataforma intuitiva y potente.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-zentrax-green text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 overflow-hidden"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
              <SolicitarDemoGratis />
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-zentrax-primary text-zentrax-primary px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-zentrax-light flex items-center gap-3"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <Play size={20} fill="#0D1B41" />
              Ver demo en acción
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-16"
            style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm ml-1">4.9/5 en reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-5 h-5 text-zentrax-green" />
              14 días gratuita
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-5 h-5 text-zentrax-green" />
              Soporte 24/7
            </div>
          </motion.div>

          {/* Interactive Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            <div
              className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
              style={{ background: 'linear-gradient(135deg, #F4F5F9 0%, #FFFFFF 100%)' }}
            >
              {/* Browser frame */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-4 py-1.5 text-sm" style={{ color: '#8A91A8' }}>
                    app.zentrax.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <StatCard title="Ventas Hoy" value="$12,450" trend="+15%" />
                  <StatCard title="Pedidos" value="156" trend="+8%" />
                  <StatCard title="Ticket Promedio" value="$79.84" trend="+12%" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Orders card */}
                  <div className="rounded-xl p-4 border" style={{ borderColor: '#F4F5F9' }}>
                    <h4 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                      Pedidos en tiempo real
                    </h4>
                    <div className="space-y-3">
                      <OrderItem table="Mesa 1" items="x2 Burger, x1 Fries" status="preparando" />
                      <OrderItem table="Mesa 2" items="x1 Pizza, x2 Bebidas" status="listo" />
                      <OrderItem table="Mesa 3" items="x1 Pizza, x1 Bebida" status="entregado" />
                    </div>
                  </div>

                  {/* Performance chart */}
                  <div className="rounded-xl p-4 border" style={{ borderColor: '#F4F5F9' }}>
                    <h4 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                      Rendimiento semanal
                    </h4>
                    <div className="h-40 flex items-end gap-2">
                      <Bar value={65} />
                      <Bar value={85} />
                      <Bar value={70} />
                      <Bar value={90} />
                      <Bar value={75} />
                      <Bar value={95} />
                      <Bar value={80} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 -top-4 bg-white rounded-xl shadow-lg p-4 border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-zentrax-green" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                    Nuevo pedido
                  </p>
                  <p className="text-xs" style={{ color: '#8A91A8' }}>
                    Delivery #1234
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -left-4 -bottom-4 bg-white rounded-xl shadow-lg p-4 border"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-zentrax-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                    +25% eficiencia
                  </p>
                  <p className="text-xs" style={{ color: '#8A91A8' }}>
                    Esta semana
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SolicitarDemoGratis() {
  return <span>Solicitar Demo Gratis</span>
}

function StatCard({ title, value, trend }: { title: string; value: string; trend: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-xl p-4 border transition-shadow hover:shadow-md"
      style={{ borderColor: '#F4F5F9' }}
    >
      <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
        {title}
      </p>
      <p className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
        {value}
      </p>
      <p className="text-xs text-zentrax-green font-medium">{trend}</p>
    </motion.div>
  )
}

function OrderItem({ table, items, status }: { table: string; items: string; status: string }) {
  const statusColors = {
    preparando: 'bg-yellow-100 text-yellow-700',
    listo: 'bg-blue-100 text-blue-700',
    entregado: 'bg-green-100 text-green-700',
  }

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
      <div>
        <p className="font-medium text-sm" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
          {table}
        </p>
        <p className="text-xs" style={{ color: '#8A91A8' }}>
          {items}
        </p>
      </div>
      <span className={`px-2 py-1 rounded-md text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}>
        {status}
      </span>
    </div>
  )
}

function Bar({ value }: { value: number }) {
  return (
    <div className="flex-1 flex items-end gap-1">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${value}%` }}
        transition={{ duration: 1, delay: Math.random() * 0.5 }}
        className="w-full rounded-t-lg transition-colors hover:bg-zentrax-green cursor-pointer"
        style={{ backgroundColor: '#0D1B41' }}
      />
    </div>
  )
}