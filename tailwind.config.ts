import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'strawberry-red': '#8b7cff',
        'deep-crimson': '#17152d',
        'glow-gold': '#a5f3fc',
        ink: '#080912',
      },
      fontFamily: { sans: ['var(--font-outfit)', 'sans-serif'] },
      boxShadow: { glow: '0 0 45px rgba(124,111,240,.24)' },
      letterSpacing: { display: '-.065em' },
    },
  },
  plugins: [],
};
export default config;
