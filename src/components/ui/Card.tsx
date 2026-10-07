import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export default function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border border-surface-border bg-surface-raised p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
