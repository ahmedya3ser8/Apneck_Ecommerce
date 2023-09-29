/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/hero4.png')",
        'service-pattern': "url('./src/assets/images/service.jpg')",
        'shaop-banner': "url('./src/assets/images/shop-banner.jpg')",
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '922px',
        xl: '1200px',
        '2xl': '1400px'
      },
      boxShadow: {
        '3xl': '10px 10px 20px #00000014',
      },
    },
  },
  plugins: [],
}