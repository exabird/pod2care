import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette naturelle et apaisante pour un cabinet médical
        sage: {
          50: '#f6f7f4',
          100: '#e3e7de',
          200: '#c8d1bf',
          300: '#a5b396',
          400: '#849574',
          500: '#687a59',
          600: '#516145',
          700: '#414d38',
          800: '#363f30',
          900: '#2e362a',
        },
        sand: {
          50: '#faf9f6',
          100: '#f2efe8',
          200: '#e4ddd0',
          300: '#d3c7b3',
          400: '#bfab92',
          500: '#b09779',
          600: '#a3866a',
          700: '#886f59',
          800: '#6f5b4c',
          900: '#5b4b40',
        },
        cream: '#fdfcf9',
        forest: '#2d3a29',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

