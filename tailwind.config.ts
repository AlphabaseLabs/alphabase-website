import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "SF Pro Display",
          "SF Pro Text",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        micro: ["0.6875rem", { lineHeight: "1rem" }],
        caption: ["0.75rem", { lineHeight: "1.125rem" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.375rem" }],
        body: ["0.9375rem", { lineHeight: "1.5rem" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.625rem" }],
        h4: ["1.25rem", { lineHeight: "1.75rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
        "h3-lg": ["1.75rem", { lineHeight: "2.25rem" }],
        h2: ["2rem", { lineHeight: "2.5rem" }],
        "h2-lg": ["2.5rem", { lineHeight: "3rem" }],
        h1: ["2.75rem", { lineHeight: "1.1" }],
        "h1-md": ["3.5rem", { lineHeight: "1.1" }],
        "h1-lg": ["4.25rem", { lineHeight: "1.08" }],
      },
      colors: {
        ink: {
          950: "rgb(var(--ink-950) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
        },
        paper: "rgb(var(--paper) / <alpha-value>)",
        brand: {
          600: "rgb(var(--brand-600) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          200: "rgb(var(--brand-200) / <alpha-value>)",
          100: "rgb(var(--brand-100) / <alpha-value>)",
        },
        night: {
          950: "rgb(var(--night-950) / <alpha-value>)",
          900: "rgb(var(--night-900) / <alpha-value>)",
          800: "rgb(var(--night-800) / <alpha-value>)",
          700: "rgb(var(--night-700) / <alpha-value>)",
        },
        mist: "rgb(var(--mist) / <alpha-value>)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 12px 48px rgba(16, 16, 33, 0.10)",
        lift: "0 18px 70px rgba(16, 16, 33, 0.16)",
        night: "0 24px 80px rgba(0, 0, 0, 0.40)",
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        tightish: "-0.02em",
        mercury: "-0.025em",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
