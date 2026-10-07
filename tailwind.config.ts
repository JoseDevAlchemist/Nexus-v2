import type { Config } from "tailwindcss";
import { colors, brandGradient } from "./src/styles/tokens/colors";
import { typography } from "./src/styles/tokens/typography";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: colors.background,
        surface: colors.surface,
        border: colors.border,
        foreground: colors.text.primary,
        muted: colors.text.secondary,
        brand: colors.brand,
      },
      backgroundImage: {
        "brand-gradient": brandGradient,
      },
      fontFamily: {
        sans: typography.fontFamily.sans,
      },
      letterSpacing: {
        heading: typography.letterSpacing.heading,
      },
    },
  },
};

export default config;
