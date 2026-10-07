import Link from "next/link";
import { hero } from "@/content/home";
import { buttonVariants } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SplineScene from "@/components/ui/SplineScene";

export default function Hero() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium tracking-heading text-muted">{hero.eyebrow}</p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-heading text-foreground md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            {hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={hero.primaryCta.href} className={buttonVariants({ variant: "primary" })}>
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className={buttonVariants({ variant: "secondary" })}>
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="aspect-square w-full lg:aspect-auto lg:h-[480px]">
          <SplineScene scene="" className="h-full w-full rounded-lg border border-surface-border bg-surface-raised" />
        </div>
      </div>
    </Section>
  );
}
