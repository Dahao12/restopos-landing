export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold" style={{ color: '#0F172A' }}>Zentrax</span>
            <p className="text-sm mt-2" style={{ color: '#64748B' }}>
              Sistema de gestión para restaurantes
            </p>
          </div>

          <div className="text-sm" style={{ color: '#94A3B8' }}>
            © {new Date().getFullYear()} Zentrax. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}