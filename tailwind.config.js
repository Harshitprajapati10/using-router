/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'edu-vic-wa-nt-beginner': ['Edu VIC WA NT Beginner', 'system-ui'],
      },
    }
  },
  plugins: [],
}