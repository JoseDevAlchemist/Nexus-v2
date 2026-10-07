import Link from "next/link";
import { finalCta } from "@/content/home";
import { buttonVariants } from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function FinalCTA() {
  return (
    <Section>
      <div className="flex flex-col items-start gap-6 rounded-lg border border-surface-border bg-surface-raised p-6 md:p-16">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-heading text-foreground md:text-4xl">
          {finalCta.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">{finalCta.subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={finalCta.primaryCta.href} className={buttonVariants({ variant: "primary" })}>
            {finalCta.primaryCta.label}
          </Link>
          <Link href={finalCta.secondaryCta.href} className={buttonVariants({ variant: "secondary" })}>
            {finalCta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </Section>
  );
}
