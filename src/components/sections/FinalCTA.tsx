import Link from "next/link";
import { finalCta } from "@/content/home";
import { buttonVariants } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { brandGlow } from "@/styles/tokens/colors";

export default function FinalCTA() {
  return (
    <Section>
      <div className="relative flex flex-col items-center gap-6 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: brandGlow }}
        />
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {finalCta.eyebrow}
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-heading text-foreground md:text-4xl">
          {finalCta.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {finalCta.subtitle}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href={finalCta.primaryCta.href} className={buttonVariants({ variant: "primary" })}>
            {finalCta.primaryCta.label}
          </Link>
          <Link
            href={finalCta.secondaryCta.href}
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            {finalCta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </Section>
  );
}
