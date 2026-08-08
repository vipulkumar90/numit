import { Link } from "@tanstack/react-router";

import { LanguageToggle } from "@/components/common/language-toggle";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { navItems } from "@/components/layout/nav-items";
import { useI18n } from "@/i18n";

export function AppHeader() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-30 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-2xl bg-gradient-primary font-display text-lg font-black text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            N
          </span>
          <span className="truncate font-display text-2xl font-black text-gradient-primary">
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
        className="mx-auto hidden w-full max-w-5xl gap-1.5 overflow-x-auto px-4 pb-3 sm:flex sm:px-6"
      >
        {navItems.map(({ to, labelKey, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 font-display text-sm font-bold text-muted-foreground transition-all duration-150 hover:bg-card hover:text-foreground hover:shadow-[var(--shadow-soft)] data-[status=active]:bg-gradient-primary data-[status=active]:text-primary-foreground data-[status=active]:shadow-[var(--shadow-soft)]"
          >
            <Icon aria-hidden="true" className="size-4" />
            {t(labelKey)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
