module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        surface: '#0f0f0f',
        border: 'rgba(255, 255, 255, 0.08)',
        accent: '#e2e8f0',
        'accent-glow': 'rgba(226, 232, 240, 0.15)',
        'text-base': '#f0f0f0',
        'text-muted': '#666666',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}