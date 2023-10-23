import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
      xxl: '2000px',
    },
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/img1.jpg')",
      }),
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

export default config;
