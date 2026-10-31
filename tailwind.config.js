export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        surface: '#101112',
        border: 'rgba(255, 255, 255, 0.12)',
        accent: '#dce8ed',
        'accent-glow': 'rgba(220, 232, 237, 0.12)',
        'text-base': '#f2f4f5',
        'text-muted': '#a0a5aa',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
