/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090D',
        foreground: '#F8FAFC',
        surface: '#11131A',
        accent: {
          violet: '#8B5CF6',
          cyan: '#22D3EE',
        },
        muted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
}
