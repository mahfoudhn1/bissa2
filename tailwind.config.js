/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            'waste-green': '#0A1F14', // Dark background
            'brand-green': '#4ADE80', // Bright green for accents
            'brand-orange': '#F97316', // Orange button/accents
      },
    }, 
  },
  plugins: [],
}