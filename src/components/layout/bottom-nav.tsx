import { Link } from "@tanstack/react-router";

import { primaryNavItems } from "@/components/layout/nav-items";
import { useI18n } from "@/i18n";

export function BottomNav() {
  const { t } = useI18n();

  return (
    <nav
      aria-label={t("nav.menu")}
      className="fixed inset-x-3 bottom-3 z-30 rounded-3xl border-2 border-card bg-card/95 shadow-[var(--shadow-float)] backdrop-blur-xl sm:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2 py-1 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
        {primaryNavItems.map(({ to, labelKey, icon: Icon }) => (
          <li key={to} className="min-w-0 flex-1">
            <Link
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="flex flex-col items-center gap-1 rounded-2xl px-1 py-2 font-display text-[11px] font-bold text-muted-foreground transition-colors duration-150 data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
            >
              <Icon aria-hidden="true" className="size-5" />
              <span className="w-full truncate text-center">{t(labelKey)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
