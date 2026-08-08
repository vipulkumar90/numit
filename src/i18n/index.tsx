import * as React from "react";

import {
  defaultLocale,
  locales,
  translations,
  type Locale,
  type TranslationKey,
} from "./translations";

const STORAGE_KEY = "locale";

type Translate = (key: TranslationKey, vars?: Record<string, string | number>) => string;

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translate;
  formatDate: (value: Date | number, options?: Intl.DateTimeFormatOptions) => string;
  formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string;
}

const I18nContext = React.createContext<I18nContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(defaultLocale);

  // Read stored/browser locale after hydration so SSR markup stays stable.
  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      return;
    }
    const browser = window.navigator.language.split("-")[0] ?? "";
    if (isLocale(browser)) setLocaleState(browser);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = React.useMemo<I18nContextValue>(() => {
    const t: Translate = (key, vars) => {
      const template = translations[locale][key] ?? translations[defaultLocale][key] ?? key;
      if (!vars) return template;
      return template.replace(/\{(\w+)\}/g, (match, name: string) =>
        name in vars ? String(vars[name]) : match,
      );
    };

    const intlLocale = locale === "ja" ? "ja-JP" : "en-US";

    return {
      locale,
      setLocale,
      t,
      formatDate: (dateValue, options) =>
        new Intl.DateTimeFormat(intlLocale, options ?? { dateStyle: "medium" }).format(dateValue),
      formatNumber: (numberValue, options) =>
        new Intl.NumberFormat(intlLocale, options).format(numberValue),
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}

export function useTranslation() {
  return useI18n();
}

export { locales, localeNames, defaultLocale } from "./translations";
export type { Locale, TranslationKey } from "./translations";
