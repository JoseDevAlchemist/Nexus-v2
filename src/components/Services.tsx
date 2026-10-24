import { services, servicesSection } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <Section id="services">
      <div className="text-center mb-16 md:mb-24">
        <Reveal className="mb-4 block">
          <span
            className="inline-block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand"
            style={{ letterSpacing: "0.18em" }}
          >
            {servicesSection.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-text mb-6"
          >
            {servicesSection.heading}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto">
            {servicesSection.intro}
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 90}>
            <article
              className={cn(
                "relative flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 transition-all duration-300",
                "hover:border-brand/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]",
              )}
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 text-brand">
                {service.icon}
              </div>
              <h3 className="font-sans font-semibold text-lg text-text">
                {service.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">
                {service.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
