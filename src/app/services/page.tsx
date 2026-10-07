import type { Metadata } from "next";
import { services } from "@/content/services";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata: Metadata = { title: "Nexus — Services" };

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Section>
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-medium text-muted">{services.eyebrow}</p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-heading text-foreground md:text-5xl">
            {services.title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">{services.intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => (
            <Card key={item.title} className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold tracking-heading text-foreground md:text-2xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
