import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      second:"rgba(255, 255, 255, 0.2)",
      primary:'#271d16',
      white:'#cccccc',
      third:'#816330',
      fourth:'#423329'
      
    },
    letterSpacing: {
      tightest: '-.075em',
       tighter: '-.05em',
      tight: '-.025em',
       normal: '0',
      wide: '.025em',
       wider: '.05em',
       widest: '.25em',
     },
  },
  plugins: [],
};
export default config;
