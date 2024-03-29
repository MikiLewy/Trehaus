import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6A8A86',
          hover: '#495F5C',
          focus: '#425653',
          darker: '#495F5C',
        },
        secondary: {
          DEFAULT: '#F2E2E2',
        },
      },
      backgroundImage: {
        hero: "url('/hero.webp')",
        footer: "url('/footer.webp')",
        footer_pattern: "url('/papyrus-dark-pattern.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
