---
name: frontend-design
description: Generates premium UI with animations, 3D, and modern design. Use for any component, section, or visual redesign in this Astro portfolio.
when_to_use: When building or redesigning any UI component, section, or animation.
---

# Frontend Design Skill

Generate distinctive, production-grade UI. Avoid generic AI aesthetics.

## Stack
- Astro 5 + Tailwind CSS 3
- Three.js via React islands (client:load / client:visible)
- GSAP + ScrollTrigger para reveals
- Space Grotesk (display) + Inter (body)

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
- Three.js components van en src/components/3d/ como .jsx
