/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mcn: {
          primary:   '#1A5FA8',
          secondary: '#1D9E75',
          dark:      '#0D2B4E',
          light:     '#E6F1FB',
          page:      '#F4F7FC',
          muted:     '#6B7A99',
          border:    '#D0DCF0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

