/**
 * Tiny className composer. Kept dependency-free so the project stays light.
 * Accepts strings, and skips falsy values.
 */
export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
