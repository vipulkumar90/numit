import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { AppLayout } from "@/layouts/app-layout";

export const Route = createFileRoute("/join-room")({
  head: () => ({
    meta: [
      { title: "Join a room — Numit" },
      { name: "description", content: "Enter a room code to hop into your friends' game." },
      { property: "og:title", content: "Join a room — Numit" },
      { property: "og:description", content: "Enter a room code to hop into your friends' game." },
    ],
  }),
  component: JoinRoomPage,
});

function JoinRoomPage() {
  return (
    <AppLayout>
      <PagePlaceholder titleKey="joinRoom.title" subtitleKey="joinRoom.subtitle" />
    </AppLayout>
  );
}
