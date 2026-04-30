import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          2: 'rgb(var(--color-surface-2) / <alpha-value>)',
          3: 'rgb(var(--color-surface-3) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
          subtle: 'rgb(var(--color-border-subtle) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          muted: 'rgb(var(--color-accent-muted) / <alpha-value>)',
          bright: 'rgb(var(--color-accent-bright) / <alpha-value>)',
        },
        flag: {
          DEFAULT: 'rgb(var(--color-flag) / <alpha-value>)',
          muted: 'rgb(var(--color-flag-muted) / <alpha-value>)',
          bg: 'rgb(var(--color-flag-bg) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          2: 'rgb(var(--color-ink-2) / <alpha-value>)',
          3: 'rgb(var(--color-ink-3) / <alpha-value>)',
          4: 'rgb(var(--color-ink-4) / <alpha-value>)',
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
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'bear-run': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scaleX(1)' },
          '15%':       { transform: 'translateY(-5px) rotate(-12deg) scaleX(0.92)' },
          '30%':       { transform: 'translateY(0px) rotate(0deg) scaleX(1)' },
          '45%':       { transform: 'translateY(-5px) rotate(12deg) scaleX(0.92)' },
          '60%':       { transform: 'translateY(0px) rotate(0deg) scaleX(1)' },
          '75%':       { transform: 'translateY(-2px) rotate(-5deg) scaleX(0.96)' },
          '88%':       { transform: 'translateY(0px) rotate(0deg) scaleX(1)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.8s linear infinite',
        reveal: 'reveal 0.4s ease-out forwards',
        'fade-up': 'fade-up 0.3s ease-out forwards',
        'page-enter': 'page-enter 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bear-run': 'bear-run 0.7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
