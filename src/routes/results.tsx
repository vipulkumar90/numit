import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/common/page-placeholder";
import { AppLayout } from "@/layouts/app-layout";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Numit" },
      { name: "description", content: "Scores and the final ranking after a game." },
      { property: "og:title", content: "Results — Numit" },
      { property: "og:description", content: "Scores and the final ranking after a game." },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <AppLayout>
      <PagePlaceholder titleKey="results.title" subtitleKey="results.subtitle" />
    </AppLayout>
  );
}
