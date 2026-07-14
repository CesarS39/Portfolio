---
name: frontend-design
description: Generates premium UI with animations, 3D, and modern design. Use for any component, section, or visual redesign in this Astro portfolio.
when_to_use: When building or redesigning any UI component, section, or animation.
---

# Frontend Design Skill

Generate distinctive, production-grade UI. Avoid generic AI aesthetics.

## Stack
- Astro 7 + Tailwind CSS 4 (config-less: tokens live in `@theme` inside `src/styles/global.css`, no `tailwind.config.js`/`postcss.config.js`)
- Three.js: two coexisting patterns in `src/components/3d/` — plain `<script>` + raw `three` import directly manipulating a `<canvas>` in an `.astro` file (e.g. `HeroScene.astro`, the one actually wired into `ParallaxHero.astro`), and React-island `.jsx` counterparts using `@react-three/fiber`/`@react-three/drei` (hydrated with `client:load`/`client:visible`). Check which pattern a scene already uses before touching it — don't assume `.jsx`.
- GSAP + ScrollTrigger para reveals (`src/scripts/animations.js`, loaded globally from `Layout.astro`)
- Syne (display) + Inter (body)

## Design tokens
- bg: #080808, surface: #0f0f0f
- border: rgba(255,255,255,0.08)
- text: #f0f0f0, muted: #666
- accent: #e2e8f0

## Rules
- NO gradientes multicolor por sección
- NO emojis como iconos de UI
- NO scale(1.1) en hover — usar opacity/translate
- SÍ animaciones de entrada con GSAP stagger
- SÍ cursor personalizado global
- SÍ scroll reveals suaves (fade + translateY 20px)
- 3D decorativo (Three.js) que comparte espacio con texto legible: mantenlo detrás (position.z negativo / opacity baja) y refuerza con un scrim (`backdrop-filter: blur()` + radial-gradient) sobre el texto — nunca lo pongas como elemento "dominante" centrado directamente sobre un heading, se ve saturado y dificulta la lectura.
- Marquees/carruseles infinitos: NO uses `animation-play-state: paused` en hover sobre un `@keyframes` de `transform` — es propenso a saltos al pausar/reanudar. Usa un ticker por `requestAnimationFrame` que solo deja de incrementar el offset mientras se hace hover (ver `TechStackSection.astro`).
- Grids con `grid-auto-rows` fijo: si las tarjetas tienen `min-height` propio, ese valor debe coincidir con `grid-auto-rows` en cada breakpoint, o las filas se solapan (ver `InterestsSection.astro`).
