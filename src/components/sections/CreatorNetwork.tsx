import Link from "next/link";
import { creators } from "@/content/home";
import Section from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";

export default function CreatorNetwork() {
  return (
    <Section>
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{creators.eyebrow}</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-heading text-foreground md:text-4xl">
          {creators.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">{creators.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
        {/* Left (40%) — vertical flow */}
        <div className="flex flex-col lg:col-span-2">
          {creators.flow.map((step, i) => (
            <div key={step} className="flex flex-col items-stretch">
              <div className="rounded-lg border border-surface-border bg-surface-raised p-3 text-sm text-foreground">
                {step}
              </div>
              {i < creators.flow.length - 1 && (
                <div className="flex justify-center py-2 text-muted" aria-hidden>
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 1v13M3 10l4 4 4-4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right (60%) — numbered blocks */}
        <div className="flex flex-col gap-8 lg:col-span-3">
          {creators.items.map((item, i) => (
            <div key={item.title} className="flex flex-col gap-2 border-l border-surface-border pl-4">
              <span className="text-sm font-semibold text-brand-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-heading text-foreground md:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}

          <div>
            <Link href={creators.cta.href} className={buttonVariants({ variant: "ghost" })}>
              {creators.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
