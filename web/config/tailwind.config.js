/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carminePink: '#f1433d' /* reddish */,
        sunshade: '#fb9344' /* yellowish */,
        firefly: '#0a293c' /* dark blue */,
      },
      screens: {
        header: '1380px',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      condensed: ['Sherman', 'sans-serif'],
      wide: ['Eagle Sight', 'sans-serif'],
    },
    safelist: ['hour-1', 'hour-2', 'hour-3', 'hour-4', 'hour-5', 'hour-6'],
  },
  plugins: [],
}
