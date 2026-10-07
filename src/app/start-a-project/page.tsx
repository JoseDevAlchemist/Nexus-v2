"use client";

import { useState, type FormEvent } from "react";
import { startProject } from "@/content/start";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function StartProjectPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="flex flex-1 flex-col">
      <Section>
        <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
          <p className="text-sm font-medium text-muted">{startProject.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-heading text-foreground md:text-5xl">
            {startProject.title}
          </h1>
          <p className="text-sm leading-relaxed text-muted md:text-base">{startProject.intro}</p>

          {sent ? (
            <p className="rounded-lg border border-surface-border bg-surface-raised p-6 text-sm text-muted">
              {startProject.successMessage}
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-2 text-sm text-muted">
                {startProject.fields.name}
                <input
                  required
                  name="name"
                  className="rounded-md border border-surface-border bg-surface-raised px-4 py-2.5 text-sm text-foreground outline-none transition-colors duration-200 focus:border-muted/50"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                {startProject.fields.email}
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-md border border-surface-border bg-surface-raised px-4 py-2.5 text-sm text-foreground outline-none transition-colors duration-200 focus:border-muted/50"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                {startProject.fields.message}
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="rounded-md border border-surface-border bg-surface-raised px-4 py-2.5 text-sm text-foreground outline-none transition-colors duration-200 focus:border-muted/50"
                />
              </label>
              <div>
                <Button type="submit" variant="primary">
                  {startProject.submitLabel}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Section>
    </main>
  );
}
