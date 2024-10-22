const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode with a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        'slide-in-left': 'slide-in-left 0.5s ease-in-out forwards',
        'slide-out-left': 'slide-out-left 0.5s ease-in-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-in-out forwards',
        'slide-out-right': 'slide-out-right 0.5s ease-in-out forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        sans: ["var(--font-sans)", ...fontFamily.sans], // Combines default and custom fonts
      },
      screens: {
        'mmd': '850px', // Custom breakpoint at 850px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss-animate"),
  ],
};
