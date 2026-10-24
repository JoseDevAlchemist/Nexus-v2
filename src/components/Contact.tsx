"use client";

import { useState } from "react";
import { contact, contactSection, services } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const message = `*Nexus website enquiry*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Service:* ${data.service}\n*Message:* ${data.message}`;

    const phone = contact.whatsappLink.replace("https://wa.me/", "");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");

    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <Section id="contact">
      <div className="text-center mb-12 md:mb-20">
        <Reveal className="mb-4 block">
          <span
            className="inline-block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand"
            style={{ letterSpacing: "0.18em" }}
          >
            {contactSection.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-text mb-6"
          >
            {contactSection.heading}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto">
            {contactSection.subheadline}
          </p>
        </Reveal>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form column */}
        <div
          className="lg:col-span-7"
        >
          <Reveal>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    {contactSection.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-[#3A3A44] bg-surface px-4 py-3.5 text-text placeholder-text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    placeholder="Jane Wanjiku"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    {contactSection.form.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-[#3A3A44] bg-surface px-4 py-3.5 text-text placeholder-text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    {contactSection.form.serviceLabel}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-md border border-[#3A3A44] bg-surface px-4 py-3.5 text-text focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  >
                    <option value="" disabled>
                      {contactSection.form.servicePlaceholder}
                    </option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    {contactSection.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-[#3A3A44] bg-surface px-4 py-3.5 text-text placeholder-text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    placeholder={contactSection.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold min-h-[56px]",
                    "bg-gradient-to-r from-brand via-brand-secondary to-brand-accent text-white",
                    "hover:from-brand-hover hover:via-brand-secondary hover:to-brand-accent",
                    "shadow-[0_0_20px_rgba(123,47,247,0.4)]",
                    "transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "disabled:opacity-60 disabled:pointer-events-none",
                  )}
                >
                  {status === "sent"
                    ? "Opening WhatsApp…"
                    : contactSection.form.submitLabel}
                </button>
                {status === "sent" && (
                  <p className="mt-6 text-sm text-brand font-medium">
                    WhatsApp should open with your details prefilled.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>

        {/* Contact details column */}
        <div className="lg:col-span-5">
          <Reveal delay={200} className="flex flex-col gap-6">
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 rounded-lg border border-brand bg-gradient-to-r from-brand via-brand-secondary to-brand-accent text-white px-5 py-4",
                "hover:opacity-90 transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
              aria-label={`Message ${contact.whatsappNumber} on WhatsApp`}
            >
              <svg
                width="20"
                height="20"
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
              <div>
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white">
                  WhatsApp
                </div>
                <div className="text-sm font-medium text-white">
                  {contact.whatsappNumber}
                </div>
              </div>
            </a>

            <div className="flex flex-col gap-5">
              {[
                {
                  label: contactSection.details.phoneLabel,
                  value: contact.whatsappNumber,
                  href: contact.whatsappLink,
                },
                {
                  label: contactSection.details.emailLabel,
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
                {
                  label: contactSection.details.locationLabel,
                  value: contact.location,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-brand/40",
                    item.href ? "group" : "",
                  )}
                >
                  <span className="shrink-0 text-muted group-hover:text-brand transition-colors">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm text-body hover:text-brand transition-colors break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-body break-words">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4">
              <span className="text-muted text-sm">{contactSection.details.followLabel}</span>
              <div className="flex gap-3">
                {contact.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-deep text-muted hover:border-brand hover:text-brand hover:bg-brand/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand",
                    )}
                    aria-label={social.label}
                  >
                    {social.label.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
