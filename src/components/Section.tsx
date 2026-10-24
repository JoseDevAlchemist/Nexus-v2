import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-20 md:py-26 overflow-hidden", className)}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}
