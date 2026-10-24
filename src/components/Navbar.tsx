"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { brand, nav, navCta } from "@/content/siteContent";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = nav.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-10% 0% -70% 0%", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);
  const isActive = (href: string) => active === href;

  return (
    <header
      className="sticky top-0 z-40 border-b border-border/30 bg-background/60 backdrop-blur-md"
      aria-label="Website header"
    >
      <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-4 md:h-20 md:px-6">
        <Link
          href="#home"
          aria-label={brand.name}
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={1398}
            height={705}
            className="h-8 w-auto block"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-brand"
                  : "text-muted hover:text-brand",
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <a href={navCta.href} className={ksButton("primary")} onClick={closeMenu}>
            {navCta.label}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:text-text hover:bg-surface md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <>
              <path d="M6 6l12 12" strokeLinecap="round" />
              <path d="M6 18L18 6" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M4 7h16" strokeLinecap="round" />
              <path d="M4 12h16" strokeLinecap="round" />
              <path d="M4 17h16" strokeLinecap="round" />
            </>
          )}
        </button>
      </div>

      {open && (
        <nav
          className="fixed inset-x-0 top-16 z-40 border-b border-border/30 bg-background/95 backdrop-blur-md p-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-brand"
                    : "text-muted hover:text-brand",
                )}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <a href={navCta.href} className={ksButton("primary", "w-full")} onClick={closeMenu}>
              {navCta.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function ksButton(variant: "primary" | "secondary", extra = "") {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-7 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[52px]";
  if (variant === "primary") {
    return cn(
      "bg-gradient-to-r from-brand via-brand-secondary to-brand-accent text-white hover:from-brand-hover hover:via-brand-secondary hover:to-brand-accent shadow-[0_0_20px_rgba(123,47,247,0.4)] focus-visible:ring-brand",
      base,
      extra,
    );
  }
  return cn(
    "border border-brand text-brand bg-transparent hover:bg-brand/10 focus-visible:ring-brand",
    base,
    extra,
  );
}
