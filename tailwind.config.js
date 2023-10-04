/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/static/images/hero4.png')",
        'service-pattern': "url('/public/static/images/service.jpg')",
        'shaop-banner': "url('/public/static/images/shop-banner.jpg')",
        'blog-landing': "url('/public/static/images/blog.jpg')",
        'about-landing': "url('/public/static/images/about.png')",
        'contact-landing': "url('/public/static/images/contact.jpg')",
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