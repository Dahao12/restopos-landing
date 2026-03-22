import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-poppins' })

export const metadata = {
  title: 'Zentrax - El software de gestión gastronómica que transforma tu negocio',
  description: 'Gestiona pedidos, controla stock, integra delivery y optimiza tus métricas con Zentrax. Sistema de gestión gastronómica para restaurantes.',
  keywords: 'software gestión restaurantes, TPV, gestión gastronómica, delivery, inventario, Maxirest, Núcleo IT Argentina',
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