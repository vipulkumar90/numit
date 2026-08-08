import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * NumberTile — the signature Numit playing card.
 * Used for number choices, results and decorative card fans.
 */
const tileVariants = cva(
  "relative grid place-items-center rounded-2xl border-4 border-card bg-card font-display font-black tabular-nums shadow-[var(--shadow-float)] transition-transform duration-200 select-none",
  {
    variants: {
      tone: {
        purple: "text-primary ring-4 ring-primary/25",
        pink: "text-secondary ring-4 ring-secondary/25",
        blue: "text-info ring-4 ring-info/25",
        teal: "text-teal ring-4 ring-teal/30",
        yellow: "text-accent-foreground ring-4 ring-accent/50",
      },
      size: {
        sm: "h-14 w-11 text-xl",
        md: "h-20 w-16 text-3xl",
        lg: "h-28 w-22 text-5xl",
      },
      interactive: {
        true: "cursor-pointer hover:-translate-y-1.5 hover:rotate-1 active:translate-y-0",
        false: "",
      },
    },
    defaultVariants: { tone: "purple", size: "md", interactive: false },
  },
);

export interface NumberTileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tileVariants> {
  value: React.ReactNode;
}

export function NumberTile({
  value,
  tone,
  size,
  interactive,
  className,
  ...props
}: NumberTileProps) {
  return (
    <div className={cn(tileVariants({ tone, size, interactive, className }))} {...props}>
      {value}
    </div>
  );
}

export { tileVariants };
