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

/** Accent-only brand gradient — never a full-section background */
export const brandGradient =
  "linear-gradient(90deg, #FF8A00, #F0288C, #8A2BE2)";
