import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
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
          DEFAULT: '#667085',
          white: 'rgb(255 255 255 / 0.85)',
        },
      },
      backgroundImage: {
        hero: "url('/hero.webp')",
        mobile_hero: "url('/hero-mobile.webp')",
        footer: "url('/footer.webp')",
        footer_pattern: "url('/papyrus-dark-pattern.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
