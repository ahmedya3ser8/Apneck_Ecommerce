/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.webp')",
        'service-pattern': "url('/images/service.jpg')",
        'shaop-banner': "url('/images/shop-banner.webp')",
        'blog-landing': "url('/images/blog.webp')",
        'about-landing': "url('/images/about.png')",
        'contact-landing': "url('/images/contact.webp')",
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