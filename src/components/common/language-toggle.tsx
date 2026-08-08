import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n, localeNames, locales } from "@/i18n";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  const next = locales[(locales.indexOf(locale) + 1) % locales.length]!;

  return (
    <Button
      variant="ghost"
      size="sm"
      className={className}
      onClick={() => setLocale(next)}
      aria-label={t("language.switch")}
      title={t("language.switch")}
    >
      <Languages aria-hidden="true" />
      <span>{localeNames[next]}</span>
    </Button>
  );
}
