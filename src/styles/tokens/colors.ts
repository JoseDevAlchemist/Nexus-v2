export const colors = {
  /** Deep, near-black page background */
  background: "#050507",
  /** Off-black card / surface */
  surface: {
    DEFAULT: "#0E0E12",
    raised: "#0E0E12",
    border: "#1F1F26",
  },
  /** Hairline border */
  border: "#1F1F26",
  text: {
    primary: "#FFFFFF",
    secondary: "#9CA3AF",
  },
  brand: {
    orange: "#FF8A00",
    pink: "#F0288C",
    violet: "#8A2BE2",
  },
} as const;

/** Soft radial glow used behind key moments — brand stops at low opacity */
export const brandGlow =
  "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(240, 40, 140, 0.12), rgba(138, 43, 226, 0.08) 45%, transparent 70%)";

/** Accent-only brand gradient — never a full-section background */
export const brandGradient =
  "linear-gradient(90deg, #FF8A00, #F0288C, #8A2BE2)";
