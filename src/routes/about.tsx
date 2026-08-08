import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { AppLayout } from "@/layouts/app-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Numit" },
      { name: "description", content: "A cute, mobile-first party game for gathering friends." },
      { property: "og:title", content: "About — Numit" },
      { property: "og:description", content: "A cute, mobile-first party game for gathering friends." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <AppLayout>
      <PagePlaceholder titleKey="about.title" subtitleKey="about.subtitle" />
    </AppLayout>
  );
}
