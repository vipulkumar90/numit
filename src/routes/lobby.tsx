import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { AppLayout } from "@/layouts/app-layout";

export const Route = createFileRoute("/lobby")({
  head: () => ({
    meta: [
      { title: "Lobby — Numit" },
      { name: "description", content: "See who has joined before the game starts." },
      { property: "og:title", content: "Lobby — Numit" },
      { property: "og:description", content: "See who has joined before the game starts." },
    ],
  }),
  component: LobbyPage,
});

function LobbyPage() {
  return (
    <AppLayout>
      <PagePlaceholder titleKey="lobby.title" subtitleKey="lobby.subtitle" />
    </AppLayout>
  );
}
