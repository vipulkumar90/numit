import type { ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Container, Section } from "@/components/layout/container";

export interface AppLayoutProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
}

export function AppLayout({ children, size = "md" }: AppLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-hero text-foreground">
      {/* Soft glowing highlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-secondary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-40 size-80 rounded-full bg-info/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 size-72 rounded-full bg-accent/30 blur-3xl"
      />

      <AppHeader />
      <main className="relative z-10 flex-1 pb-28 sm:pb-8">
        <Section className="py-6 sm:py-10">
          <Container size={size}>{children}</Container>
        </Section>
      </main>
      <BottomNav />
    </div>
  );
}
