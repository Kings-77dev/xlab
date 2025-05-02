/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",        // for Next.js App Router
      "./components/**/*.{js,jsx,ts,tsx}", // for your components
      "./pages/**/*.{js,jsx,ts,tsx}",      // if you’re using the Pages Router
    ],
    theme: {
      extend: {
        colors: {
        },
      },
    },
    plugins: [],
  }