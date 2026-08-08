import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { AppLayout } from "@/layouts/app-layout";

export const Route = createFileRoute("/create-room")({
  head: () => ({
    meta: [
      { title: "Create a room — Numit" },
      { name: "description", content: "Set up a new game room and invite your friends to play." },
      { property: "og:title", content: "Create a room — Numit" },
      { property: "og:description", content: "Set up a new game room and invite your friends to play." },
    ],
  }),
  component: CreateRoomPage,
});

function CreateRoomPage() {
  return (
    <AppLayout>
      <PagePlaceholder titleKey="createRoom.title" subtitleKey="createRoom.subtitle" />
    </AppLayout>
  );
}
