"use client";

import { useEffect, useState } from "react";
import * as processContent from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

export default function Process() {
  const [mobile, setMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Section id="process">
      <div className="text-center mb-16 md:mb-24">
        <Reveal className="mb-4 block">
          <span
            className="inline-block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand"
            style={{ letterSpacing: "0.18em" }}
          >
            {processContent.processSection.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-text mb-6"
          >
            {processContent.processSection.heading}
          </h2>
        </Reveal>
      </div>

      <div className="relative z-10">
        {mobile ? (
          <div className="relative pl-12">
            <div
              className="absolute top-0 left-3 h-full w-[2px] bg-border"
              aria-hidden="true"
            />
            {processContent.process.map((step, index) => (
              <Reveal key={step.step} delay={index * 110}>
                <div className="relative mb-14 md:mb-18 last:mb-0">
                  <div className="absolute -left-[14px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-brand bg-surface text-xs font-bold text-text z-10 shadow-[0_0_12px_rgba(123,47,247,0.3)]">
                    {step.step}
                  </div>
                  <h3 className="font-sans font-semibold text-base text-text mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="relative flex flex-col gap-16 md:gap-22">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-[8px] bottom-[8px] w-[2px] bg-border"
              aria-hidden="true"
            />
            {processContent.process.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={step.step} delay={index * 100}>
                  <div
                    className={cn(
                      "flex w-full items-center gap-6",
                      isLeft
                        ? "flex-row-reverse justify-start"
                        : "justify-end",
                    )}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand bg-surface text-xs font-bold text-text z-10 relative shadow-[0_0_12px_rgba(123,47,247,0.3)]">
                      {step.step}
                    </div>
                    <div
                      className={cn(
                        "w-[44%] max-w-[420px]",
                        isLeft ? "ml-6" : "mr-6 text-right",
                      )}
                    >
                      <h3 className="font-sans font-semibold text-base text-text mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-body leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
