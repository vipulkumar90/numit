import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { LanguageToggle } from "@/components/common/language-toggle";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { AppLayout } from "@/layouts/app-layout";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Numit" },
      { name: "description", content: "Adjust language, theme and preferences." },
      { property: "og:title", content: "Settings — Numit" },
      { property: "og:description", content: "Adjust language, theme and preferences." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const { t } = useI18n();

  return (
    <AppLayout>
      <PagePlaceholder titleKey="settings.title" subtitleKey="settings.subtitle">
        <Card variant="soft">
          <CardHeader>
            <CardTitle>{t("settings.appearance")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <Text variant="caption">{t("settings.language")}</Text>
              <LanguageToggle />
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <Text variant="caption">{t("settings.appearance")}</Text>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>
      </PagePlaceholder>
    </AppLayout>
  );
}
