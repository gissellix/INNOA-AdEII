/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        innoa: {
          lime: '#b5f542',
          limedark: '#84cc16',
          purple: '#7c3aed',
          purplelight: '#a855f7',
          blue: '#1d4ed8',
          bluelight: '#3b82f6',
          dark: '#0b0f19',
          card: '#151c2e',
          cardborder: '#2a3654'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neo-lime': '4px 4px 0px 0px #b5f542',
        'neo-purple': '4px 4px 0px 0px #7c3aed',
        'neo-white': '4px 4px 0px 0px #ffffff',
        'glow-lime': '0 0 20px rgba(181, 245, 66, 0.4)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.4)',
      }
    },
  },
  plugins: [],
}
