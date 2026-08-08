import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative rounded-3xl text-card-foreground transition-[box-shadow,transform] duration-200",
  {
    variants: {
      variant: {
        floating: "bg-card-gradient bg-card shadow-[var(--shadow-float)]",
        soft: "bg-card shadow-[var(--shadow-soft)]",
        outline: "bg-card border-2 border-primary/15 shadow-[var(--shadow-soft)]",
        glow: "bg-card-gradient bg-card shadow-[var(--shadow-glow)]",
        primary: "bg-gradient-primary text-primary-foreground shadow-[var(--shadow-float)]",
        secondary: "bg-gradient-secondary text-secondary-foreground shadow-[var(--shadow-float)]",
        accent: "bg-gradient-accent text-accent-foreground shadow-[var(--shadow-float)]",
        cool: "bg-gradient-cool text-primary-foreground shadow-[var(--shadow-float)]",
        muted: "bg-muted",
      },
      interactive: {
        true: "cursor-pointer hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] active:translate-y-0 active:scale-[0.99]",
        false: "",
      },
    },
    defaultVariants: { variant: "floating", interactive: false },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, interactive, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, interactive, className }))} {...props} />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5 p-6 pb-3", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-display text-xl font-extrabold leading-snug", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm font-semibold opacity-80", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-3", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-3 p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};
