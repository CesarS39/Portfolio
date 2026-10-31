# Portafolio de César Enríquez

Portafolio personal creado con Astro 7 y Tailwind CSS 4. Presenta experiencia, formación y proyectos de software con páginas de caso de estudio.

Tailwind se integra mediante `@tailwindcss/vite`; las galerías usan Swiper Element. El sitio es estático y usa Three.js directamente para el hero 3D.

## Desarrollo

```sh
npm install
npm run dev
```

## Verificación y build

```sh
npm run build
npm run preview
```

El sitio se publica en GitHub Pages bajo `/Portfolio/`; `astro.config.mjs` define la ruta base. Las imágenes públicas y sus referencias viven en `public/images/` y las páginas en `src/pages/`.
