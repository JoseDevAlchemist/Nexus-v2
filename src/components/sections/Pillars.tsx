import { pillars } from "@/content/home";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Pillars() {
  return (
    <Section id="process">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm font-medium text-muted">{pillars.eyebrow}</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-heading text-foreground md:text-4xl">
          {pillars.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.steps.map((step, i) => (
          <Card key={step.title} className="flex flex-col gap-3">
            <span className="bg-brand-gradient bg-clip-text text-sm font-semibold text-transparent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-semibold tracking-heading text-foreground md:text-2xl">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{step.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
