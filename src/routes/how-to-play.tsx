import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { AppLayout } from "@/layouts/app-layout";

export const Route = createFileRoute("/how-to-play")({
  head: () => ({
    meta: [
      { title: "How to play — Numit" },
      { name: "description", content: "A quick guide to the rules and flow of a round." },
      { property: "og:title", content: "How to play — Numit" },
      { property: "og:description", content: "A quick guide to the rules and flow of a round." },
    ],
  }),
  component: HowToPlayPage,
});

function HowToPlayPage() {
  return (
    <AppLayout>
      <PagePlaceholder titleKey="howToPlay.title" subtitleKey="howToPlay.subtitle" />
    </AppLayout>
  );
}
