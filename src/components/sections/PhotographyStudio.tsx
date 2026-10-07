import Image from "next/image";
import { studio } from "@/content/home";
import Section from "@/components/ui/Section";

export default function PhotographyStudio() {
  return (
    <Section>
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm font-medium text-muted">{studio.eyebrow}</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-heading text-foreground md:text-4xl">
          {studio.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">{studio.intro}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {studio.images.map((img) => (
          <div key={img.src} className="overflow-hidden rounded-lg border border-surface-border bg-surface-raised">
            <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="aspect-[4/5] w-full object-cover" />
          </div>
        ))}
      </div>
    </Section>
  );
}
