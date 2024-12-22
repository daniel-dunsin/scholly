import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#4B5945',
        brandSecondary: '#66785F',
        brandSecondarySub: '#91AC8F',
        brandLight: '#F5F5DC',
      },
      fontFamily: {
        giestMono: 'var(--font-geist-mono)',
        giestSans: 'var(--font-geist-sans)',
      },
    },
  },
  plugins: [],
} satisfies Config;
