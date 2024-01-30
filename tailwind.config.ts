import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      'arroz': '#FFF',
      'caballa': '#F2F4F6',
      'lenguado': '#F8F8F8',
      'tiburon': '#648090',
      'ballena': '#002C48',
      'plancton': '#0660C6',
      'plancton-link': '#0874EF',
    },
    padding: {         // px- py- pt- pr- pb- pl- p-
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
    },
    margin: {         // mx- my- mt- mr- mb- ml- m-
      sm: '4px',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '56px',
    },
    borderWidth: {
      none: '0',
      DEFAULT: '1px',
    },
    borderRadius: {     // rounded- rounded-t- rounded-r- rounded-b- rounded-l- rounded-tl- rounded-tr- rounded-br- rounded-bl-
      none: '0',        // 0px
      full: '9999px',   // circle
      '1': '0.5rem',    // 8px
      '2': '1.5rem',    // 24px
      '3': '3.5rem',    // 56px
    },
    gap: {              // gap- gap-x- gap-y-
      '2': '0.5rem',    // 8px
      '3': '0.75rem',   // 12px
      '4': '1rem',      // 16px
      '8': '2rem',      // 32px
    },
    fontFamily: {
      'roboto': 'var(--font-roboto)',
    },
    fontWeight: {       // font-
      normal: '400',
      semibold: '600',
      bold: '700',
    },
    fontSize: {         // text-
      sm: '0.8rem',     // 12px
      md: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.25rem',    // 20px
      xl: '1.5rem',     // 24px
      '2xl': '2rem',    // 32px
      '3xl': '2.5rem',  // 40px
      '4xl': '3rem',    // 48px
    },
    lineHeight: {       // leading-
      '5': '1.25rem',   // 20px
      '6': '1.5rem',    // 24px
      '7': '1.75rem',   // 28px
      '8': '2rem',      // 32px
      '10': '2.5rem',   // 40px
      '11': '3.375rem', // 54px
    },
    listStyleType: {    // list-
      none: 'none',
      disc: 'disc',
    },
    screens: {
      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-header": "linear-gradient(180deg, rgba(0, 173, 239, 0.20) 0%, rgba(0, 174, 240, 0.00) 100%)",
      },
      boxShadow: {
        'card-1': '0px 2px 6px 0px rgba(0, 44, 72, 0.15)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};

export default config;
