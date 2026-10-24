"use client";

import Image from "next/image";
import { brand, contact, contactSection, footer } from "@/content/siteContent";
import { Section } from "@/components/Section";

const instagramIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const whatsappIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 12c0 4.71-3.81 8.53-8.53 8.53C6.81 20.53 3 16.71 3 12S6.81 3.47 11.5 3.47 20 7.29 20 12z" />
    <path d="M16.5 12a4.5 4.5 0 0 1-6.36 4.36l-2.23-.78c-.27-.09-.51-.28-.71-.59-.21-.31-.33-.69-.31-1.1l.4-3.5c.03-.32.17-.6.35-.81.18-.22.43-.29.69-.34l3.49-.85c.4-.1.85-.02 1.18.26.27.23.48.59.59.99l.78 2.23c.13.37.02.77-.26 1.06z" />
  </svg>
);

export default function Footer() {
  const year =
    typeof window !== "undefined" ? new Date().getFullYear() : null;

  return (
    <footer className="border-t border-border bg-background pt-24 pb-12">
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-20">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="#home" aria-label={brand.name} className="flex items-center gap-2">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={1398}
                height={705}
                className="h-7 w-auto block"
                priority
              />
              <span className="font-bold text-[1.5rem] tracking-tight text-text">
                NEXUS
              </span>
            </a>
            <p className="text-sm text-body leading-relaxed">{footer.text}</p>
          </div>

          <div>
            <h3 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted mb-7">
              Quick links
            </h3>
            <nav className="flex flex-col gap-4" aria-label="Footer links">
              {footer.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h3 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted mb-7">
              Get in touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="shrink-0 text-muted">
                  {contactSection.details.phoneLabel}
                </span>
                <a
                  href={contact.whatsappLink}
                  className="text-sm text-body break-words hover:text-brand transition-colors"
                >
                  {contact.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 text-muted">
                  {contactSection.details.emailLabel}
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-body break-words hover:text-brand transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 text-muted">
                  {contactSection.details.locationLabel}
                </span>
                <span className="text-sm text-body break-words">
                  {contact.location}
                </span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <span className="shrink-0 text-muted text-xs uppercase tracking-wider">
                Follow us
              </span>
              <a
                href={contact.social.find((s) => s.label === "Instagram")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-brand bg-brand text-white hover:bg-brand-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand"
                aria-label="Instagram"
              >
                {instagramIcon}
              </a>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-brand bg-brand text-white hover:bg-brand-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand"
                aria-label="WhatsApp"
              >
                {whatsappIcon}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12 flex flex-col gap-3 sm:flex-row sm:items-center justify-between text-[0.7rem] text-muted">
          <p>
            © <span suppressHydrationWarning>{year ?? ""}</span>{" "}
            {brand.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-auto">
            Built for ambitious brands.{" "}
            <a
              href={brand.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-hover transition-colors underline-offset-2 hover:underline"
            >
              {brand.siteUrl}
            </a>
          </p>
        </div>
      </Section>
    </footer>
  );
}
