import type { Metadata } from "next";
import { about } from "@/content/about";
import Section from "@/components/ui/Section";

export const metadata: Metadata = { title: "Nexus — About" };

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Section>
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-sm font-medium text-muted">{about.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-heading text-foreground md:text-5xl lg:text-6xl">
            {about.title}
          </h1>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted md:text-base">
              {p}
            </p>
          ))}
        </div>
      </Section>
    </main>
  );
}
