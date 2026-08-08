import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-md",
      md: "max-w-2xl",
      lg: "max-w-5xl",
      full: "max-w-none",
    },
    padded: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: { size: "md", padded: true },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export function Container({ className, size, padded, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size, padded, className }))} {...props} />;
}

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "sm" | "md" | "lg";
}

const gapMap = { sm: "gap-2", md: "gap-4", lg: "gap-6" } as const;

export function Stack({ className, gap = "md", ...props }: StackProps) {
  return <div className={cn("flex flex-col", gapMap[gap], className)} {...props} />;
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn("py-10 sm:py-14", className)} {...props} />;
}

export { containerVariants };
