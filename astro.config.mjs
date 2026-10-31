import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  base: '/Portfolio/',
  site: 'https://CesarS39.github.io',
});
