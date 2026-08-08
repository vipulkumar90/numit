import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl",
      h2: "font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl",
      h3: "font-display text-xl font-bold leading-snug sm:text-2xl",
      body: "text-base leading-relaxed",
      caption: "text-sm text-muted-foreground",
      small: "text-xs text-muted-foreground",
    },
    tone: {
      default: "",
      muted: "text-muted-foreground",
      primary: "text-primary",
      danger: "text-destructive",
    },
    align: {
      left: "text-left",
      center: "text-center",
    },
  },
  defaultVariants: { variant: "body", tone: "default", align: "left" },
});

type TextElement = "h1" | "h2" | "h3" | "p" | "span" | "label" | "div";

const defaultTag: Record<NonNullable<VariantProps<typeof textVariants>["variant"]>, TextElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  caption: "p",
  small: "span",
};

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: TextElement;
}

export function Text({ as, variant, tone, align, className, ...props }: TextProps) {
  const Comp = (as ?? defaultTag[variant ?? "body"]) as TextElement;
  return <Comp className={cn(textVariants({ variant, tone, align, className }))} {...props} />;
}

export { textVariants };
