/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwritten: ['"Caveat"', 'cursive'],
      },
      colors: {
        brand: {
          white: '#FFFFFF',
          'sky-50': '#F4FAFE',
          'sky-100': '#E6F3FB',
          'sky-200': '#CBE6F6',
          'sky-400': '#5BB6E8',
          'ocean-500': '#1F8FD1',
          'ocean-700': '#17679B',
          coral: '#FF8A5B',
          'coral-hover': '#F2733F',
          ink: '#1B3A52',
          muted: '#5F7A8E',
        },
      },
    },
  },
  plugins: [],
};
