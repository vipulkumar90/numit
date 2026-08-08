import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Party Game — Foundation Ready" },
      {
        name: "description",
        content:
          "Foundation for a mobile-first multiplayer party game: styling, routing, folder structure and theme tokens are in place.",
      },
      { property: "og:title", content: "Party Game — Foundation Ready" },
      {
        property: "og:description",
        content:
          "Foundation for a mobile-first multiplayer party game: styling, routing, folder structure and theme tokens are in place.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-card p-8 text-center shadow-[var(--shadow-float)]">
        <h1 className="text-3xl text-card-foreground">Foundation ready</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Styling, routing, folder structure and theme tokens are configured. Pages and UI
          components come next.
        </p>
      </div>
    </main>
  );
}
