import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zentrax - Sistema de Gestión para Restaurantes',
  description: 'Control total para tu restaurante. Ventas, tickets e inventario en tiempo real desde un solo sistema.',
  keywords: 'sistema TPV, gestión restaurantes, ventas, tickets, inventario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}