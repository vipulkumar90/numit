export const locales = ["en", "ja"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
};

export const defaultLocale: Locale = "en";

const en = {
  "app.name": "Party Game",
  "app.tagline": "A playful party game for you and your friends.",

  "home.title": "Welcome to Party Game",
  "home.subtitle": "Gather your friends, pick a room, and get ready to play.",
  "home.comingSoon": "Rooms and gameplay are coming soon.",
  "home.cta.create": "Create room",
  "home.cta.join": "Join room",

  "notFound.title": "404",
  "notFound.heading": "Page not found",
  "notFound.description": "The page you're looking for doesn't exist or has been moved.",
  "notFound.cta.home": "Go home",

  "error.heading": "This page didn't load",
  "error.description": "Something went wrong on our end. You can try refreshing or head back home.",
  "error.cta.retry": "Try again",

  "language.label": "Language",
  "language.switch": "Switch language",
} as const;

export type TranslationKey = keyof typeof en;

const ja: Record<TranslationKey, string> = {
  "app.name": "パーティーゲーム",
  "app.tagline": "友だちと楽しむ、にぎやかなパーティーゲーム。",

  "home.title": "パーティーゲームへようこそ",
  "home.subtitle": "友だちを集めて、ルームを選んで、さあ遊びましょう。",
  "home.comingSoon": "ルームとゲームプレイは近日公開です。",
  "home.cta.create": "ルームを作成",
  "home.cta.join": "ルームに参加",

  "notFound.title": "404",
  "notFound.heading": "ページが見つかりません",
  "notFound.description": "お探しのページは存在しないか、移動された可能性があります。",
  "notFound.cta.home": "ホームへ戻る",

  "error.heading": "ページを読み込めませんでした",
  "error.description":
    "問題が発生しました。ページを再読み込みするか、ホームへお戻りください。",
  "error.cta.retry": "再試行",

  "language.label": "言語",
  "language.switch": "言語を切り替える",
};

export const translations: Record<Locale, Record<TranslationKey, string>> = { en, ja };
