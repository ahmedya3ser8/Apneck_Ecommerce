/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/static/images/hero4.png')",
        'service-pattern': "url('/static/images/service.jpg')",
        'shaop-banner': "url('/static/images/shop-banner.jpg')",
        'blog-landing': "url('/static/images/blog.jpg')",
        'about-landing': "url('/static/images/about.png')",
        'contact-landing': "url('/static/images/contact.jpg')",
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