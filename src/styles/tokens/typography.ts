export const typography = {
  fontFamily: {
    sans: ["var(--font-inter)", "system-ui", "sans-serif"],
  },
  letterSpacing: {
    heading: "-0.02em",
  },
  /** Vercel-inspired scale — disciplined, no oversized type */
  fontSize: {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-xl md:text-2xl",
    body: "text-sm md:text-base",
  },
} as const;
