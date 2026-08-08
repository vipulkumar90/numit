import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-extrabold tracking-tight cursor-pointer select-none transition-[color,background-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-primary text-primary-foreground shadow-[var(--shadow-float)] hover:shadow-[var(--shadow-glow)]",
        secondary:
          "bg-gradient-secondary text-secondary-foreground shadow-[var(--shadow-float)] hover:shadow-[var(--shadow-glow)]",
        accent:
          "bg-gradient-accent text-accent-foreground shadow-[var(--shadow-float)] hover:shadow-[var(--shadow-glow)]",
        cool: "bg-gradient-cool text-primary-foreground shadow-[var(--shadow-float)] hover:shadow-[var(--shadow-glow)]",
        success:
          "bg-success text-success-foreground shadow-[var(--shadow-float)] hover:brightness-105",
        outline:
          "border-2 border-primary/25 bg-card text-card-foreground shadow-[var(--shadow-soft)] hover:border-primary/50 hover:bg-primary/5",
        ghost: "text-foreground hover:bg-muted",
        danger:
          "bg-destructive text-destructive-foreground shadow-[var(--shadow-float)] hover:brightness-105",
        link: "text-primary underline-offset-4 hover:underline hover:translate-y-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
        icon: "h-12 w-12",
        "icon-lg": "h-14 w-14",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, block, asChild = false, loading = false, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, block, className }))}
        ref={ref}
        data-loading={loading || undefined}
        aria-busy={loading || undefined}
        disabled={asChild ? undefined : loading || props.disabled}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
