'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-zentrax-light px-4 py-2 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-zentrax-accent" />
            <span className="text-sm font-medium text-zentrax-dark">Sistema de gestión para restaurantes</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#0F172A', lineHeight: 1.1 }}>
            Control total para<br />tu restaurante
          </h1>

          <p className="text-xl md:text-2xl mb-10" style={{ color: '#475569' }}>
            Ventas, tickets e inventario en tiempo real desde un solo sistema
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-zentrax-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zentrax-primary/90 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/20">
              Probar demo
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-zentrax-primary text-zentrax-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zentrax-light transition-all duration-200 flex items-center gap-2">
              <Play size={20} className="w-5 h-5" />
              Solicitar acceso
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}