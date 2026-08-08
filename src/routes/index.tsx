import { createFileRoute, Link } from "@tanstack/react-router";

import { navItems } from "@/components/layout/nav-items";
import { Stack } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NumberTile } from "@/components/ui/number-tile";
import { Pill } from "@/components/ui/pill";
import { Text } from "@/components/ui/text";
import { AppLayout } from "@/layouts/app-layout";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Numit — Guess, Rank, Laugh with friends" },
      {
        name: "description",
        content:
          "Numit is a cute mobile party game. Create a room, invite friends, and rank silly questions together in English or Japanese.",
      },
      { property: "og:title", content: "Numit — Guess, Rank, Laugh with friends" },
      {
        property: "og:description",
        content:
          "Numit is a cute mobile party game. Create a room, invite friends, and rank silly questions together in English or Japanese.",
      },
    ],
  }),
  component: HomePage,
});

const fan = [
  { value: 1, tone: "blue" as const, rotate: "-rotate-12" },
  { value: 3, tone: "yellow" as const, rotate: "-rotate-6" },
  { value: 7, tone: "pink" as const, rotate: "rotate-0" },
  { value: 9, tone: "purple" as const, rotate: "rotate-6" },
  { value: 10, tone: "teal" as const, rotate: "rotate-12" },
];

function HomePage() {
  const { t } = useI18n();
  const shortcuts = navItems.filter((item) => item.to !== "/");

  return (
    <AppLayout>
      <Stack gap="lg" className="animate-pop-in">
        {/* Hero */}
        <div className="flex flex-col items-center gap-5 pt-2 text-center">
          <Text as="h1" variant="h1" className="text-5xl text-gradient-primary sm:text-6xl">
            {t("app.name")}
          </Text>
          <Pill variant="primary" size="lg" className="animate-float">
            {t("home.subtitle")}
          </Pill>

          <div className="flex items-end justify-center gap-1 pt-2 sm:gap-2">
            {fan.map((card) => (
              <NumberTile
                key={card.value}
                value={card.value}
                tone={card.tone}
                size="md"
                className={`${card.rotate} sm:size-auto`}
              />
            ))}
          </div>
        </div>

        {/* Primary actions */}
        <Stack gap="md">
          <Card variant="primary" interactive className="overflow-hidden">
            <CardContent className="flex items-center justify-between gap-4 p-6">
              <div className="min-w-0 text-left">
                <p className="font-display text-2xl font-black">{t("home.cta.create")}</p>
                <p className="text-sm font-semibold opacity-90">{t("createRoom.subtitle")}</p>
              </div>
              <Button asChild variant="accent" size="lg" className="shrink-0">
                <Link to="/create-room">→</Link>
              </Button>
            </CardContent>
          </Card>

          <Card variant="secondary" interactive className="overflow-hidden">
            <CardContent className="flex items-center justify-between gap-4 p-6">
              <div className="min-w-0 text-left">
                <p className="font-display text-2xl font-black">{t("home.cta.join")}</p>
                <p className="text-sm font-semibold opacity-90">{t("joinRoom.subtitle")}</p>
              </div>
              <Button asChild variant="cool" size="lg" className="shrink-0">
                <Link to="/join-room">→</Link>
              </Button>
            </CardContent>
          </Card>

          <Text variant="small" align="center">
            {t("home.comingSoon")}
          </Text>
        </Stack>

        {/* Explore */}
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
                      className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-cool text-primary-foreground shadow-[var(--shadow-soft)]"
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-display text-base font-extrabold">
                        {t(labelKey)}
                      </span>
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
