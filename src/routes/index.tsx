import { createFileRoute } from "@tanstack/react-router";

import { LanguageToggle } from "@/components/common/language-toggle";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Container, Section, Stack } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Party Game — Play together with friends" },
      {
        name: "description",
        content:
          "A mobile-first multiplayer party game. Create a room, invite friends, and play together in English or Japanese.",
      },
      { property: "og:title", content: "Party Game — Play together with friends" },
      {
        property: "og:description",
        content:
          "A mobile-first multiplayer party game. Create a room, invite friends, and play together in English or Japanese.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-4 py-4 sm:px-6">
        <span className="font-display text-lg font-black text-primary">{t("app.name")}</span>
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <Section>
        <Container size="sm">
          <Card variant="floating">
            <CardHeader>
              <CardTitle>
                <Text as="h1" variant="h1" align="center">
                  {t("home.title")}
                </Text>
              </CardTitle>
              <CardDescription>
                <Text variant="caption" align="center">
                  {t("home.subtitle")}
                </Text>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                <Button block disabled>
                  {t("home.cta.create")}
                </Button>
                <Button variant="outline" block disabled>
                  {t("home.cta.join")}
                </Button>
                <Text variant="small" align="center">
                  {t("home.comingSoon")}
                </Text>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
