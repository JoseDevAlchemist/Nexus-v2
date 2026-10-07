import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export default function Section({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}
