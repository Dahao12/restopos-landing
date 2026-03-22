import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Restopos - Sistema POS Inteligente para Restaurantes',
  description: 'Sistema POS con inventário, CMV automático, importación Excel/CSV y predicciones de ventas. 5-15% más barato que FUDO. 14 días de prueba gratuita.',
  keywords: 'sistema POS, restaurante, inventário, CMV, costo materiales vendidos, predicción ventas',
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