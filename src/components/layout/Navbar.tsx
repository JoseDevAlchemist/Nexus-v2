"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 md:h-16 md:px-6">
        <Link href="/" aria-label={site.name} className="flex items-center">
          <Image
            src="/brand/logo-mark.jpeg"
            alt={site.name}
            width={609}
            height={356}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {site.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link href={site.primaryCta.href} className={buttonVariants({ variant: "primary" })}>
            {site.primaryCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:bg-surface-raised hover:text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-surface-border px-4 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-4">
            {site.navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <Link href={site.primaryCta.href} onClick={() => setOpen(false)} className={buttonVariants({ variant: "primary", className: "w-full" })}>
              {site.primaryCta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
