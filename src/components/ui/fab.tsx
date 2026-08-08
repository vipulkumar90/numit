import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const fabVariants = cva(
  "inline-grid place-items-center rounded-full cursor-pointer select-none transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-1 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]",
        secondary: "bg-gradient-secondary text-secondary-foreground shadow-[var(--shadow-glow)]",
        accent: "bg-gradient-accent text-accent-foreground shadow-[var(--shadow-glow)]",
        surface: "bg-card text-foreground shadow-[var(--shadow-float)]",
      },
      size: {
        md: "size-12",
        lg: "size-14",
        xl: "size-16",
      },
      position: {
        none: "",
        "bottom-right": "fixed bottom-24 right-5 z-40 sm:bottom-8 sm:right-8",
        "bottom-center":
          "fixed bottom-24 left-1/2 z-40 -translate-x-1/2 hover:-translate-x-1/2 sm:bottom-8",
      },
    },
    defaultVariants: { variant: "primary", size: "lg", position: "none" },
  },
);

export interface FabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fabVariants> {
  asChild?: boolean;
  /** Accessible label, required since FABs are icon-only. */
  label: string;
}

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ className, variant, size, position, asChild = false, label, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        aria-label={label}
        title={label}
        className={cn(fabVariants({ variant, size, position, className }))}
        {...props}
      />
    );
  },
);
Fab.displayName = "Fab";

export { fabVariants };
