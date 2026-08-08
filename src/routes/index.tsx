import { createFileRoute, Link } from "@tanstack/react-router";

import { navItems } from "@/components/layout/nav-items";
import { Stack } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { AppLayout } from "@/layouts/app-layout";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Numit — Play party games with friends" },
      {
        name: "description",
        content:
          "A mobile-first multiplayer party game. Create a room, invite friends, and play together in English or Japanese.",
      },
      { property: "og:title", content: "Numit — Play party games with friends" },
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
  const shortcuts = navItems.filter((item) => item.to !== "/");

  return (
    <AppLayout>
      <Stack gap="lg">
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
              <Button asChild block>
                <Link to="/create-room">{t("home.cta.create")}</Link>
              </Button>
              <Button asChild variant="outline" block>
                <Link to="/join-room">{t("home.cta.join")}</Link>
              </Button>
              <Text variant="small" align="center">
                {t("home.comingSoon")}
              </Text>
            </Stack>
          </CardContent>
        </Card>

        <Stack gap="md">
          <Text as="h2" variant="h3">
            {t("home.explore")}
          </Text>
          <div className="grid gap-3 sm:grid-cols-2">
            {shortcuts.map(({ to, labelKey, icon: Icon }) => (
              <Link key={to} to={to} className="block">
                <Card variant="soft" interactive className="h-full">
                  <CardContent className="flex items-center gap-3 p-5">
                    <span
                      aria-hidden="true"
                      className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-display font-bold">{t(labelKey)}</span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {t("common.placeholder")}
                      </span>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Stack>
      </Stack>
    </AppLayout>
  );
}
