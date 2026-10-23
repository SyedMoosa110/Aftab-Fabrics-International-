import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAF8F5', sand: '#F3EDE4', espresso: '#18181B',
        ochre: '#C5A880', 'ochre-deep': '#8C7A5E', silk: '#E8E2D8',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        spin360: { to: { transform: 'rotate(360deg)' } },
      },
      animation: { float: 'float 4s ease-in-out infinite', spinslow: 'spin360 24s linear infinite' },
    },
  },
  plugins: [],
} satisfies Config;
