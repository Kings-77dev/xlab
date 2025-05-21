// tailwind.config.js
module.exports = {
  darkMode: 'class', 
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent:  'var(--color-accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mywhite: 'var(--color-mywhite)',
      }
    }
  },
  plugins: [],
}