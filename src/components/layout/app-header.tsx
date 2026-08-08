import { Link } from "@tanstack/react-router";

import { LanguageToggle } from "@/components/common/language-toggle";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { navItems } from "@/components/layout/nav-items";
import { useI18n } from "@/i18n";

export function AppHeader() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground font-display text-base font-black shadow-[var(--shadow-soft)]"
          >
            N
          </span>
          <span className="truncate font-display text-lg font-black text-primary">
            {t("app.name")}
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <LanguageToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
        </div>
      </div>

      <nav
        aria-label={t("nav.menu")}
        className="mx-auto hidden w-full max-w-5xl gap-1 overflow-x-auto px-4 pb-3 sm:flex sm:px-6"
      >
        {navItems.map(({ to, labelKey, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
          >
            <Icon aria-hidden="true" className="size-4" />
            {t(labelKey)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
