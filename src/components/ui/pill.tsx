import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pillVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-display font-extrabold whitespace-nowrap [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-primary-foreground shadow-[var(--shadow-soft)]",
        secondary: "bg-gradient-secondary text-secondary-foreground shadow-[var(--shadow-soft)]",
        accent: "bg-gradient-accent text-accent-foreground shadow-[var(--shadow-soft)]",
        teal: "bg-teal text-teal-foreground shadow-[var(--shadow-soft)]",
        info: "bg-info text-info-foreground shadow-[var(--shadow-soft)]",
        success: "bg-success text-success-foreground shadow-[var(--shadow-soft)]",
        soft: "bg-muted text-muted-foreground",
        outline: "border-2 border-primary/20 bg-card text-card-foreground",
      },
      size: {
        sm: "h-6 px-2.5 text-xs",
        md: "h-8 px-3.5 text-sm",
        lg: "h-10 px-5 text-base",
      },
    },
    defaultVariants: { variant: "soft", size: "md" },
  },
);

export interface PillProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pillVariants> {}

export function Pill({ className, variant, size, ...props }: PillProps) {
  return <span className={cn(pillVariants({ variant, size, className }))} {...props} />;
}

export { pillVariants };
