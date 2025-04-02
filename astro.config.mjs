import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://cesars39.github.io',
  base: '/Portfolio/', // <- este es el nombre del repositorio exacto
});