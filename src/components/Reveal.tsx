"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Scroll-reveal wrapper.
 *
 * Content is visible by default (no flash of hidden content). When JS is
 * running and the element is below the fold, it starts hidden and fades in on
 * scroll. A fallback timeout ensures everything shows even if
 * IntersectionObserver never fires. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // "use client" guarantees we are on the client; no isClient state needed.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // If reduced motion, show everything immediately
    if (reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    // Initially hide the element so it can fade in on scroll
    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "-10% 0% -10% 0%" },
    );

    observer.observe(el);

    // Fallback: reveal after 3 seconds if IntersectionObserver never fires
    const timer = setTimeout(() => {
      setVisible(true);
      if (once) observer.disconnect();
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [once, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        "reveal-init",
        visible ? "revealed" : "",
        className,
      )}
      style={{
        transitionDelay: visible ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
