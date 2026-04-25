import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#08091a',
        surface: {
          DEFAULT: '#0f1024',
          2: '#14162e',
          3: '#1a1c38',
        },
        border: {
          DEFAULT: '#252848',
          subtle: '#121428',
        },
        accent: {
          DEFAULT: '#5b90e0',
          muted: '#2d4f7e',
          bright: '#7eaef5',
        },
        flag: {
          DEFAULT: '#e8920c',
          muted: '#8a5206',
          bg: '#180f02',
        },
        ink: {
          DEFAULT: '#eef2ff',
          2: '#b0bcd8',
          3: '#6272a0',
          4: '#323a5c',
        },
        signal: {
          vote: '#3b82f6',
          statement: '#8b9cb8',
          funding: '#f59e0b',
          bill: '#a78bfa',
          ai: '#2dd4bf',
          flag: '#e8920c',
          live: '#22c55e',
          milestone: '#2dd4bf',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        prose: '65ch',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        reveal: {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0% 0 0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'page-enter': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.8s linear infinite',
        reveal: 'reveal 0.4s ease-out forwards',
        'fade-up': 'fade-up 0.3s ease-out forwards',
        'page-enter': 'page-enter 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
