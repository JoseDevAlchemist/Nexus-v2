"use client";

import { useEffect, useRef, useState } from "react";
import { contactSection } from "@/content/siteContent";
import { cn } from "@/lib/utils";

const WA_PHONE = "254768688854";
const WA_MESSAGE = "Hi Nexus, I'd like to get a free business audit.";

const whatsappIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 12c0 4.71-3.81 8.53-8.53 8.53C6.81 20.53 3 16.71 3 12S6.81 3.47 11.5 3.47 20 7.29 20 12z" />
    <path d="M16.5 12a4.5 4.5 0 0 1-6.36 4.36l-2.23-.78c-.27-.09-.51-.28-.71-.59-.21-.31-.33-.69-.31-1.1l.4-3.5c.03-.32.17-.6.35-.81.18-.22.43-.29.69-.34l3.49-.85c.4-.1.85-.02 1.18.26.27.23.48.59.59.99l.78 2.23c.13.37.02.77-.26 1.06z" />
  </svg>
);

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Only expand on hover (desktop). Mobile stays as circle.
  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    const el = btnRef.current;
    if (el) {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const reducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <a
      ref={btnRef}
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contactSection.whatsapp.label}
      className={cn(
        "fixed bottom-[24px] right-[24px] z-[55]",
        "flex items-center justify-center gap-2",
        "min-h-[56px] min-w-[56px] max-w-[220px]",
        "rounded-full",
        "border-none",
        "bg-gradient-to-r from-brand via-brand-secondary to-brand-accent",
        "text-white",
        "px-4 py-2.5 text-sm font-semibold",
        "transition-all duration-300 ease-out",
        "shadow-[0_0_20px_rgba(123,47,247,0.35)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Mobile: just the circle
        "md:max-w-[56px]",
        // Hover expand on desktop
        hovered && !reducedMotion ? "max-w-[220px] px-6" : "max-w-[56px] px-4",
        // Pulse ring (disabled with reduced motion)
        !reducedMotion
          ? "after:absolute after:inset-0 after:rounded-full after:border after:border-brand after:opacity-50 after:animate-pulse after:pointer-events-none"
          : "",
      )}
    >
      {whatsappIcon}
      {hovered && !reducedMotion ? (
        <span className="whitespace-nowrap text-sm font-medium opacity-100 transition-opacity duration-300">
          {contactSection.whatsapp.label}
        </span>
      ) : null}
    </a>
  );
}
