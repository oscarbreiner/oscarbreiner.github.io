/** @type {import('tailwindcss').Config} */

// Colors are CSS variables (RGB triplets, see src/styles/global.css) so the
// whole site can switch between light and dark themes.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        subtle: token('subtle'),
        border: token('border'),
        ink: token('ink'),
        muted: token('muted'),
        accent: token('accent'),
        'accent-fg': token('accent-fg'),
        brand: token('brand'),
        gold: token('gold'),
        'gold-bg': token('gold-bg'),
        warn: token('warn'),
        'warn-bg': token('warn-bg')
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        soft: '0 1px 2px rgb(8 12 20 / 0.04), 0 12px 32px -12px rgb(8 12 20 / 0.12)',
        card: '0 1px 2px rgb(8 12 20 / 0.05), 0 20px 40px -16px rgb(8 12 20 / 0.18)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
