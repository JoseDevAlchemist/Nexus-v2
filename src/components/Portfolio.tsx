"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolio } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(portfolio.filterTabs[0]);

  const filteredItems = useMemo(
    () =>
      activeTab === "All"
        ? portfolio.items
        : portfolio.items.filter((item) => item.category === activeTab),
    [activeTab],
  );

  return (
    <Section id="portfolio">
      <div className="text-center mb-12 md:mb-20">
        <Reveal className="mb-4 block">
          <span
            className="inline-block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand"
            style={{ letterSpacing: "0.18em" }}
          >
            {portfolio.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-text mb-6"
          >
            {portfolio.heading}
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-14 md:mb-24">
        {portfolio.filterTabs.map((tab) => {
          const active = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-semibold transition-all duration-200",
                active
                  ? "bg-gradient-to-r from-brand via-brand-secondary to-brand-accent text-white border-transparent shadow-[0_0_15px_rgba(123,47,247,0.3)]"
                  : "bg-surface text-muted hover:text-text hover:border-brand/50",
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 90}>
            <article className="group rounded-lg border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-brand/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="relative h-[320px] md:h-[360px] overflow-hidden">
                {/* Gradient placeholder thumbnail */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-brand/20 via-surface to-brand-secondary/10"
                  aria-hidden="true"
                />
                <Image
                  src={item.image}
                  alt={`Portfolio piece "${item.title}" for ${item.client}`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.03] duration-700"
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/90 backdrop-blur px-2.5 py-1 text-[0.75rem] font-semibold text-text">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-sans font-semibold text-base text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted mb-4">{item.client}</p>
                <p className="text-sm text-body leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-faint">
                    result
                  </span>
                  <span className="text-sm text-body font-medium">
                    {item.result}
                  </span>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors"
                  >
                    View project
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z" />
                      <polyline points="18 15 21 18 18 21" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
        {filteredItems.length === 0 && (
          <Reveal className="col-span-full py-24 text-center">
            <p className="text-muted">No projects in this category yet.</p>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
