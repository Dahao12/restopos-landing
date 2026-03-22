'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Database, FileSpreadsheet } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              El sistema POS que tu
              <span className="text-primary-600"> restaurante </span>
              necesita
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Inventário con importación Excel/CSV, CMV automático y predicciones de ventas.
              5-15% más económico que FUDO.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2"
            >
              Prueba gratuita 14 días
              <ArrowRight size={20} />
            </a>
            <a
              href="#features"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Ver funcionalidades
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <FileSpreadsheet className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Importación Excel/CSV</h3>
              <p className="text-gray-600">
                Importa tu inventario desde archivos Excel o CSV en segundos. No pierdas tiempo digitando.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CMV Automático</h3>
              <p className="text-gray-600">
                Calcula el Costo de Materiales Vendidos automáticamente. Identifica where pierdes dinero.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <Database className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Predicciones Inteligentes</h3>
              <p className="text-gray-600">
                Predicciones manuales o históricas. Sabe qué comprar antes de que falte.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}