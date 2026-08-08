import { Link } from "@tanstack/react-router";

import { primaryNavItems } from "@/components/layout/nav-items";
import { useI18n } from "@/i18n";

export function BottomNav() {
  const { t } = useI18n();

  return (
    <nav
      aria-label={t("nav.menu")}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border/60 bg-background/95 backdrop-blur sm:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2 pb-[env(safe-area-inset-bottom)]">
        {primaryNavItems.map(({ to, labelKey, icon: Icon }) => (
          <li key={to} className="min-w-0 flex-1">
            <Link
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[11px] font-semibold text-muted-foreground transition-colors duration-150 data-[status=active]:text-primary"
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
