import { createFileRoute } from "@tanstack/react-router";

import { NotFound } from "@/components/common/not-found";

export const Route = createFileRoute("/not-found")({
  head: () => ({
    meta: [
      { title: "Page not found — Party Game" },
      { name: "description", content: "This Party Game page doesn't exist or has been moved." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Page not found — Party Game" },
      {
        property: "og:description",
        content: "This Party Game page doesn't exist or has been moved.",
      },
    ],
  }),
  component: NotFound,
});
