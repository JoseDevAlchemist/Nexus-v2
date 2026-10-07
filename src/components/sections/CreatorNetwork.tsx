import { creators } from "@/content/home";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function CreatorNetwork() {
  return (
    <Section>
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm font-medium text-muted">{creators.eyebrow}</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-heading text-foreground md:text-4xl">
          {creators.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">{creators.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {creators.items.map((item) => (
          <Card key={item.role} className="flex flex-col gap-4">
            <span className="h-10 w-10 rounded-full bg-brand-gradient" aria-hidden />
            <h3 className="text-xl font-semibold tracking-heading text-foreground md:text-2xl">{item.role}</h3>
            <p className="text-sm leading-relaxed text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
