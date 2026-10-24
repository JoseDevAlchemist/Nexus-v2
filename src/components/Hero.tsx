import { hero } from "@/content/siteContent";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const ksButtonPrimary = cn(
  "inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold min-h-[56px]",
  "bg-gradient-to-r from-brand via-brand-secondary to-brand-accent text-white",
  "hover:from-brand-hover hover:via-brand-secondary hover:to-brand-accent",
  "shadow-[0_0_24px_rgba(123,47,247,0.4)]",
  "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "w-full sm:w-auto",
);

const ksButtonSecondary = cn(
  "inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold min-h-[56px]",
  "border border-brand text-brand bg-transparent",
  "hover:bg-brand/10 hover:text-brand-hover",
  "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "w-full sm:w-auto",
);

export default function Hero() {
  return (
    <Section id="home" className="pt-24 md:pt-36 pb-20 md:pb-32">
      {/* Background glow elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-secondary/10 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="absolute top-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-brand-accent/10 blur-[80px]"
          aria-hidden="true"
        />
        {/* Faint grid texture */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2a_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.03]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal className="mb-6 block">
          <span
            className="inline-block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand"
            style={{ letterSpacing: "0.18em" }}
          >
            {hero.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={80} className="mb-6">
          <h1
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-text mb-6"
          >
            {hero.headline.map((part) => (
              <span
                key={part.text}
                className={cn(
                  part.highlight ? "bg-brand-gradient text-transparent" : "",
                )}
              >
                {part.text}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-lg text-body leading-relaxed max-w-full mx-auto mb-10">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={hero.primaryCta.href} className={ksButtonPrimary}>
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className={cn(ksButtonSecondary, "gap-3")}
              aria-label="Chat on WhatsApp"
            >
              <svg
                width="20"
                height="20"
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
              {hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={240} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <span className="text-xs font-semibold tracking-wider text-muted">
            Services:
          </span>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {hero.trustItems.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full border border-border/50 bg-surface/50 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
