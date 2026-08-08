import { Link } from "@tanstack/react-router";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useI18n } from "@/i18n";

export function NotFound() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <Container size="sm" className="text-center">
        <p className="font-display text-7xl font-black text-primary">{t("notFound.title")}</p>
        <Text as="h1" variant="h2" align="center" className="mt-4">
          {t("notFound.heading")}
        </Text>
        <Text variant="caption" align="center" className="mt-2">
          {t("notFound.description")}
        </Text>
        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link to="/">{t("notFound.cta.home")}</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
