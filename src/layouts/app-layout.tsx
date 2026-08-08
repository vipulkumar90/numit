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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <AppHeader />
      <main className="flex-1 pb-24 sm:pb-8">
        <Section className="py-6 sm:py-10">
          <Container size={size}>{children}</Container>
        </Section>
      </main>
      <BottomNav />
    </div>
  );
}
