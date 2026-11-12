/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        handwritten: ['"Caveat"', 'cursive'],
      },
      colors: {
        brand: {
          white: '#FFFFFF',
          mist: '#F5FAFD',
          'sky-50': '#F5FAFD',
          'sky-100': '#E3F1FA',
          'sky-200': '#C4E3F5',
          'sky-400': '#55B3E6',
          'ocean-500': '#1B7FC2',
          'ocean-700': '#0F4F7E',
          lagoon: '#19B3B0',
          coral: '#FF7A59',
          'coral-hover': '#EE6240',
          sand: '#FFF3E3',
          gold: '#E5B567',
          ink: '#14324A',
          muted: '#5C7689',
        },
      },
    },
  },
  plugins: [],
};
