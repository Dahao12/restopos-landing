import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white py-16 px-6 border-t" style={{ borderColor: '#E2E8F0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}>
                Zentrax
              </h2>
              <p className="text-base mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
                Software de gestión gastronómica que transforma tu negocio. Potente, intuitivo y diseñado para restaurantes modernos.
              </p>

              <div className="flex gap-4">
                <SocialLink icon={<Facebook size={20} />} href="#" />
                <SocialLink icon={<Instagram size={20} />} href="#" />
                <SocialLink icon={<Linkedin size={20} />} href="#" />
              </div>
            </motion.div>
          </div>

          {/* Product */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold text-lg mb-6"
              style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
            >
              Producto
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <FooterLink href="#features">Funcionalidades</FooterLink>
              <FooterLink href="#how-it-works">Cómo funciona</FooterLink>
              <FooterLink href="#benefits">Beneficios</FooterLink>
              <FooterLink href="#integrations">Integraciones</FooterLink>
              <FooterLink href="#pricing">Precios</FooterLink>
            </motion.ul>
          </div>

          {/* Company */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-lg mb-6"
              style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
            >
              Empresa
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
            >
              <FooterLink href="#">Sobre nosotros</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Carreras</FooterLink>
              <FooterLink href="#">Casos de éxito</FooterLink>
              <FooterLink href="#">Press kit</FooterLink>
            </motion.ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-bold text-lg mb-6"
              style={{ fontFamily: 'var(--font-poppins)', color: '#0D1B41' }}
            >
              Contacto
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <ContactItem icon={<Mail size={18} />} text="info@zentrax.com" href="mailto:info@zentrax.com" />
              <ContactItem icon={<Phone size={18} />} text="+54 11 1234 5678" href="tel:+541112345678" />
              <ContactItem icon={<MapPin size={18} />} text="Buenos Aires, Argentina" href="#" />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  backgroundColor: '#0D1B41',
                  color: '#FFFFFF',
                }}
              >
                Solicitar demo
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t"
          style={{ borderColor: '#E2E8F0' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base" style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}>
              © {currentYear} Zentrax. Todos los derechos reservados.
            </p>

            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="text-sm hover:underline transition-colors"
                style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
                href="#"
              >
                Política de privacidad
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="text-sm hover:underline transition-colors"
                style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
                href="#"
              >
                Términos de servicio
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="text-sm hover:underline transition-colors"
                style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
                href="#"
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
      style={{
        backgroundColor: '#F4F5F9',
        color: '#0D1B41',
      }}
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.li>
      <motion.a
        whileHover={{ x: 5 }}
        href={href}
        className="text-base transition-colors hover:text-zentrax-primary block"
        style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
      >
        {children}
      </motion.a>
    </motion.li>
  )
}

function ContactItem({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
  return (
    <motion.a
      whileHover={{ x: 5 }}
      href={href}
      className="flex items-center gap-3 text-base transition-colors hover:text-zentrax-green"
      style={{ fontFamily: 'var(--font-inter)', color: '#8A91A8' }}
    >
      {icon}
      <span>{text}</span>
    </motion.a>
  )
}