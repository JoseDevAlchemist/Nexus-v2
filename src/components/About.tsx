import Image from "next/image";
import { about, brand } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 md:gap-24 items-center">
        <div>
          <Reveal className="mb-5 block">
            <span
              className="inline-block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand"
              style={{ letterSpacing: "0.18em" }}
            >
              {about.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-text mb-6"
            >
              {about.heading}
            </h2>
          </Reveal>
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={160 + index * 80}>
              <p className="text-lg text-body leading-relaxed mb-8 md:mb-12">
                {paragraph}
              </p>
            </Reveal>
          ))}
          {/* Value points */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.valuePoints.map((point, index) => (
              <Reveal key={point} delay={320 + index * 80}>
                <div className="rounded-lg border border-border bg-surface p-6">
                  <div className="h-8 w-8 rounded-lg border border-brand/20 bg-brand/5 text-brand flex items-center justify-center">
                    ✦
                  </div>
                  <p className="mt-4 text-sm text-body leading-relaxed">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div
            className="absolute inset-0 bg-brand/10 blur-[100px] rounded-full -z-10"
            aria-hidden="true"
          />
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={1398}
            height={705}
            className="relative z-10 h-36 w-auto rounded-lg border border-border shadow-[0_24px_40px_rgba(0,0,0,0.4)]"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
