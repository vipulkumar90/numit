import type { ReactNode } from "react";

import { Stack } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useI18n } from "@/i18n";
import type { TranslationKey } from "@/i18n";

export interface PagePlaceholderProps {
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  children?: ReactNode;
}

export function PagePlaceholder({ titleKey, subtitleKey, children }: PagePlaceholderProps) {
  const { t } = useI18n();

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <Text as="h1" variant="h1">
          {t(titleKey)}
        </Text>
        <Text variant="caption">{t(subtitleKey)}</Text>
      </Stack>

      <Card variant="floating">
        <CardHeader>
          <CardTitle>{t(titleKey)}</CardTitle>
          <CardDescription>{t("common.placeholder")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                aria-hidden="true"
                className="h-16 rounded-2xl bg-muted transition-colors duration-150"
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {children}
    </Stack>
  );
}
