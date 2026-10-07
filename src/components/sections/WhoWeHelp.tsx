import { whoWeHelp } from "@/content/home";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function WhoWeHelp() {
  return (
    <Section>
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm font-medium text-muted">{whoWeHelp.eyebrow}</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-heading text-foreground md:text-4xl">
          {whoWeHelp.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">{whoWeHelp.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {whoWeHelp.items.map((item) => (
          <Card key={item.title} className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold tracking-heading text-foreground md:text-2xl">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
