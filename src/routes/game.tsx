import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { AppLayout } from "@/layouts/app-layout";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: "Game — Numit" },
      { name: "description", content: "The playing screen where each round happens." },
      { property: "og:title", content: "Game — Numit" },
      { property: "og:description", content: "The playing screen where each round happens." },
    ],
  }),
  component: GamePage,
});

function GamePage() {
  return (
    <AppLayout>
      <PagePlaceholder titleKey="game.title" subtitleKey="game.subtitle" />
    </AppLayout>
  );
}
