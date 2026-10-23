import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'strawberry-red': '#ef3340',
        'deep-crimson': '#450b14',
        'glow-gold': '#ffcc8a',
        ink: '#080808',
      },
      fontFamily: { sans: ['var(--font-outfit)', 'sans-serif'] },
      boxShadow: { glow: '0 0 45px rgba(239,51,64,.24)' },
      letterSpacing: { display: '-.065em' },
    },
  },
  plugins: [],
};
export default config;
