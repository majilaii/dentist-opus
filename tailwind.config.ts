import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F3EFE7",
          soft: "#FAF6EE",
          warm: "#E8E2D4",
        },
        bone: "#EBE4D5",
        clay: "#C8B99E",
        stone: {
          50: "#F3EFE7",
          100: "#E8E2D4",
          200: "#D4CBB8",
          300: "#B5AA92",
          400: "#8B8170",
          500: "#6B6358",
          600: "#4A4438",
          700: "#2F2B24",
          750: "#211E19",
          800: "#171410",
          900: "#0C0A08",
        },
        sage: {
          DEFAULT: "#7C8F73",
          light: "#A6B59D",
          dark: "#556350",
        },
        champagne: {
          DEFAULT: "#CBB48A",
          light: "#E2D2AF",
          dark: "#A08558",
        },
        ember: {
          DEFAULT: "#B87A3F",
          light: "#D09766",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.96", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-sm": ["clamp(1.75rem, 3.2vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      animation: {
        "marquee": "marquee 45s linear infinite",
        "marquee-slow": "marquee 70s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
