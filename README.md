# 🌆 Jackson's Portfolio - JDM Cyberpunk Style

Un portafolio personal SPA desarrollado con **Next.js 14+ App Router**, estilizado completamente con **CSS puro** y **Bootstrap 5**, inspirado en la cultura japonesa JDM de los años 80s y 90s con estética cyberpunk.

## 🎯 Características

- ✨ **Diseño JDM Cyberpunk**: Colores neón, efectos de glassmorphism, animaciones futuristas
- 🚀 **Next.js 14+ App Router**: Arquitectura moderna y optimizada
- 🎨 **Bootstrap 5 + CSS Puro**: Sin dependencias de frameworks de estilos adicionales
- 📱 **Completamente Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Optimizado para Performance**: Carga rápida y experiencia fluida
- 🌟 **Efectos Interactivos**: Animaciones CSS, hover effects, transiciones suaves
- 🔧 **Fácil Personalización**: Código modular y bien documentado

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Next.js 14+** (App Router)
- **React 19**
- **TypeScript**
- **Bootstrap 5** (CDN)
- **CSS3** (Variables CSS, Flexbox, Grid, Animations)

### Fuentes

- **Press Start 2P** - Estilo arcade para títulos
- **Orbitron** - Tipografía tecnológica para textos

### Iconografía

- **Bootstrap Icons** - Conjunto completo de iconos

## 🎨 Paleta de Colores

```css
/* Colores principales */
--bg-asphalt: #0a0a0a; /* Fondo negro asfalto */
--neon-red: #ff003c; /* Rojo neón */
--electric-purple: #6a00f4; /* Púrpura eléctrico */
--bright-cyan: #00fff0; /* Cian brillante */
--pure-white: #ffffff; /* Blanco puro */

/* Gradientes */
--gradient-neon: linear-gradient(
  45deg,
  var(--neon-red),
  var(--electric-purple)
);
--gradient-cyber: linear-gradient(
  135deg,
  var(--electric-purple),
  var(--bright-cyan)
);
--gradient-tokyo: linear-gradient(
  180deg,
  rgba(106, 0, 244, 0.1),
  rgba(255, 0, 60, 0.1)
);
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o pnpm

### Pasos de instalación

1. **Instalar dependencias**

```bash
npm install
# o
pnpm install
```

2. **Ejecutar en desarrollo**

```bash
npm run dev
# o
pnpm dev
```

3. **Abrir en el navegador**

```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout global con Bootstrap y fuentes
│   ├── page.tsx           # Página principal SPA
│   └── globals.css        # Estilos globales y variables
└── components/
    ├── Navbar.tsx         # Navegación con efecto glass
    ├── Hero.tsx           # Sección principal con animaciones
    ├── About.tsx          # Biografía con toque japonés
    ├── Skills.tsx         # Habilidades con barras animadas
    ├── Projects.tsx       # Galería de proyectos con efectos
    ├── Contact.tsx        # Formulario de contacto interactivo
    └── Footer.tsx         # Pie con efectos neón
```

## 🌟 Personalización

### Cambiar información personal

**src/app/layout.tsx** - Metadatos SEO
**src/components/Hero.tsx** - Nombre y especialización  
**src/components/About.tsx** - Biografía y ubicación
**src/components/Contact.tsx** - Información de contacto
**src/components/Projects.tsx** - Agregar nuevos proyectos

### Modificar colores y efectos

**src/app/globals.css** - Variables CSS de colores y animaciones

## 📱 Secciones del Portafolio

- 🏠 **Hero**: Animación typewriter, efectos neón, estadísticas
- 👨‍💻 **About**: Biografía, frase japonesa, imagen con efectos
- 🛠️ **Skills**: Grid de habilidades, barras animadas, hover effects
- 💼 **Projects**: Galería con efectos glow, enlaces a demos
- 📧 **Contact**: Formulario funcional, redes sociales, glassmorphism
- 🔽 **Footer**: Copyright, disponibilidad, navegación rápida

## 🚀 Deployment

### Vercel (Recomendado)

1. Push a GitHub
2. Conectar con Vercel
3. Deploy automático

Compatible con: Netlify, Railway, Heroku, DigitalOcean, AWS Amplify

## 📞 Contacto

**Jackson** - Frontend Developer  
📧 michael.negrete16@gmail.com
🌍 Colombia  
💼 Especialista en Next.js / React

---

_コードは東京の夜の道のように — 速くて正確_  
_(Code like the night streets of Tokyo — fast and precise)_

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
