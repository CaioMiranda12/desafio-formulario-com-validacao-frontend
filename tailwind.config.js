/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at 50% 50%, #7837ab 0, #592b93 25%, #391e79 50%, #18115f 75%, #000348 100%)',
      },
    },
  },
  plugins: [],
}

