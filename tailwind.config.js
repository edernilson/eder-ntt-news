/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BE1E2D', // Nosso vermelho editorial
          dark: '#98001b',
        },
        slate: {
          header: '#2f3131',
          background: '#f8f9fa',
        }
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        serif: ['Inter', 'serif'], // Para corpo de texto
      },
    },
  },
  plugins: [],
};