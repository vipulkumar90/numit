import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { AppLayout } from "@/layouts/app-layout";

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
  return (
    <AppLayout>
      <PagePlaceholder titleKey="settings.title" subtitleKey="settings.subtitle" />
    </AppLayout>
  );
}
