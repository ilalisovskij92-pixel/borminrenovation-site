import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bormin Rénovation palette — locked to the official logo (May 10, 2026):
        //   ink graphite  #2E2F38  (logo body)
        //   accent ochre  #C3921C  (logo arrow / roof)
        bg: "#FAFAF9",          // warm off-white base
        gray: {
          50: "#FFFFFF",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#A8A29E",
          400: "#57534E",
        },

        // Ink — graphite (from logo), softer than pure black, Swiss-modern
        ink: {
          DEFAULT: "#2E2F38",
          soft: "#3F404A",
          muted: "#6B6F7A",
          subtle: "#A8ABB5",
        },

        // Accent — warm ochre (from logo arrow), confidence & craftsmanship
        accent: {
          DEFAULT: "#C3921C",
          dark: "#A57814",        // hover state
          light: "#D9A93A",       // lighter ochre for soft fills
          soft: "rgba(195, 146, 28, 0.10)",
          line: "rgba(195, 146, 28, 0.30)",
        },

        line: "#E7E5E4",
      },
      fontFamily: {
        // Editorial: Inter (body) + Instrument Serif italic (accents) + JetBrains Mono (labels/numbers)
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Premium-scale — editorial display + JetBrains Mono labels
        "display-xl": [
          "clamp(3rem, 9vw, 9rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw, 5rem)",
          { lineHeight: "1.0", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(2rem, 3.5vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.15em" },
        ],
      },
      letterSpacing: {
        tight: "-0.04em",
        label: "0.15em",
        wider: "0.25em",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        pill: "100px",
      },
      spacing: {
        section: "7.5rem",     // 120px — large sections
        "section-lg": "10rem", // 160px — hero/about
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(10, 22, 40, 0.08)",
        card: "0 20px 60px -20px rgba(10, 22, 40, 0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
