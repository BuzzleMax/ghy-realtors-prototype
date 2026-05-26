/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F1115',
        'background-dark': '#121212',
        card: '#1A1D24',
        'card-dark': '#1E1E1E',
        gold: '#D4AF37',
        'gold-light': '#E5BA73',
        'gold-hover': '#C9A227',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
