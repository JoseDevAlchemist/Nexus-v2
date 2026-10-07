import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-gradient text-white hover:opacity-90",
        secondary:
          "border border-surface-border bg-surface-raised text-foreground hover:border-muted/50",
        ghost: "text-muted hover:bg-surface-raised hover:text-foreground",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export { buttonVariants };

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
