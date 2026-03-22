# Restopos - Landing Page

Landing page para Restopos, sistema POS inteligente para restaurantes.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TypeScript
- Supabase (captura de leads)
- Framer Motion (animaciones)
- Lucide React (iconos)

## Instalación

```bash
npm install
```

## Configuración

1. Copia `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Configura las variables de entorno con tus credenciales de Supabase

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Build

```bash
npm run build
npm start
```

## Deploy en Vercel

Este proyecto está configurado para deploy automático en Vercel.

1. Conecta el repo a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

## Funcionalidades

- ✅ Hero section con CTA
- ✅ Features con diferenciadores
- ✅ Tabla de comparación vs competidores
- ✅ Pricing (3 planes)
- ✅ Testimonials
- ✅ Formulario de captura de leads
- ✅ Navbar responsive
- ✅ Footer
- ✅ Animaciones suaves
- ✅ SEO optimizado
- ✅ Mobile-first

## Estructura

```
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globales
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── supabase.ts       # Cliente Supabase
└── package.json
```

## Leads Capturados

Los leads se guardan en la tabla `restopos_leads` de Supabase con los campos:
- name
- restaurant
- email
- phone
- created_at

## Contacto

Email: info@restopos.com