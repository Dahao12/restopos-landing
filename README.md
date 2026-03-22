# Zentrax - Landing Page

Landing page para Zentrax, sistema de gestión para restaurantes.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TypeScript
- Framer Motion (animaciones)
- Lucide React (iconos)

## Instalación

```bash
npm install
```

## Configuración

Copia `.env.example` a `.env` si es necesario para configuración futura.

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
│   └── Footer.tsx
└── package.json
```

## Identidad Visual

**Colores:**
- Azul oscuro (base): #0F172A
- Azul principal: #2563EB
- Cian/acento: #22D3EE
- Blanco: #FFFFFF
- Gris claro: #F1F5F9

**Enfoque:**
- Sistema SaaS moderno
- Diseño minimalista
- Sin comparaciones con competidores
- Enfoque en conversión

## Contacto

Email: info@zentrax.com