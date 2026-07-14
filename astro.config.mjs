import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Portfolio/',
  site: 'https://CesarS39.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});